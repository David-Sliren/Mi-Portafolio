import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 | Sliren.dev",
  description: "La página que buscas no existe.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg">La página que buscas no existe.</p>
        <Link href="/es" className="underline">
          Volver al inicio
        </Link>
      </body>
    </html>
  );
}
