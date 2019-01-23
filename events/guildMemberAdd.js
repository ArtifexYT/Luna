module.exports = async (client, member) => {
  const settings = client.getSettings(member.guild.id);
  if (settings.welcomeEnabled !== "true") return;

  const welcomeMessage = settings.welcomeMessage.replace("{user}", member.user.tag);
  member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomeMessage).catch(console.error);
};
