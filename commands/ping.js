const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  const loadEmbed = new Discord.RichEmbed()
  .addField("Loading", "Loading, please wait.")
  .setColor("BLACK")
  
  const m = await message.channel.send({loadEmbed});
  
  const pingEmbed = new Discord.RichEmbed()
  .setTitle("Pong!")
  .addField("Message Latency", `${message.createdTimestamp - m.createdTimestamp}ms`)
  .addField("Bot Latency", `${Math.round(client.ping)}ms`)
  .setColor("BLACK")
  m.edit({pingEmbed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
