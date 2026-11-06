import type { Metadata, Viewport } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/globals.css";
import { site } from "./lib/site";
import { buildJsonLd } from "./lib/seo";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nextopus - Inicio",
    template: "%s | Nextopus"
  },
  description: "Arquitectura de software de alto rendimiento, automatización empresarial y soluciones digitales desde Venezuela para el mundo.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png"
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: site.url,
    siteName: "Nextopus",
    title: "Nextopus - Inicio",
    description: "Arquitectura de software, automatización empresarial y soluciones digitales.",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Nextopus" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextopus - Inicio",
    description: "Automatización y soluciones digitales de alto impacto.",
    images: ["/og.webp"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildJsonLd();
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href={site.url} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}