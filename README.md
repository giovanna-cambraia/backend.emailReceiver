# ✉️ Portfolio Email Backend

A simple and sleek backend to handle messages from your portfolio website. Built with Node.js, Express, and Nodemailer to send emails directly to you! 🚀


## ✨ Features

📩 Receive messages from your portfolio contact form

🔒 Send emails securely via Nodemailer

⚡ Lightweight, minimal setup, easy to integrate

🖥️ Perfect for personal portfolios

## 🛠️ Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)  
![Nodemailer](https://img.shields.io/badge/Nodemailer-D14836?style=for-the-badge&logo=nodemailer&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  


## 🚀 Installation

1️⃣ Clone the repo:

```bash
git clone <your-repo-url>
cd <repo-folder>
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Create a .env file in the root with your email credentials:

```bash
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
```

⚠️ Use app passwords or secure credentials if using Gmail or similar providers.

4️⃣ Start the server:

```bash
npm start
```

Server runs at: http://localhost:3000 🌐

📬 Usage

Send a POST request to /send-email with JSON:

```bash
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "subject": "Hello!",
  "message": "This is a test message from my portfolio."
}
```

Your message will be forwarded straight to your inbox! 🎉

## 💡 Notes

Keep your credentials safe 🔐

Perfect for personal projects, portfolios, or demos 🌟

-------------

# ✉️ Backend de Email para Portfólio

Um backend simples e elegante para receber mensagens do seu site de portfólio, construído com Node.js, Express e Nodemailer, enviando emails direto para você! 🚀


## ✨ Funcionalidades

📩 Recebe mensagens do formulário de contato

🔒 Envia emails de forma segura via Nodemailer

⚡ Leve, fácil de configurar e integrar

🖥️ Ideal para portfólios pessoais e demos

## 🛠️ Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)  
![Nodemailer](https://img.shields.io/badge/Nodemailer-D14836?style=for-the-badge&logo=nodemailer&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  

## 🚀 Instalação

1️⃣ Clone o repositório:

```bash
git clone <url-do-seu-repo>
cd <pasta-do-repo>
```

2️⃣ Instale as dependências:

```bash
npm install
```

3️⃣ Crie um arquivo .env na raiz com suas credenciais:

```bash
EMAIL_USER=seu-email@exemplo.com
EMAIL_PASS=sua-senha-do-email
EMAIL_HOST=smtp.exemplo.com
EMAIL_PORT=587
```

⚠️ Use senhas de app ou credenciais seguras se usar Gmail ou serviços similares.

4️⃣ Inicie o servidor:

```bash
npm start
```

O servidor rodará em: http://localhost:3000 🌐

📬 Uso

Envie um POST para /send-email com JSON:

```bash
{
  "name": "Seu Nome",
  "email": "seu.email@exemplo.com",
  "subject": "Olá!",
  "message": "Esta é uma mensagem de teste do meu portfólio."
}
```

Sua mensagem será encaminhada direto para sua caixa de entrada! 🎉

## 💡 Observações

🔐 Mantenha suas credenciais seguras

🌟 Perfeito para projetos pessoais, portfólios ou demonstrações
