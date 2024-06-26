
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.SESSION_ID = "PRABATH-MD~8Xd1TJpC#F21dTxaJyZx7IqE3RzGAbsDYba2LM67-q_jTUwmOwSk",    
    BOT_NUMBER:  process.env.BOT_NUMBER = " 94727849423,
    GITHUB_USERNAME: username = "Kaveesha-Boom",
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN = "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",
};
