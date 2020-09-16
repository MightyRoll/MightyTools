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
      return message;
    }

    switch(this.getCommand(message)) {
      case 'roll': {
        return this.parseRoll(message);
      }
      default: {
        return message;
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
   */
  parseRoll(message) {
    message = message.split(' ').filter(val => val !== '');

    const toRoll = message[1].split('d');

    const numberOfDices = Number(toRoll[0]);
    const diceRange = Number(toRoll[1]);

    let total = 0;
    for (let i=0; i<numberOfDices; i++) {
      total += this.getDiceRandom(diceRange);
    }

    return total;
  }
}

module.exports = { ChatParser };