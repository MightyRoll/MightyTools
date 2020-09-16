module.exports = () => {
  Vue.component('chat-item', {
    props: ['nick', 'message'],
    template: 
    `
      <div class="chat-item">
        <p>{{ nick }}: {{ message }}</p>
      </div>
    `
  });
} 