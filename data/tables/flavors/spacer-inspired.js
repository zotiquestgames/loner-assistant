/**
 * Spacer Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'spacer-inspired',
    name: 'Spacer Inspiration',
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
        ['Discover', 'Retrieve', 'Escape', 'Negotiate', 'Confront', 'Repair'],
        ['Explore', 'Decode', 'Attack', 'Survey', 'Sabotage', 'Protect'],
        ['Build', 'Salvage', 'Trade', 'Smuggle', 'Pursue', 'Investigate'],
        ['Transport', 'Analyze', 'Evacuate', 'Hide', 'Capture', 'Signal'],
        ['Observe', 'Hack', 'Patrol', 'Defend', 'Recruit', 'Forge'],
        ['Examine', 'Infiltrate', 'Hunt', 'Bypass', 'Deliver', 'Recover'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ancient', 'Mysterious', 'Dangerous', 'Hidden', 'Massive', 'Fragile'],
        ['Advanced', 'Alien', 'Critical', 'Desolate', 'Restricted', 'Valuable'],
        ['Remote', 'Hostile', 'Unique', 'Inaccessible', 'Unstable', 'Secretive'],
        ['Crumbling', 'Vibrant', 'Chaotic', 'Vital', 'Dense', 'Faint'],
        ['Radiant', 'Uncharted', 'Inhabited', 'Shattered', 'Dormant', 'Isolated'],
        ['Shifting', 'Exotic', 'Vital', 'Forbidding', 'Complex', 'Eerie'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Starship', 'Artifact', 'Faction', 'Outpost', 'Nebula', 'Colony'],
        ['Alien', 'Engine', 'Weapon', 'Station', 'Crew', 'Trade Route'],
        ['Treasure', 'Beacon', 'Rival', 'Asteroid', 'Civilization', 'Rift'],
        ['Planet', 'Data Core', 'Smuggler', 'Cargo', 'Ruins', 'Diplomat'],
        ['Signal', 'Prisoner', 'Pirate', 'Map', 'Relic', 'Creature'],
        ['Spy', 'Prototype', 'Rebel', 'Star', 'Resource', 'Portal'],
      ]
    }
  }
};
