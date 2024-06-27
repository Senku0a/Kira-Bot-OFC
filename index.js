//IMPORTACIONES
const { default : makeWAvmet , DisconnectReason , useMultiFileAuthState , makeInMemoryStore , downloadContentFromMessage , prepareWAMessageMedia} = require('@whiskeysockets/baileys')
const { Boom } = require('@hapi/boom')
const pino = require('pino')
const clc = require("cli-color")
const cfonts = require('cfonts')
const chalk = require('chalk')
const readline = require("readline");
const fetch = import('node-fetch')
const NodeCache = require('node-cache');
const fs = require('fs')
const { writeFile, readFile } = require('fs').promises; 
const axios = require('axios')
const { exec } = require('child_process');
const webp = require('webp-converter')
const mimetype = require('mime-types')
const ytsr = require('ytsr');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const path = require('path')
const Jimp = require('jimp')
const ffmpeg = require('fluent-ffmpeg')
const os = require('os');
const { performance } = require('perf_hooks');
let google = require('google-it')
const {search, download} = require('aptoide-scraper')
const FormData = require('form-data');
const JavaScriptObfuscator = require('javascript-obfuscator'); 
require('dotenv').config()
const store = makeInMemoryStore({logger: pino().child({leve: 'silent', stream: 'store'})}); 

const registeredUsers = JSON.parse(fs.readFileSync('./Database/dataBase.json', 'utf-8'));
const { loadRegisteredUsers, saveRegisteredUsers, isUserRegistered, registerUser, deleteUser } = require('./Database/userController.js')

const  { downloadMediaMessageS, convertToSticker } = require('./Plugins/stiker.js')
const { mediafireDl } = require('./libs/mediafire.js') 
//const { downloadMediaMessage } = require('./Plugins/functions.js')


const welkom = JSON.parse(fs.readFileSync("./libs/welkom.json"))
const antitoxic = JSON.parse(fs.readFileSync("./libs/antitoxic.json"))
const viewOnce = JSON.parse(fs.readFileSync("./libs/viewOnce.json"))
const antiLink = JSON.parse(fs.readFileSync("./libs/antiLink.json"))
const antiPv = JSON.parse(fs.readFileSync("./libs/antiPv.json"))
const call = JSON.parse(fs.readFileSync("./libs/call.json"))
const bobs = JSON.parse(fs.readFileSync("./media/nftw/bobs.json"))
const countryCodes = require('./Plugins/countryCode.js')
const toxic = require("./libs/toxic.js") 
const pr = require("./libs/pregunta.js")
const { palabras, pc } = require('./Plugins/ppt.js')

const botStartTime = Date.now();
const options = { timeZone: 'America/Cancun', hour12: false }
const data = new Date().toLocaleDateString('MX', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('MX', options) 
const msgRetryCounterCache = new NodeCache();
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const getBuffer = (url, options) => new Promise(async (resolve, reject) => {
options ? options : {}
await axios({ method: "get", url, headers: { "DNT": 1, "Upgrade-Insecure-Request": 1 }, ...options, responseType: "arraybuffer" }).then((res) => {
resolve(res.data)
}).catch(reject)
});
        
function pickRandom(arr) {
const randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];
}

function loadItems() {
    try {
        const data = fs.readFileSync('./libs/items.json');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer items.json', error);
        return [];
    }
}

const items = loadItems();

const banner = cfonts.render('KIRA | BOT ', {
  font: 'block',
  align: 'center', 
  colors: ['blue'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1, 
  space: true, 
  maxLength: '0',
});

//INFO DEL BOT
// const prefixo = ['.', '/', '*', '#', '!', '¡', '$'];
const prefixo = ['-', '¡']
const wm = "𝙱𝚛𝚊𝚗 𝚣𝚝𝚠 - 𝙼𝚊𝚝𝚒𝚊𝚜 𝙲𝚛𝚢𝚙𝚝𝚘"
const botname = "𝙺 𝙸 𝚁 𝙰 - 𝙱 𝙾 𝚃" 
const numerodono = "5214271858535"
const dono = ['5214271859535@s.whatsapp.net', '5492215034412@s.whatsapp.net', '18302877875@s.whatsapp.net']; 
const linksGit = ["https://github.com/BrandonN277", "https://github.com/matias-crypto"]

loadRegisteredUsers() 

 function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

let stats = { usersInteracted: [], messagesReceived: 0, messagesSent: 0 };

if (fs.existsSync('./libs/stats.json')) {
stats = JSON.parse(fs.readFileSync('./libs/stats.json', 'utf8'));
}

async function startBot() {
const a0_0x105000=a0_0x81f9;function a0_0x9667(){const _0x1e4299=['authState','replace','Braan.ztw','33277607gGhINC','\x0a\x0aIngresa\x20tu\x20número,\x20Ejemplo\x20:\x20+52\x20427\x20185\x2095\x2035\x0a\x0aTu\x20número:\x20','match','91SMvbGi','./sessions','234324WCUKkc','3554048bgBwCc','yellow','66339TxCKZb','1197895tvqpCO','blue','requestPairingCode','1.0.0','creds','$1$3','\x0aBienvenido\x20a\x20la\x20Base\x20Kira\x20Bot\x20❤️\x0a\x0aBase\x20creada\x20totalmente\x20desde\x200\x0aCreador\x20oficial\x20:\x20','3eDwEeJ','registered','log','4082620cEDjjb','1146khaaks','1310dMwvAD','293SGUQcx'];a0_0x9667=function(){return _0x1e4299;};return a0_0x9667();}(function(_0x1034cf,_0x72e0f4){const _0x51297a=a0_0x81f9,_0x4a7b0a=_0x1034cf();while(!![]){try{const _0x4842e5=parseInt(_0x51297a(0x14e))/0x1*(-parseInt(_0x51297a(0x14c))/0x2)+-parseInt(_0x51297a(0x148))/0x3*(parseInt(_0x51297a(0x14b))/0x4)+-parseInt(_0x51297a(0x141))/0x5+-parseInt(_0x51297a(0x13d))/0x6*(parseInt(_0x51297a(0x13b))/0x7)+parseInt(_0x51297a(0x13e))/0x8+parseInt(_0x51297a(0x140))/0x9*(-parseInt(_0x51297a(0x14d))/0xa)+parseInt(_0x51297a(0x138))/0xb;if(_0x4842e5===_0x72e0f4)break;else _0x4a7b0a['push'](_0x4a7b0a['shift']());}catch(_0x1d580c){_0x4a7b0a['push'](_0x4a7b0a['shift']());}}}(a0_0x9667,0x8ab03));const {state,saveCreds}=await useMultiFileAuthState(a0_0x105000(0x13c)),kira=makeWAvmet({'auth':state,'logger':pino({'level':'silent'}),'auth':state,'browser':['FireFox\x20(linux)',a0_0x105000(0x144)],'patchMessageBeforeSending':_0x5e0d5f=>{const _0x7c77db=!!_0x5e0d5f?.['interactiveMessage'];return _0x7c77db&&(_0x5e0d5f={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x5e0d5f}}}),_0x5e0d5f;}});function clearNumber(_0x5e8637){const _0x12a5b4=a0_0x105000,_0x4b76fd=_0x5e8637[_0x12a5b4(0x150)](/\D/g,''),_0x524445=_0x4b76fd['replace'](/^(\d{2})(9)?(\d{8,9})$/,_0x12a5b4(0x146));return _0x524445;}function a0_0x81f9(_0x54828e,_0x40eec6){const _0x96672d=a0_0x9667();return a0_0x81f9=function(_0x81f916,_0x559a39){_0x81f916=_0x81f916-0x137;let _0x2ae053=_0x96672d[_0x81f916];return _0x2ae053;},a0_0x81f9(_0x54828e,_0x40eec6);}if(!kira[a0_0x105000(0x14f)][a0_0x105000(0x145)][a0_0x105000(0x149)]){console[a0_0x105000(0x14a)](chalk[a0_0x105000(0x13f)](a0_0x105000(0x147)+chalk[a0_0x105000(0x142)](a0_0x105000(0x137))));const phoneNumber=await question(chalk[a0_0x105000(0x13f)](a0_0x105000(0x139))),numberClean=clearNumber(phoneNumber);let code=await kira[a0_0x105000(0x143)](numberClean);code=code?.[a0_0x105000(0x13a)](/.{1,4}/g)?.['join']('-')||code,console['log'](code);}
store.bind(kira.ev)

kira.ev.on('connection.update', (update) => {
const {connection, lastDisconnect} = update;
try {
if(connection == 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if(reason === DisconnectReason.badSession) {
    console.log(chalk.yellow('Carpeta de sessiones incorrecta, borrela e inicie de nuevo el bot'));
    startBot()
    } else if(reason === DisconnectReason.connectionClosed) {
    console.log(chalk.yellow("Conexión cerrada... Recomendando"));
    startBot()
    } else if(reason === DisconnectReason.connectionLost) {
    console.log(chalk.yellow("Perdida del servidor, reconectando"));
    startBot()
     } else if(reason === DisconnectReason.connectionReplaced) {
    console.log(chalk.red("Se abrió una nueva session, por favor borrar esta e iniciar de nuevo"));
    startBot()
    } else if(reason === DisconnectReason.loggedOut) {
    console.log(chalk.red("Dispositivo cerrado, elimine la session e inicie de nuevo"));
    startBot()
    } else if(reason === DisconnectReason.restartRequired) {
    console.log(chalk.red("Por favor reiniciar el bot"));
    startBot()
    } else if(reason === DisconnectReason.timedOut) {
    console.log(chalk.yellow("Se agotó dl tiempo de conexión, reconectando..."));
    startBot()
    } else kira.end(`Desconexion desconosida... : ${reason}`)
    }
if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
console.log(chalk.green("Conectando..."));
}
if (update.connection == "open" || update.receivedPendingNotifications == "true") {
console.log(banner.string);
}
} catch (e) {
console.log(chalk.red("Error : ", e));
startBot()
}
})

kira.ev.on('creds.update', saveCreds)
kira.ev.on("messages.upsert",  () => { })

kira.ev.on('call', async (llamadas) => { 
if(call.includes(numerodono)) {
kira.user.jid = kira.user.id.split(":")[0] + "@s.whatsapp.net" // jid in user?
if (!call.includes(numerodono)) return
for (let llamada of llamadas) {
if (llamada.isGroup == false) {
if (llamada.status == "offer") {
const callTexto = `𝚄𝚜𝚞𝚊𝚛𝚒𝚘 :  @${llamada.from.split('@')[0]}\n\n[!] 𝚂𝙴𝚁𝙰𝚂 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾 [!]\n𝚁𝙰𝚉𝙾𝙽 : 𝚛𝚎𝚊𝚕𝚒𝚣𝚊𝚛 ${llamada.isVideo ? `𝚟𝚒𝚍𝚎𝚘𝚕𝚕𝚊𝚖𝚊𝚍𝚊𝚜` : `𝚕𝚕𝚊𝚖𝚊𝚍𝚊𝚜` }\n\n𝙺𝚒𝚛𝚊 𝚋𝚘𝚝 𝚗𝚘 𝚙𝚎𝚛𝚖𝚒𝚝𝚎 𝚕𝚕𝚊𝚖𝚊𝚍𝚊𝚜, 𝚜𝚎𝚛𝚊𝚜 𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘 𝚢 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚍𝚎 𝚔𝚒𝚛𝚊 𝚋𝚘𝚝 😡`
kira.sendMessage(llamada.from,{text : callTexto, mentions : [llamada.from]})
await kira.updateBlockStatus(llamada.from, "block")
}
}
}
}
}) 

