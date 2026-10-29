import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
}: ContactEmailProps): React.JSX.Element => {
  const previewText = `Nuevo mensaje de contacto de ${name} (${email})`;

  return (
    <Html lang="es">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Text style={tagline}>PORTAFOLIO // CONTACTO</Text>
            <Heading style={heading}>
              Nuevo Mensaje Recibido
            </Heading>
            <Text style={subtitle}>
              Has recibido una nueva propuesta o mensaje a través de tu portafolio.
            </Text>
          </Section>

          {/* Sender Info Card */}
          <Section style={card}>
            <Text style={fieldLabel}>REMITENTE</Text>
            <Text style={fieldValueName}>{name}</Text>

            <Text style={fieldLabel}>CORREO ELECTRÓNICO</Text>
            <Link href={`mailto:${email}`} style={emailLink}>
              {email}
            </Link>
          </Section>

          {/* Message Card */}
          <Section style={messageCard}>
            <Text style={fieldLabel}>MENSAJE</Text>
            <Text style={messageContent}>{message}</Text>
          </Section>

          {/* Action CTA */}
          <Section style={ctaSection}>
            <Link href={`mailto:${email}?subject=Re:%20Contacto%20Portafolio`} style={ctaButton}>
              Responder a {name}
            </Link>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              Este correo fue enviado automáticamente desde el formulario de contacto de tu portafolio personal.
            </Text>
            <Text style={footerBrand}>
              © {new Date().getFullYear()} David Sliren • Full Stack Developer
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

// Styles aligned with DESIGN.md (Dark Tech Minimalist)
const main: React.CSSProperties = {
  backgroundColor: "#121315",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Manrope", sans-serif',
  margin: "0 auto",
  padding: "32px 16px",
};

const container: React.CSSProperties = {
  backgroundColor: "#121315",
  maxWidth: "580px",
  margin: "0 auto",
  borderRadius: "16px",
  padding: "0",
};

const headerSection: React.CSSProperties = {
  padding: "16px 8px 24px 8px",
};

const tagline: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  color: "#0071e3",
  textTransform: "uppercase",
  margin: "0 0 10px 0",
};

const heading: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 800,
  color: "#e3e2e4",
  lineHeight: "1.25",
  letterSpacing: "-0.02em",
  margin: "0 0 8px 0",
};

const subtitle: React.CSSProperties = {
  fontSize: "14px",
  color: "#c1c6d6",
  lineHeight: "1.5",
  margin: "0",
};

const card: React.CSSProperties = {
  backgroundColor: "#1b1c1e",
  border: "1px solid rgba(65, 71, 83, 0.35)",
  borderRadius: "12px",
  padding: "20px 24px",
  margin: "16px 0",
};

const messageCard: React.CSSProperties = {
  backgroundColor: "#1b1c1e",
  border: "1px solid rgba(65, 71, 83, 0.35)",
  borderRadius: "12px",
  padding: "20px 24px",
  margin: "16px 0",
};

const fieldLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.15em",
  color: "#a2a4a9",
  textTransform: "uppercase",
  margin: "0 0 4px 0",
};

const fieldValueName: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#e3e2e4",
  margin: "0 0 16px 0",
};

const emailLink: React.CSSProperties = {
  fontSize: "15px",
  color: "#0071e3",
  textDecoration: "none",
  fontWeight: 500,
  display: "inline-block",
  margin: "0",
};

const messageContent: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#e3e2e4",
  whiteSpace: "pre-wrap",
  margin: "0",
};

const ctaSection: React.CSSProperties = {
  textAlign: "center",
  margin: "24px 0",
};

const ctaButton: React.CSSProperties = {
  backgroundColor: "#0071e3",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "10px",
  padding: "14px 28px",
  display: "inline-block",
};

const divider: React.CSSProperties = {
  borderColor: "rgba(65, 71, 83, 0.3)",
  margin: "32px 0 20px 0",
};

const footerSection: React.CSSProperties = {
  padding: "0 8px 16px 8px",
  textAlign: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "11px",
  color: "#727479",
  lineHeight: "1.5",
  margin: "0 0 8px 0",
};

const footerBrand: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 600,
  color: "#a2a4a9",
  margin: "0",
};
