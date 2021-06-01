const Discord = require("discord.js"); 
const config = require('../config.json');

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

    let embed = new Discord.MessageEmbed() 
      .setColor("#DC143C") 
      .setTitle(`Avatar de ${user.username}`) 
      .setDescription(`Baixar Imagem: \[Clique aqui\]\(${avatar}\)`)
      .setImage(avatar) 
      .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    await message.channel.send(embed);
};
