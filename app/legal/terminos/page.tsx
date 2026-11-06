import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { legalDocs } from "../data";

const doc = legalDocs.find((d) => d.slug === "terminos")!;

export const metadata: Metadata = {
  title: "Nextopus - Términos y Condiciones",
  description: `${doc.subtitle} de Nextopus. Última actualización: ${doc.lastUpdated}.`,
  alternates: { canonical: "/legal/terminos" },
  openGraph: {
    title: `${doc.title} | Nextopus`,
    description: doc.subtitle,
    url: "/legal/terminos",
    type: "article"
  }
};

export default function TerminosPage() {
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