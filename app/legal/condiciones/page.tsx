import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { legalDocs } from "../data";

const doc = legalDocs.find((d) => d.slug === "condiciones")!;

export const metadata: Metadata = {
  title: "Nextopus - Condiciones de Contratación",
  description: `${doc.subtitle} de Nextopus. Última actualización: ${doc.lastUpdated}.`,
  alternates: { canonical: "/legal/condiciones" },
  openGraph: {
    title: `${doc.title} | Nextopus`,
    description: doc.subtitle,
    url: "/legal/condiciones",
    type: "article"
  }
};

export default function CondicionesPage() {
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