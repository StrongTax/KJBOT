const Discord = require('discord.js') // importing the discord.js module
const userClient = new Discord.Client() // creating a new user client - this will be able to read all your personal messages
const botClient = new Discord.Client() // creating a new bot client - this will send messages to different servers as a bot user

const msgEmbedToRich = require('discordjs-embed-converter') // a convertor for embeds - discord.js uses different format for incoming and outgoing embeds - this library converts between them

userClient.login("ODA0NTYyOTM3NDkwMDQ2OTk2.YZHeOA.ilzSEbprp1YlHIhiPBbaPto6X4c") // logging in with your token
botClient.login("OTA3ODgzMzI3OTM4MjMyMzMw.YYtqPQ.9DAY4HatjSNWTyyTEspRpA39Y18") // logging the bot in

userClient.once('ready', () => {
    console.log(`Logged in! Username: ${userClient.user.username}#${userClient.user.discriminator}`) // printing a message with your username and discriminator inserted in it
})

botClient.once('ready', () => {
    console.log(`Bot3 is now logged in! Username: ${botClient.user.username}#${botClient.user.discriminator}`) // printing a message with the bot's username and discriminator inserted in it
})

userClient.on('message', message => { // do this when a new message arrives
    if (message.content && message.author.id !== '804562937490046996') { //bot id // checking that the author is not yourself AND that there there is a message - prevents random printing when attachments are received
        console.log('New Message!\n', message.content) // print 'New message!' along with the actual message
    
}
    if (message.author.id !== '907883327938232330') { // if the author is not you
        if(message.channel.id == '905560011537784885'){
            if (message.content) { // if the message has content
                
                botClient.channels.get('909296759967195188').send(message.content)  //server de prueba strong// then send that content to a different channel
            }
            message.attachments.forEach(attachment => { // for each attachment
        
                botClient.channels.get('909296759967195188').send({ files: [attachment.url] }) // send that attachment to a different channel
            })
            message.embeds.forEach(embed => { // for each embed
                botClient.channels.get('909296759967195188').send(msgEmbedToRich(embed))//server de prueba kj // send that embed to a different channel
            })
        }
    }
})

process.on('unhandledRejection', (reason, promise) => { // if there is an unhandled rejection
    console.log('Unhandled Rejection at:', promise, 'reason:', reason) // prints it out - this prevents the program from "crashing" due to an error
})

process.on('uncaughtException', (err, origin) => { // same thing with an uncaught exception
    console.log('Uncaught exception at:', origin, 'err:', err) // just print it out - don't stop the program
}) 