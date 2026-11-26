import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  interpretOracleRoll,
  rollChanceRisk,
  conflictDamage,
  deadEndOutcome,
  sceneTransition
} from '../js/rules/oracle.js';

// Math.random values that make rollD6() return the given faces in order.
function withDice(faces, fn) {
  const original = Math.random;
  let i = 0;
  Math.random = () => (faces[i++] - 1) / 6 + 0.01;
  try { return fn(); } finally { Math.random = original; }
}

test('Resolution Matrix: answer and modifier for every Chance/Risk pair', () => {
  for (let c = 1; c <= 6; c++) {
    for (let r = 1; r <= 6; r++) {
      const result = interpretOracleRoll(c, r);
      assert.equal(result.answer, c >= r ? 'Yes' : 'No', `${c}-${r} answer`);
      let modifier = null;
      if (c === r || (c < 4 && r < 4)) modifier = 'but';
      else if (c > 3 && r > 3) modifier = 'and';
      assert.equal(result.modifier, modifier, `${c}-${r} modifier`);
    }
  }
});

test('formatted text', () => {
  assert.equal(interpretOracleRoll(6, 2).formatted, 'Yes...');
  assert.equal(interpretOracleRoll(2, 5).formatted, 'No...');
  assert.equal(interpretOracleRoll(2, 3).formatted, 'No, but...');
  assert.equal(interpretOracleRoll(5, 6).formatted, 'No, and...');
  assert.equal(interpretOracleRoll(6, 4).formatted, 'Yes, and...');
});

test('regression: high doubles are "Yes, but..." in the raw modifier too', () => {
  for (const d of [4, 5, 6]) {
    const result = interpretOracleRoll(d, d);
    assert.equal(result.modifier, 'but');
    assert.equal(result.formatted, 'Yes, but...');
    assert.ok(result.isDoubles);
  }
});

test('regression: high doubles deal complication damage (1), not critical (3)', () => {
  assert.deepEqual(conflictDamage(interpretOracleRoll(6, 6)),
    { damage: 1, targetIsCharacter: false, description: 'Success with complication' });
});

test('conflict damage by result', () => {
  assert.equal(conflictDamage(interpretOracleRoll(6, 4)).damage, 3);  // Yes, and
  assert.equal(conflictDamage(interpretOracleRoll(6, 2)).damage, 2);  // Yes
  const noAnd = conflictDamage(interpretOracleRoll(5, 6));
  assert.equal(noAnd.damage, 3);
  assert.equal(noAnd.targetIsCharacter, true);
  assert.equal(conflictDamage(interpretOracleRoll(2, 3)).damage, 1); // No, but
});

test('regression: Dead End "No, but..." is the soft outcome', () => {
  assert.equal(deadEndOutcome(interpretOracleRoll(2, 3)), 'soft');
  assert.equal(deadEndOutcome(interpretOracleRoll(2, 5)), 'hard');
  assert.equal(deadEndOutcome(interpretOracleRoll(5, 6)), 'hard');
  assert.equal(deadEndOutcome(interpretOracleRoll(3, 3)), 'forward');
});

test('Scene Transition: 1-3 Dramatic, 4-5 Quiet, 6 Meanwhile', () => {
  assert.deepEqual([1, 2, 3, 4, 5, 6].map(r => sceneTransition(r).sceneType),
    ['Dramatic', 'Dramatic', 'Dramatic', 'Quiet', 'Quiet', 'Meanwhile']);
});

test('Advantage keeps the higher of two Chance dice; Disadvantage of two Risk dice', () => {
  assert.deepEqual(withDice([2, 5, 3], () => rollChanceRisk('advantage')), { chanceDice: 5, riskDice: 3 });
  assert.deepEqual(withDice([4, 1, 6], () => rollChanceRisk('disadvantage')), { chanceDice: 4, riskDice: 6 });
  assert.deepEqual(withDice([3, 2], () => rollChanceRisk('normal')), { chanceDice: 3, riskDice: 2 });
});
