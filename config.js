//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2041d07ec485ec97559e3.jpg";
global.devs = "254114537515";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254114537515";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/2041d07ec485ec97559e3.jpg";
global.waPresence = process.env.WAPRESENCE || "Recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ᴛᴏxxɪᴄ;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFRZ1U1TjlKNVZkN3duL2JLelFLVnZpSFAvbldXOTM1MGNsS083a2puTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclQwNUlsK0lZbkw4YzF2MU5Nb1ZjbXdWR0djY1BoQ3dLblNQRXVOWnZIRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTkJKYnBDWXYySGlURFYzdzF3OVlBTGRHQmtMSHZRdE82ZkVDM2J6bEZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHa2l4cHlEaThLUExsVU4yWkFza0lneVgrR25Cb3NmREZhU0ZuQmZTZTJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCN05nc05KMGloTCtySjIreVZVRFNGM0JYdHRVRmVrYVErQ3pxNE5OWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRUSTA3SnN5bllRRFpmb2V6M0gvOHdwdjNvMi95UkVyR0ZHUFNxT3kzSG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUl3djZIdkdMelh6VXU1K3lBN25NeTl4d3N3d05wRkp2eG9Qamx5cFBGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiellvRDhubHVyc0FvcG9FaGRrQXpCbzFOWXV6bWFUTHVwZ1lrb0dJTzZEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ0UGhkdFVmUExpbkJYSHlHMmtDc0ZzWmgwZTltREhqYWIxTWdKTENmWjNENVVmaElIZlNYSkxNc2xvV2Q2ZGk5aG1mV3V5bHlPMkhnQ1dwUHh6OGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJmemxIamYvd0pTbWxKU0FzUlo4MXRlWnpzbng3SkVhSmVvblJvNHFoUG9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsckFtcERLQ1NEcVNTdjdFZFRJYU9BIiwicGhvbmVJZCI6IjUzMDcxZjA0LTQ0ZDgtNGQ2MS1hY2FiLWQ5ZDM1NzIxYjhkYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCN3ZPbnMwTDJvdFpBVExpRWlsanloTVhBQms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMC9PeFlhTSt0MVhmaTFvZzRSYVp3blY1OEpzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVMUjNBNUFWIiwibWUiOnsiaWQiOiIyNTQ3NjgyMzEwNDI6MzFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTU5MDI1MzQ4NDg2NzY6MzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTytrcXdDRU1qM29yWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoR3gyOCtZTzJ0SS9Db3ozM2NScFNEeU1tL0MxR1NaZWNnSTlKb0ZOc2dNPSIsImFjY291bnRTaWduYXR1cmUiOiJUOVBabnhOK3RJRDh4WnUxZnJIOEhBNjNCQmpoUHNEaWxqcFFCU1BRRXI4WTc5L3R3L0dYQTNiQ05GSnIybzRlMGdXaDJOQnVxVklBS3JkYitCL0RCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiejBwK1VQS3h0MFJZemt5bW1zdXdVYmJCcG1zNXcxcnZvMisyNUplc3FuclIvV3d5cE9wTUFJWk1SekVycmtLYUgrc1hPYVVHWXlCeDNYVzkrT1lpZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NjgyMzEwNDI6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVJzZHZQbUR0clNQd3FNOTkzRWFVZzhqSnZ3dFJrbVhuSUNQU2FCVGJJRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDQzMTMwOX0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬`©•VANISH_TECH®•` ,",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "VANISH MD",
  botname: process.env.BOT_NAME || "VANISH_MD",
  ownername: process.env.OWNER_NAME || " JUSTIN 🏆,",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
