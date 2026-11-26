/**
 * Mech Requiem Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'mech-requiem-inspired',
    name: 'Mech Requiem Inspiration',
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
        ['command', 'navigate', 'hack', 'deploy', 'fortify', 'salvage'],
        ['operate', 'synthesize', 'interrogate', 'fortify', 'encode', 'strategize'],
        ['augment', 'recalibrate', 'substitute', 'sabotage', 'reconstruct', 'maneuver'],
        ['network', 'transmit', 'simulate', 'clarify', 'enhance', 'disrupt'],
        ['confront', 'adapt', 'establish', 'assemble', 'prioritize', 'integrate'],
        ['patrol', 'demand', 'detect', 'encrypt', 'mobilize', 'annihilate'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['armored', 'faulty', 'encrypted', 'scarce', 'reinforced', 'strategic'],
        ['stealthy', 'advanced', 'legitimate', 'high-tech', 'astonishing', 'utilitarian'],
        ['efficient', 'covert', 'vulnerable', 'robust', 'dynamic', 'critical'],
        ['sleek', 'obsolete', 'stabilized', 'modular', 'adaptive', 'harsh'],
        ['silent', 'hostile', 'elusive', 'volatile', 'integral', 'delayed'],
        ['fortified', 'commanding', 'hazardous', 'massive', 'aggressive', 'resilient'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['mission', 'outpost', 'upgrade', 'protocol', 'data', 'zone'],
        ['frontline', 'operation', 'network', 'device', 'algorithm', 'blueprint'],
        ['interface', 'maneuver', 'transaction', 'firmware', 'opportunity', 'signal'],
        ['module', 'ally', 'command', 'fluid', 'intel', 'value'],
        ['directive', 'dawn', 'boundary', 'chamber', 'architecture', 'encampment'],
        ['key', 'revenue', 'function', 'anomaly', 'strategy', 'confrontation'],
      ]
    }
  }
};
