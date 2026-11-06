import { site, faq } from "./site";

export function buildJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/images/brand/nextopus.webp`,
    email: site.email,
    telephone: site.phone,
    sameAs: Object.values(site.socials)
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    image: `${site.url}/og.webp`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: site.country
    },
    sameAs: Object.values(site.socials)
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "es-CO"
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
      { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}#servicios` },
      { "@type": "ListItem", position: 3, name: "Proyectos", item: `${site.url}#proyectos` },
      { "@type": "ListItem", position: 4, name: "Contacto", item: `${site.url}#contacto` }
    ]
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return [organization, localBusiness, website, breadcrumb, faqPage];
}