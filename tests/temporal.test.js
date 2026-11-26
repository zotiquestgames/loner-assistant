import { test } from 'node:test';
import assert from 'node:assert/strict';
import { interpretOracleRoll as roll } from '../js/rules/oracle.js';
import {
  currentLeap,
  nodeLabel,
  wearForRoll,
  ritualTook,
  loopBrokenOutcome,
  divergenceAddsTag,
  stabilityOutcome,
  collapseStress,
  layoutTimeWeb
} from '../js/rules/temporal.js';

const n = (id, type, parent, edge = 'forward') => ({ id, type, parent, edge });

// Node 0 -> C1 -> F1 ⇢ L1 ⇢ L2 -> C2
const timeline = {
  current: 'C2',
  nodes: [
    n('0', 'origin', null, null),
    n('C1', 'checkpoint', '0'),
    n('F1', 'fixed', 'C1'),
    n('L1', 'leap', 'F1', 'leap'),
    n('L2', 'leap', 'L1', 'leap'),
    n('C2', 'checkpoint', 'L2')
  ]
};

test('labels: Node 0, plain ids, and C#@L# for a Checkpoint inside a Leap', () => {
  const label = (id) => nodeLabel(timeline, timeline.nodes.find(x => x.id === id));
  assert.equal(label('0'), 'Node 0');
  assert.equal(label('C1'), 'C1');
  assert.equal(label('L1'), 'L1');
  assert.equal(label('C2'), 'C2@L2');
});

test('the Leap you are in, including from a Checkpoint inside it', () => {
  assert.equal(currentLeap(timeline).id, 'L2');
  assert.equal(currentLeap({ ...timeline, current: 'L1' }).id, 'L1');
  assert.equal(currentLeap({ ...timeline, current: 'C1' }), null);
});

test('Wear & Tear table', () => {
  assert.deepEqual([1, 2, 3, 4, 5, 6].map(wearForRoll),
    ['Temporal Migraine', 'Temporal Migraine', 'Déjà-Flare', 'Déjà-Flare', 'Ghost Echo', null]);
});

test('reset ritual takes on Yes or "Yes, and" only', () => {
  assert.equal(ritualTook(roll(6, 2)), true);
  assert.equal(ritualTook(roll(6, 4)), true);
  assert.equal(ritualTook(roll(3, 3)), false);
  assert.equal(ritualTook(roll(2, 5)), false);
});

test('"Is the loop finally broken?"', () => {
  assert.equal(loopBrokenOutcome(roll(6, 2)), 'breakthrough');
  assert.equal(loopBrokenOutcome(roll(3, 1)), 'cracks');
  assert.equal(loopBrokenOutcome(roll(5, 6)), 'broken');
  assert.equal(loopBrokenOutcome(roll(2, 5)), 'notYet');
});

test('divergence adds a world tag on Yes or "No, and"', () => {
  assert.equal(divergenceAddsTag(roll(6, 2)), true);
  assert.equal(divergenceAddsTag(roll(5, 6)), true);
  assert.equal(divergenceAddsTag(roll(2, 5)), false);
  assert.equal(divergenceAddsTag(roll(2, 3)), false);
});

test('"Is this timeline stable?" and collapse stress', () => {
  assert.equal(stabilityOutcome(roll(6, 2)), 'holds');
  assert.equal(stabilityOutcome(roll(2, 3)), 'holds');   // No, but
  assert.equal(stabilityOutcome(roll(2, 5)), 'stress');
  assert.equal(stabilityOutcome(roll(5, 6)), 'collapse');
  assert.equal(collapseStress(4), 2);
  assert.equal(collapseStress(6), 1);
});

test('Time-Web layout: forward stays on the row, leaps branch below', () => {
  const { pos, maxRow } = layoutTimeWeb(timeline.nodes);
  assert.deepEqual(pos.C1, { col: 1, row: 0 });
  assert.deepEqual(pos.F1, { col: 2, row: 0 });
  assert.deepEqual(pos.L1, { col: 3, row: 1 });
  assert.deepEqual(pos.L2, { col: 4, row: 2 });
  assert.deepEqual(pos.C2, { col: 5, row: 2 });
  assert.equal(maxRow, 2);
});
