import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, area, service, propertyType, message } =
      await request.json();

    await resend.emails.send({
      from: "Elliot Electrical Website <onboarding@resend.dev>",
      to: "info@elliotelectrical.co.za",
      subject: `New Quote Request: ${service || "General"}`,
      replyTo: email,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Area / Suburb:</strong> ${area || "Not provided"}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Property Type:</strong> ${propertyType || "Not specified"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
