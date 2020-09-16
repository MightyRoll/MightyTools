module.exports = () => {
  Vue.component('chat-send', {
    data: () => ({
      message: ''
    }),
    methods: {
      send() {
        this.$emit('send', this.message);
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