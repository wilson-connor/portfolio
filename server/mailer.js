const mailGun = require('mailgun-js');
require('dotenv').config();

const auth = {
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
};

const mg = mailGun(auth);

const sendMail = async function (mailOptions) {
  return await mg.messages().send(mailOptions);
};

module.exports = sendMail;
