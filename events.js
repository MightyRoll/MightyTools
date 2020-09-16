class Events {
  #event;

  constructor() {
    this.#event = {};
  }

  register(eventName, callback) {
    if (!this.#event[eventName]) {
      this.#event[eventName] = [];
    }

    this.#event[eventName].push(callback);
    const eventIndex = this.#event[eventName].length - 1;

    return () => {
      this.#event[eventName].splice(eventName, 1);
    }
  }

  launch(eventName, value) {
    (this.#event[eventName] || []).forEach(callback => callback(value));
  }
}

module.exports = new Events();