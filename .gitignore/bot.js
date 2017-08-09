const Discord = require('discord.js');
const settings = require('./settings.json');
const prefix = 'B!'
const bot = new Discord.Client();

bot.on('ready', function() {
    console.log('I am ready BOSS');
});

bot.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + 'AbCdsetgame')) {
		if (!result) {
			result = null;
		}
		bot.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'AbCdsetstatus')) {
		if (!result) {
			result = 'online';
		}
		bot.user.setStatus(result);
	}

});

bot.login(settings.token);
