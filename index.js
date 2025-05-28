require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,        
      pass: process.env.EMAIL_PASS      
    }
  });

  let mailOptions = {
    from: email,
    to: 'giovannacambraia8@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Message sent!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to send email.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});