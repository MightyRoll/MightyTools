const { ChatParser } = require('../../chat/chatParser');
const { playerState } = require('../../state/playerState');
const { MessagePack } = require('../../utils/helperClasses');
const expect = require('chai').expect;

describe('chat', () => {
  describe('ChatParser', () => {
    const chatParser = new ChatParser();
    playerState.addPlayer('Akash');
    playerState.addPlayer('Giovanni');
    playerState.setUserPlayer('Akash');

    describe('parseMessage', () => {
      it('should return a roll if the message is a roll command', () => {
        const message = '/roll 1d6';

        const result = chatParser.parseMessage(message);

        expect(Number(result.message)).to.be.within(1, 6);
      });

      it('should parse as a whisper if the message is a whisper command', () => {
        const message = '/whisper Giovanni Ola!';

        const result = chatParser.parseMessage(message);

        expect(result.destination).to.equal('Giovanni');
        expect(result.message).to.equal('Ola!');
      });

      it('should return the message if the message is not a command', () => {
        const message = 'Hello, world';

        expect(chatParser.parseMessage(message).message).to.equal('Hello, world');
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
          const result = chatParser.parseRoll(message);
          expect(Number(result.message)).to.be.within(1, 6);
          expect(result.type).to.equal('roll');
        }

        message = '/roll 5d20';

        for (i = 0; i < 100; i++) {
          const result = chatParser.parseRoll(message);
          expect(Number(result.message)).to.be.within(5, 100);
          expect(result.type).to.equal('roll');
        }
      });
    });

    describe('parseWhisper', () => {
      it('should parse the message to a player if player is registered', () => {
        const message = '/whisper Giovanni Dai, vei';

        const result = chatParser.parseWhisper(message);

        expect(result.destination).to.equal('Giovanni');
        expect(result.message).to.equal('Dai, vei');
      });

      it('should whisper to user if message is for no registered player', () => {
        const message = '/whisper Dai, vei';

        const result = chatParser.parseWhisper(message);

        expect(result.destination).to.equal('Akash');
        expect(result.message).to.equal('Dai, vei');
      });

      it('should whisper a dice roll to a player if player is registered', () => {
        const message = '/whisper Giovanni /roll 1d6';

        const result = chatParser.parseWhisper(message);


        expect(result.destination).to.equal('Giovanni');
        expect(Number(result.message)).to.be.within(1, 6);
        expect(result.type).to.equal('roll');
      });

      it('should whisper a dice roll to the user if player is not registered', () => {
        const message = '/whisper /roll 1d6';

        const result = chatParser.parseWhisper(message);


        expect(result.destination).to.equal('Akash');
        expect(Number(result.message)).to.be.within(1, 6);
        expect(result.type).to.equal('roll');
      });
    });
  });
});
