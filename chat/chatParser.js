const { playerState } = require("../state/playerState");
const { MessagePack } = require("../utils/helperClasses");

/**
 * ChatParser
 */
class ChatParser {
  /**
   * 
   * @param {string} message 
   */
  parseMessage(message) {
    message = message.trim();
    if (!this.isCommand(message)) {
      return new MessagePack(message);
    }

    switch (this.getCommand(message)) {
      case 'roll': {
        return this.parseRoll(message);
      }
      case 'whisper': {
        return this.parseWhisper(message);
      }
      default: {
        return new MessagePack(message);
      }
    }
  }

  /**
   * Get a random value between 1 and the dice range
   * @param {number} max 
   */
  getDiceRandom(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

  /**
   * Returns if the message is a command
   * @param {string} message 
   */
  isCommand(message) {
    return message.startsWith('/')
  }

  /**
   * Identifies the command of the message
   * @param {string} message 
   */
  getCommand(message) {
    return message.split(' ')[0].substr(1);
  }

  /**
   * Parse the roll command, returning the value of the dice rolled 
   * @param {string} message
   * @returns {MessagePack}
   */
  parseRoll(message) {
    message = message.split(' ').filter(val => val !== '');

    const toRoll = message[1].split('d');

    const numberOfDices = Number(toRoll[0]);
    const diceRange = Number(toRoll[1]);

    let total = 0;
    for (let i = 0; i < numberOfDices; i++) {
      total += this.getDiceRandom(diceRange);
    }

    const messagePack = new MessagePack(total.toString());
    messagePack.type = 'roll';

    return messagePack;
  }

  /**
   * 
   * @param {string} message 
   * @returns {MessagePack}
   */
  parseWhisper(message) {
    message = message.split(' ').filter(val => val !== '');

    const destination = message[1];

    if (!playerState.isPlayer(destination)) {
      const messagePack = this.parseMessage(message.slice(1).join(' '));
      messagePack.destination = playerState.getUserPlayerName();
      return messagePack;
    } else {
      const messagePack = this.parseMessage(message.slice(2).join(' '));
      messagePack.destination = destination;
      return messagePack;
    }
  }
}

module.exports = { ChatParser };
