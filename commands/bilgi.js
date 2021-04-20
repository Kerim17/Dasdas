const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const config = require('../config.json')

module.exports.execute = async (client, message, args) => {
    let embed = new Discord.MessageEmbed().setFooter("Stark 🤍 Yashinu")
        message.channel.send(embed.setDescription(`\`Koruma sistemleri aşağıdadır.\`  
    **Kanal Koruma:** **\`Kanal oluşturulmasını, Düzenlenmesini ve Silinmesini engeller.\`**

     **Rol Koruma:** **\`Rol oluşturulmasını, Düzenlenmesini ve Silinmesini engeller.\`**

     **Bot Koruma:** **\`Sunucunuza izinsiz bot girmesini engeller ve botu ekleyen yetkilinin ceza almasını sağlar.\`**

     **Kick Koruma:** **\`Sunucunuzdan bir üye izinsiz atıldığında yetkilinin ceza almasını sağlar.\`**

     **Ban koruma:** **\`Sunucunuzdan bir üye izinsiz yasaklandığında yetkilinin ceza almasını sağlar.\`**
    
     **Sunucu güncelleme koruması:** **\`Sunucunuz izinsiz güncelleyen kişiyi cezalandırır ve sunucuyu eski haline getirir.\`**

     **Sağ tık yetki verme koruması:** **\`Sunucunuzda bir yetkili izinsiz yetki yükseltirse, yetki yükselten yetkili cezalandırılır ve yetki alan üye'nin rolü eski haline getirilir.\`**
  
    `))




};

exports.conf = {
    command: "bilgi", // Asıl komutumuz
    description: "Belirtilen üyeynin kayıt bilgisini atar", // Komut açıklamamız
    aliases: ["bilgi"], // Komutumuzun yardımcıları
  }
  
