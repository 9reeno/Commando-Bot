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
    if(args) {
      recipient = recipients.find(val => val.user.username === args);
    }else {
      recipient = recipients.random();
      let i = 0;
      while(recipient.presence.status === 'offline' && i < recipients.array().length) {
        recipient = recipients.random();
        i++;
      }
    }

    if(recipient === null) {
      message.reply("unknown user- \""+args+".\"");
    }else {
      message.say("This "+recipient+" has a funny face!");
    }
  }
}

module.exports = InsultCommand;
