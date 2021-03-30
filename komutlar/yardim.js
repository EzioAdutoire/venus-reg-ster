const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('V E N U S | R E G I S T E R')

  .addField("• | v!e",`__Kayıtsız kullanıcıyı erkek olarak kayıt edersiniz.__`)
  
  .addField("• | v!k",`__Kayıtsız kullanıcıyı kız olarak kayıt edersiniz.__`)
  
  .addField("• | v!kayıtsız",`__Kayıt edilmiş bir kullanıcıyı kayıtsız duruma getirirsiniz.__`)
  
  .addField("• | v!stat",`__Toplam kayıt istatistiklerinizi görürsünüz.__`)

  .addField("• | v!isimler",`__Etiketlediğiniz kullanıcının daha önce kaç defa ve hangi isimler ile kayıt olduğunu görürsünüz.__`)

  .addField("• | v!topteyit",`__Sunucudaki yetkililerin kaç kişi kayıt ettiğini görürsünüz.__`)

  .addField("• | v!sıfırla",`__Etiketlediğiniz kişinin kayıtlarını sıfırlar.__`)
  
  .setDescription("V E N U S | R E G I S T E R bilgilendirme menüsü" )
  .setThumbnail("https://i.hizliresim.com/zeDNHU.png")
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}