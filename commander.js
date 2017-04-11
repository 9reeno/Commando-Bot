const Commando = require('discord.js-commando');
const config = require('./config.js');

const bot = new Commando.Client({
  owner: '160927542092627968', // <- Discord account ID
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
  // Freeze bot  operation until fully initialized
  .on('ready', () => {
    console.log("Locked n' Loaded");
  })

bot.login(config.token);
