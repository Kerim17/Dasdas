const Discord = require("discord.js");
const client = global.client;
const config = require('../config.json')
const fs = require('fs')

exports.execute = async () => {
    client.user.setPresence({ activity: { name: "Stark 🤍 Yashinu"}, status: "dnd" });
  };

exports.conf = {
  event: "ready"
};