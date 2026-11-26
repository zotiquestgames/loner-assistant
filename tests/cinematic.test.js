import { test } from 'node:test';
import assert from 'node:assert/strict';
import { interpretOracleRoll as roll } from '../js/rules/oracle.js';
import {
  chaseDelta,
  resolveChaseRoll,
  canSetIntensity,
  intensityForNewScene,
  intensityAfterTwist,
  trailingHigh
} from '../js/rules/cinematic.js';

test('chase distance from your side: Yes +1, "Yes, but" 0, No -1, "No, and" -2', () => {
  assert.equal(chaseDelta(roll(6, 2), true), 1);
  assert.equal(chaseDelta(roll(6, 4), true), 1);   // Yes, and
  assert.equal(chaseDelta(roll(3, 3), true), 0);   // Yes, but
  assert.equal(chaseDelta(roll(2, 5), true), -1);
  assert.equal(chaseDelta(roll(2, 3), true), -1);  // No, but
  assert.equal(chaseDelta(roll(5, 6), true), -2);  // No, and
});

test('"Do they close in?" is framed from the pursuers, so it flips', () => {
  assert.equal(chaseDelta(roll(6, 2), false), -1);
  assert.equal(chaseDelta(roll(5, 6), false), 2);
});

test('Action Point Advantage adds a guaranteed step', () => {
  assert.equal(chaseDelta(roll(5, 2), false, true), 0);
  assert.equal(chaseDelta(roll(2, 5), true, true), 0);
});

test('distance is clamped; reaching Caught ends the chase; the escape question decides it', () => {
  assert.deepEqual(resolveChaseRoll(2, 'gain', roll(6, 2), true), { distance: 2, over: null });
  assert.deepEqual(resolveChaseRoll(1, 'gain', roll(5, 6), true), { distance: 0, over: 'caught' });
  assert.deepEqual(resolveChaseRoll(1, 'escape', roll(6, 1), true), { distance: 2, over: 'escaped' });
  assert.deepEqual(resolveChaseRoll(2, 'escape', roll(1, 2), true).over, 'caught');
});

test('never more than three High scenes in a row', () => {
  assert.equal(trailingHigh(['Low', 'High', 'High']), 2);
  // the current (last) scene can't become the fourth High
  assert.equal(canSetIntensity(['High', 'High', 'High', 'Medium'], 'High'), false);
  assert.equal(canSetIntensity(['High', 'High', 'Medium'], 'High'), true);
  assert.equal(intensityForNewScene(['High', 'High', 'High'], null), 'Medium');
  assert.equal(intensityForNewScene(['High', 'High', 'High'], 'High'), 'Medium');
  assert.equal(intensityForNewScene(['Low', 'High'], null), 'High');
  assert.equal(intensityForNewScene(['Low'], 'High'), 'High');
});

test('a Twist keeps Low scenes Low and pushes Medium or High to High', () => {
  assert.equal(intensityAfterTwist('Low'), 'Low');
  assert.equal(intensityAfterTwist('Medium'), 'High');
  assert.equal(intensityAfterTwist('High'), 'High');
});
