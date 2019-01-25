# Luna
Luna is a multipurpose Discord bot with more than general common features.

# Requirements
- `Git` command line ([Windows](https://git-scm.com/download/win) | [Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) | [Mac OS](https://git-scm.com/download/mac)) installed.
- `Node` [Version 10.15.0 or higher](https://nodejs.org/)
- `Some Goddamn Sense` If you don't intend to read the rest of this document, you shouldn't both using this bot.
- `Some Knowledge Of Node And JavaScript` Because I'm not there to handhold you.

# Downloading
In a command prompt in your projects folder, run the following command:

`git clone https://github.com/ArtifexYT/Luna.git`

Once finished:

- In the folder from where you ran the Git command, run `cd Luna` and then run `npm install`
- **If you get any error about Python or `msibuild.exe` or binding, install Python**
- Edit the `config.js` file and fill in all the relevant details

# Notable Features
- Moderation. Easy to use moderation commands such as warn, kick, ban and way more.
- Image manipulation. The power to put an image on a template to create fantastic jokes with friends.
- Welcome messages. Welcome your new members to your server with **customizable** welcome messages.

# Other Information
Hosting your own version: Hosting your own version is possible, but I'd appreciate if it's only for the following reasons:

A; Development and testing reasons.
B; A self-hosted instance with added featurres for **you only**

I won't tolerate any public running instances. If I do find public running instances of Luna, I will take action.

# Command Template
If you wish to add your own commands, use this template.

```js
exports.run = async (client, message, args, level) => {
  // Command code goes here.
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User" // See configuration file for permission levels.
};
```

Since the `help` command is static, you **must** write your own documentation. However, you **must not** claim the work as your own.

# Contributors
- ArtifexYT
- FrostyDonuts

# License
This project is placed under the [MIT license](https://en.wikipedia.org/wiki/MIT_License) — Read more [here](https://github.com/ArtifexYT/Luna/blob/master/LICENSE).

# Widgets
![Issue Status](https://img.shields.io/github/issues/ArtifexYT/Luna.svg?style=for-the-badge) ![Repository Size](https://img.shields.io/github/repo-size/ArtifexYT/Luna.svg?style=for-the-badge) 
