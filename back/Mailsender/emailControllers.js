// emailController.js
const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.mailersend.net',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'MS_YuIVXM@trial-vywj2lp2wmqg7oqz.mlsender.net',
    pass: 'glbPS3NISVmgFwVc',
  },
  tls: {
    rejectUnauthorized: false, // Allows self-signed certificates
  },
});

// Send email function
const sender = async (req, res) => {
  const { to, subject, html } = req.body;



  // Validate the incoming data
  if (!to || !subject || !html) {
    return res.status(400).send('Missing required fields');
  }

  try {
    let info = await transporter.sendMail({
      from: '"Socially" <MS_YuIVXM@trial-vywj2lp2wmqg7oqz.mlsender.net>', // Sender address
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
