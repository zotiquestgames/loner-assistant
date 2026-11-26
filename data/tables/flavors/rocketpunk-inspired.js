/**
 * Rocketpunk Inspiration
 * D66 random tables
 */

export default {
  supplement: {
    id: 'rocketpunk-inspired',
    name: 'Rocketpunk Inspiration',
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
        ['Salvage', 'Navigate', 'Repair', 'Breach', 'Monitor', 'Extract'],
        ['Negotiate', 'Infiltrate', 'Evacuate', 'Sabotage', 'Coordinate', 'Process'],
        ['Investigate', 'Transport', 'Establish', 'Prevent', 'Secure', 'Expose'],
        ['Defend', 'Research', 'Mediate', 'Track', 'Deliver', 'Hunt'],
        ['Construct', 'Override', 'Calibrate', 'Intercept', 'Analyze', 'Maintain'],
        ['Exploit', 'Quarantine', 'Terraform', 'Broadcast', 'Synthesize', 'Jettison'],
      ]
    },
    adjectives: {
      id: 'adjectives',
      name: 'Adjectives',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Derelict', 'Classified', 'Experimental', 'Contaminated', 'Pressurized', 'Automated'],
        ['Corporate', 'Radiation-soaked', 'Malfunctioning', 'Encrypted', 'Orbital', 'Critical'],
        ['Abandoned', 'High-security', 'Emergency', 'Unstable', 'Deep-space', 'Volatile'],
        ['Modified', 'Quarantined', 'Reactive', 'Magnetic', 'Zero-gravity', 'Synthetic'],
        ['Industrial', 'Hostile', 'Isolated', 'Modular', 'Redundant', 'Sealed'],
        ['Prototype', 'Damaged', 'Rogue', 'Artificial', 'Compressed', 'Toxic'],
      ]
    },
    nouns: {
      id: 'nouns',
      name: 'Nouns',
      category: 'get-inspired',
      rollType: '2d6',
      entries: [
        ['Station', 'Reactor', 'Habitat', 'Signal', 'Cargo', 'System'],
        ['Asteroid', 'Colony', 'Laboratory', 'Beacon', 'Data', 'Facility'],
        ['Shipment', 'Platform', 'Network', 'Container', 'Module', 'Database'],
        ['Outpost', 'Generator', 'Array', 'Manifest', 'Protocol', 'Installation'],
        ['Vessel', 'Chamber', 'Interface', 'Transmission', 'Core', 'Complex'],
        ['Terminal', 'Processor', 'Grid', 'Package', 'Algorithm', 'Structure'],
      ]
    }
  }
};
