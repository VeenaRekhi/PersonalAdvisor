// Creating a file for saving naexmo instance nexmo.js

//$ npm install nexmo --save

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 326992eb,
  apiSecret: 7f3a030f68abc3fe
});

//There are also optional params such as, applicationId, privateKey, and options object. 
//You can find out more on the node-nexmo library repo on GitHub.

//Send SMS Messages with Node.js

//To send a message, use the nexmo.sms.sendSms function and 
//pass your virtual number you are sending the message from, a recipient number, and the message to be sent.

//Also, you can pass optional params, and a callback.

//Let’s try hard-code the phone number (which should start with a country code, e.g. “15105551234”) 
//and a message for now to try the API:


nexmo.message.sendSms(
  12014646800, '15105551234', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );


nexmo.message.sendSms(
  12014646800, '15105551234', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
 
Let’s run this, and see if you get a SMS to your mobile phone.

$ node index.js