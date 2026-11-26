/**
 * Oracle rules (Loner 4e), free of DOM and storage so they can be tested
 * with `node --test`. js/oracle.js re-exports these for the app.
 */

/**
 * Roll a die (1-6)
 */
export function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Roll Chance and Risk with a modifier: Advantage rolls two Chance dice,
 * Disadvantage two Risk dice, keeping the highest.
 */
export function rollChanceRisk(modifier) {
  const chanceDice = modifier === 'advantage' ? Math.max(rollD6(), rollD6()) : rollD6();
  const riskDice = modifier === 'disadvantage' ? Math.max(rollD6(), rollD6()) : rollD6();
  return { chanceDice, riskDice };
}

/**
 * Interpret a Chance/Risk pair: Yes when Chance is higher (or equal),
 * "but" when both dice are low or the dice are equal, "and" when both
 * are high.
 */
export function interpretOracleRoll(chance, risk) {
  const isDoubles = chance === risk;
  const answer = chance >= risk ? 'Yes' : 'No';

  // Doubles always resolve as "but", whatever the dice values
  let modifier = null;
  if (isDoubles || (chance < 4 && risk < 4)) {
    modifier = 'but';
  } else if (chance > 3 && risk > 3) {
    modifier = 'and';
  }

  return {
    answer,
    modifier,
    chanceDice: chance,
    riskDice: risk,
    isDoubles,
    formatted: formatOracleResult(answer, modifier, isDoubles)
  };
}

/**
 * Format an oracle result as text ("Yes, but...", "No...").
 */
export function formatOracleResult(answer, modifier, isDoubles) {
  if (isDoubles) return `${answer}, but...`;
  return modifier ? `${answer}, ${modifier}...` : `${answer}...`;
}

/**
 * Harm & Luck exchange: who takes how much Luck damage.
 */
export function conflictDamage(result) {
  const targetIsCharacter = result.answer !== 'Yes';
  let damage = 2;
  let description = targetIsCharacter ? 'Failure' : 'Success';
  if (result.modifier === 'and') {
    damage = 3;
    description = targetIsCharacter ? 'Critical failure!' : 'Critical success!';
  } else if (result.modifier === 'but') {
    damage = 1;
    description = targetIsCharacter ? 'Failure with silver lining' : 'Success with complication';
  }
  return { damage, targetIsCharacter, description };
}

/**
 * Dead End: "forward" (a way forward appears), "soft" (No, but...: the
 * path stays closed but you learn why), or "hard" (the dead end holds).
 */
export function deadEndOutcome(result) {
  if (result.answer === 'Yes') return 'forward';
  if (result.modifier === 'but') return 'soft';
  return 'hard';
}

/**
 * Scene Transition on 1d6: 1-3 Dramatic, 4-5 Quiet, 6 Meanwhile.
 */
export function sceneTransition(roll) {
  if (roll <= 3) return { sceneType: 'Dramatic', description: 'Stakes increase, tension rises' };
  if (roll <= 5) return { sceneType: 'Quiet', description: 'Time for recovery, planning, or reflection' };
  return { sceneType: 'Meanwhile', description: 'Cut to another perspective or subplot' };
}
