const { Player } = require("../utils/helperClasses");

class PlayerState {
  constructor() {
    this.players = {}
  }

  /**
   * Set a player as the user player
   * @param {string} name 
   */
  setUserPlayer(name) {
    if (this.players[name]) {
      this.userPlayer = this.players[name];
    }
  }

  /**
   * Add a new player to the state
   * @param {string} name 
   * @param {string} logo 
   */
  addPlayer(name, logo) {
    if (!this.players[name]) {
      this.players[name] = new Player(name, logo);
    }
  }

  /**
   * Returns if `name` is a registered player
   * @param {string} name 
   */
  isPlayer(name) {
    return !!this.players[name];
  }

  /**
   * Get name of the user player
   */
  getUserPlayerName() {
    return this.userPlayer && this.userPlayer.name;
  }
}

module.exports = { playerState: new PlayerState() };