
/* get the Make in a particular year */
exports.quoteSubmission=async (req,res)=>{
    try{
      console.log(req.body);
      let emailFrom=req.body.email;
      let nameFrom=req.body.firstName+" "+req.body.lastName;
      let insuranceForm= req.body.from;
        var nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'okey20@ethereal.email',
              pass: 'eThVD37PYd494HyDK3'
          }
      });

        var mailOptions = {
          from: `${nameFrom} <${emailFrom}>`,
          to: 'okey20@ethereal.email',
          subject: `${insuranceForm} query by ${nameFrom}`,
          text: 'Hey there, it’s our first message sent with Nodemailer ',
          html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
        
        };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.json({'info':req.body,'success':0,'errorMessage':error});
  } else {
    console.log('Email sent: ' + info.response);
    res.json({'info':req.body,'success':1});
  }
});
        
        
    } catch (error) {
        console.log("err");
        res.status(400).send(error)
    }
    
}


