import express from 'express';
import { createTransport } from 'nodemailer';
import { json } from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(json());

app.post('/send-email', (req, res) => {
  console.log('Recebido pedido para enviar e-mail');
  const { email } = req.body;

  // Configuração do transporte de e-mail
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Opções do e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Assunto do e-mail',
    text: 'Conteúdo do e-mail',
  };

  // Envio do e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).send('Erro ao enviar e-mail');
    } else {
      console.log('E-mail enviado:', info.response);
      res.status(200).send('E-mail enviado com sucesso');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
