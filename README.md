# Loner Assistant v2.5

**Loner Assistant** is a comprehensive, offline-first web companion for the [Loner](https://loner.zotiquestgames.com) solo RPG system. It allows you to manage campaigns, characters, and stories entirely in your browser, with no installation required.

## ✨ Features

- **Campaign Management**: Organize your adventures into campaigns and sessions.
- **Character Sheets**: Track protagonists with flexible, tag-based character sheets.
- **Character Generator**: Roll a full character (name, concept, skills, frailty, gear) from a supplement's tables, and save it as a PC or NPC.
- **Oracle & Dice**: Built-in 3D-style dice rolling and Loner Oracle interpretation (Chance vs. Risk).
- **Twist Counter**: Automatic tracking of doubles and twist events, tracked per campaign across sessions.
- **Content Management**: Track NPCs, Locations, Narrative Threads, and Events.
- **Rich Text Editor**: Integrated session notes with auto-insertion of roll results.
- **Adventure Tools**: Adventure Maker, Get Inspired prompts, and random tables.
- **Optional Modules**: Loner 4e's Leverage, Challenge Tracks, and Status Track; Action Points, chases, and scene intensity from *Cinematic Action*; time loops, timeline leaps, and the Time-Web from *The Path Not Taken*.
- **Offline First**: All data is stored locally in your browser (IndexedDB). No server, no login.
- **Responsive Design**: Works on desktop, tablet, and mobile.

## 🚀 Quick Start

1. **Download** the repository or unzip the release.
2. **Open** `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
3. **Start Playing!** Create a campaign and your first character.

> **Note**: Since this app runs entirely in the browser, clearing your browser cache/data for the site will delete your campaigns. Use the **Export** feature (coming soon/if available) to back up your data.

## 📚 Documentation

- **[Changelog](CHANGELOG.md)**: What's new in each release.
- **[User Manual](docs/USER_MANUAL.md)**: Detailed guide on how to use the application features.
- **[Developer Manual](docs/DEVELOPER_MANUAL.md)**: Architecture, code structure, and contribution guide.
- **[Loner Rules](loner-4e.md)**: The core rules of the Loner RPG system.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt + O` | Roll Oracle |
| `Alt + T` | Open Table Manager |
| `Alt + W` | Trigger Twist |
| `Alt + N` | Focus Note Editor |
| `Alt + S` | Save Notes |
| `Alt + ?` | Show Help |

## 🛠️ Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript**
- **[Dexie.js](https://dexie.org/)**: IndexedDB wrapper for storage.
- **[Quill.js](https://quilljs.com/)**: Rich text editor.
- No build step: the browser loads the ES modules as they are.

## 🧪 Development

Node.js (18 or later) is used only for tests and maintenance, never at runtime. There are no dependencies to install.

- `npm test`: runs the test suite (`node --test`). It covers the game rules in `js/rules/`, the structure of every roll table, and the service worker precache.
- `npm run cache-version`: updates `CACHE_VERSION` in `sw.js` after changing any precached file. The tests fail while it is out of date, or when a module under `js/` or `data/` is missing from the precache list.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👥 Credits

- **Loner: Another Solo RPG** CC BY-SA 4.0 by Roberto Bisceglie
- **Loner Assistant** developed by Roberto Bisceglie.
