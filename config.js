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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhaMjVUY3dTT0NxZi9EWFF1anBTK2x4Y3I3NXovUlNnQmdiN2NBWlptST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1Y5eDFwYWdTMlNHUk9ITEFYckFHc1VSTTZwM1YvbWpLanFLRDJNdGl6Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Rm1FUnpncU5rTW1WWnRLSjhhUDFHWm0zV2VycWVrSDlyTzRpTm5hdzBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbVRMUjZPTzlYczRheVVnV1JHdVRGa2grdE9OU3pBVkhZM3hoUk5iaWdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFEWVZaVG1NLzgrbGt2K3ZRbWJUS0NBbWdHc0kzREFZaVF2cE92ZndrMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZhcVZSWUpKaEgrQ1pRWE9TeXBkQ0lXVnlFZ1dMTUcwMXlTdHhML1JkUlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VMcjYvRDRsOVBlc2NGSEhCQlp2TFA4UFQyQmdROXVML29ocWdmNEJYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkxhc3lhcHFscWN1djhwdWJjTlc5azZhemJObWFXdGpGN0VEODBlc3praz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdaZXVVZ0h3MCsyVE82dXdvVDd3d3ZaRXlpajhQSzI5OTZaTUpoYjQyRmV3SFlEWC9pcFpMTTEwOGRZM0ZCSGVZcW1PeU5DN3dac3VPRHNyUExDTmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJ5RG9LNmlrbTNLQ2hjSUxSbTlVL0VIU3JpaXQrcU5HUUlCeEczaEtHOHVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRdUlMUVpoZlI4cW95UGJzd3MxV0tnIiwicGhvbmVJZCI6Ijk3OWQzNDhjLTZkODMtNDY2MS1iZjg1LWY2NThjYmU2YzIxZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4bm55WVhaTW45Z1FrRFFvVStjZmQwYlh4S2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTR6VUJnVTB6OWlHNkU3QVYvc1Y1Q2FIK2VFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBQRlNNMzcxIiwibWUiOnsiaWQiOiIyNTQ3MDMzNDY2Mjc6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGFhbWFBQ0VMN1E3YlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVFk2dFZyVWNrbk1EZW9DbXZTbHlHNnZveEErRGxhbE1BNFJJTEFONUIxVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZFdyOENWZ2ZOQW51YXBBZkloNllQQjQ5OTk4YzZyNVhBRnNwb1pEYWVSdkJEdnVsMWtVSE5UR00zdUVpZExkNUwwa083OGhMcUJRTmprYURzZkFpRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZhb1VEOWFTSU5JZk5ibzdWKzZVQkwrUXpOTkU2dkZqaDVpV0VmSTE3bTlIZmZyQWhCa29hOWwweHM2YzFOeEZNaWJNR1lJYklYQUdrckxoaHBsWmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzAzMzQ2NjI3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTJPclZhMUhKSnpBM3FBcHIwcGNodXI2TVFQZzVXcFRBT0VTQ3dEZVFkViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzU1Nzk2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFK3EifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬`©•VANISH_TECH®•` ,",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "VANISH MD",
  botname: process.env.BOT_NAME || "VANISH_MD",
  ownername: process.env.OWNER_NAME || " YUNG_D 📷💀 ,",
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
