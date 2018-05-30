var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ENV['WDEMAIL'],
    pass: ENV['WDEMAIL_PW']
  }
});

var mailOptions = {
  from: 'WDEMAIL',
  to: 'WDEMAIL',
  subject: 'Sending Email using Node.js',
  // text: 'That was easy!'
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});