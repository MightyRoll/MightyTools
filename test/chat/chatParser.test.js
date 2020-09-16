const { ChatParser } = require('../../chat/chatParser');
const expect = require('chai').expect;

describe('chat', () => {
  describe('ChatParser', () => {
    const chatParser = new ChatParser();

    describe('parseMessage', () => {
      it('should return a roll if the message is a roll command', () => {
        const message = '/roll 1d6';

        expect(chatParser.parseMessage(message)).to.be.within(1, 6);
      });

      it('should return the message if the message is not a command', () => {
        const message = 'Hello, world';

        expect(chatParser.parseMessage(message)).to.equal('Hello, world');
      });
    });

    describe('isCommand', () => {
      it('should return true if the message starts with /', () => {
        const message = '/roll 1d6';

        expect(chatParser.isCommand(message)).to.be.true;
      });

      it('should return false if the message does not start with /', () => {
        const message = 'Hello, world';

        expect(chatParser.isCommand(message)).to.be.false;
      });
    });

    describe('getCommand', () => {
      it('should return the name of the command', () => {
        let message = '/roll 1d6';

        expect(chatParser.getCommand(message)).to.equal('roll');

        message = '/whisper dani Hi, dani';

        expect(chatParser.getCommand(message)).to.equal('whisper');
      });
    });

    describe('parseRoll', () => {
      it('should return a value compatible with the dice rolled', () => {
        let message = '/roll 1d6';
        let i;

        for (i = 0; i < 100; i++) {
          expect(chatParser.parseRoll(message)).to.be.within(1, 6);
        }

        message = '/roll 5d20';

        for (i = 0; i < 100; i++) {
          expect(chatParser.parseRoll(message)).to.be.within(5, 100);
        }
      });
    });
  });
});
