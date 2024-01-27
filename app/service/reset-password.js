import nodemailer from 'nodemailer';
import axios from 'axios';
import { set } from 'cookie-cutter';

const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const reset = {
  Reset: async (email) => {
    try {
      console.log('email', email);

      const response = await axios.put(`${authServer}createPasswordReset`, {
        email,
      });
      const resetToken = response.token;
      setTimeout(() => {
        sendEmail(email, resetToken);
      }, 0);
      return true;
    } catch (error) {
      return error;
    }
  },
};

function sendEmail(email, resetToken) {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'alieftazulvan@gmail.com',
      pass: 'hzlthqpxistrbzgj',
    },
  });

  // Send the email
  const mailOptions = {
    from: 'webmon63@stis.ac.id', // Sender email address
    to: email,
    subject: 'Password Reset Web Monitoring PKL 63',
    text: `Klik link dibawah ini untuk mereset password akun anda: ${baseUrl}reset-password?token=${resetToken}`,
    html: `<p>Klik link dibawah ini untuk mereset password akun anda:</p><p classname="bg-primary-700 text-white w-fit rounded-md px-4 py-2"><a href="${baseUrl}reset-password?token=${resetToken}">Reset Password</a></p>`,
  };
  console.log('Email sent:', mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
    } else {
      console.log('Email sent: ', info.response);
    }
  });
}

export default reset;
