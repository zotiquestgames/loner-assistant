/**
 * LONER ASSISTANT v2.1 - Onboarding & Help System
 *
 * Provides context-sensitive help panels for each view and section
 * Users can click "?" button to learn about features without intrusive tutorial
 */

export const HelpSystem = {
  /**
   * Help content for each view and section
   * Format: { viewId: { title, description, sections: [ {title, content} ] } }
   */
  helpContent: {
    'play': {
      title: 'Play Session',
      description: 'Your main gameplay workspace. Roll the oracle, manage tables, and take notes.',
      sections: [
        {
          title: 'Current Session',
          content: 'Shows your active session. Use "Manage Sessions" to create new sessions or switch between them. Each session keeps its own notes and scene frame; the Twist Counter belongs to the campaign, so it carries across sessions.'
        },
        {
          title: 'Scene Frame',
          content: 'Before rolling anything, answer Where, Who, and What (the scene goal), then click "Save Frame". When the goal is resolved, blocked, or abandoned, click "Close Scene". If none of those is clearly true, ask the oracle "Has this scene run its course?": any Yes closes the scene, a No keeps it going. Closing a scene rolls the Scene Transition.'
        },
        {
          title: 'Oracle (Right Panel)',
          content: 'Roll the oracle to answer yes/no questions during play. Chance die vs Risk die determines the outcome. Equal dice (doubles) increment the Twist Counter. Use Advantage/Disadvantage modifiers for challenging or fortunate situations. Keyboard shortcut: Alt+O'
        },
        {
          title: 'Twist Counter',
          content: 'Tracks when the oracle produces doubles. Reaches 3 → triggers a twist event that shakes up your story. Read the Twist Intensity note before playing it. If the roll was about an NPC, click "Use Cast Twists instead" to let the Twist land on that NPC. A Twist also ends any held Leverage. Manually force a twist or reset as needed. Keyboard shortcut: Alt+W'
        },
        {
          title: 'Dead End',
          content: 'When a lead goes cold, ask the fixed question "Does something or someone point toward a new way forward?" instead of questioning the closed path. The app gives guidance for each answer and counts consecutive dead ends: after the second, pull back to the goal.'
        },
        {
          title: 'Scene Transition',
          content: 'Roll "Next Scene" (or close a scene) to see what comes next: 1-3 Dramatic, 4-5 Quiet, 6 Meanwhile. On Meanwhile, the world acts offstage: update the tag of whoever holds power, then ask whether an ally or wildcard acts independently. If the closed scene touched a faction\'s interests, click "Faction Beat" to see whether it advances its Agenda (one per transition; the result goes in its Last Seen).'
        },
        {
          title: 'Conflict (Harm & Luck)',
          content: 'Track combat or confrontations using the Harm & Luck system. Set opponent name and starting luck, then roll contested dice. Track both character and opponent luck as they take harm. Luck resets to full for every conflict. If your character is defeated, you can record a lasting consequence on their Status Track.'
        },
        {
          title: 'Leverage & Challenge Tracks',
          content: 'Optional modules. On a "Yes, and...", click "Bank as Leverage" to save it: spend it later as Advantage, or to soften a No into a "No, but...". Challenge Tracks (4 or 6 boxes) follow long pursuits: +2 on "Yes, and...", +1 on Yes or "Yes, but...", -1 on No or "No, and...". Erasing a box while holding Leverage lets you spend the Leverage instead and keep the box.'
        },
        {
          title: 'Cinematic Action',
          content: 'Optional module. Every conflict or chase gives you 3 Action Points: Gain Advantage, Cancel a Failure (reroll a No), Avoid a Consequence, or Do the Impossible (at a price). Push Yourself recovers 3 AP once per session. Chases resolve in up to three questions on a Distant / Close / Caught track. Intensity tracks Low / Medium / High scenes: Twists shift it, and three High scenes in a row force a calmer one.'
        },
        {
          title: 'Time Travel',
          content: 'Optional module from The Path Not Taken. Set a Memory Tag, then loop (Checkpoints, resets with Wear & Tear, Push Ahead) or leap (Fixed Points, Leap Nodes with divergences, Paradox Stress ✶, timeline collapse). "Open Time-Web" draws the whole timeline. State is kept per campaign.'
        },
        {
          title: 'Get Inspired',
          content: 'Generate random, thematic prompts for inspiration. Choose a flavor/theme that matches your story tone, then click "Random Prompt" to get an idea. Keyboard shortcut: Alt+T'
        },
        {
          title: 'Adventure Tables',
          content: 'Quick access to core Loner tables: Settings, Tones, Things, Opposition, and Actions. Perfect for generating adventure elements on the fly. Or roll a "Complete Adventure" for a full prompt, or "Build the Setup" for a 5W+H mission premise (Who, What, When, Where, Why, How).'
        },
        {
          title: 'Random Tables',
          content: 'Roll custom and supplement tables. Step 1: Choose a supplement. Step 2: Pick a table from that supplement. Results auto-insert into your notes. Browse all available tables in the Tools view.'
        },
        {
          title: 'Session Notes',
          content: 'Rich text editor for your session notes. Oracle rolls, table results, and character references auto-insert here. Press Alt+N to focus editor, Alt+S to save. Auto-saves every 30 seconds.'
        },
        {
          title: 'Quick Links (Left Panel)',
          content: 'Toggle quick access to your NPCs, Locations, Narrative Threads, and Recent Events. Great for tracking story elements without leaving the play view. Click "+" next to an NPC to give the relationship a tag it has earned in play.'
        }
      ]
    },
    'campaigns': {
      title: 'Campaigns',
      description: 'Create and manage campaign worlds. Each campaign is a separate story universe.',
      sections: [
        {
          title: 'What is a Campaign?',
          content: 'A campaign is a self-contained adventure or story world. You might have multiple campaigns running (fantasy epic, sci-fi heist, etc.). Each campaign can contain multiple sessions, characters, and world elements.'
        },
        {
          title: 'Create Campaign',
          content: 'Click "+ New Campaign" to start. Name it (e.g., "Starfall") and add an optional description. Save it, then you\'re ready to play!'
        },
        {
          title: 'Campaign Details',
          content: 'View the full campaign description and start new sessions within it. Sessions let you track individual play dates or story chapters. All content (NPCs, locations, threads) belongs to a campaign.'
        },
        {
          title: 'Edit / Delete',
          content: 'Click a campaign to edit its name or description. Delete carefully - it removes the entire campaign and all its sessions and content.'
        },
        {
          title: 'Optional Modules',
          content: 'Click "Modules" in the Play view\'s Current Campaign panel to choose which optional rules this campaign uses: Leverage, Challenge Tracks, Status Track (on by default), Cinematic Action, and Time Travel (off by default). Switched-off modules hide their panels; nothing is deleted.'
        },
        {
          title: 'The Living World',
          content: 'When an adventure ends, click "Living World" on the campaign card to review every NPC, Location, and Thread that played a part. Update relationship tags, mark NPCs who are gone (their tags leave play and are kept in their notes), rewrite locations, and set each thread to Active, Resolved, or Abandoned.'
        }
      ]
    },
    'characters': {
      title: 'Characters',
      description: 'Create and manage player characters. Loner uses narrative tags instead of numeric stats.',
      sections: [
        {
          title: 'What is a Character?',
          content: 'Your protagonist in the Loner system. Characters are tag-based (e.g., "Cynical Spacefarer", "Haunted Archaeologist"). No numeric stats—pure narrative.'
        },
        {
          title: 'Create Character',
          content: 'Click "+ New Character" and fill in: Name, Concept, Skills, Frailty, Gear, Goal & Motive, and Nemesis. Or click "Generate" to roll a full character from a supplement\'s tables (including a Lifepath fragment), reroll any line, and save it.'
        },
        {
          title: 'Character Sheet',
          content: 'Click "View" for the full sheet: tags, Luck, and the active Status Track tag (with "Recover"). Edit anytime to adjust tags as your character evolves through play.'
        },
        {
          title: 'Lifepath & Marks',
          content: 'At the bottom of the sheet. Lifepath: roll backstory fragments on seven tables (Origins, Defining Loss, A Memory That May Be False...); a fragment can later harden into a tag. Marks: a short line written at an Identity Checkpoint, when the self shifts. The sheet lists the Checkpoint questions.'
        },
        {
          title: 'Active Character',
          content: 'Mark a character as Active to track it in the Play view. Only one character can be active at a time, but you can manage multiple characters across different campaigns.'
        }
      ]
    },
    'npcs': {
      title: 'NPCs',
      description: 'Track non-player characters and their relationships with your character.',
      sections: [
        {
          title: 'NPC Management',
          content: 'NPCs are people, creatures, or organizations your character meets. Their sheet uses the same tags as a character (Concept, Skills, Frailty, Gear), plus Notes and a relationship (Ally, Neutral, Enemy).'
        },
        {
          title: 'Create NPC',
          content: 'Click "+ New NPC" and fill in what you know, or click "Generate" to roll a full NPC. Cast List fields track them between scenes: Agenda (what they want now), Disposition (their stance and what they know), Voice (a verbal signature), and Last Seen (where, and what changed).'
        },
        {
          title: 'Quick-Build',
          content: 'The "Roll" button next to Concept, Agenda, Disposition, or Voice fills that field from the Character Emulator tables. Skip any field you already know.'
        },
        {
          title: 'Factions',
          content: 'Tick "Faction" to make an organization act like an NPC: its Concept rolls on the Faction Concept table, and with an Agenda it can take Faction Beats at Scene Transitions.'
        },
        {
          title: 'Relationships',
          content: 'A relationship tested, strained, or deepened in play earns a tag (e.g., "Trusted Informant", "Sworn Enemy") that grants Advantage or Disadvantage like any other tag. Add one with "+" in the Play view\'s NPCs panel, or review them all in The Living World.'
        },
        {
          title: 'Quick Access',
          content: 'In the Play view, click "NPCs" to quickly toggle a panel of all NPCs in the current campaign. Perfect for mid-session reference.'
        }
      ]
    },
    'locations': {
      title: 'Locations',
      description: 'Build your story world. Track locations your character discovers or visits.',
      sections: [
        {
          title: 'Location Management',
          content: 'Locations are places in your story world—cities, ruins, spaceports, etc. Track their name, description, and whether your character has visited.'
        },
        {
          title: 'Create Location',
          content: 'Add a name, description (atmosphere, notable features), and optional tags. Mark as Visited when your character goes there.'
        },
        {
          title: 'Visited Locations',
          content: 'Visited locations are marked with a checkmark. This helps you recall where your character has been and track their journey.'
        },
        {
          title: 'Quick Access',
          content: 'In Play view, click "Locations" for a quick panel of locations. Add new locations mid-session or mark them visited from the quick panel.'
        }
      ]
    },
    'threads': {
      title: 'Narrative Threads',
      description: 'Track ongoing storylines, plot hooks, and unresolved questions.',
      sections: [
        {
          title: 'What is a Thread?',
          content: 'A narrative thread is an ongoing plot, mystery, or relationship. Examples: "Find the hidden artifact", "Uncover who the traitor is", "Investigate the strange signals". Track whether it\'s active (Open), resolved (Resolved), or abandoned (Abandoned).'
        },
        {
          title: 'Create Thread',
          content: 'Click "+ New Thread" and describe the ongoing plot or question. Status starts as "Open". As the story develops, mark it Resolved when you complete it.'
        },
        {
          title: 'Thread Status',
          content: 'Open = ongoing plot. Resolved = completed thread. Abandoned = thread no longer relevant. Filter by status to see what\'s active vs. closed.'
        },
        {
          title: 'Quick Panel',
          content: 'In Play view, click "Threads" to see active threads. Resolved threads don\'t show in the quick panel—but stay in your history for reference.'
        }
      ]
    },
    'events': {
      title: 'Events & Timeline',
      description: 'Log significant moments and build a chronological story record.',
      sections: [
        {
          title: 'Event Log',
          content: 'An automatic timeline of important story moments. When you roll the oracle, mark a twist, trigger a conflict, or manually log an event—it goes into the timeline.'
        },
        {
          title: 'Create Event',
          content: 'Click "+ Log Event" to manually add a story moment (e.g., "Character defeated the rival", "Discovered the secret vault"). Auto-timestamped.'
        },
        {
          title: 'View Timeline',
          content: 'See all events in chronological order. Hover over dates to see full descriptions. This builds your session recap and story summary.'
        },
        {
          title: 'Session Recap',
          content: 'Export a text summary of all session events. Perfect for sharing what happened or archiving your play history.'
        },
        {
          title: 'Quick Panel',
          content: 'In Play view, click "Events" to see recent events. Useful for remembering what just happened in your session.'
        }
      ]
    },
    'tools': {
      title: 'Tools & Tables',
      description: 'Access all roll tables and random generators. Organize and customize table collections.',
      sections: [
        {
          title: 'What are Tables?',
          content: 'Roll tables generate random story elements. Core tables include Adventure Maker (Settings, Tones, Things, Opposition, Actions), Get Inspired (thematic prompts), and custom supplemental tables.'
        },
        {
          title: 'Core Tables',
          content: 'Adventure Maker tables create complete adventure prompts. Roll individually or together for a full adventure. Essential for generating story momentum.'
        },
        {
          title: 'Get Inspired',
          content: 'Thematic random prompts. Choose a flavor (e.g., "Core" for standard Loner prompts). Hit the button for random inspiration to spark ideas.'
        },
        {
          title: 'Supplement Tables',
          content: 'Additional content from Loner supplements. When you select a supplement, its unique tables appear. Roll for specialized encounters, locations, or situations. Character Emulator (NPC Quick-Build, Faction Concept, Cast Twists), Character Builder\'s Guide (Lifepaths, Relationship Arcs, Memory, Scene Frames), and The Path Not Taken (Time Twist Effects) are included.'
        },
        {
          title: 'Custom Tables',
          content: 'Create your own tables for custom content. Define entries, then roll them like any other table. Perfect for house rules or supplement-specific mechanics. "Start from a template" fills in the World Builder\'s Guide D66 Random Encounters or Story Twists template: rewrite each entry for your setting.'
        },
        {
          title: 'Auto-Insert',
          content: 'Most table results auto-insert into your session notes editor. Great for building your narrative as you play.'
        }
      ]
    }
  },

  /**
   * Initialize the help system
   */
  init() {
    console.log('ℹ️ Help System initialized');
    // Setup is minimal - help content is defined above
    // Initialization mainly happens when view changes
  },

  /**
   * Show help for a specific view
   * @param {string} viewId - The view identifier (e.g., 'play', 'campaigns')
   */
  show(viewId) {
    const help = this.helpContent[viewId];
    if (!help) {
      console.warn(`No help content for view: ${viewId}`);
      return;
    }

    this.displayHelpModal(help);
  },

  /**
   * Display the help modal with content
   * @param {object} help - Help content object with title, description, sections
   */
  displayHelpModal(help) {
    // Create or update modal
    let modal = document.getElementById('help-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'help-modal';
      modal.className = 'help-modal hidden';
      document.body.appendChild(modal);
    }

    // Build help content
    let sectionsHtml = help.sections
      .map(
        section => `
      <div class="help-section">
        <h4>${section.title}</h4>
        <p>${section.content}</p>
      </div>
    `
      )
      .join('');

    modal.innerHTML = `
      <div class="help-modal-content">
        <div class="help-modal-header">
          <h2>${help.title}</h2>
          <button class="btn-close" onclick="HelpSystem.close()" title="Close help">×</button>
        </div>
        <p class="help-description">${help.description}</p>
        <div class="help-sections">
          ${sectionsHtml}
        </div>
        <div class="help-modal-footer">
          <button class="btn btn-primary" onclick="HelpSystem.close()">Close</button>
        </div>
      </div>
    `;

    // Show modal
    modal.classList.remove('hidden');

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.close();
      }
    });

    console.log('ℹ️ Help modal opened');
  },

  /**
   * Close the help modal
   */
  close() {
    const modal = document.getElementById('help-modal');
    if (modal) {
      modal.classList.add('hidden');
      console.log('ℹ️ Help modal closed');
    }
  },

  /**
   * Toggle help modal visibility
   */
  toggle(viewId) {
    const modal = document.getElementById('help-modal');
    if (modal && !modal.classList.contains('hidden')) {
      this.close();
    } else {
      this.show(viewId);
    }
  }
};
