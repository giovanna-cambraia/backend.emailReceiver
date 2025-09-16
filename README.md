Portfolio Email Backend

A simple and sleek backend to handle messages from your portfolio website. Built with Node.js, Express, and Nodemailer to send emails directly to you! 🚀

✨ Features

📩 Receive messages from your portfolio contact form

🔒 Send emails securely via Nodemailer

⚡ Lightweight, minimal setup, easy to integrate

🖥️ Perfect for personal portfolios

🛠️ Technologies

Node.js 🟢

Express ⚡

Nodemailer ✉️

JavaScript 💻

🚀 Installation

Clone the repo:

´´´
git clone <your-repo-url>
cd <repo-folder>
´´´

Install dependencies:

´´´
npm install
´´´

Create a .env file in the root with your email credentials:

´´´
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
´´´

⚠️ Use app passwords or secure credentials if using Gmail or similar providers.

Start the server:

´´´
npm start
´´´

Server runs at: http://localhost:3000 🌐

📬 Usage

Send a POST request to /send-email with JSON:

´´´
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "subject": "Hello!",
  "message": "This is a test message from my portfolio."
}
´´´

Your message will be forwarded straight to your inbox! 🎉

💡 Notes

Keep your credentials safe 🔐

Perfect for personal projects, portfolios, or demos 🌟
