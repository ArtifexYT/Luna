const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  const embed = new Discord.RichEmbed()
  .setDescription("The command documentation has been moved over [here](https://docs.lunabot.tk).")
  .setColor("BLACK")
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
