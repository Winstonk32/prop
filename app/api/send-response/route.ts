import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER = 'winstonkigonya4@gmail.com', // Use environment variable for email user
    pass: process.env.EMAIL_APP_PASSWORD = 'emrv jxbw jiuq kxed', // Use environment variable for email password
  },
});

// Handle POST requests
export async function POST(request: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error('Missing email credentials');
    return NextResponse.json({ success: false, error: 'Missing email configuration' }, { status: 500 });
  }

  try {
    // Parse the incoming JSON data (array of answers)
    const data = await request.json();

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ success: false, error: 'Invalid or empty data received' }, { status: 400 });
    }

    // Convert the array of answers into a readable format
    const answersHtml = data
      .map(([question, answer]) => `<p><strong>${question}:</strong> ${answer}</p>`)
      .join("");

    // Send the email
    await transporter.sendMail({
      from: `"Date Notifier" <${process.env.EMAIL_USER}>`, // Correctly formatted sender address
      to: 'winstonkigonya4@gmail.com', // Recipient address
      subject: '💕 New Date Response!', // Email subject
      html: `
        <h1>New Date Proposal Response!</h1>
        ${answersHtml}
      `,
      attachments: [
        {
          filename: `date-response-${new Date().toISOString()}.json`, // Attachment filename
          content: JSON.stringify(data, null, 2), // Attachment content
          contentType: 'application/json', // Attachment content type
        },
      ],
    });

    // Respond with success
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Failed to send email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
