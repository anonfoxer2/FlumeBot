const commando = require('discord.js-commando');

class suggestIo extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'suggest',
            group: 'useful',
            memberName: 'suggest',
            description: 'Send suggestions to the owner of Flume!'
        })
    }

    async run(message, args) {
        message.channel.send(":notebook: Please send your suggestions to: https://forms.gle/Sn4xKfrM7PrSqPpQ6");
        }

}

module.exports = suggestIo