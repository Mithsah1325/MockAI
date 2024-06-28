import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const port = process.env.PORT;

app.use(cors())
app.use(bodyParser.json());

//Email setup Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  app.post('/api/contact', (req, res) => {
    const { firstName, lastName, email, inquiry } = req.body;
  
    const mailOptions = {
      from: {
        name: 'Mith Sah',
        address: process.env.EMAIL_USER
      }, //sender address
      to: process.env.EMAIL_USER,
      subject: `Contact form submission from ${firstName} ${lastName}`,
      text: inquiry
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent');
      }
    });
  });


  
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})