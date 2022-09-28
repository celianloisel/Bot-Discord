const { EmbedBuilder, embedLength, ClientUser } = require('discord.js');
const config = require("../../../../config.json");

module.exports = {
    name: "rules",
    // usage: '/testembed',
    // options: [
    //     {
    //         name: 'command',
    //         description: 'What command do you need help',
    //         type: 'STRING',
    //         required: false
    //     }
    // ],
    category: "Bot",
    description: "Test un embed!",
    ownerOnly: true,
    run: async (client, interaction) => {
        console.log('En cour de création')
    }
}