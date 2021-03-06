const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

const config = require("../config.json")
const fs = require('fs')
 
module.exports.execute = async (client, message, args) => {
  let embed = new Discord.MessageEmbed().setColor("#f2b5c8").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true, })).setFooter("Stark ???? Yashinu").setTimestamp();
let beyazlistedeolanlar = config.whitelist || [];
let embed2 = new Discord.MessageEmbed().setColor('#f2b5c8').setTimestamp()

  let beklenen;
  let rolID = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name === args.join(" "));
  let userID = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  if (rolID) beklenen = rolID;
  if (userID) beklenen = userID;
  if (!beklenen) return message.channel.send(embed2.setDescription(`Beyaz listede bulunan 羹yeler - roller\n ${beyazlistedeolanlar ? beyazlistedeolanlar.map(g => (message.guild.roles.cache.has(g.slice(1)) || message.guild.members.cache.has(g.slice(1))) ? (message.guild.roles.cache.get(g.slice(1)) || message.guild.members.cache.get(g.slice(1))) : g).join('\n') : "Beyaz listede **羹ye** ya da **rol** bulunmamaktad覺r!" }`));
  if (beyazlistedeolanlar.some(g => g.includes(beklenen.id))) {
  beyazlistedeolanlar = beyazlistedeolanlar.filter(g => !g.includes(beklenen.id));
  config.whitelist = beyazlistedeolanlar;
  fs.writeFile("../config.json", JSON.stringify(config), (err) => {
  if (err) console.log(err);
});
  message.channel.send(embed.setDescription(`${beklenen}, ${message.author} taraf覺ndan beyaz listeden kald覺r覺ld覺!`));
} else {
  config.whitelist.push(`y${beklenen.id}`);
  fs.writeFile("../config.json", JSON.stringify(config), (err) => {
  if (err) console.log(err);
});
  message.channel.send(embed.setDescription(`${beklenen}, ${message.author} taraf覺ndan beyaz listeye eklendi!`));
};
};
 
exports.conf = {
    command: "whitelist", // As覺l komutumuz
    description: "Belirtilen 羹yeynin kay覺t bilgisini atar", // Komut a癟覺klamam覺z
    aliases: ["whitelist"], // Komutumuzun yard覺mc覺lar覺
  }