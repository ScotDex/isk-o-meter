# 🚀 ISK-O-Meter

Because apparently, opening a browser to check EVE market prices is "too much work" for my corporation members. This bot fetches real-time EVE Online market data and dumps it into Discord so you can get back to losing your ships in low-sec.

## 🛠 The "How it Works" Part
I built this using a "modern" stack, which is mostly just a fancy way of saying I spent three hours fighting with Docker so you don't have to.

## 📉 The "Philosophy" (Or: Why it’s so small)

Most Discord bots are bloated, over-engineered nightmares that try to be a killmail bot, Reddit tracker, and music player at the same time. This is not that. 

ISK-O-Meter is a **dedicated nanoservice** because:
- **I’m cheap:** It runs on a fraction of a CPU core. I’m not subsidizing your market research with a £40/month server.
- **YAGNI (You Ain't Gonna Need It):** It does exactly one thing: gets EVE prices. It doesn't have "levels," it doesn't "rank" your corp members, and it won't play lo-fi beats.
- **Micro-Stack:** It’s a Node.js process in a tiny Linux container. If it breaks, I fix one file. If you want more features, go buy a second monitor and open a spreadsheet.

In short: It’s small because it’s finished. (Mostly).

## 🚧 Status: Still in Development
While the bot is functional, it’s currently a **Work-In-Progress**. I’m refining the logic between sessions of getting gate-camped. Expect occasional updates that you’ll probably ignore.

### 🗺 The "Trust Me, It's Coming" Roadmap
1. **PLEX Price Tracker:** Because checking the value of your wallet's life support shouldn't require logging in.
2. **Margin/Percentage Analysis:** A built-in calculator to show price increase/decrease across hubs so you can see exactly how much profit you're losing to Jita-burners.

## 🛠 Tech Stack
- **Language:** **Node.js v25** (The bleeding edge, because I like living dangerously).
- **Library:** **Discord.js v14** (The industry standard for making bots that people eventually ignore).
- **Data Source:** **ESI (EVE Swagger Interface)**. If the prices are wrong, blame CCP, not me.
- **Deployment:** **Docker + GitHub Actions**. A full CI/CD pipeline for a bot that counts space pixels. Yes, it's overkill.

## ⚖️ License
This project is licensed under the **GNU GENERAL PUBLIC LICENSE**. Basically: do whatever you want with it, but don't moan at me if it blows up your ship or your server. See the [LICENSE](LICENSE) file for the boring legal details.

## 🙄 Disclaimer
I am not responsible for lost ISK, bad trades, or your ship exploding because you were checking prices instead of local. Fly safe. Or don't. I'm a bot, not your mother.