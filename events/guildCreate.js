module.exports = async (client, guild) => {
  client.logger.cmd(`I have been added to the guild named '${guild.name}' which is owned by ${guild.owner.username}#${guild.owner.discriminator}.`);
};
