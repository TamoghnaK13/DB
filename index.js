const Discord = require('discord.js');
const client = new Discord.Client();

client.login("secrets.CODE");
client.on('ready', () => {
    console.log('Bot ready');
});
