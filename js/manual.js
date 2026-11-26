/**
 * LONER ASSISTANT v2.1 - User Manual System
 *
 * Display the user manual in-app
 */

export const ManualSystem = {

  /**
   * Show the user manual in a modal
   */
  show() {
    const manualHTML = this.getManualHTML();

    // Create a custom large modal for the manual
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = 'User Manual';
    modalBody.innerHTML = `
      <div class="manual-content">
        ${manualHTML}
      </div>
      <div style="margin-top: var(--space-lg); text-align: center;">
        <button class="btn btn-primary" onclick="closeModal()">Close</button>
      </div>
    `;

    modal.classList.remove('hidden');

    // Add manual-specific styling
    modal.classList.add('modal-large');
  },

  /**
   * Get the manual content as HTML
   */
  getManualHTML() {
    return `
      <div style="max-width: 800px; margin: 0 auto;">
        <h1 id="loner-assistant---user-manual">Loner Assistant - User Manual</h1>
        <p>Welcome to the <strong>Loner Assistant</strong>, your digital companion for playing the Loner solo RPG. This guide will help you navigate the application and make the most of its features.</p>
        <h2 id="getting-started">Getting Started</h2>
        <p>Loner Assistant runs directly in your browser. There is no login or server; all your data is stored safely on your device using your browser's local storage (IndexedDB).</p>
        <p><strong>Note:</strong> If you clear your browser's "Site Data" or "Cookies" for this site, you may lose your campaigns.</p>
        <h2 id="interface-overview">Interface Overview</h2>
        <p>The application is divided into several views, accessible via the top navigation bar:</p>
        <ul>
        <li><strong>Play</strong>: The main dashboard where you spend most of your game time. It contains the Oracle, your Session Notes, and quick access to active character info.</li>
        <li><strong>Campaigns</strong>: Manage your different adventures.</li>
        <li><strong>Characters</strong>: Create and edit your protagonists.</li>
        <li><strong>NPCs / Locations / Threads / Events</strong>: Manage your world content.</li>
        <li><strong>Tools</strong>: Access all roll tables and supplements.</li>
        </ul>
        <h2 id="managing-your-game">Managing Your Game</h2>
        <h3 id="campaigns">Campaigns</h3>
        <p>A <strong>Campaign</strong> is the container for your story. It holds all your sessions, characters, and world data.</p>
        <ul>
        <li>Go to the <strong>Campaigns</strong> tab to create a new campaign.</li>
        <li>Click "Select" on a campaign to make it active.</li>
        </ul>
        <h3 id="sessions">Sessions</h3>
        <p>A <strong>Session</strong> represents a single sitting or chapter of your story.</p>
        <ul>
        <li>In the <strong>Play</strong> view, the <strong>Current Session Card</strong> at the top displays your active session.</li>
        <li>Use the "Manage Sessions" button to create or switch sessions.</li>
        <li><strong>Session Notes</strong> are auto-saved as you type.</li>
        </ul>
        <h3 id="characters">Characters</h3>
        <p>Your <strong>Protagonist</strong> is the main character of your story.</p>
        <ul>
        <li>Go to the <strong>Characters</strong> tab to create a character.</li>
        <li>Characters use <strong>Tags</strong> (Concept, Skills, Frailty, Gear) instead of numbers.</li>
        <li>You can mark a character as "Active" to see them in the Play view sidebar.</li>
        <li><strong>Generate Character</strong> rolls a full character (name, concept, two skills, a frailty, two pieces of gear, and a Lifepath fragment) from a supplement's tables. Reroll any line, then save it as a PC or an NPC. Norse Saga and Celtic Fantasy build characters from six Origins: pick one or roll for it, and the Skills, Frailty and Gear come from that Origin's tables; the Origin is written in the Concept.</li>
        </ul>
        <h4 id="lifepath-and-marks">Lifepath and Marks</h4>
        <p>From the <em>Character Builder's Guide</em>. Open a character with <strong>View</strong> to find them at the bottom of the sheet.</p>
        <ul>
        <li><strong>Lifepath</strong>: backstory as fragments, not a biography. Pick one of the seven Lifepath tables (Origins, Formative Events, Key Relationships, Defining Loss, What Changed You, A Memory That May Be False, Something You Can't Let Go) and click <strong>Roll</strong>. A fragment can later harden into a tag.</li>
        <li><strong>Marks</strong>: a short line written when the self shifts at an <strong>Identity Checkpoint</strong> (achieving or abandoning your Goal, forgiving or failing to, breaking a personal rule, accepting a denied truth, losing or reclaiming a defining tag). The sheet lists the three Checkpoint questions as a reminder.</li>
        <li>Click <strong>&times;</strong> next to a fragment or Mark to remove it.</li>
        </ul>
        <h2 id="playing-the-game">Playing the Game</h2>
        <h3 id="the-oracle">The Oracle</h3>
        <p>The <strong>Oracle</strong> is the heart of Loner. It answers your questions to drive the story.</p>
        <p>1. <strong>Ask a Yes/No question</strong> about the situation.</p>
        <p>2. Select a modifier if applicable:</p>
        <ul>
        <li><strong>Advantage</strong>: Favorable conditions.</li>
        <li><strong>Disadvantage</strong>: Unfavorable conditions.</li>
        </ul>
        <p>3. Click <strong>Consult Oracle</strong> (or press <code>Alt + O</code>).</p>
        <p>4. The result will be displayed (e.g., "Yes, but...", "No, and...").</p>
        <h3 id="twist-counter">Twist Counter</h3>
        <p>The app automatically tracks <strong>Twists</strong>.</p>
        <ul>
        <li>When you roll doubles on the Oracle, the Twist Counter increases.</li>
        <li>At <strong>3</strong>, a Twist is triggered automatically.</li>
        <li>You can also manually <strong>Force Twist</strong> (<code>Alt + W</code>) if the narrative demands it.</li>
        <li>The Twist panel includes a <strong>Twist Intensity</strong> reminder: play it at its most disruptive if pressure has been building, as a shift if the scene has been clean.</li>
        <li><strong>Cast Twists</strong> (<em>Character Emulator</em>): if the roll that filled the counter was about an NPC, click <strong>Use Cast Twists instead</strong> to let the Twist land on that NPC (their Agenda or Disposition changes, or someone else steps in).</li>
        <li>Any held Leverage expires when a Twist fires.</li>
        </ul>
        <h3 id="dead-ends">Dead Ends</h3>
        <p>When a lead goes cold, stop questioning the closed path. In the <strong>Dead End</strong> panel, ask the fixed question <em>"Does something or someone point toward a new way forward?"</em> The app shows guidance for each answer and tracks consecutive dead ends on the same thread: after the second, pull back to the goal instead of asking again.</p>
        <h3 id="conflict-resolution">Conflict Resolution</h3>
        <p>Use the <strong>Conflict</strong> panel in the Play view to track dangerous situations.</p>
        <p>1. Enter Opponent Name and Luck (default 6).</p>
        <p>2. Click <strong>Start Conflict</strong>.</p>
        <p>3. Use the <strong>Roll</strong> button to resolve rounds. The app tracks Luck for both you and the opponent.</p>
        <p>Luck belongs to a single conflict: your active character starts each conflict with full Luck. If your character is defeated, the app offers to record a lasting consequence on the <strong>Status Track</strong> (see Optional Modules).</p>
        <h3 id="scene-management">Scene Management</h3>
        <p><strong>Framing a Scene</strong>: before rolling anything, fill in the <strong>Scene Frame</strong> panel (Where, Who, What the goal is) and click <strong>Save Frame</strong>. The frame is added to your notes and restored with the session.</p>
        <p><strong>Closing a Scene</strong>: click <strong>Close Scene</strong> and choose whether the goal was <strong>resolved</strong>, <strong>blocked</strong>, or <strong>abandoned</strong>. If none of these is clearly true, ask the oracle <em>"Has this scene run its course?"</em>: any Yes closes the scene, a No keeps it open.</p>
        <p><strong>Scene Transition</strong>: closing a scene rolls the transition automatically (or click <strong>Next Scene</strong> in the Scene panel):</p>
        <ul>
        <li><strong>1–3 Dramatic</strong>: stakes increase, tension rises.</li>
        <li><strong>4–5 Quiet</strong>: time to recover, plan, or deepen a relationship.</li>
        <li><strong>6 Meanwhile</strong>: the world acts while the Protagonist is offstage. A prompt walks you through both steps: update the tag of whoever holds power, then ask whether an ally or wildcard acts independently.</li>
        </ul>
        <h4 id="faction-beats">Faction Beats</h4>
        <p>From the <em>Character Emulator</em>. When the scene that just closed touched a faction's interests, click <strong>Faction Beat</strong> under the Scene Transition result. In a Meanwhile, use the Faction Beat button when the party holding power is an organization and its next move isn't obvious.</p>
        <ul>
        <li>Pick the faction and a modifier: Advantage or Disadvantage come from its Concept and from what the last scene did to it, never from its Agenda.</li>
        <li>The app asks whether the faction advances its Agenda and explains the result.</li>
        <li>The result is discovered later, not narrated now: write it in the faction's <strong>Last Seen</strong> and reveal it when the fiction allows.</li>
        <li>You get at most one Faction Beat per Scene Transition. Equal dice count toward the Twist Counter as usual.</li>
        </ul>
        <h2 id="optional-modules">Optional Modules</h2>
        <p>Optional rules can be switched on or off per campaign: click <strong>Modules</strong> in the Current Campaign panel. Switched-off modules hide their panels and stop prompting; nothing is deleted. Leverage, Challenge Tracks, and the Status Track start on; Cinematic Action and Time Travel start off.</p>
        <h3 id="leverage">Leverage</h3>
        <ul>
        <li>When the Oracle answers <strong>Yes, and...</strong>, click <strong>Bank as Leverage</strong> to save that energy instead of narrating it now, and describe what it is.</li>
        <li>You hold one Leverage at a time. It expires when its description no longer applies, or when a Twist fires.</li>
        <li>Spend it from the <strong>Leverage</strong> panel as Advantage on a related roll, or right after a No lands to soften it into a <em>No, but...</em></li>
        </ul>
        <h3 id="challenge-tracks">Challenge Tracks</h3>
        <ul>
        <li>For pursuits that span several scenes or sessions. Click <strong>+ New Track</strong> and choose 4 boxes (a standard arc) or 6 (a longer one).</li>
        <li>After a scene focused on that pursuit, mark progress: <strong>+2</strong> on <em>Yes, and...</em>, <strong>+1</strong> on <em>Yes</em> or <em>Yes, but...</em>, nothing on <em>No, but...</em>, <strong>-1</strong> on <em>No</em> or <em>No, and...</em></li>
        <li>If you click <strong>-1</strong> while holding Leverage, the app offers to spend it instead: the result becomes <em>No, but...</em> and no box is lost.</li>
        <li>A good result counts once: either mark two boxes, or mark one and bank the Leverage.</li>
        </ul>
        <h3 id="status-track">Status Track</h3>
        <ul>
        <li>A three-box track for lasting harm. When your character's Luck reaches 0 in a conflict, the app asks whether the defeat should leave a mark, and suggests physical, social, and psychological tags (or write your own).</li>
        <li>The most recent tag is the active one, shown on the character sheet. Click <strong>Recover</strong> there to clear the last box.</li>
        <li>The Status Track persists between conflicts. It does not replace Luck.</li>
        </ul>
        <h3 id="cinematic-action">Cinematic Action</h3>
        <p>From <em>Cinematic Action</em>, in the <strong>Cinematic Action</strong> panel.</p>
        <h4 id="action-points">Action Points</h4>
        <ul>
        <li>You get <strong>3 Action Points</strong> whenever a conflict or a chase starts. They don't refresh until the next one.</li>
        <li><strong>Gain Advantage</strong> (1 AP): Advantage on the next conflict roll. If you already have Advantage it adds nothing (the app won't spend it); against Disadvantage it cancels it. In a chase, it also moves you one step ahead on the distance track.</li>
        <li><strong>Cancel a Failure</strong> (1 AP): reroll the last Oracle question, or the last chase question, that came up No. You must keep the new answer. It does not undo a Harm &amp; Luck exchange.</li>
        <li><strong>Avoid a Consequence</strong> (1 AP): erase a complication from a success or failure.</li>
        <li><strong>Do the Impossible</strong> (1 AP): roll for something that should automatically fail, and pick its price: a new Frailty, a burned Tag, or escalating circumstances. In a chase it puts you at Distant, even when you were caught.</li>
        <li><strong>Push Yourself</strong>: once per session, recover 3 AP mid-conflict by taking a serious consequence, burning a tag, or escalating the situation.</li>
        </ul>
        <h4 id="chases">Chases</h4>
        <p>Enter who is chasing you and click <strong>Start Chase</strong>. Resolve it with up to three questions: <em>Can I gain distance?</em>, <em>Do they close in?</em>, and <em>Do I escape?</em> You can type your own wording for each. The distance track moves between Distant, Close, and Caught: a Yes pulls you away, "Yes, but..." holds, a No lets them gain, and "No, and..." puts them right on you. Reaching Caught ends the chase unless you Do the Impossible. Equal dice count toward the Twist Counter.</p>
        <h4 id="intensity">Intensity</h4>
        <ul>
        <li>Set each scene to <strong>Low</strong>, <strong>Medium</strong>, or <strong>High</strong>. The level carries into the next scene until you change it.</li>
        <li>A Twist during a High or Medium scene makes the next scene High; a Twist during a Low scene keeps it Low.</li>
        <li>After three High scenes in a row, the next one must be Low or Medium.</li>
        </ul>
        <h3 id="time-travel">Time Travel</h3>
        <p>From <em>The Path Not Taken</em>, in the <strong>Time Travel</strong> panel. Click <strong>Set Up Temporal Play</strong> to choose a <strong>Memory Tag</strong> (it never changes) and up to three <strong>Sensitive Tags</strong> (time may rewrite them). Temporal play belongs to the campaign, so it carries across sessions.</p>
        <h4 id="time-loop">Time Loop</h4>
        <ul>
        <li><strong>Declare Checkpoint</strong> (C1, C2...): the point you return to. Keep a <strong>Persist List</strong> of facts and gear you carry through every reset; mark remembered details as <em>Recalled</em>.</li>
        <li><strong>Reset Loop</strong> after a death, a major failure, or by choice: the Loop Counter rises and the app rolls <strong>Wear &amp; Tear</strong> (Temporal Migraine, Déjà-Flare, Ghost Echo, or Loop Mastery). Repeating the same solution to the same problem is at Disadvantage.</li>
        <li><strong>Push Ahead</strong> to a new Checkpoint when you reach a new location or NPC, after three resets, or when the Twist Counter hits 3 and you succeed at the scene's goal. It erases every Temporal Migraine.</li>
        <li><strong>Reset Ritual</strong>: in a Quiet Scene, ask "Did the ritual take?"; on Yes or "Yes, and..." erase one wear tag.</li>
        <li>End the loop with <strong>Loop broken?</strong> (a Yes is a Breakthrough: the final Checkpoint becomes a Fixed Point) or <strong>Accept</strong>. Six resets without a new Checkpoint can mean the character is Consumed.</li>
        </ul>
        <h4 id="time-leap">Time Leap</h4>
        <ul>
        <li><strong>Fixed Point</strong> (F1, F2...): an event no timeline can change, locked by declaration, by completing a milestone, or by choosing to lock a "Yes, and...".</li>
        <li><strong>Leap</strong> (L1, L2...): jump to an alternate timeline. The app adds Temporal Drift and asks the three divergence questions; each Yes or "No, and..." gives the Leap Node a world tag.</li>
        <li><strong>+ ✶ Stress</strong> when an action contradicts a Fixed Point (and play at Disadvantage). Three ✶ on a Leap Node bring a <strong>Paradox Entity</strong>.</li>
        <li><strong>Stable?</strong> asks "Is this timeline stable?": a No adds a ✶; "No, and..." collapses the timeline, rolls the Fallout table, and leaps you to a new node with ✶✶.</li>
        <li>End the leaps with <strong>Make Prime</strong> (the current timeline becomes Prime, all ✶ are removed) or <strong>Resolve Paradox</strong> (the entity becomes a permanent tag). Either way, no more leaps.</li>
        </ul>
        <h4 id="time-web">The Time-Web</h4>
        <p><strong>Open Time-Web</strong> draws your timeline: ● Checkpoints, ◯ Leap Nodes, □ Fixed Points, solid lines forward, dashed lines for leaps, ↺ with the loop count, and ✶ for Paradox Stress. The ringed node is where you are. Below it, each node lists its description and tags; add tags or move to another node from there. The <strong>Ask</strong> menu holds the supplement's Oracle prompts ("Have I done this before?", "Can I leap now?"...).</p>
        <h2 id="world-building">World Building</h2>
        <p>Keep track of your evolving world using the dedicated tabs:</p>
        <ul>
        <li><strong>NPCs</strong>: People and organizations you meet (see below).</li>
        <li><strong>Locations</strong>: Places you visit.</li>
        <li><strong>Threads</strong>: Open storylines or quests. Mark them as "Active", "Resolved", or "Abandoned".</li>
        <li><strong>Events</strong>: A timeline of major happenings in your story.</li>
        </ul>
        <h3 id="npcs-and-factions">NPCs and Factions</h3>
        <p>NPC sheets use the same tags as characters (Concept, Skills, Frailty, Gear), plus the <strong>Cast List</strong> fields from the <em>Character Emulator</em>:</p>
        <ul>
        <li><strong>Agenda</strong>: what they want right now.</li>
        <li><strong>Disposition</strong>: their stance toward the Protagonist and how much they know.</li>
        <li><strong>Voice</strong>: a verbal signature, rolled once and kept.</li>
        <li><strong>Last Seen</strong>: one line on where they were and what changed.</li>
        </ul>
        <p><strong>Quick-Build</strong>: the <strong>Roll</strong> button next to Concept, Agenda, Disposition, or Voice fills that field from the Character Emulator tables. Skip any field you already know.</p>
        <p><strong>Factions</strong>: tick <strong>Faction</strong> to make an organization act like an NPC. Its Concept rolls on the Faction Concept table, and factions with an Agenda can take Faction Beats. NPC cards show a "faction" badge.</p>
        <p><strong>Generate</strong> in the NPCs view rolls a full NPC from a supplement's character tables.</p>
        <h3 id="relationships">Relationships</h3>
        <p>When a relationship is tested, strained, or deepened through play, it earns a tag (<em>Trusted Informant</em>, <em>Sworn Enemy</em>). Click <strong>+</strong> next to an NPC in the Play view's NPCs panel to add one. A relationship tag grants Advantage or Disadvantage like any other tag.</p>
        <h3 id="living-world">The Living World</h3>
        <p>When an adventure ends, click <strong>Living World</strong> on the campaign card to review every NPC, Location, and Thread that played a part:</p>
        <ul>
        <li><strong>NPCs</strong>: add or remove relationship tags. If an NPC is gone or permanently out of reach, click <strong>Mark as gone</strong>: their tags leave active play and are recorded in their notes.</li>
        <li><strong>Locations</strong>: update the description to reflect what happened there.</li>
        <li><strong>Threads</strong>: set each one to Active, Resolved, or Abandoned.</li>
        </ul>
        <h2 id="tools--tables">Tools & Tables</h2>
        <h3 id="adventure-maker">Adventure Maker</h3>
        <p>Located in the <strong>Play</strong> view sidebar (and Tools tab), this helps you generate a premise for your adventure:</p>
        <ul>
        <li>Roll for <strong>Setting</strong>, <strong>Tone</strong>, <strong>Things</strong>, <strong>Opposition</strong>, and <strong>Actions</strong>.</li>
        <li>Click <strong>Roll Complete Adventure</strong> for a full prompt.</li>
        <li><strong>Things</strong> picks Variant A, B, or C automatically, as the 4th Edition rules direct.</li>
        </ul>
        <h3 id="build-the-setup">Build the Setup</h3>
        <p>Click <strong>Roll Build the Setup</strong> to assemble a mission premise from the 5W+H table (Who, What, When, Where, Why, How), as an alternative or complement to the Adventure Maker.</p>
        <h3 id="get-inspired">Get Inspired</h3>
        <p>Need a spark? Click <strong>Random Prompt</strong> in the Get Inspired panel for a three-word prompt (Verb + Adjective + Noun).</p>
        <ul>
        <li><strong>Flavor</strong>: Use the Flavor button to change the "flavor" of the prompts (e.g., Fantasy, Sci-Fi, Horror).</li>
        </ul>
        <h3 id="random-tables">Random Tables</h3>
        <p>The <strong>Table Manager</strong> allows you to roll on any table from loaded supplements.</p>
        <p>1. Select a <strong>Supplement</strong> (e.g., Core Loner) from the dropdown.</p>
        <p>2. The available tables for that supplement will appear.</p>
        <p>3. Click on a <strong>Table</strong> button to roll.</p>
        <p>4. The result is shown and can be pasted into your notes.</p>
        <p>Besides the genre supplements, three Loner supplements add tables here:</p>
        <ul>
        <li><strong>Character Emulator</strong>: NPC Concept, Agenda, Disposition, Voice, Faction Concept, and Cast Twists.</li>
        <li><strong>Character Builder's Guide</strong>: the seven Lifepath tables, What They Want, Relationship Arcs (Reconciliation, Regret, Betrayal), Memory Triggers, False Memory, and Interpersonal Scene Frames (Confessions, Confrontations, Bonds Deepening, Betrayals Unfolding).</li>
        <li><strong>The Path Not Taken</strong>: Time Twist Effects.</li>
        </ul>
        <h3 id="custom-tables">Custom Tables</h3>
        <p>Create your own tables from the <strong>My Tables</strong> panel or the Tools view. When creating one, <strong>Start from a template</strong> offers the two D66 templates from the <em>World Builder's Guide</em> (Random Encounters and Story Twists). Each entry describes what that slot should do: rewrite them for your setting before you play.</p>
        <h2 id="import/export">Import/Export</h2>
        <p>You can export and import your data to back it up or move it between devices.</p>
        <h3 id="note-exporting">Note Exporting</h3>
        <p>You can export just the text content of your current session notes:</p>
        <ul>
        <li><strong>Markdown</strong>: Click <strong>Export > Markdown</strong> in the Session Notes header to download as a <code>.md</code> file.</li>
        <li><strong>HTML</strong>: Click <strong>Export > HTML</strong> in the Session Notes header to download as a <code>.html</code> file.</li>
        </ul>
        <h3 id="exporting-(data-backup)">Exporting (Data Backup)</h3>
        <ul>
        <li><strong>Session</strong>: In the Play view, click <strong>Export</strong> on the Current Session Card to save the current session data as a JSON file.</li>
        <li><strong>Campaign</strong>: In the Tools view, click <strong>Export Campaign</strong> to save the entire current campaign (including all sessions, NPCs, etc.).</li>
        <li><strong>Full Backup</strong>: In the Tools view, click <strong>Export All Data</strong> to save a complete backup of the entire database.</li>
        </ul>
        <h3 id="importing">Importing</h3>
        <ul>
        <li>In the Tools view, click <strong>Import Data</strong>.</li>
        <li>Select the type of import (Session, Campaign, or Full Database).</li>
        <li>Choose the JSON file you previously exported.</li>
        <li><strong>Warning</strong>: Importing a Full Database backup will <strong>replace</strong> all existing data!</li>
        </ul>
        <h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>
        <table border="1" style="border-collapse: collapse; width: 100%;">
        <tr><td>Shortcut</td><td>Action</td><td>Notes</td></tr>
        <tr><td><strong>Alt + O</strong></td><td>Roll Oracle</td><td>Consult the Oracle with current modifier</td></tr>
        <tr><td><strong>Alt + T</strong></td><td>Open Table Manager</td><td>Quick access to tables</td></tr>
        <tr><td><strong>Alt + W</strong></td><td>Trigger Twist</td><td>Force a Twist event</td></tr>
        <tr><td><strong>Alt + N</strong></td><td>Focus Note Editor</td><td>Jump to notes</td></tr>
        <tr><td><strong>Alt + S</strong></td><td>Save Notes</td><td>Manually save notes</td></tr>
        <tr><td><strong>Alt + ?</strong></td><td>Show Shortcuts</td><td>View help</td></tr>
        </table>
        <h2 id="mobile-usage">Mobile Usage</h2>
        <p>Loner Assistant is optimized for mobile devices.</p>
        <ul>
        <li><strong>Navigation</strong>: The menu becomes a hamburger menu on smaller screens.</li>
        <li><strong>Layout</strong>: The 3-column Play view stacks into a single column.</li>
        <li><strong>Touch</strong>: Buttons are sized for touch interaction.</li>
        <li><strong>Add to Home Screen</strong>: You can add the page to your mobile home screen for a full-screen app-like experience.</li>
        </ul>

        <hr style="margin: 2rem 0;">

        <p style="text-align: center; color: var(--text-muted);">
          <strong>Need more help?</strong> Check the
          <a href="https://lonersrd.zotiquestgames.com" target="_blank" rel="noopener">official Loner SRD</a>
          or the
          <a href="https://github.com/zotiquestgames/lonersrd" target="_blank" rel="noopener">GitHub repository</a>.
        </p>
      </div>
    `;
  }
};
