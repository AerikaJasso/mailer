const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/contact', {title: 'Contact'});
});

router.post('/send', (req, res, next) => {
    let transporter = nodemailer.createTransport({
        // provide service credentials
        service: 'Gmail',
        auth: {
            user: 'testing@gmail.com',
            pass: 'apasscode'
        }
    });
    let mailOptions = {
        from: 'Range<Range@gmail.com>',
        to: 'testing@gmail.com',
        subject: 'Submission',
        text: 'You have a new submission with the following details...Name:'+req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
        html: '<p>You have a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message:'+req.body.message+'</li>/ul>'
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message Sent', info.response);
            res.redirect('/');
        }
    });
})

module.exports = router;