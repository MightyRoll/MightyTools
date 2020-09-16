require('jsdom-global')()
const chatSendInit = require('../../chat/chatSend');
const { mount } = require('@vue/test-utils');
const { expect } = require('chai');

describe('chat', () => {
  describe('chatSend', () => {
    const ChatSend = chatSendInit();

    it('should parse the message before submiting to the event', async () => {
      const wrapper = mount(ChatSend);

      await wrapper.setData({ message: '   Hello, World!  ' });

      wrapper.vm.send();

      expect(wrapper.emitted().send.length).to.equal(1);
      expect(wrapper.emitted().send[0]).to.eql(['Hello, World!']);
    });

    it('should parse the message rolling the dice', async () => {
      const wrapper = mount(ChatSend);

      await wrapper.setData({ message: '   /roll 1d6  ' });

      wrapper.vm.send();

      expect(wrapper.emitted().send.length).to.equal(1);
      expect(wrapper.emitted().send[0][0]).to.be.within(1, 6);
    });
  });
});
