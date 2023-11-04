const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "6285939391878"
global.ownername = "DVinz"
global.ytname = "YT: Rull.DVinz"
global.socialm = "GitHub: Rull.DVinz"
global.location = "Indonesia"

global.ownernumber = '6285939391878'  //creator number
global.ownername = 'DVinz' //owner name
global.botname = 'Wardaa-BOT' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘AʏᴜSʜ✘𓆪_✰'
global.packname = 'Sticker By Wardaa-BOT'
global.author = 'Wardaa Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "DVinz botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/DxhYhOlK63X7jMz4ZjLi1z' // if you want to send bot reply with group link then put your link here 🌿 
global.support = 'https://chat.whatsapp.com/DYp7FwfL9xsKURihcdT0l8'
//custom prefix
global.prefa = ['.'] //put here your fav prefix like +×÷= etc.

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    pm: ' 📍*sorry darling* Bot wont work in private darling📍 \n\n https://chat.whatsapp.com/FoS7pSPtfMqBuoireK4aAJ',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('https://i.imgur.com/rgYgCzZ.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
