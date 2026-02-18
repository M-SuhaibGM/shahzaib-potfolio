import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // 1. Create a transporter (The connection to your email service)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your provider (gmail, outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // 2. Define the mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "shahzaib.kp766@gmail.com",
      subject: subject,
      // Using 'html' instead of 'react' component
      html: `
        <div style="font-family: sans-serif;">
          <h1>${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>New message submitted:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // 3. Send the email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}