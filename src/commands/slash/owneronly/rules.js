const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
const config = require("../../../../config.json");

module.exports = {
    name: "rules",
    category: "Bot",
    description: "Add réglement !",
    ownerOnly: true,
    run: async (client, interaction) => {
        const Guild_ID = client.guilds.cache.get(config["GuildID"])

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('règlement')
                    .setLabel('Signer le règlement')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('📜'),
            );

        const Rules = new EmbedBuilder()
            .setTitle("Règlement")
            .setAuthor({ name: "Celian Durand", iconURL: interaction.user.displayAvatarURL() })
            .setDescription('Le règlement est soumis à des changements réguliers. En cas de changement, une annonce sera créée.')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                {
                    name: "I/ Nom d'utilisateur et photo de profil",
                    value: `- Dès votre arrivé, il est obligatoire de vous enregistrer dans le salon ${Guild_ID.channels.cache.get(config["Channel_ID"]["Enregistrement"])}.\n`
                        + `- Tout nom d'utilisateur ou photo de profil contenant des caractères pornographique, sexiste ou homophobe sera sanctionné.\n`
                        + `- Tout nom d'utilisateur ou photo de profil contenant des propos haineux ou offensent sera sanctionné.\n`
                },
                { name: '\u200B', value: '\u200B' },
                {
                    name: "II/ Comportement à adopter à l'écrit",
                    value: `- Tout message ou photo contenant des caractères pornographiques, sexiste ou homophobe sera sanctionné.\n`
                        + `- Tout message ou photo contenant des propos haineux ou offensent sera sanctionné.\n`
                        + `- Toute pub réalisée sans autorisation (sur ce discord ou en MP) sera sanctionné.\n`
                        + `- Tout spam sera sanctionné.\n`
                        + `- Vous êtes dans l'obligations de respecter les salons approprié lors de vos discoution.\n`
                },
                { name: '\u200B', value: '\u200B' },
                {
                    name: "III/ Comportement à adopter à l'oral",
                    value: `- Tout propos contenant des caractères pornographiques, sexiste ou homophobe sera sanctionné.\n`
                        + `- Tout propos contenant des propos haineux ou offensent sera sanctionné.\n`
                        + `- Toute pub réalisée sans autorisation sera sanctionné.\n`
                        + `- Tout flood, soundboard abusif ou modificateur de voix abusif sera sanctionné.\n`
                },
                { name: '\u200B', value: '\u200B' },
            )
            .setImage('https://static.wikia.nocookie.net/gtawiki/images/1/16/CayoPericoBeachParty-GTAO-LookingWest.png/revision/latest?cb=20210114043643')
            .setTimestamp()
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL() });

        Guild_ID.channels.cache.get(config["Channel_ID"]["Reglement"]).send({ embeds: [Rules], components: [row] })
        interaction.reply({ content: 'Règlement ajouté', ephemeral: true })
    }
}