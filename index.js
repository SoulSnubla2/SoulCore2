const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Commando.Client();
const TOKEN = "null";

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('rep', 'Rep')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('ready', function(){
    console.log('Ready');
})

bot.login(process.env.BOT_TOKEN);
