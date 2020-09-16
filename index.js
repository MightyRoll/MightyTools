const state = require('./state');
const events = require('./events');
const chatItem = require('./chat-item');
const chatSend = require('./chat-send');

exports.state = state;
exports.events = events;
exports.initComponents = () => {
  chatItem();
  chatSend();
}