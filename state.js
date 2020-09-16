const events = require('./events');

class State {
  #messages;
  #port;

  constructor() {
    this.#messages = [];
    this.#port = 8080;
  }

  addMessage(message) {
    this.#messages.push(message);
    events.launch('messageUpdate', this.#messages);
  }

  getMessages() {
    return this.#messages;
  }

  getLastMessages(numberOfMessages) {
    return this.#messages.slice(numberOfMessages);
  }

  getPort() {
    return this.#port;
  }
}

module.exports = new State();