const login = require("./login");

const targetUid = "9410555209045909";
const message = "💬 Hello from the bot!";
const delaySeconds = 10;

login(function(api) {
  console.log("🤖 Bot started. Sending messages...");

  function sendLoop() {
    api.sendMessage(message, targetUid, (err) => {
      if (err) {
        console.error("❌ Error sending message:", err);
      } else {
        console.log("✅ Message sent to UID:", targetUid);
      }

      setTimeout(sendLoop, delaySeconds * 1000);
    });
  }

  sendLoop();
});
