const mineflayer = require('mineflayer');

function startBot() {
    const bot = mineflayer.createBot({
        host: 'dynamic-8.magmanode.com',
        port: 25892,
        username: 'AFK_24/7_bot',
        version: '1.20.1',
        auth: 'offline'
    });

    bot.on('spawn', () => {
        console.log('Bot server mein dakhil ho gaya!');
        
        setTimeout(() => {
            bot.chat('/register Haseeb123');
            setTimeout(() => {
                bot.chat('/login Haseeb123');
                console.log('Register/Login command bhej di!');
            }, 3000);
        }, 10000);
    });

    // AFK Jump Logic
    setInterval(() => {
        if (bot.entity) {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }
    }, 20000);

    // --- RECONNECT LOGIC ---
    bot.on('error', (err) => {
        console.log('Error: ' + err.message);
        setTimeout(startBot, 5000); // 5 second baad wapis start
    });

    bot.on('kicked', (reason) => {
        console.log('Kicked: ' + reason);
        setTimeout(startBot, 5000); // 5 second baad wapis start
    });

    bot.on('end', () => {
        console.log('Bot disconnected! Reconnecting...');
        setTimeout(startBot, 5000); // 5 second baad wapis start
    });
}

// Pehli dafa bot start karein
startBot();
