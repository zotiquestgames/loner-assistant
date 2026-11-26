/**
 * Temporal play rules (Loner: The Path Not Taken), free of DOM and
 * storage so they can be tested with `node --test`. A timeline `t` holds
 * `nodes` ({ id, type: origin|checkpoint|fixed|leap, parent, edge }) and
 * `current` (the id of the node you are at).
 */

export function findNode(t, id) {
  return t.nodes.find(n => n.id === id);
}

// Nearest leap at or above a node, stopping at the origin.
function leapAbove(t, n) {
  while (n && n.type !== 'leap' && n.type !== 'origin') n = findNode(t, n.parent);
  return n?.type === 'leap' ? n : null;
}

/**
 * The Leap Node you are in: the current node, or the nearest leap above
 * it (a Checkpoint declared inside a leap still lives in that timeline).
 */
export function currentLeap(t) {
  return leapAbove(t, findNode(t, t.current));
}

/**
 * Display label: "Node 0", "C1", "F2", "L1", or "C3@L2" for a Checkpoint
 * inside a Leap.
 */
export function nodeLabel(t, n) {
  if (n.type === 'origin') return 'Node 0';
  const leap = leapAbove(t, findNode(t, n.parent));
  return n.type === 'checkpoint' && leap ? `${n.id}@${leap.id}` : n.id;
}

/**
 * Loop Wear & Tear on 1d6. Null on a 6: Loop Mastery (add a fact to the
 * Persist List) instead of a wear tag.
 */
export function wearForRoll(roll) {
  if (roll <= 2) return 'Temporal Migraine';
  if (roll <= 4) return 'Déjà-Flare';
  if (roll === 5) return 'Ghost Echo';
  return null;
}

/**
 * Reset ritual: erases a wear tag on Yes or "Yes, and...".
 */
export function ritualTook(result) {
  return result.answer === 'Yes' && result.modifier !== 'but';
}

/**
 * "Is the loop finally broken?": breakthrough on Yes or "Yes, and...",
 * "broken" on "No, and..." (move toward Consumed or Leap), otherwise not yet.
 */
export function loopBrokenOutcome(result) {
  if (result.answer === 'Yes') return result.modifier === 'but' ? 'cracks' : 'breakthrough';
  return result.modifier === 'and' ? 'broken' : 'notYet';
}

/**
 * Leap divergence question: a Yes or "No, and..." adds a world tag.
 */
export function divergenceAddsTag(result) {
  return result.answer === 'Yes' || (result.answer === 'No' && result.modifier === 'and');
}

/**
 * "Is this timeline stable?": "collapse" on "No, and...", "stress" on a
 * plain No (mark one ✶), otherwise it holds.
 */
export function stabilityOutcome(result) {
  if (result.answer !== 'No') return 'holds';
  if (result.modifier === 'and') return 'collapse';
  return result.modifier ? 'holds' : 'stress';
}

/**
 * ✶ on the node a collapse auto-leaps to: two, or one on a Fallout 6
 * (Second-Order Reprieve).
 */
export function collapseStress(falloutRoll) {
  return falloutRoll === 6 ? 1 : 2;
}

/**
 * Grid positions for the Time-Web: forward edges stay on the parent's
 * row, leaps branch to a new row below.
 */
export function layoutTimeWeb(nodes) {
  const pos = {};
  const used = new Set();
  let maxRow = 0;
  for (const n of nodes) {
    if (!n.parent) {
      pos[n.id] = { col: 0, row: 0 };
    } else {
      const p = pos[n.parent];
      const col = p.col + 1;
      let row = n.edge === 'leap' ? maxRow + 1 : p.row;
      while (used.has(`${col},${row}`)) row++;
      pos[n.id] = { col, row };
    }
    used.add(`${pos[n.id].col},${pos[n.id].row}`);
    maxRow = Math.max(maxRow, pos[n.id].row);
  }
  return { pos, maxRow };
}
