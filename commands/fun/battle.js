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
    // Randomly choose rock paper or scissors
    let choices = ["rock", "paper", "scissors"];
    var cpuChoice = choices[Math.floor(Math.random()*choices.length)];

    var outcome;
    // Prevent user from not passing in rps
    if(!choices.includes(args)) {
      outcome = "invalid opponent- \""+args+".\"";
    // Outcome calculation
    }else if(cpuChoice === args) {
      outcome = cpuChoice+". Tie!";
    }else if(cpuChoice === "rock" && args === "scissors" || cpuChoice === "paper" && args == "rock" || cpuChoice == "scissors" && args == "paper") {
      outcome = cpuChoice+". I win!"
    }else {
      outcome = cpuChoice+". You win!"
    }
    // Inform user of loss or success
    message.reply(outcome);
  }
}

module.exports = BattleCommand;
