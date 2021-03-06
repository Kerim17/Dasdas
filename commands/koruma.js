const { MessageEmbed } = require("discord.js");
const fs = require('fs')
const config = require("../config.json")

module.exports.execute = async (client, message, args) => {
  let embed = new MessageEmbed().setColor("#f2b5c8").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true, })).setFooter("Stark ???? Yashinu").setTimestamp();
  let korumalar = Object.keys(config).filter(k => k.includes('Protection'));
  if (!args[0] || !korumalar.some(k => k.includes(args[0]))) return message.channel.send(embed.setDescription(`Korumalar覺 a癟mak ya da kapatmak i癟in  **${config.Prefix}koruma <koruma>** \n\n **Kullan覺ma Haz覺r Korumalar:** ${korumalar.map(k => `\`${k}\``).join(', ')}\n\n**Aktif Koruma Sistemleri:** ${korumalar.filter(k => config[k]).map(k => `\`${k}\``).join(', ')}`));
  let koruma = korumalar.find(k => k.includes(args[0]));
  config[koruma] = !config[koruma];
  fs.writeFile("../config.json", JSON.stringify(config), (err) => {
  if (err) console.log(err);
});
  message.channel.send(embed.setDescription(`**${koruma}** adl覺 koruma , ${message.author} taraf覺ndan ${config[koruma] ? "a癟覺ld覺" : "kapat覺ld覺"}!`));
};

exports.conf = {
    command: "koruma", // As覺l komutumuz
    description: "Belirtilen 羹yeynin kay覺t bilgisini atar", // Komut a癟覺klamam覺z
    aliases: ["koruma"], // Komutumuzun yard覺mc覺lar覺
  }
  
