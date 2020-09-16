const VueRequire = typeof Vue !== 'undefined' ? Vue : require('Vue');

module.exports = (VueInstance = VueRequire) => {
  return VueInstance.component('chat', {
    props: ['tabs'],
    data: () => ({
      activeTab: 0
    }),
    methods: {
      send(message) {
        this.$emit('send', message);
      }
    },
    template: 
    `
      <div class="chat">
        <div class="chat-msgs">
          <b-tabs v-model="activeTab">
            <b-tab-item v-for="tab in tabs" v-bind:key="label" v-bind:label="tab.label">
              <chat-item v-for="msg in tab.messages" v-bind:nick="msg.nick" v-bind:message="msg.message"></chat-item>
            </b-tab-item>
          </b-tabs>
        </div>
        <chat-send @send="send"></chat-send>
      </div>
    `
  });
} 