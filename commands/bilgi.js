const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const config = require('../config.json')

module.exports.execute = async (client, message, args) => {
    let embed = new Discord.MessageEmbed().setFooter("Stark ???? Yashinu")
        message.channel.send(embed.setDescription(`\`Koruma sistemleri a??a??覺dad覺r.\`  
    **Kanal Koruma:** **\`Kanal olu??turulmas覺n覺, D羹zenlenmesini ve Silinmesini engeller.\`**

     **Rol Koruma:** **\`Rol olu??turulmas覺n覺, D羹zenlenmesini ve Silinmesini engeller.\`**

     **Bot Koruma:** **\`Sunucunuza izinsiz bot girmesini engeller ve botu ekleyen yetkilinin ceza almas覺n覺 sa??lar.\`**

     **Kick Koruma:** **\`Sunucunuzdan bir 羹ye izinsiz at覺ld覺??覺nda yetkilinin ceza almas覺n覺 sa??lar.\`**

     **Ban koruma:** **\`Sunucunuzdan bir 羹ye izinsiz yasakland覺??覺nda yetkilinin ceza almas覺n覺 sa??lar.\`**
    
     **Sunucu g羹ncelleme korumas覺:** **\`Sunucunuz izinsiz g羹ncelleyen ki??iyi cezaland覺r覺r ve sunucuyu eski haline getirir.\`**

     **Sa?? t覺k yetki verme korumas覺:** **\`Sunucunuzda bir yetkili izinsiz yetki y羹kseltirse, yetki y羹kselten yetkili cezaland覺r覺l覺r ve yetki alan 羹ye'nin rol羹 eski haline getirilir.\`**
  
    `))




};

exports.conf = {
    command: "bilgi", // As覺l komutumuz
    description: "Belirtilen 羹yeynin kay覺t bilgisini atar", // Komut a癟覺klamam覺z
    aliases: ["bilgi"], // Komutumuzun yard覺mc覺lar覺
  }
  
