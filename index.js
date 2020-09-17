const { state } = require('./state/state');
const { playerState } = require('./state/playerState');
const events = require('./utils/events');
const chat = require('./chat/chat');
const chatItem = require('./chat/chatItem');
const chatSend = require('./chat/chatSend');

exports.helperClasses = require('./utils/helperClasses');
exports.playerState = playerState;
exports.state = state;
exports.events = events;
exports.initComponents = () => {
  chat();
  chatItem();
  chatSend();
}
