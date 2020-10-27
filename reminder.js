require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const date = new Date();

client.messages
  .create({
     body: 'Reminder to take some time for yourself 😊',
     from: process.env.FROM_NUMBER,
     to: process.env.TO_NUMBER
   })
  .then(message => console.log(`${date}: ${message.sid}`))
  .catch(error => console.error(error));