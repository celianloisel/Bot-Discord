const { ChannelType, PermissionsBitField } = require('discord.js');

const chalk = require('chalk')
const config = require('../../../config.json')

module.exports = {
    name: 'interactionCreate',

    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if (interaction.isCommand()) {

            const command = client.slash.get(interaction.commandName);
            if (!command) return interaction.reply({ content: 'an Error check console' });

            if (command.ownerOnly) {
                if (interaction.user.id !== client.config.ownerID) {
                    return interaction.reply({ ephemeral: true, content: "This command only for Bot Owner!" });
                }
            }

            const args = [];

            for (let option of interaction.options.data) {
                if (option.type === 'SUB_COMMAND') {
                    if (option.name) args.push(option.name);
                    option.options?.forEach(x => {
                        if (x.value) args.push(x.value);
                    });
                } else if (option.value) args.push(option.value);
            }

            try {
                command.run(client, interaction, args);
            } catch (e) {
                interaction.reply({ content: e.message });
            }
        }

        if (interaction.isButton()) {
            if (interaction.customId == "règlement") {
                if (interaction.member.roles.cache.some(role => role.name === '✅ | Règlement Signé')) {
                    interaction.reply({ content: "Vous avez déja signé le règlement !", ephemeral: true })
                } else {
                    interaction.member.roles.add(config["Role_ID"]["règlement_signé"])
                    interaction.member.roles.add(config["Role_ID"]["attente"])
                    interaction.reply({ content: 'Le règlement a bien été signé', ephemeral: true })
                    console.log(chalk.greenBright.green(`[NEW] ${interaction.user.tag} vien de signer le règlement`));
                }
            }
            else if (interaction.customId == "ticket") {
                const nameTicket = interaction.user.username

                interaction.guild.channels.create({
                    name: "Ticket de " + nameTicket,
                    type: 0,
                    parent: "1029842628696612914",
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [PermissionsBitField.Flags.ViewChannel],
                        },
                        {
                            id: "1029842628176511069",
                            deny: [PermissionsBitField.Flags.ViewChannel],
                            allow: [
                                PermissionsBitField.Flags.SendMessages,
                                PermissionsBitField.Flags.ReadMessageHistory,
                            ]
                        },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel],
                        },
                    ],
                })

                interaction.reply({ content: "Ticket créé !", ephemeral: true })
            }
        }
    }
}