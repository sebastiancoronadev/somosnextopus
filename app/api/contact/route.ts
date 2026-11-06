import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, tipoProyecto, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { success: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append("Nombre", nombre);
    formData.append("Email", email);
    formData.append("Telefono", telefono);
    formData.append("Tipo de Proyecto", tipoProyecto);
    formData.append("Detalles", mensaje);
    formData.append("_subject", `Nuevo contacto desde Nextopus - ${nombre}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const response = await fetch("https://formsubmit.co/ajax/contacto@codexstudiove.com", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Error en el servidor de correo" },
        { status: 500 }
      );
    }

    const responseData = await response.json();

    if (responseData.success === "true" || responseData.success === true) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: responseData.message || "Error interno" },
      { status: 500 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}