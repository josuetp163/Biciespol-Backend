var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer")


/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body)
    res.render('index', { title: 'Express' });
    mail(req); 
});

async function mail(req){
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    //service: "gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "emmie.considine21@ethereal.email", // generated ethereal user
      pass: "txBsB4sdXstd83frSB", // generated ethereal password
        //user: "",
        //pass: "",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "ejemplo@gmail.com", // list of receivers
    subject: req.body.nombre, // Subject line
    text: req.body.email +"\n"+ req.body.mensaje, // plain text body
    //html: "<b>Hello world?</b>", // html body
  });
}

module.exports = router;
