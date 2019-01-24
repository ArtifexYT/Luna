module.exports = async (client) => {
    client.logger.warn("You are being ratelimited.");
    process.exit(1);
};