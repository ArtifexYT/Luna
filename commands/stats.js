const Discord = require("discord.js");
const { version } = require("discord.js");

const moment = require("moment");
require("moment-duration-format");

const os = require("os");

exports.run = async (client, message, args, level) => {
  const duration = moment.duration(client.uptime).format(' D [Days], H [Hours], m [Minutes], s [Seconds]');
  
  const embed = new Discord.RichEmbed()
  .setTitle("System Statistics")
  .addField("Statistics", `**Channels -** ${client.channels.size}\n**Commands -** ${client.commands.size}\n**Guilds -** ${client.guilds.size}\n**Users -** ${client.users.size}`, true)
  .addField("Versions", `**Node -** ${client.instance.engines.node}\n**Bot Library -** ${version}\n**Luna -** ${client.instance.version}`, true)
  .addField("Host", `**Memory Usage -** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n**CPU Cores -** ${os.cpus().length}\n**OS -** Linux`, true)
  .addField("Uptime", `${duration}`)
  .addField("Links", "`[Website](https://lunabot.tk)` | `[Documentation](https://docs.lunabot.tk)`")
  .setColor("BLACK")
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
