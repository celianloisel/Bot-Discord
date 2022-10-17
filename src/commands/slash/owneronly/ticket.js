const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const config = require("../../../../config.json");

module.exports = {
    name: "ticket",
    category: "Bot",
    description: "Met en place les tickets",
    ownerOnly: true,
    run: async (client, interaction) => {
        const Guild_ID = client.guilds.cache.get(config["GuildID"])

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('ticket')
                    .setLabel('Créer un ticket')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('🎫'),
            );

        const ticket_embed = new EmbedBuilder()
            .setTitle("Ticket")
            .setAuthor({ name: "Celian Durand", iconURL: interaction.user.displayAvatarURL() })
            .setDescription("Pour faire ticket, appuyez sur le bouton ci-dessous.")
            .setImage('https://static.wikia.nocookie.net/gtawiki/images/1/16/CayoPericoBeachParty-GTAO-LookingWest.png/revision/latest?cb=20210114043643')
            .setTimestamp()
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL() });

        Guild_ID.channels.cache.get(config["Channel_ID"]["Ticket"]).send({ embeds: [ticket_embed], components: [row] })
        interaction.reply({ content: 'Embed ticket ajouté', ephemeral: true })
    }
}