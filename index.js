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
client.errors = require("./modules/Errors");
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
  
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (!response) console.log(response);
  });
  
  const evtFiles = await readdir("./event");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });
  
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
  
  client.login(client.config.token);
};

init();
