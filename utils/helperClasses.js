class MessagePack {
  /**
   * 
   * @param {string} message 
   */
  constructor(message) {
    this.message = message;
  }
}

class Message {
  /**
   * 
   * @param {string} message 
   * @param {string} name 
   * @param {string} type 
   */
  constructor(message, name, type) {
    this.message = message;
    this.name = name;
    this.type = type;
  }
}

class Player {
  /**
   * @constructor
   * @param {string} name
   * @param {string} logo
   */
  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
  }
}

module.exports = { MessagePack, Message, Player };