const { ChatParser } = require('./chatParser');
const VueRequire = typeof Vue !== 'undefined' ? Vue : require('Vue');


module.exports = (VueInstance = VueRequire) => {
  const chatParser = new ChatParser();
  return VueInstance.component('chat-send', {
    data: () => ({
      message: ''
    }),
    methods: {
      send() {
        this.$emit('send', chatParser.parseMessage(this.message));
      }
    },
    template:
      `
      <div class="chat-send">
        <b-field>
          <b-input v-model="message"></b-input>
          <b-button @click="send">Send</b-button>
        </b-field>
      </div>
    `
  });
}
