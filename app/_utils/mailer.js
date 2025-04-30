"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function sendEmail({ name, email, text }) {
  const info = await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL}>`,
    to: "craft14716@gmail.com",
    subject: "New message from portfolio",
    text: "You have a new message from your portfolio.",
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${text}</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);
}
