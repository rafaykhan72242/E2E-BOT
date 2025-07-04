const login = require('facebook-chat-api');
const fs = require('fs');

login({ email: 'thefeezy72242@gmail.com', password: 'farazanees1234' }, (err, api) => {
  if (err) return console.error('Login failed:', err);

  fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
  console.log('✅ Logged in and appstate.json saved!');
});
