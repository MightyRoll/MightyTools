const VueRequire = typeof Vue !== 'undefined' ? Vue : require('Vue');

module.exports = (VueInstance = VueRequire) => {
  return VueInstance.component('chat-item', {
    props: ['nick', 'message'],
    template:
      `
      <div class="chat-item">
        <p>{{ nick }}: {{ message }}</p>
      </div>
    `
  });
}
