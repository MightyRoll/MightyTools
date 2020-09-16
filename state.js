const { MessageState, Message } = require('./messageState');

class State {
  #port;

  constructor() {
    this.messages = {
      public: new MessageState('public'),
      self: new MessageState('self')
    };
    this.#port = 8080;
  }

  /**
   * Adds a new message state if the channel does not yet exist
   * @param {string} channelName 
   */
  addMessageState(channelName) {
    if (!(channelName in this.messages)) {
      this.messages[channelName] = new MessageState(channelName);
    }
  }

  /**
   * Add message to `destination` channel
   * @param {Message} message 
   * @param {string} destination 
   */
  addMessage(message, destination = 'public') {
    if (destination in this.messages) {
      this.messages[destination].addMessage(message);
    } else {
      // TODO: Throw error: Channel does not exist
    }
  }

  /**
   * Add a list of messages to `destination` channel
   * @param {Message[]} messages
   * @param {string} destination 
   */
  addMessages(messages, destination = 'public') {
    if (destination in this.messages) {
      this.messages[destination].addMessages(messages);
    } else {
      // TODO: Throw error: Channel does not exist
    }
  }

  /**
   * Get all messages from `destination`
   * @param {string} destination
   * @returns {Message[]}
   */
  getMessages(destination) {
    if (destination in this.messages) {
      this.messages[destination].getMessages();
    } else {
      // TODO: Throw error: Channel does not exist
    }
  }

  /**
   * Get last `numberOfMessages` messages from `destination`
   * @param {number} numberOfMessages
   * @param {string} destination
   * @returns {Message[]}
   */
  getLastMessages(numberOfMessages, destination) {
    if (destination in this.messages) {
      this.messages[destination].getLastMessages(numberOfMessages);
    } else {
      // TODO: Throw error: Channel does not exist
    }
  }

  /**
   * Returns the port used by the server
   * @returns {number}
   */
  getPort() {
    return this.#port;
  }
}

module.exports = {
  state: new State()
};