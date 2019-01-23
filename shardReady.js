const shardDir = "./luna.js";
const Discord = require("discord.js");
const Manager = new Discord.ShardingManager(`${shardDir}`);

Manager.spawn(2);
