exports.run = async (client, message, args, level) => {
  message.user.send("Sorry, I am not a public bot. Therefore, there is **no** invite libk for me.");
  return message.reply("Please check your Direct Messages");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
