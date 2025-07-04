const login = require("facebook-chat-api");
const config = require("./config.json");

const email = config.email;
const password = config.password;
const targetUID = config.targetUID;
const message = config.message;
const delay = config.delay;

login({ email, password }, (err, api) => {
  if (err) return console.error("❌ Login error:", err);

  console.log("✅ Logged in as:", email);
  console.log("🤖 Bot started. Sending messages to UID:", targetUID);

  setInterval(() => {
    api.sendMessage(message, targetUID, (err) => {
      if (err) {
        console.error("❌ Error sending message:", err);
      } else {
        console.log("✅ Message sent successfully.");
      }
    });
  }, delay);
});
