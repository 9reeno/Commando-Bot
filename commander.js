const Commando = require('discord.js-commando');
const config = require('./config.js');

const bot = new Commando.Client({
  owner: '160927542092627968',
  commandPrefix: '-'
});

bot.registry
  .registerGroups([
    ['fun', 'Fun'],
    ['chattools', 'Chat Tools']
  ])
  .registerDefaults()
  .registerCommandsIn(__dirname+"/commands");

bot
  .on('ready', () => {
    console.log("Locked n' Loaded");
  })

bot.login(config.token);
