import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactEmail from "@/components/emails/ContactEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validación básica de campos requeridos
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "El nombre es obligatorio." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "El correo electrónico es obligatorio." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "El formato del correo electrónico no es válido." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "El mensaje no puede estar vacío." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      console.error(
        "[API/Contact] Error: Faltan las variables de entorno GMAIL_USER o GMAIL_APP_PASSWORD."
      );
      return NextResponse.json(
        { error: "Configuración de correo no disponible en el servidor." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s+/g, ""), // Normaliza contraseñas de app de Google con espacios
      },
    });

    const emailHtml = await render(
      ContactEmail({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      })
    );

    await transporter.sendMail({
      from: `"Portafolio David Sliren" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email.trim(),
      subject: `Nuevo mensaje de ${name.trim()} - Portafolio`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[API/Contact] Error al procesar el envío de correo:", error);
    return NextResponse.json(
      {
        error:
          "No se pudo enviar el correo en este momento. Por favor intenta nuevamente.",
      },
      { status: 500 }
    );
  }
}
