"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: "linyi",
    label: "COMERCIO INTERNACIONAL",
    title: "Mi Pana en Linyi",
    shortDesc: "Plataforma E-commerce internacional con pagos multi-moneda y logística cross-border China-LATAM.",
    fullDesc: "Mi Pana en Linyi es una operación comercial internacional liderada por Sebastián Ernesto Corona Bencomo, empresario y desarrollador Full-Stack venezolano. Este proyecto conecta fabricantes mayoristas de China (Linyi, Shandong) con distribuidores de toda Latinoamérica, gestionando toda la cadena de suministro: negociación con fábricas, logística internacional, aduanas y comercio transfronterizo. La plataforma integra tecnologías chinas de punta y respalda operaciones con pagos multi-moneda (CNY, USD, EUR), tracking en tiempo real y gestión documental multilingüe. Es la prueba viva de que un programador venezolano puede dirigir operaciones empresariales complejas en el mercado asiático, respaldado por corporaciones tecnológicas chinas.",
    image: "/images/projects/linyi.webp",
    logo: "/images/projects/linyi-logo.webp",
    tags: ["Next.js", "Supabase", "Stripe", "Odoo"],
    link: "https://www.mipanaenlinyi.com"
  },
  {
    id: "noogui",
    label: "ESTUDIO TÉCNICO",
    title: "Noogui",
    shortDesc: "Catálogo de emprendedor para gestionar pedidos, productos y facturación en línea con dashboard en tiempo real.",
    fullDesc: "Noogui es una tienda en línea y catálogo digital diseñado para emprendedores que quieren gestionar sus pedidos, productos y clientes sin complicaciones. Incluye un dashboard en tiempo real que muestra ventas, stock y métricas clave, además de un flujo automatizado que reduce el trabajo manual hasta en un 80%. Emite facturas en PDF profesionales listas para compartir con tus clientes, sin necesidad de sistemas contables complejos. Es la solución ideal para pequeños negocios que quieren digitalizar su operación sin depender de plataformas costosas.",
    image: "/images/projects/noogui.webp",
    logo: "/images/projects/noogui-logo.webp",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    link: "https://nooguive.vercel.app"
  },
  {
    id: "lipid",
    label: "DATA SCIENCE",
    title: "Lipid-Profile-Predictor",
    shortDesc: "Sistema de predicción y análisis de perfiles lipídicos y riesgo cardiovascular.",
    fullDesc: "Lipid-Profile-Predictor es una herramienta de investigación científica desarrollada en Nextopus que combina análisis clínico, procesamiento de datos nutricionales y modelos predictivos para evaluar el riesgo cardiovascular de un paciente. La plataforma procesa perfiles lipídicos completos (colesterol total, HDL, LDL, triglicéridos) y los cruza con variables antropométricas y nutricionales para generar un índice de riesgo personalizado. Diseñada como herramienta de apoyo para profesionales de la salud y nutricionistas, permite visualizar tendencias y generar recomendaciones basadas en evidencia, todo desde el navegador sin comprometer la privacidad del paciente.",
    image: "/images/projects/lipid.webp",
    logo: null,
    tags: ["JavaScript", "Data Science", "HTML5", "Chart.js"],
    link: "https://github.com/sebastiancoronadev/Lipid-Profile-Predictor"
  },
  {
    id: "tempusdb",
    label: "INFRAESTRUCTURA",
    title: "TempusDB",
    shortDesc: "Motor de base de datos para series temporales con compresión LZ4 escrita en Rust y Go.",
    fullDesc: "TempusDB es un motor de base de datos especializado en series temporales, desarrollado desde cero por Sebastián Corona como proyecto de investigación técnica avanzada. Está escrito en Rust y Go (dos lenguajes conocidos por su rendimiento y seguridad de memoria), e implementa algoritmos de compresión LZ4 que reducen el tamaño de almacenamiento en más del 80% sin pérdida de fidelidad en los datos. Incluye un sistema de índices optimizados para queries de rango temporal, soporte para múltiples formatos de timestamp y una API de consultas diseñada para ser rápida y expresiva. Está pensado para casos de uso como monitoreo de infraestructura, IoT industrial, telemetría de aplicaciones y análisis financiero en tiempo real.",
    image: "/images/projects/tempus.webp",
    logo: "/images/projects/TempusDB-logo.webp",
    tags: ["Rust", "Go", "LZ4"],
    link: "https://github.com/sebastiancoronadev/TempusDB"
  },
  {
    id: "typeon",
    label: "WEB APP DE ÉLITE",
    title: "Typeon",
    shortDesc: "Framework para APIs REST escalables con caché distribuida y cifrado AES-256-GCM.",
    fullDesc: "Typeon es un framework interno desarrollado por Nextopus para construir APIs REST de alto rendimiento con foco absoluto en seguridad y escalabilidad. Incluye una capa de caché distribuida sobre Redis que reduce los tiempos de respuesta en un 60% en cargas altas, un sistema de cifrado simétrico AES-256-GCM con derivación de claves ECDH para comunicaciones seguras, y middlewares modulares de autenticación, rate limiting y logging estructurado. Está pensado para equipos que necesitan desplegar microservicios rápidos sin sacrificar la seguridad. Cada endpoint se documenta automáticamente vía OpenAPI.",
    image: "/images/projects/typeon.webp",
    logo: "/images/projects/Typeon-logo.webp",
    tags: ["TypeScript", "Node.js", "Redis", "AES-256-GCM"],
    link: "https://github.com/sebastiancoronadev/Typeon"
  },
  {
    id: "hstp",
    label: "CIBERSEGURIDAD",
    title: "HSTP",
    shortDesc: "Protocolo de transporte seguro con validación de identificadores mediante algoritmo de Luhn.",
    fullDesc: "HSTP (Hardened Secure Transport Protocol) es un protocolo de capa de transporte diseñado por Nextopus como Proof of Concept de ciberseguridad avanzada. Su objetivo es minimizar la exposición de datos sensibles durante la transmisión mediante un esquema de validación de identificadores basado en el algoritmo de Luhn combinado con firma criptográfica. A diferencia de TLS/HTTPS convencionales, HSTP incluye validación bidireccional de payloads, detección temprana de anomalías y un sistema de tokens efímeros que se regeneran por cada paquete. Está diseñado para escenarios donde la integridad de cada dato es crítica.",
    image: "/images/projects/hstp.webp",
    logo: null,
    tags: ["Ciberseguridad", "Criptografía"],
    link: "https://github.com/sebastiancoronadev/Hardened-Secure-Transport-Protocol"
  },
  {
    id: "odoo",
    label: "ERP & LOGÍSTICA",
    title: "Odoo Yerbatera del Sur",
    shortDesc: "Implementación de sistema de facturación e inventario personalizado en Odoo.",
    fullDesc: "Proyecto de consultoría ejecutado por Sebastián Corona para Yerbatera del Sur Co., una empresa argentina dedicada a la comercialización de yerba mate. La implementación en Odoo centralizó toda la operación: control de productos (con soporte para lotes, vencimientos y unidades de medida específicas), envíos, proveedores y operaciones comerciales que antes se llevaban en hojas de cálculo dispersas. El módulo personalizado incluye generación de facturas con validez fiscal argentina, reportes de rentabilidad por producto, alertas automáticas de stock crítico y dashboard gerencial con KPIs en tiempo real. La implementación redujo los errores de facturación en un 30% durante los primeros tres meses.",
    image: "/images/projects/yerbatera.webp",
    logo: null,
    tags: ["Odoo", "Python", "PostgreSQL"],
    link: "https://www.linkedin.com/in/sebastiancoronadev/"
  },
  {
    id: "huizhiyun",
    label: "DATA PIPELINE",
    title: "Huizhiyun Technologies",
    shortDesc: "Pipeline de facturación multilingüe para comercio China-Latinoamérica.",
    fullDesc: "Proyecto de consultoría ejecutado por Sebastián Corona para Huizhiyun Technologies (汇智云科技股份有限公司), una empresa china especializada en datos empresariales. El desafío: construir un pipeline de facturación que procesara documentos en caracteres chinos (codificaciones UTF-8, GBK y GB2312 mezcladas), convirtiera automáticamente divisas (CNY, EUR, USD) con tasas en tiempo real y generara reportes ejecutivos en tres idiomas (mandarín, inglés y español). Sebastián desarrolló el motor de extracción con Python, pandas y openpyxl, el sistema de conversión con APIs financieras y la generación de PDFs con ReportLab y fuentes CJK. El proyecto fue tan exitoso que la empresa china financió el aprendizaje de mandarín por parte de Sebastián.",
    image: "/images/projects/huizhiyun.webp",
    logo: null,
    tags: ["Python", "Pandas", "ReportLab"],
    link: "https://github.com/sebastiancoronadev/InvoiceNOW"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="proyectos" className="relative bg-[#0a0a0a] border-y border-white/5 py-28 overflow-hidden">

      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes orbitLight {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }

        .bubble-rgb {
          position: relative;
          display: inline-flex;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: #121214;
          z-index: 10;
        }
        .bubble-rgb::before {
          content: '';
          position: absolute;
          inset: -1.5px;
          border-radius: 100px;
          background: conic-gradient(
            from var(--angle),
            transparent 0deg,
            #2563EB 90deg,
            #7C3AED 180deg,
            #38bdf8 270deg,
            transparent 360deg
          );
          animation: orbitLight 3s linear infinite;
          z-index: 0;
        }
        .bubble-rgb::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 100px;
          background: #121214;
          z-index: 1;
        }
        .bubble-rgb-inner {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          background: transparent;
          white-space: nowrap;
        }

        .btn-rgb {
          position: relative;
          display: inline-flex;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: #121214;
          z-index: 10;
          transition: transform 300ms ease-in-out, border-color 300ms ease-in-out;
        }
        .btn-rgb:hover {
          transform: translateY(-1px);
          border-color: transparent;
        }
        .btn-rgb::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 100px;
          background: conic-gradient(
            from var(--angle),
            transparent 0deg,
            #2563EB 90deg,
            #7C3AED 180deg,
            #38bdf8 270deg,
            transparent 360deg
          );
          opacity: 0;
          transition: opacity 300ms ease-in-out;
          animation: orbitLight 3s linear infinite;
          z-index: -1;
        }
        .btn-rgb:hover::before {
          opacity: 1;
        }
        .btn-rgb-inner {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          background: #121214;
          white-space: nowrap;
          border: none;
          width: 100%;
          height: 100%;
        }
      `}</style>

      <div className="sr-only">
        {projectsData.map((p) => (
          <article key={`seo-${p.id}`}>
            <h3>{p.title}</h3>
            <p>{p.fullDesc}</p>
          </article>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projectsData.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": p.title,
                "description": p.fullDesc,
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                "url": p.link
              }
            }))
          })
        }}
      />

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Proyectos <span className="gradient-text">Destacados</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
              Haz clic en cualquier tarjeta para descubrir el caso de estudio completo y su impacto técnico.
            </p>
          </div>
        </div>


        <div className="relative mb-20 rounded-[2.5rem] bg-[#121214] border border-white/10 overflow-hidden shadow-2xl p-8 md:p-14">

          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1.05, 1],
                x: [0, -30, 15, 0],
                y: [0, 30, -15, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-[#1e1b4b] via-[#1d4ed8] to-[#4338ca] rounded-full blur-[80px] md:blur-[140px] opacity-30 md:opacity-60"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col items-start">

              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Inteligencia Artificial entrenada para <span className="gradient-text">escalar tu negocio</span>.
              </h3>

              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                Nuestro motor de IA no solo responde: analiza patrones, automatiza flujos complejos y se integra nativamente con tu infraestructura para que tu equipo se enfoque en lo que realmente importa.
              </p>

              <ul className="space-y-4 w-full">
                {[
                  "Se conecta fácil con tus sistemas y bases de datos.",
                  "Automatiza tareas repetitivas las 24 horas del día.",
                  "Aprende y responde con los documentos privados de tu negocio."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <i className="bi bi-check2-circle text-[#00E364] text-xl shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm md:text-base font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center mt-4 md:mt-0">

              <div className="absolute inset-4 md:inset-8 bg-gradient-to-tr from-[#008EFF]/30 to-[#7C3AED]/30 rounded-[2rem] blur-2xl md:blur-3xl transform rotate-3" />
              <div className="absolute inset-6 md:inset-12 bg-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-inner" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 md:-top-6 md:-left-8 z-30"
              >
                <div className="bubble-rgb px-4 py-2 md:px-5 md:py-2.5">
                  <span className="bubble-rgb-inner text-white text-[10px] md:text-sm font-medium">
                    Hola, soy Nextopus AI
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-2 right-0 md:-bottom-6 md:-right-8 z-30"
              >
                <div className="bubble-rgb px-4 py-2 md:px-5 md:py-2.5">
                  <span className="bubble-rgb-inner text-white text-[10px] md:text-sm font-medium">
                    Listo para ayudarte
                  </span>
                </div>
              </motion.div>

              <div className="relative z-20 w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/nextopus.webm" type="video/webm" />
                  <source src="/videos/nextopus.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="relative group rounded-2xl overflow-hidden bg-[#121214] border border-white/10 flex flex-col justify-end p-8 cursor-pointer transition-all duration-500 hover:border-white/30 h-[440px]"
            >
              <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                <i className="bi bi-arrow-right text-white text-lg transition-transform duration-300 group-hover:-rotate-[45deg]" />
              </div>

              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-35 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/80 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 mb-2">
                  {project.label}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out overflow-hidden">
                  <p className="text-white/70 text-sm leading-relaxed font-light min-h-0 pb-1">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60 text-[9px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#0c0c0e] border-t sm:border border-white/10 shadow-2xl p-6 sm:p-10 md:p-12 no-scrollbar"
            >

              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-rgb w-10 h-10 sm:w-12 sm:h-12"
                  aria-label="Cerrar modal"
                >
                  <span className="btn-rgb-inner">
                    <i className="bi bi-x-lg text-white text-lg" />
                  </span>
                </button>
              </div>


              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative mb-6">
                {selectedProject.logo ? (
                  <Image
                    src={selectedProject.logo}
                    alt={`${selectedProject.title} logo`}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="bi bi-folder2-open text-[#008EFF] text-2xl" />
                  </div>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight pr-12">
                {selectedProject.title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                {selectedProject.shortDesc}
              </p>

              <div className="prose prose-invert prose-sm sm:prose-base max-w-none mb-10">
                <p className="text-white/80 leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                  Tecnologías utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rgb inline-flex"
              >
                <span className="btn-rgb-inner px-6 py-3 text-white font-semibold text-sm gap-2">
                  <i className="bi bi-box-arrow-up-right" />
                  Visitar proyecto
                </span>
              </a>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}