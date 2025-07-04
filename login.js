const login = require("facebook-chat-api");

const credentials = {
  email: "thefeezy72242@gmail.com",
  password: "farazanees1234"
};

login(credentials, (err, api) => {
  if (err) {
    console.error("❌ Login failed:", err);
    return;
  }

  console.log("✅ Logged in successfully");

  // Export the logged-in API so other files can use it
  module.exports = api;
});
