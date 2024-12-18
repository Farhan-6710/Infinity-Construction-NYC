import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Prepare the email content using the dynamic data
  const emailContent = ` 
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br />${message}</p>
  `;

  try {
    // Send the email via Resend SDK
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Sender email
      to: 'infinityconstructionnyc5@gmail.com', // Recipient email
      subject: 'New Contact Form Submission', // Subject
      html: emailContent, // Email content as HTML
    });

    if (error) {
      // If there was an error, log the full error and return a failure response
      console.error('Resend API Error:', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message || 'An error occurred' }),
        { status: 500 }
      );
    }

    // Return a success response if the email was sent successfully
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!', data }),
      { status: 200 }
    );
  } catch (error) {
    // Log the full error object if there is any unexpected error
    console.error('Error sending email:', error);

    // Handle any unknown errors
    return new Response(
      JSON.stringify({ success: false, error: 'An unknown error occurred' }),
      { status: 500 }
    );
  }
}
