const { Message } = require("../utils/helperClasses");

class MessageState {
  #messages;
  /**
   * @constructor
   * @param {string} eventName 
  */
  constructor(eventName) {
    this.eventName = eventName;
    this.#messages = [];
  }

  /**
   * Add a message and launch the event
   * @param {Message} message 
  */
  addMessage(message) {
    this.#messages.push(message);
    events.launch(`${this.eventName}MessageAdded`, this.#messages);
  }

  /**
   * Add a list of messages and launch the event
   * @param {Message[]} messages 
  */
  addMessages(messages) {
    this.#messages = this.#messages.concat(messages);
    events.launch(`${this.eventName}MessageAdded`, this.#messages);
  }

  /**
   * Returns a list with all the messages
   * @returns {Message[]}
  */
  getMessages() {
    return this.#messages;
  }

  /**
   * Returns the last `numberOfMessages` messages
   * @param {number} numberOfMessages
   * @returns {Message[]}
  */
  getLastMessages(numberOfMessages) {
    return this.#messages.slice(numberOfMessages);
  }
}

module.exports = {
  MessageState
};
