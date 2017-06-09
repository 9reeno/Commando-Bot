const Commando = require('discord.js-commando');

class DeleteMessagesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'delmsgs',
            group: 'chattools',
            memberName: 'delmsgs',
            description: 'Delete n messages for a user. (From 100 most recent logs).',
            format: '\'username\' total',
            examples: ['delmsgs \'username\' 10'],
            args: [{
                key: 'username',
                prompt: 'Who is the target user?',
                type: 'string',  
                validate: (value, msg, arg)  => {
                    return msg.channel.members.find(member => member.user.username === value);
                },
            }, {
                key: 'total',
                prompt: 'Number of messages to be deleted?',
                type: 'integer',
                max: 100,
                min: 1,

            }],
            argsCount: 2,
            argsSingleQuotes: true,
            argsType: 'multiple',
        });
    }

    async run(message, args) {
        // Collect 100 most recent messages, weed out the ones not by the target user
        const messages = await message.channel.fetchMessages({limit: 100}).then((msgs) => {
            return msgs.filterArray(msg => msg.author.username === args.username);
        }).catch(reason => console.error(reason));

        // If the target user has not made any recent submissions, notify 
        if(messages.length === 0) {
            message.reply(`No recent messages from ${args.username} to delete.`);
        }else {
            for(let i = 0; i < args.total && i < messages.length; i++) {
                messages[i].delete;
            }
            message.reply(`Deleted ${args.total} messages from ${args.username}.`);
        }
    }
}

module.exports = DeleteMessagesCommand;