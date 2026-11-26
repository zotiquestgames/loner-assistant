/**
 * Dungeoneer Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'dungeoneer-inspired',
    name: 'Dungeoneer Inspiration',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired'
  },

  tables: {
    verbs: {
      id: 'verbs',
      name: 'Verbs',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Break', 'Reveal', 'Block', 'Ignite', 'Collapse', 'Escape'],
        ['Climb', 'Search', 'Hide', 'Trap', 'Unlock', 'Seal'],
        ['Decipher', 'Whisper', 'Haunt', 'Ambush', 'Drag', 'Echo'],
        ['Strike', 'Open', 'Shift', 'Guide', 'Channel', 'Consume'],
        ['Shatter', 'Illuminate', 'Uncover', 'Lure', 'Descend', 'Watch'],
        ['Breathe', 'Evade', 'Awaken', 'Cross', 'Silence', 'Guard'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ancient', 'Hidden', 'Twisted', 'Glowing', 'Crumbling', 'Silent'],
        ['Arcane', 'Forgotten', 'Shifting', 'Cursed', 'Sacred', 'Broken'],
        ['Rusted', 'Ominous', 'Shadowy', 'Icy', 'Burning', 'Whispering'],
        ['Haunting', 'Narrow', 'Endless', 'Hollow', 'Fragile', 'Flickering'],
        ['Jagged', 'Poisonous', 'Stifling', 'Bloodstained', 'Bound', 'Unearthly'],
        ['Massive', 'Claustrophobic', 'Deadly', 'Echoing', 'Forbidden', 'Sharp'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Door', 'Statue', 'Trap', 'Passage', 'Rune', 'Treasure'],
        ['Mirror', 'Idol', 'Torch', 'Mechanism', 'Vault', 'Chamber'],
        ['Skeleton', 'Shadow', 'Altar', 'Scroll', 'Key', 'Whisper'],
        ['Web', 'Stone', 'Pool', 'Blade', 'Beast', 'Stalactite'],
        ['Wall', 'Chain', 'Obelisk', 'Crown', 'Artifact', 'Golem'],
        ['Gate', 'Light', 'Ash', 'Crystal', 'Tomb', 'Warden'],
      ]
    }
  }
};
