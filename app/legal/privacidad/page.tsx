import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { legalDocs } from "../data";

const doc = legalDocs.find((d) => d.slug === "privacidad")!;

export const metadata: Metadata = {
  title: "Nextopus - Política de Privacidad",
  description: `${doc.subtitle} de Nextopus. Última actualización: ${doc.lastUpdated}.`,
  alternates: { canonical: "/legal/privacidad" },
  openGraph: {
    title: `${doc.title} | Nextopus`,
    description: doc.subtitle,
    url: "/legal/privacidad",
    type: "article"
  }
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title={doc.title}
      subtitle={doc.subtitle}
      lastUpdated={doc.lastUpdated}
      version={doc.version}
      content={doc.content}
    />
  );
}