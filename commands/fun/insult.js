const Commando = require('discord.js-commando');

class InsultCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'insult',
      aliases: ['joan','roast'],
      group: 'fun',
      memberName: 'insult',
      description: 'Lay a friend to rest.',
      details: 'Specify user to insult, or leave blank to select a victim at random.',
      format: 'user-name',
    });
  }

  async run(message, args) {
    var recipients = message.channel.members;
    var recipient;
    // Find passed in user, if any
    if(args) {
      recipient = recipients.find(val => val.user.username === args);
    // If there's no passed user, select an online one at random
    }else {
      recipient = recipients.random();
      let i = 0;
      while(recipient.presence.status === 'offline' && i < recipients.array().length) {
        recipient = recipients.random();
        i++;
      }
    }

    // If recipient was not found, notify user
    if(recipient === null) {
      message.reply("unknown user- \""+args+".\"");
    }else {
    // Else insult recipient
      message.say("This "+recipient+" has a funny face!");
    }
  }
}

module.exports = InsultCommand;
