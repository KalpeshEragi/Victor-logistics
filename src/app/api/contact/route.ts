import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";


// ── Types ──────────────────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

// ── Transport (created once, reused across requests) ───────────────────────

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// ── Helper: build HTML email body ──────────────────────────────────────────

function buildEmailHtml(data: ContactPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
          .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
          .header { background: #16a34a; padding: 28px 32px; }
          .header h1 { color: #ffffff; margin: 0; font-size: 20px; }
          .header p { color: #bbf7d0; margin: 4px 0 0; font-size: 13px; }
          .body { padding: 32px; }
          .field { margin-bottom: 20px; }
          .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #111827; font-weight: 500; }
          .divider { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
          .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap; }
          .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 16px 32px; font-size: 12px; color: #9ca3af; text-align: center; }
          .badge { display: inline-block; background: #dcfce7; color: #15803d; padding: 2px 10px; border-radius: 100px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>📩 New Website Enquiry</h1>
            <p>Received via victorexpressline.com contact form</p>
          </div>
          <div class="body">
            <div class="field">
              <div class="field-label">Service Requested</div>
              <div class="field-value"><span class="badge">${data.service}</span></div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="field-label">Full Name</div>
              <div class="field-value">${data.name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${data.email}" style="color:#16a34a;">${data.email}</a></div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value"><a href="tel:${data.phone}" style="color:#16a34a;">${data.phone}</a></div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">${data.message}</div>
            </div>
            <hr class="divider" />
            <div class="field">
              <div class="field-label">Marketing Consent</div>
              <div class="field-value">${data.consent ? "✅ Yes, opted in" : "❌ No"}</div>
            </div>
          </div>
          <div class="footer">
            This email was sent automatically from the Victor &amp; Co. website contact form.
          </div>
        </div>
      </body>
    </html>
  `;
}

// ── Route Handler ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }
    try {
      await connectDB();
      await Lead.create({
        name,
        email,
        phone,
        service,
        message,
        source: "website",
      });
    } catch (dbError) {
      console.error("[MongoDB Error]:", dbError);
    }

    await transporter.sendMail({
      from: `"Victor & Co. Website" <${process.env.EMAIL_USER}>`,
      to: "cs.mum@victorexpressline.com",
      replyTo: email,         // clicking Reply goes directly to the enquirer
      subject: `New Website Enquiry – ${service}`,
      html: buildEmailHtml(body),
      // Plain-text fallback
      text: [
        `New Website Enquiry`,
        `Service: ${service}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Message:\n${message}`,
        `Consent: ${body.consent ? "Yes" : "No"}`,
      ].join("\n\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[/api/contact] Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}