require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***' : 'undefined');

app.post('/contact', async (req, res) => {
  const { name, email, message, phone, subject } = req.body;

  

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
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || 'N/A'}
    Message: ${message}
    `
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