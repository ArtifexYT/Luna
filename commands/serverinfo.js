const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
    const guild = message.guild;

    function checkRegion(message, guild) {
        const regionArray = [];

        if (message.guild.region === "us-east") {
            regionArray.push("US East");
        }
    
        if (message.guild.region === "vip-us-east") {
            regionArray.push("US East (VIP)");
        }
    
        if (message.guild.region === "us-south") {
            regionArray.push("US South");
        }
    
        if (message.guild.region === "vip-us-south") {
            regionArray.push("US South (VIP)");
        }
    
        if (message.guild.region === "us-west") {
            regionArray.push("US West");
        }
    
        if (message.guild.region === "vip-us-west") {
            regionArray.push("US West (VIP)");
        }
    
        if (message.guild.region === "us-central") {
            regionArray.push("US Central");
        }
    
        if (message.guild.region === "vip-us-central") {
            regionArray.push("US Central (VIP)");
        }
    
        if (message.guild.region === "sydney") {
            regionArray.push("Sydney");
        }
    
        if (message.guild.region === "vip-sydney") {
            regionArray.push("Sydney (VIP)");
        }
    
        if (message.guild.region === "southafrica") {
            regionArray.push("South Africa");
        }
    
        if (message.guild.region === "vip-southafrica") {
            regionArray.push("South Africa (VIP)");
        }
    
        if (message.guild.region === "singapore") {
            regionArray.push("Singapore");
        }
    
        if (message.guild.region === "vip-singapore") {
            regionArray.push("Singapore (VIP)");
        }
    
        if (message.guild.region === "russia") {
            regionArray.push("Russia");
        }
    
        if (message.guild.region === "vip-russia") {
            regionArray.push("Russia (VIP)");
        }
    
        if (message.guild.region === "japan") {
            regionArray.push("Japan");
        }
    
        if (message.guild.region === "vip-japan") {
            regionArray.push("Japan (VIP)");
        }
    
        if (message.guild.region === "hongkong") {
            regionArray.push("Hong Kong");
        }
    
        if (message.guild.region === "vip-hongkong") {
            regionArray.push("Hong Kong (VIP)");
        }
    
        if (message.guild.region === "eu-west") {
            regionArray.push("EU West");
        }
    
        if (message.guild.region === "vip-eu-west") {
            regionArray.push("EU West (VIP)");
        }
    
        if (message.guild.region === "eu-central") {
            regionArray.push("EU Central");
        }
    
        if (message.guild.region === "vip-eu-central") {
            regionArray.push("EU Central (VIP)");
        }
    
        if (message.guild.region === "brazil") {
            regionArray.push("Brazil");
        }
    
        if (message.guild.region === "vip-brazil") {
            regionArray.push("Brazil (VIP)")
        }

        return regionArray;
    }
};