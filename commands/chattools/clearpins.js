const Commando = require('discord.js-commando');

class ClearAllPinsCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'clearpins',
      group: 'chattools',
      memberName: 'clearpins',
      description: 'Clear all pinned messages.',
      details: 'Specify channel to clear pins from, or leave it blank to clear current channel.',
      format: 'channel-name',
      examples: ['clearpins general', 'clearpins'],
    });
  }

  async run(message, args) {
    var targetChannel;
    if(!args) {targetChannel = message.channel;}
    else {targetChannel = message.guild.channels.find('name', args);}

    if(!targetChannel) {
      message.reply("unknown channel- \""+args+".\"");
    }else {
      let pinned = targetChannel.fetchPinnedMessages()
      pinned.then(data => {
        data = data.array();
        for(message in data) {
          data[message].unpin();
        }
      }).catch(console.error);
      message.say("Pins cleared in #"+targetChannel.name+".");
    }
  }
}

module.exports = ClearAllPinsCommand;
