const state = require('./state');
const events = require('./events');
const chat = require('./chat/chat');
const chatItem = require('./chat/chatItem');
const chatSend = require('./chat/chatSend');

exports.state = state;
exports.events = events;
exports.initComponents = () => {
  chat();
  chatItem();
  chatSend();
}