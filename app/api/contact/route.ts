import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const company = formData.get("company")?.toString() ?? "";
    const service = formData.get("service")?.toString() ?? "";
    const budget = formData.get("budget")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const { error } = await resend.emails.send({
      from: "Radiance Web Studio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Website Enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <hr/>

        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}