module.exports = async (client, error) => {
  client.logger.log(`An error event was sent by the bot library: \n${JSON.stringify(error)}`, "error");
};
