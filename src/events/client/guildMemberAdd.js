/**
 * Example Event
 */

const { Message, EmbedBuilder } = require("discord.js");
const config = require("../../../config.json");
const chalk = require("chalk")

module.exports = {
    name: 'guildMemberAdd',

    /**
     * @param {GuildMember} member 
     * @param {Client} client 
     */
    async execute(member, client) {
        const Guild_ID = client.guilds.cache.get(config["GuildID"])
        const Welcome_Embed = new EmbedBuilder()
            .setTitle("Bienvenue")
            .setDescription(`Bienvenue ${member} sur ${Guild_ID}, nous te souhaitons la bienvenue et de passer un bon moment parmi nous.\n`
                + `Merci de bien vouloir consultez le salon ${Guild_ID.channels.cache.get(config["Channel_ID"]["Reglement"])} pour pouvoir accéder à la suite du discord.`)
                .setThumbnail(member.user.displayAvatarURL())
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL()})
        member.guild.channels.cache.get(config["Channel_ID"]["Welcome"]).send({ embeds: [Welcome_Embed] });
        console.log(chalk.greenBright.green("[NEW] " + member.user.tag + " a rejoin le serveur"))
    }
}