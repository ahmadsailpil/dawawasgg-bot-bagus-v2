import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Nurutomo:
OHLX BOT
RDHO

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.nameown, body: `RIDHOⓋ︎`, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['tqtq', 'tqto', '?']
handler.tags = ['main']
handler.command = /^(tqtq|tqto|thanksto|thanks|\?)$/i

export default handler