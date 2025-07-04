const login = require('facebook-chat-api');
const fs = require('fs');

login({ email: 'your-email', password: 'your-password' }, (err, api) => {
  if (err) return console.error('Login failed:', err);

  fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
  console.log('✅ Logged in and appstate.json saved!');
});
