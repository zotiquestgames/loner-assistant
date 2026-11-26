/**
 * The Path Not Taken
 * Twist effects for time-travel play
 */

export default {
  supplement: {
    id: 'the-path-not-taken',
    name: "The Path Not Taken",
    version: '1.0',
    enabled: true
  },

  tables: {
    time_twist_effects: {
      id: 'time_twist_effects',
      name: "Time Twist Effects",
      category: 'random-tables',
      rollType: '1d66',
      description: "When a twist in time disrupts the expected path.",
      entries: [
        "A version of you passes by",
        "You speak before you think",
        "Your reflection doesn't match",
        "A Time Ghost interrupts the scene",
        "Your memory is challenged",
        "A paradox starts to form",
        "You glimpse someone dead—alive",
        "Time skips ahead mid-scene",
        "An item disappears from your pack",
        "A flash of two timelines merging",
        "You switch emotional tags suddenly",
        "A character erases as you speak",
        "You lose time (missing hours)",
        "You say something you never knew",
        "You remember a life that isn’t yours",
        "Your shadow moves independently",
        "A past enemy offers help",
        "The environment loops a sound/image",
        "A previous scene replays nearby",
        "Your tag changes mid-dialogue",
        "A mark appears on your body",
        "You feel a tag being rewritten",
        "A Fixed Point flickers briefly",
        "A relationship tag fractures",
        "A loop resets—but you're not ready",
        "Someone else quotes your past words",
        "You see the same event twice",
        "An NPC splits into two roles",
        "Someone warns you not to leap again",
        "A duplicate of you appears",
        "An NPC recognizes you wrongly",
        "A voice speaks from another loop",
        "The Oracle contradicts itself",
        "A decision was made without you",
        "You act without choosing to",
        "Time halts. Everything waits."
      ]
    }
  }
};
