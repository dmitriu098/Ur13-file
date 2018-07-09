/*
 Отправить себе на почту письмо с помощью Node.js
 */


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'myemail',
        pass: 'mypass'
    }
});

var mailOptions = {
    from: 'myemail@gmail.com',
    to: 'myemail2@gmail.com',
    subject: 'Заголовок сообщения от Node',
    text: 'привет'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});