import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, number, email, message, region } = await request.json();

    await resend.emails.send({
      from: "Elliot Electrical Website <onboarding@resend.dev>",
      to: "info@elliotelectrical.co.za",
      subject: `New Booking Request: ${region || "Area Service"}`,
      replyTo: email,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
