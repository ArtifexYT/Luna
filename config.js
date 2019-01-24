module.exports = {
    ownerID: "YourUserIDHere",
    admins: ["536955005664624641", "537804407954210816", "537316883536281601", "536962817031536650"],
    support: [],
    token: "YourBotTokenHere",

    defaultSettings: {
        prefix: "+",
        modLogChannel: "mod-log",
        modRole: "Moderator",
        adminRole: "Administrator",
        systemNotice: "true",
        welcomeChannel: "meet-and-greet",
        welcomeMessage: "**{user}** has just joined.",
        welcomeEnabled: "false"
    },

    permLevels: [
        { level: 0,
          name: "User", 
          check: () => true
        },

        { level: 2,
          name: "Moderator",
          check: (message) => {
            try {
              const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
              if (modRole && message.member.roles.has(modRole.id)) return true;
            } catch (e) {
              return false;
            }
          }
        },
    
        { level: 3,
          name: "Administrator", 
          check: (message) => {
            try {
              const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
              return (adminRole && message.member.roles.has(adminRole.id));
            } catch (e) {
              return false;
            }
          }
        },

        { level: 4,
          name: "Server Owner", 
          check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
        },
    
        { level: 8,
          name: "Bot Support",
          check: (message) => config.support.includes(message.author.id)
        },
    
        { level: 9,
          name: "Bot Admin",
          check: (message) => config.admins.includes(message.author.id)
        },
    
        { level: 10,
          name: "Bot Owner", 
          check: (message) => message.client.config.ownerID === message.author.id
        }
      ]
};
