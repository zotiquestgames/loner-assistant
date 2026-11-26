/**
 * Celtic Fantasy Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'celtic-fantasy-inspired',
    name: 'Celtic Fantasy Inspiration',
    version: '1.0',
    enabled: true,
    flavorOf: 'get-inspired'
  },

  tables: {
    verbs: {
      id: 'verbs',
      name: 'Verbs & Actions',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Appears', 'Transforms', 'Betrays', 'Whispers', 'Breaks', 'Summons'],
        ['Devours', 'Protects', 'Reveals', 'Conceals', 'Binds', 'Frees'],
        ['Demands', 'Offers', 'Steals', 'Grants', 'Curses', 'Blesses'],
        ['Pursues', 'Flees', 'Challenges', 'Surrenders', 'Witnesses', 'Forgets'],
        ['Remembers', 'Mourns', 'Celebrates', 'Hunts', 'Shelters', 'Drowns'],
        ['Rises', 'Falls', 'Sings', 'Screams', 'Laughs', 'Dies'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives & Qualities',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Ancient', 'Twisted', 'Radiant', 'Hungry', 'Cursed', 'Forgotten'],
        ['Sacred', 'Profane', 'Hidden', 'Visible', 'Fragile', 'Unbreakable'],
        ['Wild', 'Tame', 'Beautiful', 'Grotesque', 'Silent', 'Deafening'],
        ['Cold', 'Burning', 'Poisonous', 'Healing', 'Lonely', 'Crowded'],
        ['Deep', 'Shallow', 'Bright', 'Dark', 'Living', 'Dead'],
        ['Stolen', 'Given', 'Earned', 'Doomed', 'Blessed', 'Eternal'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns & Concepts',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Raven', 'Cauldron', 'Oath', 'Shadow', 'Star', 'Doorway'],
        ['Blood', 'Water', 'Fire', 'Stone', 'Bone', 'Gold'],
        ['Crown', 'Sword', 'Song', 'Silence', 'Child', 'Elder'],
        ['Beast', 'Spirit', 'Lover', 'Enemy', 'Stranger', 'Family'],
        ['Feast', 'Grave', 'Tower', 'Well', 'Bridge', 'Road'],
        ['Dream', 'Nightmare', 'Prophecy', 'Bargain', 'Sacrifice', 'Eternity'],
      ]
    }
  }
};
