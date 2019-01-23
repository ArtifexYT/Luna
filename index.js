if (Number(process.version.slice(1).split(".")[0]) < 10) throw new Error("Node 10.0.0 or higher is required. Update Node on your system.");

const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");

const client = new Discord.Client({
    disableEveryone: true,
    fetchAllMembers: false,
    sync: false,
    messageCacheMaxSize: 100,
    messageCacheLifetime: 240,
    messageSweepInterval: 300,
    disabledEvents: []
});

client.config = require("./config.js");
client.logger = require("./modules/Logger");
client.instance = require("./package.json");

require("./modules/functions.js");

client.commands = new Enmap();
client.aliases = new Enmap();

client.points = new Enmap({
    name: "points",
    autoFetch: true,
    fetchAll: true
});

client.settings = new Enmap({
    name: "settings",
    autoFetch: true,
    fetchAll: true
});

const init = async () => {
    
};
