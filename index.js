const login = require('facebook-chat-api');
const fs = require('fs');

const appStateFile = 'appstate.json';
if (!fs.existsSync(appStateFile)) {
  console.error('❌ Missing appstate.json file. Please log in once using credentials to generate it.');
  process.exit(1);
}

login({ appState: JSON.parse(fs.readFileSync(appStateFile, 'utf8')) }, (err, api) => {
  if (err) return console.error('❌ Login failed:', err);

  console.log('✅ Logged in successfully');

  const uid = '9410555209045909'; // Replace with a valid UID
  const message = {
    body: '👋 Hello from my Termux bot!'
  };

  console.log(`🤖 Bot started. Sending message to UID: ${uid}`);

  api.sendMessage(message, uid, (err) => {
    if (err) {
      console.error('❌ Error sending message:', err);
    } else {
      console.log('✅ Message sent successfully!');
    }
  });
});
