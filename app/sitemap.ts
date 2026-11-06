import { MetadataRoute } from "next";
import { site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/#servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#proyectos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/#stack`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#equipo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#testimonios`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#biografia`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/legal/terminos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/condiciones`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}