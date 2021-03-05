const Discord = require('discord.js');
const client = new Discord.Client();
client.login("secrets.SECRET_TOKEN");
client.login("CODE.SECRET_TOKEN");
client.login("secrets.CODE");
client.on('ready', () => {
    console.log('Bot ready');
});
