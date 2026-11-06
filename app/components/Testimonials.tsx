"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Transformaron nuestro portafolio arquitectónico en una obra de arte digital. Un equipo comprometido, profesional y con ideas innovadoras que superó cada expectativa.",
    author: "Director Creativo",
    role: "Velmor Arquitecto, Argentina",
    rating: 5
  },
  {
    quote: "Nextopus revolucionó nuestra tienda en línea. Su atención al detalle y el diseño moderno incrementaron nuestras ventas de manera increíble en solo semanas.",
    author: "Gerente Comercial",
    role: "Veraux Ropa, Ecuador",
    rating: 5
  },
  {
    quote: "El equipo entendió perfectamente nuestra visión corporativa. La plataforma es rápida, segura y transmite la confianza absoluta que buscábamos para nuestros clientes.",
    author: "CEO",
    role: "Altivan Inmobiliaria, Colombia",
    rating: 5
  },
  {
    quote: "Nuestro portal empresarial ha dado un salto generacional absoluto. Operaciones más rápidas y una interfaz sumamente intuitiva para todo nuestro equipo de trabajo.",
    author: "Director de Operaciones",
    role: "Concretera Solidexa, Perú",
    rating: 5
  },
  {
    quote: "La calidad visual que entregaron superó todas las expectativas. Nuestros clientes disfrutan de un catálogo moderno, completamente responsivo y dinámico.",
    author: "Propietario",
    role: "Concesionario La Fe, Chile",
    rating: 5
  },
  {
    quote: "Sebastián transformó nuestra operación logística por completo. Redujo los errores de facturación en un 30% en tan solo 3 semanas de implementación técnica.",
    author: "Gerente General",
    role: "Yerbatera del Sur S.A., Argentina",
    rating: 5
  },
  {
    quote: "El pipeline de facturación multilingüe superó todas nuestras expectativas. Procesamiento impecable de caracteres y reportes técnicos en múltiples idiomas.",
    author: "Director de Operaciones",
    role: "Huizhiyun Tecnologías, China",
    rating: 5
  },
  {
    quote: "La automatización de nuestros reportes contables fue radical. El cierre mensual pasó de 5 a 2 días gracias a sus scripts y arquitectura personalizada.",
    author: "Contador Senior",
    role: "Musashi Transport Co., Japón",
    rating: 5
  },
  {
    quote: "Gripstage no sería lo mismo sin su trabajo. La web es rápida, transmite la adrenalina de los circuitos y nuestros simracers están encantados con la experiencia.",
    author: "Piloto Profesional",
    role: "Gripstage, Ecuador",
    rating: 5
  },
  {
    quote: "Trabajar juntos ha sido una experiencia fantástica. No solo crearon soluciones tecnológicas increíbles para nuestros proyectos, sino que ahora nos hemos vuelto socios de negocios para seguir creciendo.",
    author: "Director de Operaciones",
    role: "Oulu Haowu, China",
    rating: 5
  },
  {
    quote: "Impulsó y dio total visibilidad a mi marca. El panel de mi e-commerce es súper intuitivo, está perfectamente optimizado y logré un crecimiento orgánico increíble.",
    author: "Emprendedora",
    role: "Noogui, Venezuela",
    rating: 5
  }
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonios" className="relative bg-[#0a0a0a] border-y border-white/5 py-28 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-32 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 md:bg-blue-600/15 blur-[100px] md:blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 md:bg-purple-600/15 blur-[100px] md:blur-[150px] rounded-full" />
        <div className="absolute top-2/3 left-1/3 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-emerald-500/10 md:bg-emerald-500/12 blur-[100px] md:blur-[150px] rounded-full" />
      </div>

      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight-card {
          background: #121214;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card {
          position: relative;
          background: #121214;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2rem;
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 142, 255, 0.3);
        }

        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          position: relative;
          display: flex;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: autoScroll 110s linear infinite;
        }

        .marquee-track.paused {
          animation-play-state: paused;
        }

        @keyframes autoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
          Reseñas de nuestros <span className="gradient-text">Clientes</span>
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light pb-6">
          Experiencias reales de líderes y empresas que escalaron su infraestructura digital con Nextopus.
        </p>
      </div>

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          <div className="lg:col-span-4 highlight-card p-8 md:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4 text-white">
                +900
              </h3>
              <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed">
                Proyectos de software, automatización e infraestructura desplegados exitosamente a nivel global.
              </p>
            </div>
            <div className="pt-8 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">+140 Reseñas verificadas</span>
              <i className="bi bi-arrow-up-right text-xl font-bold text-white/70" />
            </div>
          </div>

          <div className="lg:col-span-8 highlight-card p-8 md:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-1 text-[#00E364] mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-sm" />
                ))}
              </div>
              <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8">
                &ldquo;Sebastián Corona no es solo un socio comercial excepcional; su visión técnica y profundo conocimiento en desarrollo han impulsado nuestra marca hacia estándares internacionales de eficiencia y crecimiento.&rdquo;
              </blockquote>
            </div>

            <footer className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/5">
                  <Image
                    src="/images/testimonials-profile/gaole.webp"
                    alt="Gao Le"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-white tracking-tight">Gao Le</div>
                  <div className="text-xs text-white/50">Oulu Haowu, China</div>
                </div>
              </div>
              <span className="text-xs text-white/40 font-mono">Socio Comercial</span>
            </footer>
          </div>

        </div>
      </div>

      <div
        className="marquee-wrapper py-4 overflow-x-auto md:overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div ref={trackRef} className={`marquee-track ${isPaused ? 'paused' : ''}`}>
          {duplicatedTestimonials.map((t, i) => (
            <blockquote
              key={i}
              className="testimonial-card p-6 md:p-8 flex flex-col justify-between w-[320px] md:w-[420px] flex-shrink-0 select-none shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-[#00E364] mb-4">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <i key={rIdx} className="bi bi-star-fill text-xs" />
                  ))}
                </div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <footer className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">{t.author}</div>
                  <div className="text-xs text-white/50 mt-0.5">{t.role}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                  <i className="bi bi-patch-check-fill text-xs text-[#00E364]" />
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

    </section>
  );
}