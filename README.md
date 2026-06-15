# Campus Party Hub

A browser-based multiplayer party-game platform for 2–10 players. Host creates a room, shares a room code, players join from phones/laptops/tablets/TVs, and the host selects a game.

## Included game modes

### Casual
- Trivia Clash
- Snake & Ladders Rush
- Pictionary
- Charades
- Campus Bingo

### Strategy
- Mafia
- Werewolf
- Secret Chancellor — original safe Secret-Hitler-style policy/social deduction game
- Resistance Missions

### RPG Lite
- D&D Lite
- Dungeon Crawl
- Fantasy Quest
- Zombie Survival

### College Party
- Never Have I Ever
- Most Likely To
- Vote Game
- Hot Seat
- Truth or Dare

### Flagship
- Legends of Campus: hidden campus roles + quests + voting + items + traitor-style tension

## Run locally

Terminal 1:
```bash
npm install
npm run dev
```

Terminal 2:
```bash
npm run cf:dev
```

Open the Vite URL, create a room, then open another browser/device and join with the code.

## Deploy to Cloudflare

Create KV namespaces and paste the IDs into `wrangler.toml`:

```bash
npx wrangler kv namespace create HUB_KV
npx wrangler kv namespace create HUB_KV --preview
```

Then:

```bash
npm run deploy
```

## Notes

This package contains complete playable MVP flows for every listed game. Some games intentionally use host-led moderation because party games like Mafia, Charades, Pictionary, and D&D Lite work best when players talk in-person while the web app tracks prompts, turns, phases, roles, score, and room state.
