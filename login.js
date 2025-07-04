const login = require("facebook-chat-api");

const credentials = {
  email: "thefeezy72242@gmail.com",
  password: "farazanees1234"
};

module.exports = function(callback) {
  login(credentials, (err, api) => {
    if (err) {
      console.error("❌ Login failed:", err);
      return;
    }

    console.log("✅ Logged in successfully");
    callback(api);
  });
};
