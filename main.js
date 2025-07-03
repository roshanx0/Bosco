

const {
WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const clc = require('chalk')
const { sleep, start, success } = require('./lib/myfunc')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
const fetch = require("node-fetch");
const { getBuffer } = require('./lib/myfunc')
baterai = 'unknown'
charging = 'unknown'


require('./Bosco.js')
nocache('../Bosco.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./message/help.js')
nocache('../message/help.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
         
    const starts = async (bosco = new WAConnection()) => {
	bosco.logger.level = 'warn'
	console.log(color(figlet.textSync('BOSCO BY PEPE', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'yellow'))
	console.log(color('[DENIS]', 'cyan'), color('WELCOME', 'white'))
	console.log(color('[SER]', 'cyan'), color('BOT RUNNING', 'yellow'))
	bosco.browserDescription = ["SUBSCRIBE YT - [PEPE - SIR]", "firefox", "3.0.0"];

	// Menunggu QR
	bosco.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))
	})

	// Menghubungkan
	fs.existsSync(`./Denis.json`) && bosco.loadAuthInfo(`./Denis.json`)
	bosco.on('connecting', () => {
		start('2', 'Connecting...','red')
	})

	//connect
	bosco.on('open', () => {
		success('2', 'Connected')
	})

	// session
	await bosco.connect({
		timeoutMs: 10 * 1000
	})
	fs.writeFileSync(`./Denis.json`, JSON.stringify(bosco.base64EncodedAuthInfo(), null, '\t'));
 teks = `https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m`
 bosco.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('ǫʀ ɪs ʀᴜɴɪɴɢ', 'blue'))
 function _0x5a37(_0x506884,_0x2a1cf7){var _0x333aa5=_0x333a();return _0x5a37=function(_0x5a37e7,_0x3acca0){_0x5a37e7=_0x5a37e7-0x186;var _0x54743c=_0x333aa5[_0x5a37e7];return _0x54743c;},_0x5a37(_0x506884,_0x2a1cf7);}function _0x333a(){var _0x4bc3f4=['*𝙷𝙸\x20𝙱𝚁𝙾\x20,\x20𝙱𝙾𝚃\x20𝙷𝙰𝚂\x20𝚂𝚃𝙰𝚁𝚃𝙴𝙳\x20𝚁𝚄𝙽𝙽𝙸𝙽𝙶\x20𝙸𝙽\x20𝚈𝙾𝚄𝚁\x20𝙽𝚄𝙼𝙱𝙴𝚁*\x0a\x0a*𝙸𝚏\x20𝚝𝚑𝚎𝚛𝚎\x27𝚜\x20𝚊𝚗𝚢\x20𝚎𝚛𝚛𝚘𝚛/𝚙𝚕𝚎𝚊𝚜𝚎\x20𝚌𝚘𝚗𝚝𝚊𝚌𝚝\x20𝙱𝚘𝚝\x20𝚘𝚠𝚗𝚎𝚛,\x20𝚃𝚑𝚊𝚗𝚔\x20𝚢𝚘𝚞\x20𝚏𝚘𝚛\x20𝚌𝚑𝚘𝚘𝚜𝚒𝚗𝚐\x20𝚖𝚢\x20𝚋𝚘𝚝*','935438mmhJnv','sendMessage','297252xvcbmp','owner','75177OjqAkg','1133562uaXiYY','readFileSync','297899BUwdgq','274270oXESSo','PHOTO','./ds.jpg','10MyBihz','Cʀᴇᴀᴛᴏʀ\x20Pᴇᴘᴇ\x20Sɪʀ','text','https://wa.me/917736622139?text=Hi\x20bro','619890QujQgd','@s.whatsapp.net','16zTKLmY'];_0x333a=function(){return _0x4bc3f4;};return _0x333a();}var _0x3872fa=_0x5a37;(function(_0x5cf6a2,_0x44c4fc){var _0x501eae=_0x5a37,_0x2e28da=_0x5cf6a2();while(!![]){try{var _0x5eedd0=-parseInt(_0x501eae(0x198))/0x1+parseInt(_0x501eae(0x186))/0x2+parseInt(_0x501eae(0x18d))/0x3+-parseInt(_0x501eae(0x193))/0x4+parseInt(_0x501eae(0x189))/0x5*(parseInt(_0x501eae(0x196))/0x6)+-parseInt(_0x501eae(0x191))/0x7+-parseInt(_0x501eae(0x18f))/0x8*(-parseInt(_0x501eae(0x195))/0x9);if(_0x5eedd0===_0x44c4fc)break;else _0x2e28da['push'](_0x2e28da['shift']());}catch(_0x5661ff){_0x2e28da['push'](_0x2e28da['shift']());}}}(_0x333a,0x38c1f),bosco[_0x3872fa(0x192)](setting[_0x3872fa(0x194)]+_0x3872fa(0x18e),_0x3872fa(0x190),MessageType[_0x3872fa(0x18b)],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x3872fa(0x18a),'body':'','previewType':_0x3872fa(0x187),'thumbnail':fs[_0x3872fa(0x197)](_0x3872fa(0x188)),'sourceUrl':_0x3872fa(0x18c)}}}));
	console.log(color('|WRN|', 'yellow'), color('Bot has started running', 'blue'))

	// Baterai
	bosco.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Battery : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	bosco.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
	
	  // Call Block
	/*bosco.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log("caller "+ callerId)
        bosco.sendMessage(callerId, "Call = BLOCK!!\nDont call me!!", MessageType.text)
        await sleep(3000)
        await bosco.blockUser(callerId, "add") // Block user
   })*/
   
   bosco.on('message-delete', async (m) => {
   	await m(m)
   })
  
       // welcome
	bosco.on('group-participants-update', async (anu) => {
		await welcome(bosco, anu)
		try { 
           const mdata = await bosco.groupMetadata(anu.jid)
           console.log(anu)
		if (anu.action == 'promote'){
			num = anu.participants[0]
			try {
					ppimg = await bosco.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const bosco1 = await bosco.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
			teks = `*Yᴏᴜ Aʀᴇ Nᴏᴡ Aɴ Aᴅᴍɪɴ*
 @${num.split('@')[0]}
`
			promoteBut = [{buttonId:`hm`,buttonText:{displayText:'Congrats 🥳'},type:1}]
            promoteButt = { contentText: `${teks}`, footerText: `Thank You So Much 🌝❤️`, buttons: promoteBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
            bosco.sendMessage(mdata.id, promoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		    } else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await bosco.groupMetadata(anu.jid)
			try {
					ppimg = await bosco.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const bosco3= await bosco.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
			teks = `*Yᴏᴜ Aʀᴇ Nᴏ Lᴏɴɢᴇʀ Aɴ Aᴅᴍɪɴ*
 @${num.split('@')[0]}
`
			demoteBut = [{buttonId:`hm`,buttonText:{displayText:'Next Time I get'},type:1}]
            demoteButt = { contentText: `${teks}`, footerText: `Who Is the Bledy Fool 🙂`, buttons: demoteBut, headerType: 6, locationMessage: bosco4.message.locationMessage}
            bosco.sendMessage(mdata.id, demoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		    }
            } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})

    bosco.on('group-update', async (anu) => {
    falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
   remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `🌹 𝑷 𝑬 𝑷 𝑬 - 𝑺 𝑬 𝑹 🌹`, 'jpegThumbnail': fs.readFileSync(`ds.jpg`)}}}
    metdata = await bosco.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Oᴘᴇɴᴇᴅ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  } else if(anu.announce == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Cʟᴏsᴇᴅ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  } else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `*[ Gʀᴏᴜᴘ Dɪsᴄʀɪᴘᴛɪᴏɴ Cʜᴀɴɢᴇ ]*\n\n • *ɴᴇᴡ* : *${anu.desc}*`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
 } else if(anu.restrict == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢs Cʜᴀɴɢᴇ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  } else if(anu.restrict == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ]*\n`
    bosco.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
   }
})

    
	bosco.on('chat-update', async (message) => {
		require('./Bosco.js')(bosco, message)
	})
}

starts()
