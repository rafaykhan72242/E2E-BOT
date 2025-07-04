# Facebook Messenger Bot (Unofficial API)

## ✅ Features
- Uses `appstate.json` for secure login
- Sends message to a specific UID
- Simple to run in Termux or Node.js

## 🚀 Setup Instructions

1. **Install dependencies:**
```bash
npm install
```

2. **Login once with email/password to create `appstate.json`:**
```bash
node login.js
```

3. **Run the bot:**
```bash
node index.js
```

⚠️ Keep `appstate.json` safe — it contains your Facebook session. You must have chatted with the UID before sending messages.
