require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'hello') {
        message.reply('Hi there!');
    }
});

client.on('guildMemberAdd', member => {
    const channelId = '1079052086060273706';
    const channel = member.guild.channels.cache.get(channelId);
    if (!channel) return;

    const embed = new MessageEmbed()
        .setTitle(`Welcome to the server, ${member.user.tag}!`)
        .setDescription('We hope you have a great time here!')
        .setColor('GREEN')
        .setTimestamp();
    channel.send({ content: `<@${member.user.id}>`, embeds: [embed] });
});

client.login(process.env.TOKEN);
