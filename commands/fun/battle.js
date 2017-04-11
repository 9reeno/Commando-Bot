const Commando = require('discord.js-commando');

class BattleCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'battle',
      aliases: ['rps'],
      group: 'fun',
      memberName: 'battle',
      description: 'Play rock-paper-scissors.',
      format: 'rock-paper-scissors',
      examples: ['battle rock', 'battle paper', 'battle scissors'],
    });
  }

  async run(message, args) {
    let choices = ["rock", "paper", "scissors"];
    var cpuChoice = choices[Math.floor(Math.random()*choices.length)];

    var outcome;
    if(!choices.includes(args)) {
      outcome = "invalid opponent- \""+args+".\"";
    }else if(cpuChoice === args) {
      outcome = cpuChoice+". Tie!";
    }else if(cpuChoice === "rock" && args === "scissors" || cpuChoice === "paper" && args == "rock" || cpuChoice == "scissors" && args == "paper") {
      outcome = cpuChoice+". I win!"
    }else {
      outcome = cpuChoice+". You win!"
    }
    message.reply(outcome);
  }
}

module.exports = BattleCommand;
