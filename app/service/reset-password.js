import nodemailer from 'nodemailer';
import axios from 'axios';

const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const reset = {
  Reset: async (email) => {
    try {
      console.log('email', email);

      const response = await axios.put(`${authServer}createPasswordReset`, {
        email,
      });
      const resetToken = response.data.token;
      await sendEmail(email, resetToken);
      return true;
    } catch (error) {
      console.log('Reset failed', error.response.data);
      return error.response.data;
    }
  },
};
async function sendEmail(email, resetToken) {
  // Create a nodemailer transporter
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '103893f222d192',
      pass: 'a14f18796d0927',
    },
  });

  // Send the email
  const info = await transport.sendMail({
    from: 'webmon63@stis.ac.id', // Sender email address
    to: email,
    subject: 'Password Reset Web Monitoring PKL 63',
    text: `Klik link dibawah ini untuk mereset password akun anda: ${baseUrl}reset-password?token=${resetToken}`,
    html: `<p>Klik link dibawah ini untuk mereset password akun anda:</p><p><a href="${baseUrl}reset-password?token=${resetToken}">Reset Password</a></p>`,
  });
  console.log('Email sent:', info);
}

export default reset;
