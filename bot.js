const tmi = require('tmi.js');
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'kefelid',
		password: 'oauth:XXXXXXXXX'
	},
	channels: [ 'dogukanburda' ]
});

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === 'selamlar') {
		client.say(channel, `Selamlar @${tags.username} !`);
	}
});
client.on('message', (channel, tags, message, self) => {
	if(self || !message.startsWith('!')) return;

	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();

	if(command === 'echo') {
		client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
	}
});

client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!insta') {
		client.say(channel,'instagram: instagram.com/dogukanburda');
	}
});