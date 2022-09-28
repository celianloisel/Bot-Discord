const { EmbedBuilder, embedLength, ClientUser } = require('discord.js');
const config = require("../../../../config.json");

module.exports = {
    name: "testembed",
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
        const Test_Embed = new EmbedBuilder()
            .setTitle("Règlement")
            .setAuthor({name: "Celian Durand", iconURL: interaction.user.displayAvatarURL()})
            .setDescription("...")
            .setThumbnail("...")
            .setImage("")
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL()});
    }
}