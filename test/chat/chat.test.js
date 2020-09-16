require('jsdom-global')()
const chatInit = require('../../chat/chat');
const chatSendInit = require('../../chat/chatSend');
const { mount } = require('@vue/test-utils');
const { expect } = require('chai');

describe('chat', () => {
  describe('chat', () => {
    const Chat = chatInit();
    const ChatSend = chatSendInit();
    
    it('should call send method when the chatSend button is clicked', async () => {
      const wrapper = mount(Chat);

      const sendWrapper = wrapper.findComponent(ChatSend);
      await sendWrapper.setData({ message: 'Hello, World!' });
      
      sendWrapper.vm.send();

      expect(wrapper.emitted().send.length).to.equal(1);
      expect(wrapper.emitted().send[0]).to.eql(['Hello, World!']);
    });
  });
});
