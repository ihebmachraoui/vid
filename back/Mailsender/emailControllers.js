// emailController.js
const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.mailersend.net',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'MS_tDUwIQ@trial-351ndgw991r4zqx8.mlsender.net',
    pass: '1sz303whCdN1ddS4',
  },
  tls: {
    rejectUnauthorized: false, // Allows self-signed certificates
  },
});

// Send email function
const sender = async (req, res) => {
  const { to, subject, html } = req.body;
console.log("aaaaaé");


  // Validate the incoming data
  if (!to || !subject || !html) {
    return res.status(400).send('Missing required fields');
  }

  try {
    let info = await transporter.sendMail({
      from: '"Socially" <MS_tDUwIQ@trial-351ndgw991r4zqx8.mlsender.net>', // Sender address
      to: to, // List of receivers
      subject: subject, // Subject line
      html: html, // HTML body
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};


module.exports = { sender };
