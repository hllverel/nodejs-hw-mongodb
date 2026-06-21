import nodemailer from 'nodemailer';
import { SMTP } from '../constants/index.js';

const transporter = nodemailer.createTransport({
  host: process.env[SMTP.SMTP_HOST],
    port: Number(process.env[SMTP.SMTP_PORT]),
  auth: {
    user: process.env[SMTP.SMTP_USER],
    pass: process.env[SMTP.SMTP_PASSWORD],
  },
  connectionTimeout: 5000,
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};
