# Campus Party Hub

Browser-based multiplayer party game platform for 2–10 players.

## MVP included
- Host creates room code
- Players join from phone/laptop/tablet
- Realtime room state with Cloudflare Durable Objects + WebSockets
- React + TypeScript + Tailwind UI
- Game catalog
- Playable starter games:
  - Trivia Clash
  - Never Have I Ever
  - Snake & Ladders board starter
  - Legends of Campus role/round starter

## Run locally
```bash
npm install
npm run dev
```

In a second terminal:
```bash
npm run cf:dev
```

The frontend uses `localhost:8787` for the Worker API during local dev.

## Deploy
1. Create KV namespaces:
```bash
npx wrangler kv namespace create HUB_KV
npx wrangler kv namespace create HUB_KV --preview
```
2. Paste the IDs into `wrangler.toml`.
3. Deploy:
```bash
npm run deploy
```

## Recommended next steps
1. Add host-only checks in Durable Object messages.
2. Add reconnect/resume logic.
3. Add game engine interfaces for each game.
4. Add moderation-safe content decks in KV.
5. Add premium deck unlocks later.
