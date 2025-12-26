# 🚀 ISK-O-Meter

Because apparently, opening a browser to check EVE market prices is "too much work" for my corporation members. This bot fetches real-time EVE Online market data and dumps it into Discord so you can get back to losing your ships in low-sec.

[Invite ISK-O-Meter to your server!](https://discord.com/oauth2/authorize?client_id=1452684394740580362&permissions=346112&scope=bot%20applications.commands)

## 🛠 The "How it Works" Part
I built this using a "modern" stack, which is mostly just a fancy way of saying I spent three hours fighting with Docker so you don't have to.

## 📉 The "Philosophy" (Or: Why it’s so small)

Most Discord bots are bloated, over-engineered nightmares that try to be a zkill bot, music player, and a redit RSS at the same time. This is not that. 

ISK-O-Meter is a **dedicated microservice** because:
- **I’m cheap:** It runs on a fraction of a CPU core. I’m not subsidizing your market research with a $40/month server.
- **YAGNI (You Ain't Gonna Need It):** It does exactly one thing: gets EVE prices. It doesn't have "levels," it doesn't "rank" your corp members, and it won't play lo-fi beats.
- **Micro-Stack:** It’s a Node.js process in a tiny Linux container. If it breaks, I fix one file. If you want more features, go buy a second monitor and open a spreadsheet.

In short: It’s small because it’s finished.

[Visual Representation](https://github.com/ScotDex/isk-o-meter/wiki))

* **Language:** **Node.js v25** (The bleeding edge, because I like living dangerously).
* **Library:** **Discord.js v14** (The industry standard for making bots that people eventually ignore).
* **Data Source:** **ESI (EVE Swagger Interface)**. If the prices are wrong, blame CCP, not me.
* **Deployment:** **Docker + GitHub Actions**. A full CI/CD pipeline for a bot that counts space pixels. Yes, it's overkill.

## 🔒 Permissions (The "Trust Me" Section)
I've stripped this down to the bare minimum because I don't want your server's admin rights, and you shouldn't give them to me anyway.

| Permission | Why? |
| :--- | :--- |
| `Send Messages` | Otherwise, it’s just a very quiet bot staring at you. |
| `Embed Links` | The market data looks like a steaming pile of shite in plain text. This makes it pretty. |
| `Use Slash Commands` | Because prefix commands (like `!price`) are officially dead. |

## ⚖️ License
This project is licensed under the **GNU GENERAL PUBLIC LICENSE**. Basically: do whatever you want with it, but don't moan at me if it blows up your ship or your server. See the [LICENSE](LICENSE) file for the boring legal details.

## 🙄 Disclaimer
I am not responsible for lost ISK, bad trades, or your ship exploding because you were checking prices instead of local. Fly safe. Or don't. I'm a bot, not your mother.
