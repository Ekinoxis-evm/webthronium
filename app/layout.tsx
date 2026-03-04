import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thronium Legal | Abogados en Cali - Multas, Crédito y Derecho Administrativo",
  description:
    "Thronium Legal: eliminamos tus multas de tránsito, recuperamos tu historial crediticio y te representamos ante entidades públicas. Revisión inicial GRATIS. Cali, Colombia.",
  keywords:
    "abogados Cali, eliminar multas tránsito, recuperar crédito Datacrédito, recursos jurídicos Colombia, derecho administrativo Cali",
  openGraph: {
    title: "Thronium Legal",
    description: "Tu aliado jurídico en Colombia. Multas, crédito y recursos jurídicos.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