//Welcome
kira.ev.on("group-participants.update", async (anu) => {
if(welkom.includes(anu.id)) {
const dataGroup = await kira.groupMetadata(anu.id)
if(anu.action == "add") {
const numberWelcome = anu.participants[0]
try {
var photoWelcome = await kira.profilePictureUrl(numberWelcome, 'image')
} catch {
var photoWelcome = "https://qu.ax/aTqx.jpg"
}
const textWelcome = `
⪨────[ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 ]────⪩\n
💫 𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘 𝚊 : @${numberWelcome.split("@")[0]}
💫 𝙵𝚎𝚌𝚑𝚊: ${data}
💫 𝙽𝚘𝚖𝚋𝚛𝚎 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 : ${dataGroup.subject}
\n\n📢 𝙻𝚎𝚎 𝚕𝚊 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗 📢 :\n\n${dataGroup.desc}`
const photoWelcomeNew = await getBuffer(photoWelcome)
await kira.sendMessage(anu.id,{text : textWelcome , contextInfo: {
mentionedJid: [numberWelcome],
"externalAdReply": {
"title": "𝙽𝚄𝙴𝚅𝙾 𝙼𝙸𝙴𝙼𝙱𝚁𝙾 🥳",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoWelcomeNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
}
)
}
//Bye
if(anu.action === "remove") {
const numberRemove = anu.participants[0]
try {
var photoRemove = await kira.profilePictureUrl(numberRemove, 'image')
} catch {
var photoRemove = "https://qu.ax/aTqx.jpg"
}
const textRemove = `𝚄𝚗 𝚙𝚎𝚗𝚍𝚎𝚓𝚘 𝚜𝚎 𝚏𝚞𝚎 𝚊𝚕𝚟 🫵😹\n\n💫𝙰𝚍𝚒𝚘𝚜 𝚊  :  @${numberRemove.split("@")[0]}\n💫 𝙵𝚎𝚌𝚑𝚊: ${data}`
const photoRemoveNew = await getBuffer(photoRemove)
await kira.sendMessage(anu.id,{text : textRemove , contextInfo: {
mentionedJid: [numberRemove],
"externalAdReply": {
"title": "𝙰𝙳𝙸𝙾𝚂 𝙱𝙾𝙱𝙾 😹",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoRemoveNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
}
)}
}
//New admin
if(anu.action == 'promote') {
const promoteGroup = anu.participants.filter(p => p.admin)
const listAdmin = promoteGroup.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const numberPromote = anu.participants[0] 
const authorPromote = anu.author
try {
var photoPromote = await kira.profilePictureUrl(numberPromote, 'image')
} catch {
var photoPromote = "https://qu.ax/aTqx.jpg"
}
const textPromote = `𝙽𝚄𝙴𝚅𝙾 𝙰𝙳𝙼𝙸𝙽 @${numberPromote.split("@")[0]}\n𝙵𝚎𝚕𝚒𝚌𝚒𝚍𝚊𝚍𝚎𝚜 🥳 𝚎𝚛𝚎𝚜 𝚙𝚊𝚛𝚝𝚎 𝚍𝚎𝚕 𝚜𝚝𝚊𝚏𝚏 \n\n𝙰𝚌𝚒𝚘𝚗 𝚑𝚎𝚌𝚑𝚊 𝚙𝚘𝚛 :  @${authorPromote.split("@")[0]}\n💫 𝙵𝚎𝚌𝚑𝚊: ${data}`
const photoPromoteNew = await getBuffer(photoPromote)
kira.sendMessage(anu.id,{text : textPromote , contextInfo: {
mentionedJid: [numberPromote, authorPromote],
"externalAdReply": {
"title": "𝙽𝚄𝙴𝚅𝙾 𝙰𝙳𝙼𝙸𝙽 🥳",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoPromoteNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}})}
//demote admin
if (anu.action == 'demote') { 
const numberDemote = anu.participants[0]
const authorDemote = anu.author
try {
var photoDemote = await kira.profilePictureUrl(numberDemote, 'image')
} catch {
var photoDemote = "https://qu.ax/aTqx.jpg"
}
const textDemote = `𝚈𝙰 𝙽𝙾 𝙴𝚁𝙴𝚂 𝙰𝙳𝙼𝙸𝙼 🫵😹  @${numberDemote.split("@")[0]}\n\n𝙰𝚌𝚒𝚘𝚗 𝚑𝚎𝚌𝚑𝚊 𝚙𝚘𝚛 :  @${authorDemote.split("@")[0]}\n💫 𝙵𝚎𝚌𝚑𝚊: ${data}`
const photoDemoteNew = await getBuffer(photoDemote)
kira.sendMessage(anu.id,{text : textDemote , contextInfo: {
mentionedJid: [numberDemote, authorDemote],
"externalAdReply": {
"title": "𝚄𝙽 𝙰𝙳𝙼𝙸𝙽 𝙼𝙴𝙽𝙾𝚂 😹",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoDemoteNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}}})}})

kira.ev.on("groups.update", async (json) => {
const res = json[0];
const dataGroup2 = await kira.groupMetadata(res.id) 
if (res.announce == true) {
try {
var photoGroupClose = await kira.profilePictureUrl(res.id, 'image')
} catch {
var photoGroupClose = "https://qu.ax/qmBH.jpg"
}
const photoGroupCloseNew = await getBuffer(photoGroupClose) 
const grupoCloseText = "𝙰𝚑𝚘𝚛𝚊 𝚜𝚘𝚕𝚘 𝚕𝚘𝚜 𝚊𝚍𝚖𝚒𝚗𝚜 𝚙𝚞𝚎𝚍𝚎𝚗 𝚎𝚜𝚌𝚛𝚒𝚋𝚒𝚛 🗣️"
kira.sendMessage(res.id,{text : grupoCloseText , contextInfo: {
mentionedJid: null,
"externalAdReply": {
"title": "[ 𝙶𝚁𝚄𝙿𝙾 𝙲𝙴𝚁𝚁𝙰𝙳𝙾 🔒 ]",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoGroupCloseNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
//group open
} else if (res.announce == false) {
try {
var photoGroupOpen = await kira.profilePictureUrl(res.id, 'image')
} catch {
var photoGroupOpen = "https://qu.ax/qmBH.jpg"
}
const photoGroupOpenNew = await getBuffer(photoGroupOpen)
const grupoOpenText = "𝙰𝚑𝚘𝚛𝚊 𝚝𝚘𝚍𝚘𝚜 𝚕𝚘𝚜 𝚖𝚒𝚎𝚖𝚋𝚛𝚘𝚜 𝚙𝚞𝚎𝚍𝚎𝚗 𝚎𝚜𝚌𝚛𝚒𝚋𝚒𝚛 🗣️"
kira.sendMessage(res.id,{text : grupoOpenText , contextInfo: {
mentionedJid: null,
"externalAdReply": {
"title": "[ 𝙶𝚁𝚄𝙿𝙾 𝙰𝙱𝙸𝙴𝚁𝚃𝙾  🔓 ]",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoGroupOpenNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
//only admin edit group
} else if (res.restrict == true) {
try {
var photoEditAdmin = await kira.profilePictureUrl(res.id, 'image')
} catch {
var photoEditAdmin = "https://qu.ax/qmBH.jpg"
}
const photoEditAdminNew = await getBuffer(photoEditAdmin) 
const editAdmText = "𝙰𝚑𝚘𝚛𝚊 𝚜𝚘𝚕𝚘 𝚕𝚘𝚜 𝚊𝚍𝚖𝚒𝚗𝚜 𝚙𝚞𝚎𝚍𝚎𝚗 𝚎𝚍𝚒𝚝𝚊𝚛 𝚕𝚘𝚜 𝚊𝚓𝚞𝚜𝚝𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 ⚙️"
kira.sendMessage(res.id,{text : editAdmText , contextInfo: {
mentionedJid: null,
"externalAdReply": {
"title": "[ 𝙰𝙹𝚄𝚂𝚃𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾 ]",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoEditAdminNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
//all edit group
} else if (res.restrict == false) {
try {
var photoEditAll = await kira.profilePictureUrl(res.id, 'image')
} catch {
var photoEditAll = "https://qu.ax/qmBH.jpg"
}
const photoEditAllNew = await getBuffer(photoEditAll) 
const editAllText = "𝙰𝚑𝚘𝚛𝚊 𝚝𝚘𝚍𝚘𝚜 𝚕𝚘𝚜 𝚖𝚒𝚎𝚖𝚋𝚛𝚘𝚜 𝚙𝚞𝚎𝚍𝚎𝚗 𝚎𝚍𝚒𝚝𝚊𝚛 𝚕𝚘𝚜 𝚊𝚓𝚞𝚜𝚝𝚎𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 ⚙️"
kira.sendMessage(res.id,{text : editAllText , contextInfo: {
mentionedJid: null,
"externalAdReply": {
"title": "[ 𝙰𝙹𝚄𝚂𝚃𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾 ]",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoEditAllNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}}})
//edit name group
} else if (res.subject !== undefined ) {
try {
var photoGroupName = await kira.profilePictureUrl(res.id, 'image')
} catch {
var photoGroupName = "https://qu.ax/qmBH.jpg"
}
const photoGroupNameNew = await getBuffer(photoGroupName) 
const newNameText = "𝙴𝚕 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚏𝚞𝚎 𝚌𝚊𝚖𝚋𝚒𝚊𝚍𝚘 📜"
kira.sendMessage(res.id,{text : newNameText , contextInfo: {
mentionedJid: null,
"externalAdReply": {
"title": "[ 𝙽𝚄𝙴𝚅𝙾 𝙽𝙾𝙼𝙱𝚁𝙴 ]",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoGroupNameNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
//edit description
} else if (res.desc !== undefined) {
try {
var photoGroupDesc = await kira.profilePictureUrl(res.id, 'image')
} catch {
var photoGroupDesc = "https://qu.ax/qmBH.jpg"
}
const photoGroupDescNew = await getBuffer(photoGroupDesc) 
const newDescText = "𝙻𝚊 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚏𝚞𝚎 𝚌𝚊𝚖𝚋𝚒𝚊𝚍𝚊 📝"
kira.sendMessage(res.id,{text : grupoOpenText , contextInfo: {
mentionedJid: null,
"externalAdReply": {
"title": "[ 𝙽𝚄𝙴𝚅𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 ]",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoGroupDescNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
}
})


 kira.ev.on('creds.update', saveCreds)
kira.ev.on("messages.upsert",  () => { })

kira.ev.on('messages.upsert', async m => {
 try {
  const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const budy = (type === "conversation") ? info.message.conversation : (type === "viewOnceMessageV2") ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : (type === "imageMessage") ? info.message.imageMessage.caption : (type === "videoMessage") ? info.message.videoMessage.caption : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : (type === "viewOnceMessage") ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : (type === "documentWithCaptionMessage") ? info.message.documentWithCaptionMessage.message.documentMessage.caption : (type === "buttonsMessage") ? info.message.buttonsMessage.imageMessage.caption : (type === "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : (type === "listResponseMessage") ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type === "templateButtonReplyMessage") ? info.message.templateButtonReplyMessage.selectedId : (type === "groupInviteMessage") ? info.message.groupInviteMessage.caption : (type === "pollCreationMessageV3") ? info.message.pollCreationMessageV3 : (type === "interactiveResponseMessage") ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type === "text") ? info.text : "" 

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await kira.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const text = args.join(' ')
const isCmd = prefixo.some(caracter => body.startsWith(caracter));
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? kira.sendMessage(from, {text: teks.trim(), mentions: memberr}) : kira.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = dono.some(number => sender.includes(number));
const BotNumber = kira.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const iswelkom = isGroup ? welkom.includes(from) : false
const isantitoxic = isGroup ? antitoxic.includes(from) : false
const isviewOnce = isGroup ? viewOnce.includes(from) : false
const iscall = !isGroup ? call.includes(numerodono) : false
const isLink = isGroup ? antiLink.includes(from) : false
const isAntiPv = isGroup ? antiPv.includes(from) : false

const SvnC = {key : {participant : '0@s.whatsapp.net'},message : {contactMessage : {displayName : `${pushname}`}}};

const enviar = async (texto) => {
await kira.sendMessage(from,{ text : texto }, {quoted : info})
}
const enviarTxt = async (texto) => {
await kira.sendMessage(from,{ text : texto }, {quoted : SvnC})
}
const enviarImg = async (imagen) => {
await kira.sendMessage(from,{ image : imagen }, {quoted : SvnC})
}
const enviarImgcap = async (imagen, caption) => {
await kira.sendMessage(from,{ image : imagen ,caption : caption }, {quoted : info})
}
const enviarVd = async (video) => {
await kira.sendMessage(from,{ video : videos }, {quoted : SvnC})
}
const enviarVdcap = async (video, caption) => {
await kira.sendMessage(from,{ video : videos ,caption : caption}, {quoted : SvnC})
}
const enviarAudio = async (audios) => {
await kira.sendMessage(from,{ audio : audios }, {quoted : info})
}
const audio = async (audio) => {
await kira.sendMessage(from, { audio: { url: audio }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: info });
}
const reaccionar = async (reaccion) => {
await kira.sendMessage(from, { react: { text: reaccion, key: info.key }}); 
 }
 
const stiker = async (stickers) => {
await kira.sendMessage(from,{  sticker: stickers, packname : `kira`, author: `kira`}, { quoted : info})
}

kira.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return kira.sendMessage(jid, { poll: { name, values, selectableCount }}) }

 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

const respuesta = {
 dono : "𝙴𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜𝚘𝚕𝚘 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛 👑",
 grupos : "𝙴𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜𝚘𝚕𝚘 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚐𝚛𝚞𝚙𝚘𝚜 𝚙𝚗𝚍𝚓𝚘 🤡",
 adms : "𝙴𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜𝚘𝚕𝚘 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚊𝚍𝚖𝚒𝚗𝚜 🫵😹",
 botadm : "𝙿𝚛𝚒𝚖𝚎𝚛𝚘 𝚎𝚕 𝚋𝚘𝚝 [𝚈𝚘] 𝚗𝚎𝚌𝚎𝚜𝚒𝚝𝚊 𝚊𝚍𝚖𝚒𝚗 🤡",
 privado : "𝙴𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜𝚘𝚕𝚘 𝚎𝚜 𝚙𝚊𝚛𝚊 𝚌𝚑𝚊𝚝 𝚙𝚛𝚒𝚟𝚊𝚍𝚘 𝚙𝚗𝚍𝚓𝚘 🤡",
 error : "⚠️𝙻𝚘 𝚜𝚒𝚎𝚗𝚝𝚘 𝚘𝚌𝚞𝚛𝚛𝚒𝚘 𝚞𝚗 𝚎𝚛𝚛𝚘𝚛, 𝚒𝚗𝚝𝚎𝚗𝚝𝚎𝚕𝚘 𝚍𝚎 𝚗𝚞𝚎𝚟𝚘 :/ ",
 base : "[!] 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 [!]\n\n𝚁𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚝𝚎 𝚌𝚘𝚗 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 : \n\n.𝚛𝚎𝚐 <𝚗𝚘𝚖𝚋𝚛𝚎> <𝚎𝚍𝚊𝚍> <𝚐𝚎𝚗𝚎𝚛𝚘>",
 enlace : " [!] 𝙴𝚗𝚕𝚊𝚌𝚎 𝚍𝚎𝚝𝚎𝚌𝚝𝚊𝚍𝚘 [!]\n\n𝚅𝚎 𝚊 𝚑𝚊𝚌𝚎𝚛 𝚝𝚞 𝚜𝚙𝚊𝚖 𝚊 𝚘𝚝𝚛𝚘 𝚕𝚊𝚍𝚘 𝚛𝚊𝚝𝚊 𝚍𝚎 𝚖𝚛𝚍"
 
 } 

 //------------------------------------------------------------------------------------
if(budy !== "") {
if(antitoxic.includes(from)) {
user = registeredUsers.find(user => user.number === sender);
if (user) {
const containstoxic = toxic.some(word => budy.includes(word));
if (containstoxic) {
user.warnings += 1;
saveRegisteredUsers();
if(user.warnings >= 3 && isGroupAdmins) {
const anititoxicText = `𝙷𝚊𝚜 𝚕𝚕𝚎𝚐𝚊𝚍𝚘 𝚊 𝚕𝚊𝚜 3 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 😡 @${sender.split('@')[0]} 𝙿𝚎𝚛𝚘 𝚊𝚕 𝚜𝚎𝚛 𝚊𝚍𝚖 𝚜𝚎𝚛𝚊𝚜 𝚙𝚎𝚛𝚍𝚘𝚗𝚊𝚍𝚘 `
await kira.sendMessage(from,{text : anititoxicText, mentions : [sender]})
user.warnings = 0;
saveRegisteredUsers(); 
} else if (user.warnings >= 3) {
if(!isBotGroupAdmins) return enviar("𝙽𝚎𝚜𝚎𝚜𝚒𝚝𝚘 𝚊𝚍𝚖 𝚙𝚊𝚛𝚊 𝚜𝚊𝚌𝚊𝚛 𝚊 𝚎𝚜𝚝𝚊 𝚛𝚊𝚝𝚊 😡")
await kira.groupParticipantsUpdate(from, [sender] , 'remove') 
const anititoxicText = `𝙷𝚊𝚜 𝚕𝚕𝚎𝚐𝚊𝚍𝚘 𝚊 𝚕𝚊𝚜 3 𝚊𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜 𝚜𝚎𝚛𝚊𝚜 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 😡 @${sender.split('@')[0]} `
await kira.sendMessage(from,{text : anititoxicText, mentions : [sender]})
user.warnings = 0;
saveRegisteredUsers();
} else {
const advertenciaText = `𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ${user.warnings}/3: 𝙽𝚘 𝚟𝚞𝚎𝚕𝚟𝚊𝚜 𝚊 𝚍𝚎𝚌𝚒𝚛 𝚖𝚊𝚕𝚊𝚜 𝚙𝚊𝚕𝚊𝚋𝚛𝚊𝚜 𝚘 𝚜𝚎𝚛𝚊𝚜 𝚎𝚡𝚙𝚞𝚕𝚜𝚊𝚍𝚘`
enviar(advertenciaText)
}
}
}}}
//------------------------------------------------------------------------------------
if(type == 'viewOnceMessageV2' ) {     
if(viewOnce.includes(from)) {
if(JSON.stringify(info).includes("videoMessage")) {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewVideo.viewOnce = false
viewVideo.video = {url: viewVideo.url}
viewVideo.caption += " \`𝚅𝙸𝙳𝙴𝙾 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝚄𝙽𝙰 𝚅𝙴𝚂 𝙳𝙴𝚃𝙴𝙲𝚃𝙰𝙳𝙾 𝙰𝚀𝚄𝙸 𝙽𝙾 𝚂𝙴 𝙿𝙴𝚁𝙼𝙸𝚃𝙴 𝙾𝙲𝚄𝙻𝚃𝙰𝚁 𝙽𝙰𝙳𝙰\`"
await kira.sendMessage(from, viewVideo,{quoted : info})
} else {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewImage.viewOnce = false
viewImage.image = {url: `${viewImage.url}`}
viewImage.caption += " \`𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝚄𝙽𝙰 𝚅𝙴𝚂 𝙳𝙴𝚃𝙴𝙲𝚃𝙰𝙳𝙾 𝙰𝚀𝚄𝙸 𝙽𝙾 𝚂𝙴 𝙿𝙴𝚁𝙼𝙸𝚃𝙴 𝙾𝙲𝚄𝙻𝚃𝙰𝚁 𝙽𝙰𝙳𝙰\`"
await kira.sendMessage(from, viewImage,{quoted : info})
}}}
//------------------------------------------------------------------------------------
if(budy.includes("https") && antiLink.includes(from) || budy.includes("https") && antiLink.includes(from)) {
if(isGroupAdmins) return
enviar(respuesta.enlace)
await kira.sendMessage(from, { delete: info.key });
await kira.groupParticipantsUpdate(from, [sender] , 'remove')
}
//------------------------------------------------------------------------------------

if(isGroup && comando && !isBot) {
console.log(`
${chalk.yellow('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')}
${chalk.yellow('┃')} ${chalk.dim('❏ Grupo:')} ${groupName}
${chalk.yellow('┃')} ${chalk.dim('❏ Comando:')} ${comando}
${chalk.yellow('┃')} ${chalk.dim('❏ Nombre:')} ${pushname}
${chalk.yellow('┃')} ${chalk.dim('❏ Numero:')} ${sender.split('@')[0]}
${chalk.yellow('┃')} ${chalk.dim('❏ Hora:')} ${hora}
${chalk.yellow('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛')}`)
} else if (!isGroup && comando && !isBot) {
console.log(`
${chalk.yellow('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')}
${chalk.yellow('┃')} ${chalk.dim('❏ Comando:')} ${comando}
${chalk.yellow('┃')} ${chalk.dim('❏ Nombre:')} ${pushname}
${chalk.yellow('┃')} ${chalk.dim('❏ Numero:')} ${sender.split('@')[0]}
${chalk.yellow('┃')} ${chalk.dim('❏ Hora:')} ${hora}
${chalk.yellow('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛')}`)
}

if (!stats.usersInteracted.includes(sender)) return stats.usersInteracted.push(sender)
stats.messagesReceived++

switch(comando) {
//------------------------------------------------------------------------------------
case "reg": case "registrar" :
if (args.length < 3) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 :\n\n.𝚛𝚎𝚐 <𝚗𝚘𝚖𝚋𝚛𝚎> <𝚎𝚍𝚊𝚍> <𝚐𝚎𝚗𝚎𝚛𝚘>")
const name = args[0];
const age = args[1];
const genero = args[2];
if (isUserRegistered(sender)) return enviar("𝚈𝚊 𝚎𝚜𝚝𝚊𝚜 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚍𝚘 🥸")
if (isNaN(age)) return enviar("𝙻𝚊 𝚎𝚍𝚊𝚍 𝚍𝚎𝚋𝚎 𝚜𝚎𝚛 𝚞𝚗 𝚗ú𝚖𝚎𝚛𝚘 🥸")
if (name >= 15) return enviar("𝚀𝚞𝚎 𝚗𝚘𝚖𝚋𝚛𝚎 𝚖𝚊𝚜 𝚕𝚊𝚛𝚐𝚘 𝚙𝚊𝚗𝚊 🥸")
if (age >= 50) return enviar("𝙽𝚘 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚘 𝚟𝚒𝚎𝚓𝚒𝚝𝚘𝚜 🥸")
if (age <= 10) return enviar("𝙽𝚘 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚘 𝚋𝚎𝚋𝚎𝚜 🥸")
const countryCode = sender.slice(0, 2)
let response = 'null'
if (countryCodes[countryCode]) {
response = countryCodes[countryCode]
}
try {
var photoRegister = await kira.profilePictureUrl(sender, 'image') 
} catch {
var photoRegister = "https://qu.ax/aTqx.jpg"
}
let countrys = response
const photoRegisterNew = await getBuffer(photoRegister)
const serialNumber = registerUser(sender, name, age, genero, countrys );
loadRegisteredUsers()
const registerText = `
[𝚁𝚎𝚐𝚒𝚜𝚝𝚛𝚘 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚊𝚍𝚘]\n
   ◉ 𝙽𝚘𝚖𝚋𝚛𝚎 :  ${name}
   ◉ 𝙴𝚍𝚊𝚍 :  ${age}
   ◉ 𝙶𝚎𝚗𝚎𝚛𝚘 : ${genero}
   ◉ 𝙿𝚊𝚒𝚜 :  ${response}
   ◉ 𝙵𝚎𝚌𝚑𝚊 :  ${data}
   ◉ 𝙷𝚘𝚛𝚊 :  ${hora}
   ◉ 𝙽𝚞𝚖𝚎𝚛𝚘 :  @${sender.split('@')[0]}
   ◉ 𝚃𝚞 𝚒𝚍
      ⤷ ${serialNumber}
    \n𝙿𝚊𝚛𝚊 𝚎𝚖𝚙𝚎𝚣𝚊𝚛 𝚊 𝚞𝚜𝚊𝚛 𝚎𝚕 𝚋𝚘𝚝 𝚞𝚜𝚎 .𝚖𝚎𝚗𝚞
      `
await kira.sendMessage(from,{text : registerText , contextInfo: {
mentionedJid: [sender],
"externalAdReply": {
"title": "𝙽𝚄𝙴𝚅𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 🥳",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoRegisterNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
enviar(serialNumber)
break
//------------------------------------------------------------------------------------  
case 'delet' : case "unreg": 
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (args.length < 1) return enviar("𝚈 𝚝𝚞 𝚒𝚍 ?")
const serialNumberToDelete = args[0];
if (deleteUser(sender, serialNumberToDelete)) {
enviar("𝚃𝚞 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚘 𝚜𝚎 𝚎𝚕𝚒𝚖𝚒𝚗𝚘 ✅")
} else {
enviar("[!] 𝙽𝚘 𝚜𝚎 𝚙𝚞𝚍𝚘 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚛 𝚝𝚞 𝚌𝚞𝚎𝚗𝚝𝚊 [!]\n\n𝚅𝚎𝚛𝚒𝚏𝚒𝚌𝚊 𝚝𝚞 𝚒𝚍 ")
}
break
//------------------------------------------------------------------------------------
case "id": case "uid" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
loadRegisteredUsers()
try {
user = registeredUsers.find(user => user.number === sender);
try {
var photoID = await kira.profilePictureUrl(sender, 'image') 
} catch {
var photoID = "https://qu.ax/aTqx.jpg"
}
const photoIDNew = await getBuffer(photoID)
await kira.sendMessage(from,{text : user.serialNumber, contextInfo: {
mentionedJid: [sender],
"externalAdReply": {
"title": "𝚃𝚄 𝙸𝙳 💫  ",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoIDNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
} catch (e) {
console.log(e)
}
break
//------------------------------------------------------------------------------------
case "diamantes":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
loadRegisteredUsers()
user = registeredUsers.find(user => user.number === sender);
const diamantes = `𝚃𝚒𝚎𝚗𝚎𝚜 ${user.diamonds} 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜`
enviar(diamantes);
break
//------------------------------------------------------------------------------------
case "chambear": case "work": case "trabajar" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
user = registeredUsers.find(user => user.number === sender);
const now = Date.now();
const thirtyMinutes = 30 * 60 * 1000;
if (!user.lastDiamondsTime || (now - user.lastDiamondsTime) >= thirtyMinutes) {
let randomDiamons = Math.floor(Math.random() * 10) + 1
user.diamonds += randomDiamons;
user.lastDiamondsTime = now; 
saveRegisteredUsers();
loadRegisteredUsers()
const masdiamantes = `𝚃𝚎 𝚙𝚊𝚐𝚊𝚛𝚘𝚗 ${randomDiamons} 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎/𝚜 💎`;
enviar(masdiamantes);
} else {
const remainingTime = thirtyMinutes - (now - user.lastDiamondsTime);
const minutesLeft = Math.ceil(remainingTime / 60000);
enviar(`𝙴𝚜𝚙𝚎𝚛𝚊  ${minutesLeft} 𝚖𝚒𝚗𝚞𝚝𝚘𝚜 𝚙𝚊𝚛𝚊 𝚌𝚑𝚊𝚖𝚋𝚎𝚊𝚛 𝚘𝚝𝚛𝚊 𝚟𝚎𝚣`)
}
break
//------------------------------------------------------------------------------------
case 'reporte': case "reportar":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(args.length<1) return enviar("𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝚎𝚕 𝚎𝚛𝚛𝚘𝚛 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚊 𝚛𝚎𝚙𝚘𝚛𝚝𝚊𝚛")
await kira.sendMessage('5492215034412@s.whatsapp.net',{text : `Hola creador un usuario reporto las fallas en un comando :\n\n• ${q}`},{quoted : info })
enviar("Se ha hecho el reporte exitosamente")
break
//------------------------------------------------------------------------------------
case "mimodelo": case "modelo":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
enviar(`𝚃𝚞 𝚝𝚎𝚕𝚎𝚏𝚘𝚗𝚘 𝚎𝚜: ${deviceType}`)
break 
//------------------------------------------------------------------------------------
case "horarios": case "horas" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
const option = { timeZone: 'America/Lima', hour12: false }
const dat = new Date().toLocaleDateString('PE', { ...option, day: '2-digit', month: '2-digit', year: '2-digit' })
const horaperu = new Date().toLocaleTimeString('PE', option) 
const optio = { timeZone: 'America/Buenos_Aires', hour12: false }
const da = new Date().toLocaleDateString('PE', { ...optio, day: '2-digit', month: '2-digit', year: '2-digit' })
const horaarg = new Date().toLocaleTimeString('PE', optio) 

const hor = `
◉⁠‿⁠◉ 𝙷 𝙾 𝚁 𝙰 𝚁 𝙸 𝙾 𝚂◉⁠‿⁠◉

𝙰𝚛𝚐𝚎𝚗𝚝𝚒𝚗𝚊: ${horaarg}
𝙼𝚎𝚡𝚒𝚌𝚘: ${hora}
𝙿𝚎𝚛𝚞: ${horaperu}
`
enviar(hor)
break
//------------------------------------------------------------------------------------
 case "repetir": case "decir" :
 if (!isUserRegistered(sender)) return enviar(respuesta.base)
 enviar(q)
 break
 //------------------------------------------------------------------------------------
case "menu": case "help": case "comandos": case ".":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
const sol6 = fs.readFileSync("./media/img/menu.jpg");
const registeredUsersCount = registeredUsers.length;
const nowMenu = Date.now();
const elapsed = nowMenu - botStartTime;
const op = { timeZone: 'America/Buenos_Aires', hour12: false }
const kai = new Date().toLocaleDateString('PE', { ...op, day: '2-digit', month: '2-digit', year: '2-digit' })
const horaag = new Date().toLocaleTimeString('PE', op) 
const hours = Math.floor(elapsed / (1000 * 60 * 60));
const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
const botUptime = `${hours} horas, ${minutes} minutos, ${seconds} segundos`;

const menuText = `
🌸 *𝐊𝐈𝐑𝐀 𝐁𝐎𝐓 𝐎𝐅𝐂* 🌸


📊 *𝐄𝐒𝐓𝐀𝐃𝐈𝐒𝐓𝐈𝐂𝐀𝐒* 📊
╭──────•◈•──────╮
- Usuarios registrados: ${registeredUsersCount}
- Hora actual: ${horaag}
- Actividad del bot: ${botUptime}
╰───── • ◆ • ─────╯

🪷 *𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒* 🪷
╭──────•◈•──────╮
- \`horarios\` - Consulta los horarios de LATAM.
- \`repetir\` - Repite lo que digas.
- \`mimodelo\` - Muestra si tu teléfono es Android o iPhone.
- \`reporte\` - Reporta un problema o sugerencia.
- \`gemini\` - Habla con la IA de Google (Gemini)
- \`owners\` - Mira mis creadores 
- \`pregunta\` - Haz una pregunta al bot.
- \`infoestado\` - Ve el estado del bot
╰───── • ◆ • ─────╯
🌠 *𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐆𝐑𝐔𝐏𝐎* 🌠
╭──────•◈•──────╮
- \`demote\` - Degradar a un administrador.
- \`promote\` - Promocionar a un miembro a administrador.
- \`kick\` - Expulsar a un miembro del grupo.
- \`kick2\` - Expulsar a un miembro del grupo por su mensaje.
- \`añadir\` - Añadir un miembro al grupo.
- \`welcome on/off\` - Activar o desactivar mensajes de bienvenida.
- \`antiviewonce on/off\` - Activar o desactivar imágenes ver una ves.
- \`antitoxic on/off\` - Activar o desactivar antitoxicidad.
- \`antilink on/off\` - Activar o desactivar links.
- \`anularlink\` - Anular el enlace del grupo.
- \`grupo open/close\` - Abrir o cerrar el grupo.
- \`adms\` - Muestra a los administradores del grupo.
- \`newname\` - Cambia el nombre del grupo.
- \`newdesc\` - Cambiar la descripción del grupo.
- \`newfoto\` - Cambiar la foto del grupo.
- \`todos\` - Menciona a todos en el grupo.
- \`encuesta\` - Crea una encuesta.
╰───── • ◆ • ─────╯
📌 *𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐑* 📌
╭──────•◈•──────╮
- \`reg\` - Registrar un nuevo usuario.
- \`delet <id>\` - Eliminar un usuario registrado por ID.
- \`id\` - Consultar tu ID de usuario.
- \`usuarios\` - Ver información de usuarios registrados.
- \`data0\` - Resetea tu progreso (incluyendo diamantes, coins y etc)
- \`perfil\` - Mira tu perfil 
╰───── • ◆ • ─────╯
💎 *𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀* 💎
╭──────•◈•──────╮
- \`chambear\` - Ganar más diamantes.
- \`coins\` - Mira tus monedas
- \`comprar 5\` - Compra 5 monedas por 25 diamantes 
- \`diamantes\` - Consultar tu saldo de diamantes.
- \`top\` - Muestra el top de usuarios con más diamantes y coins
- \`shop\` - Ve objetos de la tienda
- \`buy\` - Compra objetos de la tienda
- \`vercompras\` - Mira tus compras
- \`slot\` - Juega a la tragamonedas.
╰───── • ◆ • ─────╯
🎮 *𝐉𝐔𝐄𝐆𝐎𝐒* 🎮
╭──────•◈•──────╮
- \`gay\` - Ver el nivel de gay a un usuario 
- \`besar\` - Besa a un usuario 
- \`racista\` - Revisa el nivel de racismo de usuarios
- \`trio\` - Forma un trío aleatorio.
- \`ship\` - Hace un ship (emparejamiento).
- \`love\` - Medidor de amor.
- \`amistad\` - Muestra amistad
- \`topotakus\` - Muestra el top de otakus.
- \`toppendejos\` - Muestra el top de usuarios pendejos.
- \`topgays\` - Muestra el top de usuarios gays.
- \`follar\` - Folla usuarios
- \`nalguear\` - Nalguea a usuarios
- \`ppt\` - Juega piedra, papel o tijera.
- \`formarpareja\` - Forma parejas 
- \`personalidad\` - Muestra tu personalidad
╰───── • ◆ • ─────╯
📥 *𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒* 📥
╭──────•◈•──────╮
- \`play\` - Descarga canciones de youtube por nombre.
- \`play2\` - Descarga videos de youtube por nombre.
- \`ytmp3\` - Descarga canciones de youtube por link.
- \`ytmp4\` - Descarga videos de youtube por link.
- \`yt\` - Busca videos de youtube por nombre.
- \`tiktok\` - Descarga videos de tiktok con link.
- \`mediafire\` - Descarga archivos de mediafire con link.
╰───── • ◆ • ─────╯
🔎 *𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒* 🔍
╭──────•◈•──────╮
- \`github\` - Buscar perfiles de github por nombre.
- \`apk\` - Descarga apks por nombre.
- \`gogle\` - Hacer búsqueda en Google 
╰───── • ◆ • ─────╯
📁 *𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒* 📁
╭──────•◈•──────╮
- \`stiker\` - Convertir imagen a stiker.
- \`toimg\` - Convertir stiker a imagen.
- \`tomp3\` - Convertir video a audio.
- \`tourl\` - Convertir archivo a link.
- \`ofuscar\` - Convertir código a código ofuscado
╰───── • ◆ • ─────╯
👑 *𝐎𝐖𝐍𝐄𝐑𝐒* 👑
╭──────•◈•──────╮
- \`usuarios\` - Mostrar usuarios de la DB.
- \`infoestado\` - Mostrar estado del server.
- \`modulos\` - Muestra los modulos.
- \`addcase\` - Añade comandos.
- \`chetar\` - Te da mas diamantes .
- \`adddiamantes\` - Añade diamantes a usuarios.
- \`anticall\` - Prohibir llamadas al bot.
╰───── • ◆ • ─────╯

✨ ¡Disfruta de todos los beneficios que ofrece *KIRA BOT OFC*! ✨
`;
enviarImgcap(sol6, menuText);
break
//------------------------------------------------------------------------------------
case "coins": case "monedas":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let coin = registeredUsers.find(coin => coin.number === sender);
const co = `𝚃𝚒𝚎𝚗𝚎𝚜 ${coin.coins} 𝚖𝚘𝚗𝚎𝚍𝚊𝚜 🪙`
enviar(co);
break
//------------------------------------------------------------------------------------    
case "comprar":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let cu = registeredUsers.find(y => y.number === sender);
if (cu.diamonds >= 25) {
cu.diamonds -= 25;
cu.coins += 5;
enviar("𝙲𝚘𝚖𝚙𝚛𝚊𝚜𝚝𝚎 𝚖𝚘𝚗𝚎𝚍𝚊𝚜 🪙")
} else {
enviar("𝙽𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚜𝚞𝚏𝚒𝚌𝚒𝚎𝚗𝚝𝚎𝚜 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 😹🫵");
}
break   
//------------------------------------------------------------------------------------					
case 'gemini': case 'ia':
if(!isUserRegistered(sender)) return enviar(respuesta.base);
if(args.length < 1) return enviar("𝚈 𝚎𝚕 𝚝𝚎𝚡𝚝𝚘");
let text = args.join(' '); 
(async () => {
try {
let geminiResponse = await fetch(`https://delirius-api-oficial.vercel.app/api/gemini?query=${encodeURIComponent(text)}`);
let geminiData = await geminiResponse.text();
try {
let responseData = JSON.parse(geminiData);
if (responseData.message) {
geminiData = responseData.message;
}
} catch {
enviar(respuesta.error);
return;
}
geminiData = geminiData.replace(/[^\x20-\x7E]/g, ''); 
enviar(geminiData);
} catch (error) {
console.error(error);
enviar(respuesta.error);
}
})();
break
//------------------------------------------------------------------------------------
case 'data0':
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let userIndex = registeredUsers.findIndex(user => user.number === sender);
if (userIndex !== -1) {
registeredUsers.splice(userIndex, 1);
enviar('Tus datos han sido reseteados correctamente.');
}
break;
//------------------------------------------------------------------------------------
case "owners":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let vcard = 
'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN: 𝙱𝚛𝚊𝚗.𝚣𝚝𝚠 👑\n' 
+ 'ORG: 𝙾𝚠𝚗𝚎𝚛 ;\n'
+ 'TEL;type=CELL;type=VOICE;waid=5214271859535:+52 427 185 95 35\n'
+ 'END:VCARD'
await kira.sendMessage(from,{contacts: { displayName: '𝙱𝚛𝚊𝚗.𝚣𝚝𝚠', contacts: [{ vcard }] }})
vcard = 
'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN: 𝙼𝚊𝚝𝚢𝚊𝚜 𝙲𝚛𝚢𝚙𝚝𝚘 👑\n' 
+ 'ORG: 𝙾𝚠𝚗𝚎𝚛 ;\n'
+ 'TEL;type=CELL;type=VOICE;waid=5492215034412:+54 9 221 503-4412\n'
+ 'END:VCARD'
await kira.sendMessage(from,{contacts: { displayName: '𝙼𝚊𝚝𝚢𝚊𝚜 𝙲𝚛𝚢𝚙𝚝𝚘', contacts: [{ vcard }] }})
break
//------------------------------------------------------------------------------------
case "top": case "tops" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
const topCoins = registeredUsers
.sort((a, b) => b.coins - a.coins)
.slice(0, 10);
const topDiamonds = registeredUsers
.sort((a, b) => b.diamonds - a.diamonds)
.slice(0, 10);
let topText = `
🏅 *𝐓𝐎𝐏 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒* 🏅

💰 *𝐌𝐀𝐘𝐎𝐑 𝐂𝐀𝐍𝐓𝐈𝐃𝐀𝐃 𝐃𝐄 𝐌𝐎𝐍𝐄𝐃𝐀𝐒* 💰
╭──────•◈•──────╮
`;
    topCoins.forEach((user, index) => {
        let username = user.number.split('@')[0];
        topText += `${index + 1}. @${username} - ${user.coins} monedas\n`;
    });

    topText += `
╰───── • ◆ • ─────╯

💎 *𝐌𝐀𝐘𝐎𝐑 𝐂𝐀𝐍𝐓𝐈𝐃𝐀𝐃 𝐃𝐄 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒* 💎
╭──────•◈•──────╮
`;

    topDiamonds.forEach((user, index) => {
        let username = user.number.split('@')[0];
        topText += `${index + 1}. @${username} - ${user.diamonds} diamantes\n`;
    });

    topText += `
╰───── • ◆ • ─────╯
`;
enviar(topText);
break
//------------------------------------------------------------------------------------       
case "perfil":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let hh = registeredUsers.find(l => l.number === sender);
const perfilText = `
🌟 *Perfil de Usuario* 🌟
        
📋 *Nombre:* ${hh.name}
📅 *Edad:* ${hh.age}
🆔 *ID:* ${hh.serialNumber}
💎 *Diamantes:* ${hh.diamonds}
🪙 *Coins:* ${hh.coins}
⚠️ *Advertencias:* ${hh.warnings}
`;
try {
var photoPerfil = await kira.profilePictureUrl(sender, 'image') 
} catch {
var photoPerfil = "https://qu.ax/aTqx.jpg"
}
const photoPerfilNew = await getBuffer(photoPerfil)
await kira.sendMessage(from,{text : perfilText , contextInfo: {
mentionedJid: [sender],
"externalAdReply": {
"title": "𝚃𝚄 𝙿𝙴𝚁𝙵𝙸𝙻 💫  ",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoPerfilNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
}) 
break
//------------------------------------------------------------------------------------       
case "buy":
    const itemID = parseInt(args[0]); 
    const ñaña = registeredUsers.find(ur => ur.number === sender);

    if (!ñaña) {
        enviar("Usuario no registrado.");
        break;
    }

    const itemToBuy = items.find(item => item.id === itemID);
    if (!itemToBuy) {
        enviar("Artículo no encontrado en la tienda.");
        break;
    }

    if (args[1] === 'diamantes') {
        if (ñaña.diamonds >= itemToBuy.priceD) {
            ñaña.diamonds -= itemToBuy.priceD;
            if (!ñaña.purchases) ñaña.purchases = [];
            ñaña.purchases.push(itemToBuy); 
            
            enviar(`Has comprado ${itemToBuy.name} por ${itemToBuy.priceD} diamantes.\n\nEscribe '¡vercompras' para ver tus compras`);
        } else {
            enviar("No tienes suficientes diamantes para comprar este artículo.");
        }
    } else if (args[1] === 'coins') {
        if (ñaña.coins >= itemToBuy.priceC) {
            ñaña.coins -= itemToBuy.priceC;
            if (!ñaña.purchases) ñaña.purchases = [];
            ñaña.purchases.push(itemToBuy); 
            
            enviar(`Has comprado ${itemToBuy.name} por ${itemToBuy.priceC} coins.\n\nEscribe '¡vercompras' para ver tus compras`);
        } else {
            enviar("No tienes suficientes coins para comprar este artículo.");
        }
    } else {
        enviar("Debes especificar 'diamantes' o 'coins' como método de pago.");
    }
    break;
    
case "vercompras":
    const ña = registeredUsers.find(user => user.number === sender);

    if (!ña) {
        enviar("Usuario no registrado.");
        break;
    }

    let purchasesText = "🛒 *Tus Compras Realizadas* 🛒\n\n";
    if (ña.purchases.length === 0) {
        purchasesText += "Aún no has realizado ninguna compra.\n";
    } else {
        ña.purchases.forEach(item => {
            purchasesText += `🔹 ${item.name} (${item.type})\n`;
        });
    }

    enviar(purchasesText);
    break


case 'shop':
        let shopMessage = "🛍️ *Tienda* 🛍️\n\n";
        shopMessage += "📜 *Guía de Uso 📜*\n";
        shopMessage += "Para comprar un artículo, usa el comando `buy` seguido del ID del artículo y el método de pago ('diamantes' o 'coins'). Por ejemplo:\n";
        shopMessage += "```\n";
        shopMessage += "!buy <ID del artículo> diamantes\n";
        shopMessage += "!buy <ID del artículo> coins\n";
        shopMessage += "```\n\n";

        items.forEach(item => {
            shopMessage += `🔹 ${item.name} (${item.type})\n`;
            shopMessage += `   - Precio en diamantes: ${item.priceD} 💎\n`;
            shopMessage += `   - Precio en coins: ${item.priceC} 🪙\n\n`;
        });

        enviar(shopMessage); 
        break; 
//------------------------------------------------------------------------------------          
 case 'encuesta': {
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let input = args.join(' ')
let matches = input.match(/title:(.*)opciones:(.*)/s)
if (!matches || matches.length < 3) return enviar("𝙰𝚌𝚌𝚒𝚘𝚗 𝚖𝚊𝚕 𝚑𝚎𝚌𝚑𝚊\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘: \n\n.𝚎𝚗𝚌𝚞𝚎𝚜𝚝𝚊 𝚝𝚒𝚝𝚕𝚎: <𝚝𝚒𝚝𝚞𝚕𝚘> 𝚘𝚙𝚌𝚒𝚘𝚗𝚎𝚜: <𝚘𝚙𝚌𝚒𝚘𝚗1, 𝚘𝚙𝚌𝚒𝚘𝚗2>")
let title = matches[1].trim()
let options = matches[2].trim().split(',').map(option => option.trim())        
if (options.length < 2) return enviar("𝙳𝚎𝚟𝚎𝚜 𝚌𝚘𝚕𝚘𝚌𝚊𝚛 𝚍𝚘𝚜 𝚘 𝚖𝚊𝚜 𝚘𝚙𝚌𝚒𝚘𝚗𝚎𝚜... 🥸")
kira.sendPoll(from, title, options);
}
break       
//------------------------------------------------------------------------------------
// OWNERS
case 'addcase':  
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isOwner && !isBot) return enviar(respuesta.dono) 
if(args.length<1) return enviar("𝚈 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘?")
try {  
const addcase =[fs.readFileSync('index.js', 'utf8').slice(0, fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('index.js', 'utf8').slice(fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5)].join('\n\n');  
fs.writeFileSync('index.js', addcase)  
enviar("𝙲𝚊𝚜𝚎 𝚊𝚐𝚛𝚎𝚑𝚊𝚍𝚘 𝚊 𝚕𝚊 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜 🌸")
} catch {  
enviar(respuesta.error)
}  
break 
//---------------------------------------------------------------------------------
case "usuarios":
if(!isOwner && !isBot) return enviar(respuesta.dono)
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let usersList = `𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚎𝚗 𝚕𝚊 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜 🌸\n\n 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚜: $}registeredUsers.length}`
registeredUsers.forEach(user => {
usersList += `𝙽𝚞𝚖𝚎𝚛𝚘: ${user.number}\n𝙽𝚘𝚖𝚋𝚛𝚎: ${user.name}\n𝙴𝚍𝚊𝚍: ${user.age}\n𝙶𝚎𝚗𝚎𝚛𝚘: ${user.generos}\n𝙿𝚊𝚒𝚜: ${user.countrys}\n𝙸𝚍: ${user.serialNumber}\n𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜: ${user.diamonds}\n𝙲𝚘𝚒𝚗𝚜: ${user.coins}\n𝙰𝚍𝚟𝚎𝚛𝚝𝚎𝚗𝚌𝚒𝚊𝚜: ${user.warnings}\n\n`;
});
enviar(usersList)
break
//------------------------------------------------------------------------------------
case "chetar":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isOwner && !isBot) return enviar(respuesta.dono) 
let ra = registeredUsers.find(ra => ra.number === sender);
ra.diamonds += 999999999;
saveRegisteredUsers();
const chetar = `𝚃𝚎 𝚑𝚊𝚜 𝚌𝚑𝚎𝚝𝚊𝚍𝚘 𝚌𝚘𝚗 999999999 𝙳𝚒𝚊𝚖𝚊𝚋𝚝𝚎𝚜 💎`;
enviar(chetar)
break
//------------------------------------------------------------------------------------
case 'infoestado':
if (!isUserRegistered(sender)) return enviar(respuesta.base);
const startTime = performance.now();
const endTime = performance.now();
const speed = (endTime - startTime).toFixed(2);
const totalMemMb = (os.totalmem() / (1024 * 1024)).toFixed(2); 
const freeMemMb = (os.freemem() / (1024 * 1024)).toFixed(2);   
const usedMemMb = (totalMemMb - freeMemMb).toFixed(2);         
const cpus = os.cpus();
const cpuUsage = cpus.map(cpu => {
const times = cpu.times;
const total = times.user + times.nice + times.sys + times.idle + times.irq;
return {
model: cpu.model,
speed: cpu.speed,
usage: ((times.user + times.sys + times.nice) / total) * 100
    };
  });
const cpuInfo = cpuUsage.map((cpu, index) => `🖥 *CPU ${index + 1}*:
  • Modelo: ${cpu.model}
  • Velocidad: ${cpu.speed} MHz
  • Uso: ${cpu.usage.toFixed(2)}%`).join('\n\n');

  
const estadoMessage = `🔍 *Estado del Bot* 🔍
  \n🚀 *Velocidad del Bot:* ${speed} ms
  \n💾 *RAM Total:* ${totalMemMb} MB
  \n📉 *RAM Libre:* ${freeMemMb} MB
  \n📊 *RAM Utilizada:* ${usedMemMb} MB
  \n\n${cpuInfo}
  \n👥 *Usuarios que han interactuado:* ${stats.usersInteracted.length}
  \n📩 *Mensajes recibidos:* ${stats.messagesReceived}
  \n✉️ *Mensajes enviados:* ${stats.messagesSent}`;

enviar(estadoMessage)
break
//------------------------------------------------------------------------------------
case 'adddiamantes':
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isOwner(sender) || isBot ) return enviar(respuesta.dono) 
if(!isGroup) return enviar(respuesta.grupos)
if (args.length < 2) return enviar("𝙰𝚌𝚌𝚒𝚘𝚗 𝚖𝚊𝚕 𝚑𝚎𝚌𝚑𝚊 𝙴𝚓𝚎𝚖𝚘𝚕𝚘 : <@𝚝𝚊𝚐> <𝚌𝚊𝚗𝚝>")
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
const mentionedNumber = mentioned.split('@')[0];
const diamondsToAdd = parseInt(args[1], 10);
if (isNaN(diamondsToAdd) || diamondsToAdd <= 0) return enviar("𝙻𝚊 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 𝚍𝚎𝚟𝚎 𝚜𝚎𝚛 𝚞𝚗 𝚗𝚞𝚖𝚎𝚛𝚘 𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘")
const mentionedUser = registeredUsers.find(user => user.number === mentioned);
if (!mentionedUser) return enviar("𝙴𝙻 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚍𝚘 ")
 mentionedUser.diamonds += diamondsToAdd;
saveRegisteredUsers();
const adddiamanteText = `
[𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁𝙴𝙽𝙲𝙸𝙰]

𝙳𝚎 : @${sender.split('@')[0]}
𝙿𝚊𝚛𝚊 : @${mentioned.split('@')[0]}
𝙲𝚊𝚗𝚝𝚒𝚍𝚊𝚍 : ${diamondsToAdd}

𝚂𝚎 𝚛𝚎𝚊𝚕𝚒𝚣𝚘 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘
 `
try {
var photoTransferencia = await kira.profilePictureUrl(sender, 'image') 
} catch {
var photoTransferencia = "https://qu.ax/aTqx.jpg"
}
const photoTransferenciaNew = await getBuffer(photoTransferencia)
await kira.sendMessage(from,{text : adddiamanteText , contextInfo: {
mentionedJid: [sender, mentioned ],
"externalAdReply": {
"title": "𝚃 𝚁 𝙰 𝙽 𝚂 𝙵 𝙴 𝚁 𝙴 𝙽 𝙲 𝙸 𝙰  ",
"body": wm,
"showAdAttribution": true,
"thumbnail": photoTransferenciaNew,
"sourceUrl": linksGit[Math.floor(Math.random() * linksGit.length)]
}
}
})
break
//------------------------------------------------------------------------------------
case "addtetas" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isOwner && isBot ) return enviar(respuesta.dono) 
bobs.push(q);
fs.writeFileSync('./media/nftw/bobs.json', JSON.stringify(bobs, null, 2));
enviar("𝙻𝚒𝚗𝚔 𝚊𝚗̃𝚊𝚍𝚒𝚍𝚘 𝚊 𝚕𝚊 𝚋𝚊𝚜𝚎 𝚍𝚎 𝚍𝚊𝚝𝚘𝚜 🌸")
break 
//------------------------------------------------------------------------------------
case "modulos":
if (!isUserRegistered(sender)) return enviar(respuesta.base);
if(!isOwner && isBot ) return enviar(respuesta.dono) 
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const modules = fs.readdirSync(nodeModulesPath).filter(module => !module.startsWith('.'));
const totalModules = modules.length;
const modulosInstalados = `] 𝙼𝙾𝙳𝚄𝙻𝙾𝚂 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙳𝙾𝚂 ]
𝙼𝚘𝚍𝚞𝚕𝚘𝚜 𝚒𝚗𝚜𝚝𝚊𝚕𝚊𝚍𝚘𝚜 : ${totalModules}
𝙼𝚒𝚜 𝚖𝚘𝚍𝚞𝚕𝚘𝚜: \n\n
  ${modules.join('\n  ')}
`
enviar(modulosInstalados);
break
//------------------------------------------------------------------------------------
//      GRUPOS
case "welcome" : case "bienvenida" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length<1) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚠𝚎𝚕𝚌𝚘𝚖𝚎 <𝚘𝚗/𝚘𝚏𝚏>")
if(args[0]== "on" ) {
if(iswelkom) return enviar("𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚢𝚊 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ✅")
welkom.push(from)
fs.writeFileSync("./libs/welkom.json",JSON.stringify(welkom))
reaccionar("✅")
enviar("𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝙰𝚌𝚝𝚒𝚟𝚊𝚍𝚘  ✅")
} else if (args[0]== "off" ) {
if(!iswelkom) return enviar("𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
const id = from
proceso = welkom.indexOf(id)
while(proceso>=0) {
welkom.splice(proceso, 1)
proceso = welkom.indexOf(id)
}
fs.writeFileSync("./libs/welkom.json",JSON.stringify(welkom))
reaccionar("❎")
enviar("𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝙳𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
} else {
enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚠𝚎𝚕𝚌𝚘𝚖𝚎 <𝚘𝚗/𝚘𝚏𝚏>")
}
break
//------------------------------------------------------------------------------------
case "anticall" : case "antillamadas":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(isGroup) return enviar(respuesta.privado)
if (!isOwner(sender)) return enviar(respuesta.dono)
if(args.length<1) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝚌𝚊𝚕𝚕 <𝚘𝚗/𝚘𝚏𝚏>")
if(args[0]== "on" ) {
if(iscall) return enviar("𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕 𝚢𝚊 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ✅")
call.push(numerodono)
fs.writeFileSync("./libs/call.json",JSON.stringify(call))
reaccionar("✅")
enviar("𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕 𝙰𝚌𝚝𝚒𝚟𝚊𝚍𝚘  ✅")
} else if (args[0]== "off" ) {
if(!iscall) return enviar("𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
const perquiCL = numerodono
procesoCL = call.indexOf(perquiCL)
while(procesoCL>=0) {
call.splice(procesoCL, 1)
procesoCL = call.indexOf(perquiCL)
}
fs.writeFileSync("./libs/call.json",JSON.stringify(call))
reaccionar("❎")
enviar("𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕 𝙳𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
} else {
enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝚌𝚊𝚕𝚕 <𝚘𝚗/𝚘𝚏𝚏>")
}
break
//------------------------------------------------------------------------------------
case "antilink" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length<1) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 <𝚘𝚗/𝚘𝚏𝚏>")
if(args[0]== "on" ) {
if(isLink) return enviar("𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔 𝚢𝚊 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ✅")
antiLink.push(from)
fs.writeFileSync("./libs/antiLink.json",JSON.stringify(antiLink))
reaccionar("✅")
enviar("𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔 𝙰𝚌𝚝𝚒𝚟𝚊𝚍𝚘  ✅")
} else if (args[0]== "off" ) {
if(!isLink) return enviar("𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
proceso = antiLink.indexOf(from)
while(proceso>=0) {
antiLink.splice(proceso, 1)
proceso = antiLink.indexOf(from)
}
fs.writeFileSync("./libs/antiLink.json",JSON.stringify(antiLink))
reaccionar("❎")
enviar("𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔 𝙳𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
} else {
enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝙻𝚒𝚗𝚔 <𝚘𝚗/𝚘𝚏𝚏>")
}
break 
//------------------------------------------------------------------------------------
case "grupo" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length<1) return enviarTxt("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 \n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚐𝚛𝚞𝚙𝚘 𝚘𝚙𝚎𝚗/𝚌𝚕𝚘𝚜𝚎 ")
if(args[0] === "open" || args[0] === "abrir") {
try {
await kira.groupSettingUpdate(from, 'not_announcement')
reaccionar('🔓')
} catch(e) {
enviar(respuesta.error)
}
} else if(args[0] == "close" || args[0] == "cerrar") {
try {
await kira.groupSettingUpdate(from, 'announcement')
reaccionar('🔒')
} catch {
enviar(respuesta.error)
}
}
break
//------------------------------------------------------------------------------------
case "newdesc" : case "nuevadesc" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length<1) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 \n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚗𝚎𝚠𝚍𝚎𝚜𝚌 𝙽𝚞𝚎𝚟𝚊 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗 ")
try {
await kira.groupUpdateDescription(from, `${q}`)
enviar("𝙻𝚊 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗 𝚏𝚞𝚎 𝚌𝚊𝚖𝚋𝚒𝚊𝚍𝚊 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘✅")
reaccionar("✅")
} catch {
enviar(respuesta.error)
}
break 
//------------------------------------------------------------------------------------
case "anularlink" : case "resetlink" : case "newlink" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
try {
await kira.groupRevokeInvite(from)
const linkp = await kira.groupInviteCode(from)
enviar(`[!] 𝚂𝚎 𝚛𝚎𝚜𝚝𝚊𝚋𝚕𝚎𝚌𝚒𝚘 𝚎𝚕 𝚕𝚒𝚗𝚔 𝚍𝚎 𝚒𝚗𝚟𝚒𝚝𝚊𝚌𝚒𝚘𝚗 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘\n\n 𝙽𝚞𝚎𝚟𝚘 𝚕𝚒𝚗𝚔 : https://chat.whatsapp.com/${linkp} `)
reaccionar("✅")
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case "agregar" : case "add" : case "meter" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length <= 0) return enviar("𝙴𝚜𝚌𝚛𝚒𝚋𝚊 𝚎𝚕 𝚗𝚞𝚖𝚎𝚛𝚘 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊 𝚖𝚊𝚗𝚍𝚊𝚛𝚕𝚎 𝚕𝚊 𝚒𝚗𝚟𝚒𝚝𝚊𝚌𝚒𝚘𝚗 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚜𝚒𝚗 + \n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : .𝚊𝚍𝚍 524425278791 ")
if(q.includes("+")) return enviar("𝙴𝚜𝚌𝚛𝚒𝚋𝚊 𝚎𝚕 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚒𝚗 + ")
try {
const linkadd = await kira.groupInviteCode(from)
const linksadd = `https://chat.whatsapp.com/${linkadd}` 
kira.sendMessage(q+"@s.whatsapp.net",{ text : `Entra ${linksadd}`, mentions : [sender]})
reaccionar("✅")
enviar("𝚂𝚎 𝚕𝚎 𝚎𝚗𝚟𝚒𝚘 𝚕𝚊 𝚒𝚗𝚟𝚒𝚝𝚊𝚌𝚒𝚘𝚗 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘 ✅")
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case "kick" : case "sacar" : case "eliminar" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar("𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊 𝚊 𝚕𝚊 𝚙𝚎𝚛𝚜𝚘𝚗𝚊 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚊𝚜 𝚜𝚊𝚌𝚊𝚛, 𝚗𝚘 𝚜𝚘𝚢 𝚊𝚍𝚒𝚟𝚒𝚗𝚘🤡") 
try {
let sacar = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kira.groupParticipantsUpdate(from, [sacar] , 'remove')
} catch {
enviar(repuesta.error)
}
break
//------------------------------------------------------------------------------------
case "kick2" : case "sacar2" : case "eliminar2" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
const quotedParticipant = info.message.extendedTextMessage.contextInfo.participant;
if(!quotedParticipant) return enviar("𝙰𝚑 𝚚𝚞𝚒𝚎𝚗 𝚜𝚊𝚌𝚘? 🤡")
try {
await kira.groupParticipantsUpdate(from, [quotedParticipant] , 'remove')
} catch {
enviar(repuesta.error)
}
break
//------------------------------------------------------------------------------------
case "newadm" : case "promote" : case "daradm" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar("𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊 𝚊 𝚕𝚊 𝚙𝚎𝚛𝚜𝚘𝚗𝚊 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚊𝚜 𝚍𝚊𝚛 𝚊𝚍𝚖, 𝚗𝚘 𝚜𝚘𝚢 𝚊𝚍𝚒𝚟𝚒𝚗𝚘🤡") 
try {
let promotes = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kira.groupParticipantsUpdate(from, [promotes] , 'promote')
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case "newfoto" : case "nuevafoto":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(!isImage && !isQuotedImage) return enviar("𝚈 𝚕𝚊 𝚒𝚖𝚊𝚐𝚎𝚗")
newfoto = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await kira.updateProfilePicture(from, newfoto)
break 
//------------------------------------------------------------------------------------
case "quitaradm" : case "demote" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar("𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊 𝚊 𝚕𝚊 𝚙𝚎𝚛𝚜𝚘𝚗𝚊 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚊𝚜 𝚚𝚞𝚒𝚝𝚊𝚛𝚕𝚎 𝚊𝚍𝚖, 𝚗𝚘 𝚜𝚘𝚢 𝚊𝚍𝚒𝚟𝚒𝚗𝚘🤡") 
try {
let demotes = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kira.groupParticipantsUpdate(from, [demotes] , 'demote')
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------    
case "antitoxic" : case "antigroserias":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(`${respuesta.adms}`)
if(!isBotGroupAdmins) return enviar(`${respuesta.botadm}`) 
if(args.length<1) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌 <𝚘𝚗/𝚘𝚏𝚏>")
if(args[0]== "on" ) {
if(isantitoxic) return enviar("𝙰𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌 𝚢𝚊 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ✅")
antitoxic.push(from)
fs.writeFileSync("./libs/antitoxic.json",JSON.stringify(antitoxic))
reaccionar("✅")
enviar("𝙰𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌 𝙰𝚌𝚝𝚒𝚟𝚊𝚍𝚘  ✅ ")
} else if (args[0]== "off" ) {
if(!isantitoxic) return enviar("𝙰𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
const perquiTX = from
procesoTX = antitoxic.indexOf(perquiTX)
while(procesoTX>=0) {
antitoxic.splice(procesoTX, 1)
procesoTX = antitoxic.indexOf(perquiTX)
}
fs.writeFileSync("./libs/antitoxic.json",JSON.stringify(antitoxic))
reaccionar("❎")
enviar("𝙰𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌 𝙳𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
} else {
enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝚝𝚘𝚡𝚒𝚌 <𝚘𝚗/𝚘𝚏𝚏>")
}
break
//------------------------------------------------------------------------------------
/*case 'hidetag' :
case 'Hidetag' :
case 'HIDETAG' :
case 'mensaje' :
case 'Mensaje' :
case 'MENSAJE' :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar (respuesta.grupos)
if(!isGroupAdmins) return enviar ("lo siento, mi pequeño nazi en potencia, pero no eres administrador")
			var group = await kira.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: q,
			contextInfo: { mentionedJid: mem },
			quoted: m
			}
			kira.sendMessage(from, optionshidetag, text)
			break*/

//------------------------------------------------------------------------------------
case "newname" : case "nuevonombre" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length<1) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚗𝚎𝚠𝙽𝚊𝚖𝚎 𝚗𝚞𝚎𝚟𝚘 𝚗𝚘𝚖𝚋𝚛𝚎 ")
try {
await kira.groupUpdateSubject(from, `${q}`)
reaccionar('✅')
} catch {
enviar(respuesta.error)
}
break 
//------------------------------------------------------------------------------------
case "invocar" : case "todos" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length <= 0) return enviar("𝚈 𝚎𝚕 𝚝𝚎𝚡𝚝𝚘? ")
try {
let teks = ` 📢 𝙺𝙸𝚁𝙰 𝙻𝙾𝚂 𝙸𝙽𝚅𝙾𝙲𝙰📢 \n\n`
const oi = `◉ 𝙼𝚎𝚗𝚜𝚊𝚓𝚎 : ${q}`
teks += `${oi}\n\n`
for (let mem of groupMembers) {
teks += `➥ @${mem.id.split('@')[0]}\n`
}
kira.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, {quoted : SvnC})
 } catch {
 enviar(repuesta.error)
 }
break
//------------------------------------------------------------------------------------
case "adms" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
if(args.length <= 0) return enviar("𝚈 𝚎𝚕 𝚝𝚎𝚡𝚝𝚘? ")
try {
const participants = groupMembers
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}.@${v.id.split('@')[0]}`).join('\n');
const msgadm = `📢 𝙰 𝙳 𝙼 𝙸 𝙽 𝚂 📢 \n\n  ◉ 𝙼𝚎𝚗𝚜𝚊𝚓𝚎 : ${q} \n\n${listAdmin}`
kira.sendMessage(from, { text: msgadm, mentions: participants.map(a => a.id) }, {quoted : SvnC})
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case "antiviewonce" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(`${respuesta.adms}`)
if(!isBotGroupAdmins) return enviar(`${respuesta.botadm}`) 
if(args.length<1) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎 <𝚘𝚗/𝚘𝚏𝚏>")
if(args[0]== "on" ) {
if(isviewOnce) return enviar("𝙰𝚗𝚝𝚒𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎 𝚢𝚊 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ✅")
viewOnce.push(from)
fs.writeFileSync("./libs/viewOnce.json",JSON.stringify(viewOnce))
reaccionar("✅")
enviar("𝙰𝚗𝚝𝚒𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎 𝙰𝚌𝚝𝚒𝚟𝚊𝚍𝚘  ✅")
} else if (args[0]== "off" ) {
if(!isviewOnce) return enviar("𝙰𝚗𝚝𝚒𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎 𝚗𝚘 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
const perquiOV = from
procesoOV = viewOnce.indexOf(perquiOV)
while(procesoOV>=0) {
viewOnce.splice(procesoOV, 1)
procesoOV = viewOnce.indexOf(perquiOV)
}
fs.writeFileSync("./libs/viewOnce.json",JSON.stringify(viewOnce))
reaccionar("❎")
enviar("𝙰𝚗𝚝𝚒𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎 𝙳𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 ❎")
} else {
enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 [!]\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚊𝚗𝚝𝚒𝚟𝚒𝚎𝚠𝚘𝚗𝚌𝚎 <𝚘𝚗/𝚘𝚏𝚏>")
}
break
//------------------------------------------------------------------------------------
//.     JUEGOS
case "pregunta" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(args.length <= 0) return enviar("𝚈 𝚎𝚕 𝚝𝚎𝚡𝚝𝚘? ")
reaccionar('🤔')
let preg = pr[Math.floor(Math.random() * pr.length)]
enviar(preg)
break
//------------------------------------------------------------------------------------
case "ppt" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
reaccionar('👾')
enviar("𝙲𝚘𝚖𝚘 𝚓𝚞𝚐𝚊𝚛 𝚙𝚒𝚎𝚍𝚛𝚊 𝚙𝚊𝚙𝚎𝚕 𝚘 𝚝𝚒𝚓𝚎𝚛𝚊𝚜\n\n𝚂𝚒 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚓𝚞𝚐𝚊𝚛 𝚞𝚜𝚊 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜𝚎𝚐𝚞𝚗 𝚚𝚞𝚎 𝚎𝚕𝚒𝚓𝚊𝚜 𝚓𝚞𝚐𝚊𝚛\n\n𝙲𝚘𝚖𝚊𝚗𝚍𝚘𝚜 : \n.𝙿𝚒𝚎𝚍𝚛𝚊🪨\n.𝙿𝚊𝚙𝚎𝚕🫸\n.𝚃𝚒𝚓𝚎𝚛𝚊𝚜✂️\n\n𝙳𝚒𝚟𝚒𝚎𝚛𝚝𝚎𝚝𝚎 𝚢 𝚖𝚞𝚌𝚑𝚊 𝚜𝚞𝚎𝚛𝚝𝚎 :)")
break
//------------------------------------------------------------------------------------
case "piedra" : case "Piedra" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
compus = pc(0, 3);
compu = palabras[compus];
if(compu == "Tijeras"){
userPPT = registeredUsers.find(user => user.number === sender); 
if (userPPT) {
userPPT.diamonds += 1;
saveRegisteredUsers(); 
enviar(`𝙷𝚊𝚜 𝚐𝚊𝚗𝚊𝚍𝚘 🥳\n\n◉𝚃𝚞 : 𝙿𝚒𝚎𝚍𝚛𝚊🪨\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝚃𝚒𝚓𝚎𝚛𝚊𝚜✂️\n\n𝙷𝚊𝚜 𝚐𝚊𝚗𝚊𝚍𝚘 1 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎 💎`)
}
} else if (compu == "Piedra") {
enviar(`𝙴𝚖𝚙𝚊𝚝𝚎 🤝\n\n◉𝚃𝚞 : 𝙿𝚒𝚎𝚍𝚛𝚊🪨\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝙿𝚒𝚎𝚍𝚛𝚊🪨\n`)
} else {
enviar(`𝙿𝚎𝚛𝚍𝚒𝚜𝚝𝚎 🤡🫵\n\n◉𝚃𝚞: 𝙿𝚒𝚎𝚍𝚛𝚊🪨\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝙿𝚊𝚙𝚎𝚕🫸\n`)
}
break
//------------------------------------------------------------------------------------
case "papel" : case "Papel" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
compus = pc(0, 3);
compu = palabras[compus];
if(compu == "Piedra"){
userPPT = registeredUsers.find(user => user.number === sender); 
if (userPPT) {
userPPT.diamonds += 1;
saveRegisteredUsers(); 
enviar(`𝙷𝚊𝚜 𝚐𝚊𝚗𝚊𝚍𝚘 🥳\n\n◉𝚃𝚞 : 𝙿𝚊𝚙𝚎𝚕🫸\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝙿𝚒𝚎𝚍𝚛𝚊🪨\n\n𝙷𝚊𝚜 𝚐𝚊𝚗𝚊𝚍𝚘 1 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎 💎 `)
}
} else if (compu == "Papel") {
enviar(`𝙴𝚖𝚙𝚊𝚝𝚎 🤝\n\n◉𝚃𝚞: 𝙿𝚊𝚙𝚎𝚕🫸\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝙿𝚊𝚙𝚎𝚕🫸\n`)
} else {
enviar(`𝙿𝚎𝚛𝚍𝚒𝚜𝚝𝚎 🤡🫵\n\n◉𝚃𝚞 : 𝙿𝚊𝚙𝚎𝚕🫸\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝚃𝚒𝚓𝚎𝚛𝚊𝚜✂️\n`)
}
break
//------------------------------------------------------------------------------------
case "tijeras" : case "Tijeras" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
compus = pc(0, 3);
compu = palabras[compus];
if(compu == "Papel"){
userPPT = registeredUsers.find(user => user.number === sender); 
if (userPPT) {
userPPT.diamonds += 1;
saveRegisteredUsers(); 
enviar(`𝙷𝚊𝚜 𝚐𝚊𝚗𝚊𝚍𝚘 🥳\n\n◉𝚃𝚞 : 𝚃𝚒𝚓𝚎𝚛𝚊𝚜✂️\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝙿𝚊𝚙𝚎𝚕🫸\n\n𝙷𝚊𝚜 𝚐𝚊𝚗𝚊𝚍𝚘 1 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎 💎`)
}
} else if (compu == "Tijeras") {
enviar(`𝙴𝚖𝚙𝚊𝚝𝚎 🤝\n\n◉𝚃𝚞: 𝚃𝚒𝚓𝚎𝚛𝚊𝚜✂️\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝚃𝚒𝚓𝚎𝚛𝚊𝚜✂️\n`)
} else {
enviar(`𝙿𝚎𝚛𝚍𝚒𝚜𝚝𝚎 🤡🫵\n\n◉𝚃𝚞 : 𝚃𝚒𝚓𝚎𝚛𝚊𝚜✂️\n◉𝙴𝚕 𝚋𝚘𝚝 : 𝙿𝚒𝚎𝚍𝚛𝚊🪨\n`)
}
break
//------------------------------------------------------------------------------------
case "formarpareja" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
reaccionar('💕')
let members = groupMembers.map(u => u.id)
let love1 = members[Math.floor(Math.random() * members.length)]
let love2 = members[Math.floor(Math.random() * members.length)]
let formarPareja = `@${love1.split('@')[0]} 𝙳𝚎𝚟𝚎𝚛𝚒𝚊𝚜 𝚑𝚊𝚌𝚎𝚛 𝚙𝚊𝚛𝚎𝚓𝚊 𝚌𝚘𝚗 @${love2.split('@')[0]} 𝙷𝚊𝚌𝚎𝚗 𝚋𝚘𝚗𝚒𝚝𝚊 𝚙𝚊𝚛𝚎𝚓𝚊 💕`
await kira.sendMessage(from,{text : formarPareja, mentions : [love1, love2 ]},{quoted : info})
break
//------------------------------------------------------------------------------------
case "love" : case "amor" :
if(!isGroup) return enviar(respuesta.grupos)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar("𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊 𝚊 𝚕𝚊 𝚙𝚎𝚛𝚜𝚘𝚗𝚊 𝚌𝚘𝚗 𝚕𝚊 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚊𝚜 𝚖𝚎𝚍𝚒𝚛 𝚜𝚞 𝚊𝚖𝚘𝚛🤡")
let textMedidor = `𝙼𝙴𝙳𝙸𝙳𝙾𝚁 𝙳𝙴 𝙰𝙼𝙾𝚁❤️\n\n𝙴𝚕 𝚊𝚖𝚘𝚛 𝚍𝚎 @${mentioned[0].split('@')[0]} 𝚙𝚘𝚛 𝚝𝚒 𝚎𝚜 𝚍𝚎 ${Math.floor(Math.random() * 100)}% 𝚍𝚎 𝚞𝚗 100%\n𝙳𝚎𝚟𝚎𝚛𝚒𝚊𝚜 𝚙𝚎𝚍𝚒𝚛𝚕𝚎 𝚚𝚞𝚎 𝚜𝚎𝚊 𝚝𝚞 𝚗𝚘𝚟𝚒@ 😳`
await kira.sendMessage(from,{text : textMedidor, mentions : [mentioned]},{quoted : info})
reaccionar('❤️')
break
//------------------------------------------------------------------------------------
case "follar" : case "violar" : case "cojer" :  
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar('𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊/𝚎𝚝𝚒𝚚𝚞𝚎𝚝𝚊 𝚑𝚊 𝚝𝚞 𝚜𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎 𝚟𝚒𝚌𝚝𝚒𝚖𝚊 𝚖𝚊𝚕𝚍𝚒𝚝𝚘 𝚟𝚒𝚘𝚕𝚊𝚍𝚘𝚛 🔥')
let follarTxt = `🤤👅🥵¡𝙰𝙲𝙰𝙱𝙰𝚂 𝙳𝙴 𝙵𝙾𝙻𝙻𝙰𝚁𝚃𝙴𝙻@!🥵👅🤤\n\n𝚃𝚎 𝚊𝚌𝚊𝚋𝚊𝚜 𝚍𝚎 𝚏𝚘𝚕𝚕𝚊𝚛 𝚊 𝚕𝚊 𝚙𝚎𝚛𝚛𝚊 𝚍𝚎 @${mentioned[0].split('@')[0]} 𝚊 4 𝚙𝚊𝚝𝚊𝚜 𝚖𝚒𝚎𝚗𝚝𝚛𝚊𝚜 𝚝𝚎 𝚐𝚎𝚖𝚒𝚊 𝚌𝚘𝚖𝚘 𝚞𝚗𝚊 𝚖𝚊𝚕𝚍𝚒𝚝𝚊 𝚙𝚎𝚛𝚛𝚊 "𝙰𝚊𝚊𝚑.., 𝙰𝚊𝚊𝚑, 𝚜𝚒𝚐𝚞𝚎, 𝚗𝚘 𝚙𝚊𝚛𝚎𝚜, 𝚗𝚘 𝚙𝚊𝚛𝚎𝚜.." 𝚢 𝚕𝚊 𝚑𝚊𝚜 𝚍𝚎𝚓𝚊𝚍𝚘 𝚝𝚊𝚗 𝚛𝚎𝚟𝚎𝚗𝚝𝚊𝚍𝚊 𝚚𝚞𝚎 𝚗𝚘 𝚙𝚞𝚎𝚍𝚎 𝚜𝚘𝚜𝚝𝚎𝚗𝚎𝚛 𝚗𝚒 𝚜𝚞 𝚙𝚛𝚘𝚙𝚒𝚘 𝚌𝚞𝚎𝚛𝚙𝚘 𝚕𝚊 𝚖𝚊𝚕𝚍𝚒𝚝𝚊 𝚣𝚘𝚛𝚛𝚊\n\n 🤤🥵𝙵𝙾𝙻𝙻𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻 𝙼𝙰𝙻𝙳𝙸𝚃𝙾 𝚅𝙸𝙾𝙻𝙰𝙳𝙾𝚁 𝙳𝙴 @${sender.split('@')[0]} 🥵🤤`
reaccionar('🔥')
await kira.sendMessage(from, {text : follarTxt, mentions : [mentioned, sender]},{quoted : info})
break 
//------------------------------------------------------------------------------------
case "besar" : case "kiss" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar('𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊/𝚎𝚝𝚒𝚚𝚞𝚎𝚝𝚊 𝚑𝚊 𝚕𝚊 𝚙𝚎𝚛𝚛𝚊 𝚚𝚞𝚎 𝚝𝚎 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚌𝚑𝚊𝚙𝚎𝚊𝚛 𝚖𝚊𝚕𝚍𝚒𝚝𝚘 𝚌𝚊𝚌𝚑𝚘𝚗𝚍𝚘🔥') 
kissTxt = `𝚃𝚎 𝚌𝚘𝚖𝚒𝚎𝚛𝚘𝚗 𝚊 𝚋𝚎𝚜𝚘𝚜 @${mentioned[0].split('@')[0]} 𝚑𝚊𝚜𝚝𝚊 𝚖𝚎𝚝𝚎𝚛𝚝𝚎 𝚕𝚊 𝚕𝚎𝚗𝚐𝚞𝚊 𝚊 𝚕𝚊 𝚐𝚊𝚛𝚐𝚊𝚗𝚝𝚊 𝚖𝚊𝚕𝚍𝚒𝚝𝚊 𝚌𝚊𝚌𝚑𝚘𝚗𝚍𝚊 🔥💋`
reaccionar('💋')
await kira.sendMessage(from,{text : kissTxt, mentions : [mentioned]},{quoted : info})
break
//------------------------------------------------------------------------------------
case "nalguear" : case "nalgada" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar*(respuesta.grupos)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar('𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊/𝚎𝚝𝚒𝚚𝚞𝚎𝚝𝚊 𝚑𝚊 𝚕𝚊 𝚙𝚎𝚛𝚛𝚊 𝚚𝚞𝚎 𝚝𝚎 𝚚𝚞𝚒𝚎𝚛𝚎𝚜 𝚗𝚊𝚕𝚐𝚞𝚎𝚊𝚛 🔥') 
NalgadaTxt = `𝚃𝚎 𝚊𝚌𝚊𝚋𝚊𝚗 𝚍𝚎 𝚗𝚊𝚕𝚐𝚞𝚎𝚊𝚛 😈 @${mentioned[0].split('@')[0]}\n\n𝚃𝚎 𝚍𝚎𝚓𝚊𝚛𝚘𝚗 𝚎𝚕 𝚌𝚞𝚕𝚘 𝚛𝚘𝚓𝚘 𝚍𝚎 𝚝𝚊𝚗𝚝𝚊𝚜 𝚗𝚊𝚕𝚐𝚊𝚍𝚊𝚜 𝚖𝚒𝚎𝚗𝚝𝚛𝚊𝚜 𝚐𝚎𝚖𝚒𝚊𝚜 "𝙼𝚊𝚜... 𝙿𝚊𝚙𝚒 𝙼𝚊𝚜𝚜𝚜.." 𝚊 𝚎𝚜𝚝𝚎 𝚌𝚊𝚌𝚑𝚘𝚗𝚍𝚘 @${sender.split('@')[0]} `
reaccionar('🔥')
await kira.sendMessage(from,{text : NalgadaTxt, mentions : [mentioned, sender]},{quoted : info})
break
//------------------------------------------------------------------------------------
case "topgays": case "topputos":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (!isGroup) return enviar(respuesta.grupos)
const audiogays = 'https://qu.ax/HfeP.mp3';
const fallbackImageUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';

try {
member = groupMembers.map(u => u.id)
var selectedMembers = []
for (let i = 0; i < 5; i++) {
selectedMembers.push(member[Math.floor(Math.random() * member.length)])
}
let topgaysTxt = `𝚃𝚘𝚙 5 𝚖𝚊𝚜 𝚐𝚊𝚢𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 ola 😳🔥\n\n`
for (let i = 0; i < selectedMembers.length; i++) {
topgaysTxt += `${i + 1} @${selectedMembers[i].split('@')[0]}\n`
}
const photoBuffers = await Promise.all(selectedMembers.map(async member => {
try {
return await kira.profilePictureUrl(member, 'image')
} catch (error) {
return fallbackImageUrl
}
}))

const imagePromises = photoBuffers.map(buffer => Jimp.read(buffer));
const images = await Promise.all(imagePromises.map(async promise => {
try {
return await promise
} catch (error) {
console.error('Error al leer una imagen:', error)
return await Jimp.read(fallbackImageUrl)
}
}))
const combinedImage = new Jimp(3464, 3464, 0xffffffff)
const positions = [
            { x: 0, y: 0 },
            { x: 1732, y: 0 },
            { x: 0, y: 1732 },
            { x: 1732, y: 1732 },
            { x: 866, y: 866 }
]
images.forEach((img, i) => {
combinedImage.blit(img.resize(1732, 1732), positions[i].x, positions[i].y)
})
const flag = await Jimp.read('./media/gay.png')
combinedImage.blit(flag, 0, 0)
await combinedImage.writeAsync('./tmp/combined_thumbnail.png');

reaccionar("🏳️‍🌈");
let fotogay = fs.readFileSync('./tmp/combined_thumbnail.png');
kira.sendMessage(from, { image: fotogay, caption: topgaysTxt, mentions: selectedMembers }, { quoted: info });
await audio(audiogays)
} catch (e) {
console.log(e)
}
break
//------------------------------------------------------------------------------------
case "gay" : case "Puto" : case "puto" : case "joto" : 
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
if (budy.includes(mentioned)) return enviar("𝙼𝚎𝚗𝚌𝚞𝚘𝚗𝚊 𝚊 𝚞 𝚓𝚘𝚝𝚘 🥸 ")
const audiogay = 'https://qu.ax/HfeP.mp3'
try {
var fallbackImageUrl2 = await kira.profilePictureUrl(mentioned, "image")
} catch {
var fallbackImageUrl2 = "https://qu.ax/aTqx.jpg"
}
try {
const mainImage = await Jimp.read(fallbackImageUrl2);

const mainWidth = mainImage.getWidth();
const mainHeight = mainImage.getHeight();
const flag = await Jimp.read('./media/gay.png');
flag.resize(mainWidth, mainHeight);
const combinedImage = new Jimp(mainWidth, mainHeight, 0xffffffff);
combinedImage.blit(mainImage, 0, 0);
combinedImage.blit(flag, 0, 0);
await combinedImage.writeAsync('./tmp/combined_image_gay.png')

let textGayl = `𝙼𝚒𝚛𝚎𝚗 𝚊 𝚞𝚗 𝚐𝚊𝚢 🥸 @${mentioned[0].split('@')[0]}`
const gay = Math.floor(Math.random() * 100)
let gayTxt;
if(gay <= 20) {gayTxt = "𝙴𝚛𝚎𝚜 𝚞𝚗 𝚙𝚘𝚌𝚘 𝚐𝚊𝚢 🥸 "} else if(gay <= 40) {gayTxt = "𝙼𝚖𝚖𝚖 𝚝𝚎𝚗𝚐𝚘 𝚖𝚒𝚜 𝚍𝚞𝚍𝚊𝚜 🧐"} else if(gay <= 60) {gayTxt = "𝙴𝚛𝚎𝚜 𝚐𝚊𝚢 𝚎𝚗 𝚜𝚎𝚌𝚛𝚎𝚝𝚘 🙀"} else if(gay <= 80) {gayTxt = "𝙴𝚛𝚎𝚜 𝚞𝚗 𝚖𝚊𝚕𝚍𝚒𝚝𝚘 𝚐𝚊𝚢 😹"} else if(gay <= 100) {gayTxt = "𝙴𝚛𝚎𝚜 𝚞𝚗 𝚊𝚞𝚝𝚎𝚗𝚝𝚒𝚌𝚘 𝚐𝚊𝚢 😹"}
textGayl += `\n\n𝚃𝚞 𝚎𝚛𝚎𝚜 ${gay}% 𝚐𝚊𝚢 🏳️‍🌈 \n\n ${gayTxt}`
await kira.sendMessage(from, {image : fs.readFileSync('./tmp/combined_image_gay.png') , caption : textGayl, mentions : [mentioned] }, {quoted : info })
await audio(audiogay)
} catch (error) {
console.error(error);
}
break
//------------------------------------------------------------------------------------
case "topotakus" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
let audioOtaku = 'https://qu.ax/ZgFZ.mp3';
member = groupMembers.map(u => u.id);
var selectedMembers = [];
for (let i = 0; i < 10; i++) {
  selectedMembers.push(member[Math.floor(Math.random() * member.length)]);
}
let topotakusTxt = `𝚃𝚘𝚙 10 𝚘𝚝𝚊𝚔𝚞𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 🌸 \n\n`;
for (let i = 0; i < selectedMembers.length; i++) {
  topotakusTxt += `${i + 1} @${selectedMembers[i].split('@')[0]}\n`;
}
reaccionar("🌸")
kira.sendMessage(from,{text : topotakusTxt, mentions : selectedMembers},{quoted : SvnC})
await audio(audioOtaku)
break
//------------------------------------------------------------------------------------
case "toppendejos" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
let audioPuto = "https://qu.ax/PpAf.mp3";
member = groupMembers.map(u => u.id);
var selectedMembers = [];
for (let i = 0; i < 10; i++) {
  selectedMembers.push(member[Math.floor(Math.random() * member.length)]);
}
let topPendejos = `𝚃𝚘𝚙 10 𝚙𝚎𝚗𝚍𝚎𝚓𝚘𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 😹🫵\n\n`
for (let i = 0; i < selectedMembers.length; i++) {
  topPendejos += `${i + 1} @${selectedMembers[i].split('@')[0]}\n`;
}
reaccionar('😹')
kira.sendMessage(from,{text : topPendejos, mentions : selectedMembers},{quoted : SvnC})
await audio(audioPuto)
break
//------------------------------------------------------------------------------------
case "trio" : 
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
let member6 = groupMembers.map(u => u.id)
let a6 = member6[Math.floor(Math.random() * member6.length)]
let b6 = member6[Math.floor(Math.random() * member6.length)]
let c6 = member6[Math.floor(Math.random() * member6.length)]
trioTxt = `𝙵𝚘𝚛𝚖𝚎𝚖𝚘𝚜 𝚞𝚗 𝚝𝚛𝚒𝚘 🥵💦 \n
@${a6.split('@')[0]}
@${b6.split('@')[0]}
@${c6.split('@')[0]}\n
𝙽𝚘 𝚑𝚊𝚗 𝚙𝚎𝚗𝚜𝚊𝚍𝚘 𝚎𝚗 𝚏𝚘𝚛𝚖𝚊𝚛 𝚞𝚗 𝚝𝚛𝚒𝚘 😳`
reaccionar('🔥')
kira.sendMessage(from,{text : trioTxt, mentions : [a6, b6, c6]},{quoted : info})
break 
//------------------------------------------------------------------------------------
case "amistad" : case "amigacion" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
let member5 = groupMembers.map(u => u.id)
let a5 = member5[Math.floor(Math.random() * member5.length)]
let b5 = member5[Math.floor(Math.random() * member5.length)]
let amistadTxt = `𝚅𝚊𝚖𝚘𝚜 𝚑𝚊𝚌𝚎𝚛 𝚊𝚖𝚒𝚜𝚝𝚊𝚍𝚎𝚜 😉\n\n𝙾𝚢𝚎 @${a5.split('@')[0]} 𝚍𝚎𝚟𝚎𝚛𝚒𝚊𝚜 𝚑𝚊𝚋𝚕𝚊𝚛𝚕𝚎 𝚊 @${b5.split('@')[0]} 𝚑𝚊𝚛𝚒𝚊𝚗 𝚞𝚗𝚊 𝚋𝚘𝚗𝚒𝚝𝚊 𝚊𝚖𝚒𝚜𝚝𝚊𝚍 ✨ `
reaccionar("❤️")
kira.sendMessage(from,{text : amistadTxt, mentions : [a5, b5]},{quoted : info})
break 
//------------------------------------------------------------------------------------
case "ship" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar('𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊/𝚎𝚝𝚒𝚚𝚞𝚎𝚝𝚊 𝚑𝚊 𝚝𝚞 𝚌𝚛𝚞𝚜𝚑 😳💕')
shipTxt = `@${mentioned[0].split('@')[0]} 𝚃𝚞 𝚘𝚙𝚘𝚛𝚝𝚞𝚗𝚒𝚍𝚊𝚍 𝚍𝚎 𝚎𝚗𝚊𝚖𝚘𝚛𝚊𝚛𝚝𝚎 𝚍𝚎 @${sender.split('@')[0]} 𝚎𝚜 𝚍𝚎 𝚞𝚗 ${Math.floor(Math.random() * 100)}% 𝚍𝚎 𝚞𝚗 100% \n\n𝙳𝚎𝚟𝚎𝚛𝚒𝚊𝚗 𝚑𝚊𝚋𝚕𝚊𝚛 𝚙𝚘𝚛 𝚙𝚛𝚒𝚟? 😳`
reaccionar('💕')
kira.sendMessage(from,{text : shipTxt, mentions : [mentioned, sender]},{quoted : info})
break
//------------------------------------------------------------------------------------
case "manco" : case "manca" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (budy.includes(mentioned)) return enviar('𝙼𝚎𝚗𝚌𝚒𝚘𝚗𝚊/𝚎𝚝𝚒𝚚𝚞𝚎𝚝𝚊 𝚊𝚕 𝚖𝚊𝚗𝚌😹🫵')
audioManco = "https://qu.ax/CCbG.mp3"
mancoTxt = `@${mentioned[0].split('@')[0]} 𝙴𝚜 𝚞𝚗 𝚖𝚊𝚗𝚌𝚘 𝚌𝚘𝚖𝚘 𝚈𝚊𝚒𝚛17\n\n𝙴𝚛𝚎𝚜 𝚞𝚗 ${Math.floor(Math.random() * 100)}% 𝚖𝚊𝚗𝚌𝚘 😹🫵`
reaccionar("😹")
kira.sendMessage(from,{text : mancoTxt, mentions : [mentioned]},{quoted : info})
await kira.sendMessage(from, { audio: { url: audioManco }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted : info})
break
//------------------------------------------------------------------------------------
case "personalidad"  :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (args.length <= 0) return enviar("𝙸𝚗𝚐𝚛𝚎𝚜𝚊 𝚝𝚞 𝚗𝚘𝚖𝚋𝚛𝚎")
function pickRandom2(arr) {
    if (arr.length === 0) {
        console.log("Error ")
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let personalidad = `
┏━━°❀❬ *PERSONALIDAD* ❭❀°━━┓
┃
┃• 𝙽𝚘𝚖𝚋𝚛𝚎 : ${q}
┃• 𝙲𝚊𝚕𝚒𝚎𝚗𝚝𝚎 : ${Math.floor(Math.random() * 100)}%
┃• 𝙲𝚑𝚊𝚚𝚞𝚎𝚝𝚘𝚜𝚘 : ${Math.floor(Math.random() * 100)}% 
┃• 𝚃𝚒𝚙𝚘 𝚍𝚎 𝚙𝚎𝚛𝚜𝚘𝚗𝚊 : ${pickRandom2(["Pendejo", "Idiota", "Cachondo", "Manco", "Joto", "Rata"])}
┃• 𝚂𝚎𝚡𝚘 : ${pickRandom2(["Siempre", "Diario", "Nunca"])}
┃• 𝙸𝚗𝚝𝚎𝚕𝚒𝚐𝚎𝚗𝚌𝚒𝚊 : ${Math.floor(Math.random() * 100)}%
┃• 𝙴𝚗𝚘𝚓𝚘𝚗 : ${Math.floor(Math.random() * 100)}%
┃• 𝙼𝚒𝚎𝚍𝚘𝚜𝚘 : ${Math.floor(Math.random() * 100)}%
┃• 𝙵𝚊𝚖𝚊 : ${pickRandom2(["Infiel", "Nadie te topa", "Cuernudo", "Alusin", "El cacas"])}
┃• 𝙶𝚎𝚗𝚎𝚛𝚘 : ${pickRandom2(["Hombre", "Mujer", "Puto", "Puta", "Joto", "Gay"])}
┗━━━━━━━━━━━━━━━━`
enviar(personalidad)
break
//------------------------------------------------------------------------------------
case "racista" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
let racista = Math.floor(Math.random() * 100)
let Racistatxt;
if(racista <= 20) {Racistatxt = "𝚃𝚞 𝚗𝚘 𝚎𝚛𝚎𝚜 𝚛𝚊𝚌𝚒𝚜𝚝𝚊 👏"} else if(racista <= 40) {Racistatxt = "𝙼𝚖𝚖𝚖 𝚝𝚎𝚗𝚐𝚘 𝚖𝚒𝚜 𝚍𝚞𝚍𝚊𝚜 🧐"} else if(racista <= 60) {Racistatxt = "𝙴𝚛𝚎𝚜 𝚛𝚊𝚌𝚒𝚜𝚝𝚊 𝚎𝚗 𝚜𝚎𝚌𝚛𝚎𝚝𝚘 🙀"} else if(racista <= 80) {Racistatxt = "𝙴𝚛𝚎𝚜 𝚞𝚗 𝚖𝚊𝚕𝚍𝚒𝚝𝚘 𝚛𝚊𝚌𝚒𝚜𝚝𝚊😡"} else if(racista <= 100) {Racistatxt = "𝙴𝚛𝚎𝚜 𝚞𝚗 𝚊𝚞𝚝𝚎𝚗𝚝𝚒𝚌𝚘 𝚛𝚊𝚌𝚒𝚜𝚝𝚊 🌚"}
let Racisss = `𝚃𝚞 𝚎𝚛𝚎𝚜 ${racista}% 𝚛𝚊𝚌𝚒𝚜𝚝𝚊 🌚 \n\n ${Racistatxt}`
enviar(Racisss)
break
//------------------------------------------------------------------------------------
case "slot": case "casino": case "tragamonedas" :
if (!isUserRegistered(sender)) return enviar(respuesta.base);
userSlot = registeredUsers.find(user => user.number === sender);
const noww = Date.now();
const fifteenSeconds = 15 * 1000;
if (!userSlot.lastSlotTime || (noww - userSlot.lastSlotTime) >= fifteenSeconds) {
const slotSymbols = ["🍉", "🍎", "🍊", "🍌", "🍉", "🍇", "🍓", "🍒", "🔔", "💎"];

function generateSlotResult() {
let slots = [];
for (let i = 0; i < 9; i++) {
slots.push(slotSymbols[Math.floor(Math.random() * slotSymbols.length)]);
}

 const isWinningLine = (slots[0] === slots[1] && slots[1] === slots[2]) || (slots[3] === slots[4] && slots[4] === slots[5]) || (slots[6] === slots[7] && slots[7] === slots[8]);

const resultText = `
┏━━━━🎰━━━•
┃
┃  ${slots[0]} : ${slots[1]} : ${slots[2]}
┃  ${slots[3]} : ${slots[4]} : ${slots[5]}
┃  ${slots[6]} : ${slots[7]} : ${slots[8]}
┃
┗━━━━🎰━━━• ${isWinningLine ? '\n🎉 ¡Has ganado! 🎉' : ''}`;

            return {
                text: resultText,
                isWinningLine: isWinningLine
            };
        }

function deliverReward(sender) {
userSlot.diamonds += 1;
}

let slotResults = [];
for (let i = 0; i < 7; i++) {
slotResults.push(generateSlotResult());
}

var { key } = await kira.sendMessage(from, {text: slotResults[0].text}, {quoted: info});
for (let i = 1; i < slotResults.length; i++) {
await kira.sendMessage(from, {text: slotResults[i].text, edit: key});
}

if (slotResults.some(result => result.isWinningLine)) {
deliverReward(sender);
enviar(`𝙵𝚎𝚕𝚒𝚌𝚒𝚍𝚊𝚍𝚎𝚜 𝚐𝚊𝚗𝚊𝚜𝚝𝚎 𝚞𝚗 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎 💎`);
  }
userSlot.lastSlotTime = noww;
saveRegisteredUsers();
} else {
const remainingTime = fifteenSeconds - (noww - userSlot.lastSlotTime);
const secondsLeft = Math.ceil(remainingTime / 1000);
enviar(`𝙴𝚜𝚙𝚎𝚛𝚊 ${secondsLeft} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜 𝚙𝚊𝚛𝚊 𝚞𝚜𝚊𝚛 𝚎𝚕 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚘𝚝𝚛𝚊 𝚟𝚎𝚣.`);
}
break
 //------------------------------------------------------------------------------------  
case "ruletaban" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isGroup) return enviar(respuesta.grupos)
if(!isGroupAdmins) return enviar(respuesta.adms)
if(!isBotGroupAdmins) return enviar(respuesta.botadm)
try{
var member = groupMembers.map(u => u.id)
var a = member[Math.floor(Math.random() * member.length)] 
const ruletaBan = `𝚅𝚊𝚜 𝚙𝚊 𝚏𝚞𝚎𝚛𝚊 𝚣𝚘𝚛𝚛𝚊 🫵😹  @${a.split('@')[0]}`
kira.sendMessage(from,{text : ruletaBan, mentions : [a]})
await kira.groupParticipantsUpdate(from, [a], 'remove')
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
//      DOWNLOADS
case "tiktok" : case "tt":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
 if (args.length <= 0) return enviar("𝚢 𝚎𝚕 𝚕𝚒𝚗𝚔? ")
if (!isUrl(q) || !args[0].includes('tiktok')) return enviar("𝚂𝚘𝚕𝚘 𝚕𝚒𝚗𝚔𝚜 𝚍𝚎 𝚝𝚒𝚔 𝚝𝚘𝚔")
try {
require('./libs/tiktok.js').Tiktok(args).then( data => {
kira.sendMessage(from, { video: { url: data.nowm }}, { quoted: info})
})
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case 'play':
if (!isUserRegistered(sender)) return enviar(respuesta.base)
 if (q.length <= 0) return enviar("𝙰𝚌𝚌𝚒𝚘𝚗 𝚖𝚊𝚕 𝚑𝚎𝚌𝚑𝚊. 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : .𝚙𝚕𝚊𝚢 <𝚋𝚞𝚜𝚚𝚞𝚎𝚍𝚊>")
try {
const query = q;
const searchResults = await ytsr(query, { limit: 1 });
const video = searchResults.items[0];
if (video) {
const { title, views, uploadedAt, url, author, thumbnails, duration } = video;
enviar("𝙴𝚜𝚝𝚊𝚖𝚘𝚜 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚗𝚍𝚘 𝚜𝚞 𝚙𝚎𝚍𝚒𝚍𝚘...")
const infoMessage =  `[𝚈 𝙾 𝚄 𝚃 𝚄 𝙱 𝙴 - 𝙿 𝙻 𝙰 𝚈]\n
𝚃𝚒𝚝𝚞𝚕𝚘: ${title}
𝙰𝚞𝚝𝚘𝚛: ${author.name} 
𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗: ${duration}
𝚅𝚒𝚜𝚝𝚊𝚜: ${views}
𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘: ${uploadedAt}
\n\n𝙻𝚒𝚗𝚔: ${url}
\n\n𝙿𝚕𝚊𝚢 𝚑𝚎𝚌𝚑𝚘 𝚍𝚎𝚜𝚍𝚎 𝚌𝚎𝚛𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚎𝚚𝚞𝚒𝚙𝚘 𝚍𝚎 𝙺𝚒𝚛𝚊𝙱𝚘𝚝
`
const thumbnailUrl = thumbnails[0].url;
const thumbnailBuffer = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' }).then(response => Buffer.from(response.data, 'binary'));
//const photoYT = await getBuffer(thumbnailBuffer)
await kira.sendMessage(from,{text: infoMessage , contextInfo: {
mentionedJid: [sender],
"externalAdReply": {
"title": title,
"body": wm,
"showAdAttribution": true,
"thumbnail": thumbnailBuffer,
"sourceUrl": url
}
}
}
)                   
const audioStream = ytdl(url, { filter: 'audioonly' });
const filePath = './tmp/play_audio.mp3';
const writeStream = fs.createWriteStream(filePath);

audioStream.pipe(writeStream);
writeStream.on('finish', async () => {
const audioBuffer = fs.readFileSync(filePath);
await kira.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted : info})
//fs.unlinkSync(filePath);
});
} else {
enviar('𝙽𝚘 𝚜𝚎 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊𝚛𝚘𝚗 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜');
}
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case 'play2':
if (!isUserRegistered(sender)) return enviar(respuesta.base)
 if (q.length <= 0) return enviar("𝙰𝚌𝚌𝚒𝚘𝚗 𝚖𝚊𝚕 𝚑𝚎𝚌𝚑𝚊. 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : .𝚙𝚕𝚊𝚢2 <𝚋𝚞𝚜𝚚𝚞𝚎𝚍𝚊>")
try {
const query = q;
const searchResults = await ytsr(query, { limit: 1 });
if (searchResults.items.length > 0) {
const video = searchResults.items[0];
const { title, views, uploadedAt, url, author, duration } = video;
enviar("𝙴𝚜𝚝𝚊𝚖𝚘𝚜 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚗𝚍𝚘 𝚜𝚞 𝚙𝚎𝚍𝚒𝚍𝚘...")
const videoStream = ytdl(url, { filter: 'videoandaudio' });
const filePath = './tmp/play_video.mp4';
const writeStream = fs.createWriteStream(filePath);
videoStream.pipe(writeStream);
writeStream.on('finish', async () => {
const videoBuffer2 = fs.readFileSync(filePath);
const infoMessage2 =  `[𝚈 𝙾 𝚄 𝚃 𝚄 𝙱 𝙴 - 𝙿 𝙻 𝙰 𝚈]\n
𝚃𝚒𝚝𝚞𝚕𝚘: ${title}
𝙰𝚞𝚝𝚘𝚛: ${author.name} 
𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗: ${duration}
𝚅𝚒𝚜𝚝𝚊𝚜: ${views}
𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘: ${uploadedAt}
\n\n𝙻𝚒𝚗𝚔: ${url}
\n\n𝙿𝚕𝚊𝚢 𝚑𝚎𝚌𝚑𝚘 𝚍𝚎𝚜𝚍𝚎 𝚌𝚎𝚛𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚎𝚚𝚞𝚒𝚙𝚘 𝚍𝚎 𝙺𝚒𝚛𝚊𝙱𝚘𝚝
`             
await kira.sendMessage(from,{video : videoBuffer2, caption : infoMessage2 }, {quoted : info})
//fs.unlinkSync(filePath);
});
} else {
enviar('𝙽𝚘 𝚜𝚎 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊𝚛𝚘𝚗 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜');
}
} catch {
enviar(respuesta.error)
}
break
break
//------------------------------------------------------------------------------------
case "ytmp3":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
 if (q.length <= 0) return enviar("𝚂𝚘𝚕𝚘 𝚕𝚒𝚗𝚔𝚜 𝚍𝚎 𝚝𝚒𝚔 𝚝𝚘𝚔")
if (!isUrl(q)) return enviar("𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝚞𝚗 𝚕𝚒𝚗𝚔 𝚟𝚊𝚕𝚒𝚍𝚘")
try {
const url = q;
const infos = await ytdl.getInfo(url);
const { title, viewCount, uploadDate, author, thumbnails, lengthSeconds } = infos.videoDetails;
enviar("𝙴𝚜𝚝𝚊𝚖𝚘𝚜 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚗𝚍𝚘 𝚜𝚞 𝚙𝚎𝚍𝚒𝚍𝚘...")
const infoMessage =  `[𝚈 𝙾 𝚄 𝚃 𝚄 𝙱 𝙴 - 𝙿 𝙻 𝙰 𝚈]\n 
𝙻𝚒𝚗𝚔: ${url}
\n\n𝙿𝚕𝚊𝚢 𝚑𝚎𝚌𝚑𝚘 𝚍𝚎𝚜𝚍𝚎 𝚌𝚎𝚛𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚎𝚚𝚞𝚒𝚙𝚘 𝚍𝚎 𝙺𝚒𝚛𝚊𝙱𝚘𝚝
`
const thumbnailUrl = thumbnails[0].url;
const thumbnailBuffer = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' }).then(response => Buffer.from(response.data, 'binary'));
//const photoYT = await getBuffer(thumbnailBuffer)
await kira.sendMessage(from,{text : infoMessage , contextInfo: {
mentionedJid: [sender],
"externalAdReply": {
"title": title,
"body": wm,
"showAdAttribution": true,
"thumbnail": thumbnailBuffer,
"sourceUrl": url
}
}
}
)                   
const audioStream = ytdl(url, { filter: 'audioonly' });
const filePath = './tmp/play_audio2.mp3';
const writeStream = fs.createWriteStream(filePath);
audioStream.pipe(writeStream);
writeStream.on('finish', async () => {
const audioBufferr = fs.readFileSync(filePath);
await kira.sendMessage(from, { audio: audioBufferr, mimetype: 'audio/mpeg' },{quoted : info})
//fs.unlinkSync(filePath)
});
} catch (error) {
console.error(error);
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case 'ytmp4':
if (!isUserRegistered(sender)) return enviar(respuesta.base)
 if (q.length <= 0) return enviar("𝚂𝚘𝚕𝚘 𝚕𝚒𝚗𝚔𝚜 𝚍𝚎 𝚝𝚒𝚔 𝚝𝚘𝚔")
if (!isUrl(q)) return enviar("𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝚞𝚗 𝚕𝚒𝚗𝚔 𝚟𝚊𝚕𝚒𝚍𝚘")
try {
const url = q;
const infos = await ytdl.getInfo(url);
const { title } = infos.videoDetails;
enviar("𝙴𝚜𝚝𝚊𝚖𝚘𝚜 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚗𝚍𝚘 𝚜𝚞 𝚙𝚎𝚍𝚒𝚍𝚘...")
const videoStream = ytdl(url, { filter: 'videoandaudio' });
const filePath = './tmp/play_video2.mp4';
const writeStream = fs.createWriteStream(filePath);
videoStream.pipe(writeStream);
writeStream.on('finish', async () => {
const videoBuffer = fs.readFileSync(filePath);
const infoVideo = `[𝚈 𝙾 𝚄 𝚃 𝚄 𝙱 𝙴 - 𝙿 𝙻 𝙰 𝚈]\n 
𝙻𝚒𝚗𝚔: ${url}
\n\n𝙿𝚕𝚊𝚢 𝚑𝚎𝚌𝚑𝚘 𝚍𝚎𝚜𝚍𝚎 𝚌𝚎𝚛𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚎𝚚𝚞𝚒𝚙𝚘 𝚍𝚎 𝙺𝚒𝚛𝚊𝙱𝚘𝚝
`
await kira.sendMessage(from,{video : videoBuffer, caption : infoVideo }, {quoted : info})
//fs.unlinkSync(filePath);
});
} catch (error) {
console.log(error)
enviar(respuesta.error) 
}
break
//------------------------------------------------------------------------------------
case "yt":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (q.length <= 0) return enviar("𝙰𝚌𝚌𝚒𝚘𝚗 𝚖𝚊𝚕 𝚑𝚎𝚌𝚑𝚊. 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : .𝚢𝚝 <𝚋𝚞𝚜𝚚𝚞𝚎𝚍𝚊>")
try {
const query = q
const searchResults = await ytsr(query, { limit: 5 })
const videos = searchResults.items.slice(0, 5)
if (videos.length > 0) {
let infoMessage = "[𝚈 𝙾 𝚄 𝚃 𝚄 𝙱 𝙴 - 𝙿 𝙻 𝙰 𝚈]\n\n"
videos.forEach((video, index) => {
const { title, views, uploadedAt, url, author, duration } = video
infoMessage += `
𝙱𝚞𝚜𝚚𝚞𝚎𝚍𝚊 ${index + 1}:
𝚃𝚒𝚝𝚞𝚕𝚘: ${title}
𝙰𝚞𝚝𝚘𝚛: ${author.name} 
𝙳𝚞𝚛𝚊𝚌𝚒𝚘𝚗: ${duration}
𝚅𝚒𝚜𝚝𝚊𝚜: ${views}
𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚍𝚘: ${uploadedAt}
𝙻𝚒𝚗𝚔: ${url} \n\n`
});
infoMessage += "\n\n𝙿𝚕𝚊𝚢 𝚑𝚎𝚌𝚑𝚘 𝚍𝚎𝚜𝚍𝚎 𝚌𝚎𝚛𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚎𝚚𝚞𝚒𝚙𝚘 𝚍𝚎 𝙺𝚒𝚛𝚊𝙱𝚘𝚝"
const images = await Promise.all(videos.map(video => Jimp.read(video.thumbnails[0].url)));
const combinedImage = new Jimp(800, 600, 0xffffffff)
            const positions = [
                { x: 0, y: 0 },
                { x: 400, y: 0 },
                { x: 0, y: 300 },
                { x: 400, y: 300 },
                { x: 200, y: 150 }
            ];

images.forEach((img, i) => {
combinedImage.blit(img.resize(400, 300), positions[i].x, positions[i].y);
});
await combinedImage.writeAsync('./tmp/combined_image.png');
let imgYt = fs.readFileSync("./tmp/combined_image.png")
await enviarImgcap(imgYt, infoMessage)         
}
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------
case "mediafire":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (q.length <= 0) return enviar("𝙰𝚌𝚌𝚒𝚘𝚗 𝚖𝚊𝚕 𝚑𝚎𝚌𝚑𝚊. 𝙴𝚓𝚎𝚖𝚙𝚕𝚘 : .𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 <𝚕𝚒𝚗𝚔>")
try {
enviar("𝙴𝚜𝚝𝚊𝚖𝚘𝚜 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚗𝚍𝚘 𝚜𝚞 𝚙𝚎𝚍𝚒𝚍𝚘...")
const md = await mediafireDl(q)
if (md[0].size.split('MB')[0] >= 1500) return enviar("[!] 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙴𝚂 𝙼𝚄𝚈 𝙿𝙴𝚂𝙰𝙳𝙾 [!]\n\n𝙽𝚘 𝚜𝚎 𝚎𝚗𝚟𝚒𝚊𝚛𝚊 𝚎𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚍𝚎𝚋𝚒𝚍𝚘 𝚊 𝚜𝚞 𝚙𝚎𝚜𝚘")
const resultMd = `[ 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴 ]\n
𝙽𝚘𝚖𝚋𝚛𝚎: ${md[0].nama} 
𝚃𝚊𝚖𝚊𝚗̃𝚘:${md[0].size}  
𝙰𝚛𝚌𝚑𝚒𝚟𝚘: ${md[0].mime}`
enviar(resultMd) 
kira.sendMessage(from, { document : { url : md[0].link}, fileName : md[0].nama, mimetype: md[0].mime}, {quoted : info})
} catch (e) {
enviar("𝙾𝚌𝚞𝚛𝚛𝚒𝚘 𝚞𝚗 𝚎𝚛𝚛𝚘𝚛 𝚊𝚕 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛 𝚎𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚒𝚗𝚝𝚎𝚗𝚝𝚎 𝚍𝚎 𝚗𝚞𝚎𝚟𝚘 :/")
}
break

//------------------------------------------------------------------------------------
//      +18
case 'boobs' : case "tetas": 
if (!isUserRegistered(sender)) return enviar(respuesta.base)
userX = registeredUsers.find(user => user.number === sender);
if(userX.age < 18) return enviar("𝙴𝚛𝚎𝚜 𝚖𝚎𝚗𝚘𝚛 𝚍𝚎 𝚎𝚍𝚊𝚍 𝚟𝚎𝚝𝚎 𝚊 𝚓𝚞𝚐𝚊𝚛 𝚏𝚛𝚒𝚏𝚛𝚊𝚢𝚎𝚛 😹🫵")
if (userX.diamonds = 0) return enviar("𝙽𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚜𝚞𝚏𝚒𝚌𝚒𝚎𝚗𝚝𝚎𝚜 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜, 𝚙𝚞𝚎𝚍𝚎𝚜 𝚐𝚊𝚗𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 𝚌𝚘𝚗 𝚕𝚘𝚜 𝚓𝚞𝚎𝚐𝚘𝚜")
userX.diamonds -= 1;
saveRegisteredUsers();
enviar("𝙶𝚊𝚜𝚝𝚊𝚜𝚝𝚎 𝚞𝚗 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎 💎")
try {
const randomImage = bobs[Math.floor(Math.random() * bobs.length)];
const boobs = await getBuffer(randomImage)
reaccionar("🔥")
enviarImgcap(boobs, "🔥")
} catch (e){
console.log(e)
}
break
//------------------------------------------------------------------------------------
case "japonesa": 
if (!isUserRegistered(sender)) return enviar(respuesta.base)
userX = registeredUsers.find(user => user.number === sender);
if(userX.age <= 18) return enviar("𝙴𝚛𝚎𝚜 𝚖𝚎𝚗𝚘𝚛 𝚍𝚎 𝚎𝚍𝚊𝚍 𝚟𝚎𝚝𝚎 𝚊 𝚓𝚞𝚐𝚊𝚛 𝚏𝚛𝚒𝚏𝚛𝚊𝚢𝚎𝚛 😹🫵")
if (userX.diamonds = 0) return enviar("𝙽𝚘 𝚝𝚒𝚎𝚗𝚎𝚜 𝚜𝚞𝚏𝚒𝚌𝚒𝚎𝚗𝚝𝚎𝚜 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜, 𝚙𝚞𝚎𝚍𝚎𝚜 𝚐𝚊𝚗𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 𝚌𝚘𝚗 𝚕𝚘𝚜 𝚓𝚞𝚎𝚐𝚘𝚜")
userX.diamonds -= 1;
saveRegisteredUsers();
enviar("𝙶𝚊𝚜𝚝𝚊𝚜𝚝𝚎 𝚞𝚗 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎 💎")
reaccionar("🔥")
let japones = await fetch(`https://aemt.me/japan`)
await enviarImg(japones)
break
//------------------------------------------------------------------------------------
//      CONVERTIDORES 
case 'toimg': case 'Toimg': case 'TOIMG':
if(!isQuotedSticker) return enviar("𝚈 𝚎𝚕 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 ?")
try {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
kira.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
enviar(respuesta.error)
})
} catch {
enviar(respuesta.error)
}
break
//------------------------------------------------------------------------------------            
case "s": case "stiker":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (!isImage && !isQuotedImage) return enviar("𝚈 𝚕𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 ? ")
 const imageMessage = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage;
const buffer = await downloadMediaMessageS(imageMessage);
const stickerBuffer = await convertToSticker(buffer);
await stiker(stickerBuffer);
break           
//------------------------------------------------------------------------------------
case "toaudio" : case "tomp3" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(!isQuotedVideo && !isVideo) return enviar("𝚈 𝚎𝚕 𝚟𝚒𝚍𝚎𝚘")
const videoMessage = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage 
enviar("𝙴𝚜𝚙𝚎𝚛𝚎 𝚞𝚗 𝚖𝚘𝚖𝚍𝚗𝚝𝚘 𝚎𝚜𝚝𝚊𝚖𝚘𝚜 𝚑𝚊𝚌𝚒𝚎𝚗𝚍𝚘 𝚜𝚞 𝚌𝚊𝚗𝚌𝚒𝚘𝚗...")
const numeroAleatorio = Math.floor(1000 + Math.random() * 9000);
const numeroAleatorio2 = Math.floor(1000 + Math.random() * 9000);
const videoBuffer = await getFileBuffer(videoMessage, 'video')
const videoPath = path.join(__dirname, `./tmp/video${numeroAleatorio}.mp4`);
const audioPath = path.join(__dirname, `./tmp/audio${numeroAleatorio2}.mp3`);
fs.writeFileSync(videoPath, videoBuffer);
exec(`ffmpeg -i ${videoPath} -q:a 0 -map a ${audioPath}`, async (error, stdout, stderr) => {
if (error) {
console.error(`Error: ${error.message}`);
return;
}
const audioBuffer = fs.readFileSync(audioPath);
await kira.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mp4' }, {quoted : info });
fs.unlinkSync(videoPath)
fs.unlinkSync(audioPath)
})
break 
//------------------------------------------------------------------------------------
case "tourl":
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (isMedia || isQuotedImage) {
 infoMedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage 
} else if(isQuotedVideo || isVideo) {
 infoMedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage  
} else if (isMedia || isQuotedAudio) {
infoMedia = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
} else {
return enviar("𝚈 𝚎𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘?")
}
const bufferUrl = await getFileBuffer(infoMedia, 'image');
const fileName = `${new Date().getTime()}.${infoMedia.mimetype.split('/')[1]}`;
fs.writeFileSync(fileName, bufferUrl);
let fileLink;
try {
const form = new FormData();
form.append('file', fs.createReadStream(fileName));
const response = await axios.post('https://file.io/', form, {
headers: {
...form.getHeaders()
}
});
fileLink = response.data.link;
enviar(`𝙰𝚚𝚞𝚒 𝚝𝚒𝚎𝚗𝚎 𝚜𝚞 𝚕𝚒𝚗𝚔...\n\n𝙻𝚒𝚗𝚔:${fileLink}`) 
fs.unlinkSync(fileName)
} catch (error) {
enviar("𝙻𝚘 𝚜𝚒𝚎𝚗𝚝𝚘 𝚑𝚞𝚋𝚘 𝚞𝚗 𝚎𝚛𝚛𝚘𝚛 𝚊𝚕 𝚜𝚞𝚋𝚒𝚛 𝚎𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚒𝚗𝚝𝚎𝚗𝚝𝚎 𝚍𝚎 𝚗𝚞𝚎𝚟𝚘 :/")
fs.unlinkSync(fileName);
return;
}
break
//------------------------------------------------------------------------------------
case "ofuscar":
if (!isUserRegistered(sender)) return enviar(respuesta.base);
if (args.length < 1) return enviar('𝚈 𝚎𝚕 𝚌𝚘𝚍𝚎 ? ')
try {
let code = q
const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
compact: true,
controlFlowFlattening: true,
}).getObfuscatedCode();
return enviar(`𝙲𝚘𝚍𝚒𝚐𝚘 𝚘𝚏𝚞𝚜𝚌𝚊𝚍𝚘:\n\n ${obfuscatedCode}`)
} catch (error) {
enviar('𝙲𝚑𝚎𝚌𝚊 𝚝𝚞 𝚌𝚘𝚍𝚒𝚐𝚘 𝚋𝚛𝚘, 𝙴𝚛𝚛𝚘𝚛: ' + error.message);
}
break 
//------------------------------------------------------------------------------------
//      BUSCADORES
case 'github':
if (!isUserRegistered(sender)) return enviar(respuesta.base);
if (args.length < 1) return enviar('𝚈 𝚎𝚕 𝚗𝚘𝚖𝚋𝚛𝚎 ? ')
const leopardo = q
try {
const tigreResponse = await axios.get(`https://api.github.com/users/${leopardo}`);
const tigre = tigreResponse.data;
const jaguarResponse = await axios.get(`https://api.github.com/users/${leopardo}/repos`);
const jaguares = jaguarResponse.data;
let repositoriosInfo = jaguares.map(repo => `◉  𝙽𝚘𝚖𝚋𝚛𝚎: ${repo.name}\n◉ 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗: ${repo.description || 'No disponible'}\n\n◉ 𝚄𝚛𝚕: ${repo.html_url}\n`).join('\n');
const mensajeTigre = `👤 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚌𝚒𝚘𝚗 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 \n\n` +
`◉  𝙽𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘: ${tigre.login}\n` +
`◉  𝙱𝚒𝚘: ${tigre.bio || 'No disponible'}\n` +
`◉  𝚄𝚋𝚒𝚌𝚊𝚌𝚒𝚘𝚗:  ${tigre.location || 'No disponible'}\n` +
`◉  𝚄𝚛𝚕: ${tigre.html_url}\n` +
`◉  𝚁𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚒𝚘𝚜 𝚙𝚞𝚋𝚕𝚒𝚌𝚘𝚜:  ${tigre.public_repos}\n\n` +
`📂 𝚁𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚒𝚘𝚜:  \n${repositoriosInfo}`;
enviar(mensajeTigre);
} catch {
enviar(`𝙽𝚘 𝚜𝚎 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊𝚛𝚘𝚗 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜 𝚟𝚎𝚛𝚒𝚏𝚒𝚚𝚞𝚎 𝚎𝚕 𝚗𝚘𝚖𝚋𝚛𝚎 `);
}
break
//------------------------------------------------------------------------------
case "google" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if (args.length <= 0) return enviar("[!] 𝙰𝚌𝚌𝚒𝚘𝚗 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊 \n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘 .𝚐𝚘𝚐𝚕𝚎 <𝚕𝚘 𝚚𝚞𝚎 𝚚𝚞𝚒𝚎𝚛𝚊𝚜 𝚋𝚞𝚜𝚌𝚊𝚛> ") 
google({'query': q}).then(res => {
let teks = `𝚁𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜 𝚍𝚎 :  ${q}\n\n`
for (let g of res) {
teks += `◉ 𝚃𝚒𝚝𝚞𝚕𝚘: ${g.title}\n`
teks += `◉ 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗: ${g.snippet}\n`
teks += `◉ 𝙴𝚗𝚕𝚊𝚌𝚎: ${g.link}\n\n\n\n`
}
enviar(teks)})
break
//------------------------------------------------------------------------------------
case "apk" :
if (!isUserRegistered(sender)) return enviar(respuesta.base)
if(args.length<1) return enviar("𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝚎𝚕 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚕𝚊 𝚊𝚙𝚕𝚒𝚌𝚊𝚌𝚒𝚘𝚗")
try {     
var searchA = await search(q); 
var data5 = await download(searchA[0].id); 
const response = `[ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙰𝙿𝙺 ] \n
𝙽𝚘𝚖𝚋𝚛𝚎: ${data5.name}
𝙿𝚊𝚌𝚔𝚊𝚐𝚎: ${data5.package}
𝚄𝚕𝚝𝚒𝚖𝚊 𝚊𝚌𝚝𝚞𝚊𝚕𝚒𝚣𝚊𝚌𝚒𝚘𝚗: ${data5.lastup}
𝚃𝚊𝚖𝚊𝚗̃𝚘: ${data5.size}` 
await kira.sendMessage(from, {image: {url: data5.icon}, caption: response}, {quoted: info}); 
  if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
return await kira.sendMessage(m.chat, {text: "[!] 𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙴𝚂 𝙼𝚄𝚈 𝙿𝙴𝚂𝙰𝙳𝙾 [!]\n\n𝙽𝚘 𝚜𝚎 𝚎𝚗𝚟𝚒𝚊𝚛𝚊 𝚎𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘 𝚍𝚎𝚋𝚒𝚍𝚘 𝚊 𝚜𝚞 𝚙𝚎𝚜𝚘",}, {quoted: info}); 
} 
await kira.sendMessage(from, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: info}); 
} catch { 
enviarTxt("[!] 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁𝙾𝙽 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 [!]")
}
break


default:

/*if(budy.includes(numerodono) && !isBot) {
enviar("𝙴𝚜𝚝𝚊 𝚙𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘 𝚖𝚎𝚗𝚌𝚒𝚘𝚗𝚊𝚛 𝚊 𝚖𝚒 𝚌𝚛𝚎𝚊𝚍𝚘𝚛 😡")
}*/

} 
 
} catch (e) {
console.log(chalk.red("Error :", e))
}
        
})
    
}
startBot()