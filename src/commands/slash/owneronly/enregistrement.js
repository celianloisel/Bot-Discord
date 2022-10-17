const { EmbedBuilder } = require('discord.js');
const config = require("../../../../config.json");

module.exports = {
    name: "enregistrement",
    category: "Bot",
    description: "Add enregistrement !",
    ownerOnly: true,
    run: async (client, interaction) => {
        const Guild_ID = client.guilds.cache.get(config["GuildID"])

        const enregistrement = new EmbedBuilder()
            .setTitle("Enregistrement")
            .setAuthor({ name: "Celian Durand", iconURL: interaction.user.displayAvatarURL() })
            .setDescription("Pour vous enregistrer, suivez le modèle suivant : **Prénom Nom | Id**")
            .setImage('https://static.wikia.nocookie.net/gtawiki/images/1/16/CayoPericoBeachParty-GTAO-LookingWest.png/revision/latest?cb=20210114043643')
            .setTimestamp()
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL() });

        Guild_ID.channels.cache.get(config["Channel_ID"]["Enregistrement"]).send({ embeds: [enregistrement] })
        interaction.reply({ content: 'enregistrement ajouté', ephemeral: true })
    }
}