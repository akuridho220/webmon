import nodemailer from 'nodemailer';
import axios from 'axios';

const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Generate a random reset token
    try {
      const response = await axios.put(`${authServer}CreatePasswordReset`, {
        email,
      });
      const { token } = response.data.token;
    } catch (error) {
      console.error('Error create password reset:', error);
      res.status(500).json({ error: 'Error create password reset' });
    }

    // Send the email
    try {
      await sendEmail(email, token);
      res.status(200).json({ message: 'Password reset email sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send password reset email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function sendEmail(email, resetToken) {
  // Create a nodemailer transporter
  var transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '103893f222d192',
      pass: 'a14f18796d0927',
    },
  });

  // Send the email
  const info = await transporter.sendMail({
    from: 'webmon63@stis.ac.id', // Sender email address
    to: email,
    subject: 'Password Reset Web Monitoring PKL 63',
    text: `Klik link dibawah ini untuk mereset password akun anda: ${baseUrl}reset-password?token=${resetToken}`,
    html: `<p>Klik link dibawah ini untuk mereset password akun anda:</p><p><a href="${baseUrl}reset-password?token=${resetToken}">Reset Password</a></p>`,
  });
  console.log('Email sent:', info);
}
