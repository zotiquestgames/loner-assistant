/**
 * Cinematic Action rules (chase distance, scene intensity), free of DOM
 * and storage so they can be tested with `node --test`.
 */

export const DISTANCE = ['Caught', 'Close', 'Distant'];

/**
 * How far a chase roll moves you on the Distant(2) / Close(1) / Caught(0)
 * track. Questions are framed from your side ("Can I gain distance?") or
 * the pursuers' ("Do they close in?"), which flips the direction. Action
 * Point Advantage guarantees one extra step in your favor.
 */
export function chaseDelta(result, protagonistSide, usedAdvantage = false) {
  let delta;
  if (result.answer === 'Yes') delta = result.modifier === 'but' ? 0 : 1;
  else delta = result.modifier === 'and' ? -2 : -1;
  if (!protagonistSide) delta = -delta;
  return delta + (usedAdvantage ? 1 : 0);
}

/**
 * Apply a chase roll: new distance, and whether the chase is over.
 */
export function resolveChaseRoll(distance, question, result, protagonistSide, usedAdvantage = false) {
  const next = Math.max(0, Math.min(2, distance + chaseDelta(result, protagonistSide, usedAdvantage)));
  let over = null;
  if (question === 'escape') over = result.answer === 'Yes' ? 'escaped' : 'caught';
  else if (next === 0) over = 'caught';
  return { distance: next, over };
}

/**
 * Number of High scenes at the end of the history.
 */
export function trailingHigh(history) {
  let n = 0;
  for (let i = history.length - 1; i >= 0 && history[i] === 'High'; i--) n++;
  return n;
}

/**
 * Can the current (last) scene be set to this level? After three High
 * scenes in a row, the next one must be Low or Medium.
 */
export function canSetIntensity(history, level) {
  const before = history.length ? history.slice(0, -1) : history;
  return !(level === 'High' && trailingHigh(before) >= 3);
}

/**
 * Level of the scene opened by a Scene Transition: a Twist-forced level,
 * otherwise the previous scene's, capped by the three-High rule.
 */
export function intensityForNewScene(history, next) {
  const level = next || history[history.length - 1];
  return level === 'High' && trailingHigh(history) >= 3 ? 'Medium' : level;
}

/**
 * A Twist sets the next scene: Low stays Low, Medium and High become High.
 */
export function intensityAfterTwist(current) {
  return current === 'Low' ? 'Low' : 'High';
}
