const chalk = require('chalk'),
    paddingBanner = ' '.repeat(60),
    paddingCredits = ' '.repeat(92)

function banner() {
    console.log(
        chalk.yellow(`
${paddingBanner} ██████╗██╗  ██╗ ██████╗  ██████╗ ██████╗ ██╗      █████╗ ████████╗███████╗██████╗ ██╗███████╗
${paddingBanner}██╔════╝██║  ██║██╔═══██╗██╔════╝██╔═══██╗██║     ██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║██╔════╝
${paddingBanner}██║     ███████║██║   ██║██║     ██║   ██║██║     ███████║   ██║   █████╗  ██████╔╝██║█████╗
${paddingBanner}██║     ██╔══██║██║   ██║██║     ██║   ██║██║     ██╔══██║   ██║   ██╔══╝  ██╔══██╗██║██╔══╝
${paddingBanner}╚██████╗██║  ██║╚██████╔╝╚██████╗╚██████╔╝███████╗██║  ██║   ██║   ███████╗██║  ██║██║███████╗
${paddingBanner} ╚═════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝
`)
    )
    console.log(
        chalk.red(`
${paddingCredits}->  Crée par Choco8exe#8725 !
${paddingCredits}->      © 2021 choco, Inc.
${paddingCredits}-> Github: https://github.com/choco8exe
`)
    )
    console.log('')
    console.log(
        `Info du bot : \n\nLe bot est sur ${client.guilds.cache.size} serveurs. \n Il a un total de ${client.users.cache.size} membres.`
    )
    console.log(
        `Connecté en tant que ${client.user.id}  | Prefix : ${botPrefix}  | Nombre de Serveurs ${client.guilds.cache.size}  | Nombres de salons ${client.channels.cache.size}  | Utilisateur totaux ${client.users.cache.size}`
    )
}

module.exports = {
    banner,
}
