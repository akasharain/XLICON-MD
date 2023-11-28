const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923152363247"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923152363247' 
global.devs = '923152363247';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD ==> eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxGZ0owZ0JQc1JVTkF6VDVwMDhJUTVmWjJYa2tjNUNOWGU4V0ZtMHVGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2lMSXZlNjdPQ0lhQkFTanNLelFSN25BbnlUcy9lcGU0cnp3Z0dyYnEzUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT1dLNWkyWEhXNktDcWVzYTBzN2haTDFhQnVHakRmd3htT1o4V0NYUEVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMclQxMzcvNHorVEJCTVRKQ2RpVzRVZjExdmsydll1N0cvZ1hUNExhcG5JPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HM283QTBWMVRoWnFyUFdnTEwwSzdUNmMxNUtwTnAxeThmWS9JYzJBMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYzM01Pc3pNalVHZ1FlSkxHUGgwd05tbFFudGZNVzdaK1hyb1U3YURzbFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRjQzZ0d6bnoxbE5tTWg3N2RVSktaN1k5NDJEZitteTUwclArUDZEU3AzTGx1N2JFRkl6TXlPa3dCUG9ZSmlEM2JGWG53a0ZjYVlwVTdmYkc4Smpqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyNiwiYWR2U2VjcmV0S2V5IjoidlhwVjkwa0RFSkdkWXNSd29PRXlpR2dhWXo3ZjdEVFV6VEJVMjN0alhQZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS1dkSVhwSmNUNXlRdjh2d29ReGpHUSIsInBob25lSWQiOiIyOWU5YTc0ZC0xNDU2LTQxYmYtOWQxZC1hNzJmM2ViZGI4ZTIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3gweFpFZFgzdzYzOFUvZC9RYWQ5QUd5d2JBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJacHRqL0JNU2pJeW1oSGlIb3VFOUZaNTQrTlk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcmc3YnNGRUlXOWw2c0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNWNDZ3QXk2M2lkdk9MalFDYUNCM0FQRUxlQ3VqSDk2ZW9UblZORnZoQW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRLYWlkUTNHbFV2eEhJQzIxQlpqMlhEZ05QeTdjdlZHUFkwbjJMWGdzV2lZT0ZkT1dQWk9kaWdJMm5tcm5kL1lmQitWcTJXTmpwVEJWcWx5bFV0d0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvWlREZi9uNVd5a3JCOGlxdC9WR2FCUER2a1lJLzFYYWZ4OElDdEFuU2hPZWJpeXVJc0VKcGhtSXBVb0QzbmRHeHk5Z012ZSthR3JNeTFkQUxZbzJqUT09In0sIm1lIjp7ImlkIjoiOTIzMTUyMzYzMjQ3OjJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTUyMzYzMjQ3OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWxlT3NBTXV0NG5iemk0MEFtZ2dkd0R4QzNncm94L2VucUU1MVRSYjRRSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTE3NDkyMX0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@kashi-bot',
  packname:  process.env.PACK_NAME || 'mrkashihacker',
   
  botname:   process.env.BOT_NAME === undefined ? "@kashi-bot" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'mrkashihacker' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
