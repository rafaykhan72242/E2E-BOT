const login = require('facebook-chat-api');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

login({ email: config.email, password: config.password }, (err, api) => {
    if (err) {
        switch (err.error) {
            case 'login-approval':
                console.log('Enter 2FA code sent to your device:');
                process.stdin.resume();
                process.stdin.on('data', (code) => {
                    err.continue(code.toString().trim());
                    process.stdin.pause();
                });
                return;
            default:
                console.error(err);
                return;
        }
    }

    console.log('🤖 Bot started. Sending messages to UID:', config.targetUID);

    let messageIndex = 0;

    const sendLoop = () => {
        const msg = `${config.haterName}: ${config.messages[messageIndex]}`;
        api.sendMessage(msg, config.targetUID, (err) => {
            if (err) {
                console.error('❌ Error sending message:', err);
                return;
            }
            console.log(`💬 Sent to ${config.targetUID}: ${msg}`);
        });

        messageIndex = (messageIndex + 1) % config.messages.length;

        setTimeout(sendLoop, config.delay);
    };

    sendLoop(); // Start the loop
});
