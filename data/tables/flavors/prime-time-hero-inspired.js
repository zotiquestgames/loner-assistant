/**
 * Prime Time Hero Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'prime-time-hero-inspired',
    name: 'Prime Time Hero Inspiration',
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
        ['Infiltrate', 'Chase', 'Sabotage', 'Rescue', 'Expose', 'Escape'],
        ['Bribe', 'Bluff', 'Hack', 'Defend', 'Smuggle', 'Ambush'],
        ['Negotiate', 'Wiretap', 'Decode', 'Kidnap', 'Frame', 'Double-Cross'],
        ['Improvise', 'Intercept', 'Disable', 'Recover', 'Impersonate', 'Outrun'],
        ['Seduce', 'Tail', 'Detonate', 'Swap', 'Blackmail', 'Betray'],
        ['Gamble', 'Crash', 'Hide', 'Promise', 'Warn', 'Celebrate'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Neon', 'Chrome', 'Sun-Bleached', 'Tropical', 'Analog', 'Classified'],
        ['Glamorous', 'Two-Faced', 'Bulletproof', 'Rented', 'Borrowed', 'Counterfeit'],
        ['Nervous', 'Smug', 'Jealous', 'Desperate', 'Rival', 'Abandoned'],
        ['Floating', 'Underwater', 'Midnight', 'Offshore', 'Diplomatic', 'Televised'],
        ['Overdue', 'Stolen', 'Rigged', 'Explosive', 'Wired', 'Coded'],
        ['Sealed', 'Retired', 'Grateful', 'Vengeful', 'Last-Minute', 'Cold War'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Briefcase', 'Prototype', 'Microfilm', 'Floppy Disk', 'Formula', 'Passport'],
        ['Sports Car', 'Yacht', 'Helicopter', 'Casino Chip', 'Ledger', 'Cassette'],
        ['Satellite', 'Diamond', 'Painting', 'Will', 'Contract', 'Payphone'],
        ['Witness', 'Hostage', 'Twin', 'Old Flame', 'Partner', 'Informant'],
        ['Bodyguard', 'Heiress', 'Defector', 'Senator', 'Bomb', 'Safe'],
        ['Key', 'Map', 'Photograph', 'Telex', 'Mask', 'Trophy'],
      ]
    }
  }
};
