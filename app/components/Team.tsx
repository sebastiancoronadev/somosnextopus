"use client";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const teamData = [
  {
    name: "Sebastián Ernesto Corona Bencomo",
    role: "Fundador & CTO",
    location: "Carabobo, Venezuela",
    bio: "Fundador de Nextopus y líder en transformación digital a nivel global. Ha colaborado con grandes corporaciones tecnológicas internacionales, diseñando sistemas avanzados, automatizaciones para empresas y plataformas de alto rendimiento. Además, cuenta con una sólida experiencia en comercio internacional, modelos de negocio digitales y postproducción audiovisual de nivel profesional. Un referente en la innovación tecnológica.",
    image: "/images/team/sebastian.webp",
    experience: 7,
    expLabel: "AÑOS EXPERIENCIA",
    projects: 100,
    projLabel: "PROYECTOS",
    socials: [
      { icon: "bi-github", href: "https://github.com/sebastiancoronadev", active: true },
      { icon: "bi-linkedin", href: "https://www.linkedin.com/in/sebastiancoronadev/", active: true },
      { icon: "bi-whatsapp", href: "https://wa.me/584125008324", active: true }
    ]
  },
  {
    name: "Carlos Gabriel Romero Marín",
    role: "Ejecutivo de Ventas",
    location: "Nueva Esparta, Venezuela",
    bio: "Especialista en negociaciones comerciales exitosas y expansión de mercado. Enfoque en resultados medibles y satisfacción del cliente a escala regional.",
    image: "/images/team/carlos.webp",
    experience: 6,
    expLabel: "AÑOS EXPERIENCIA",
    projects: 150,
    projLabel: "PROYECTOS",
    socials: [
      { icon: "bi-github", href: "#", active: false },
      { icon: "bi-linkedin", href: "#", active: false },
      { icon: "bi-whatsapp", href: "https://wa.me/584266372581", active: true }
    ]
  },
  {
    name: "Liang Zhao",
    role: "Programador Senior",
    location: "Shenzhen, China",
    bio: "Experto internacional en el desarrollo de la infraestructura interna que mantiene funcionando grandes plataformas y sistemas informáticos. Especialista en tender puentes tecnológicos y coordinar proyectos de alta complejidad entre Asia y Latinoamérica.",
    image: "/images/team/liang.webp",
    experience: 10,
    expLabel: "AÑOS EXPERIENCIA",
    projects: 450,
    projLabel: "PROYECTOS",
    socials: [
      { icon: "bi-github", href: "https://github.com/liangzhaodev", active: true },
      { icon: "bi-linkedin", href: "#", active: false },
      { icon: "bi-wechat", href: "#", active: false }
    ]
  }
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(motionValue, to, { duration: 2, ease: "easeOut" });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [motionValue, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="equipo" className="relative bg-[#0a0a0a] border-y border-white/5 py-28 overflow-hidden">

      <style jsx>{`

        .gradient-text-original {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          padding-bottom: 0.15em;
          line-height: 1.1;
          display: inline;
        }


        .gradient-role {
          background-image: linear-gradient(90deg, #00E5FF 0%, #008EFF 50%, #0055FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          padding-bottom: 0.1em;
          display: inline;
        }

        .team-card {
          position: relative;
          background: #0f0f11;
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .smoke-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(124, 58, 237, 0.5) 0%, rgba(0, 142, 255, 0.2) 50%, transparent 100%);
          filter: blur(25px);
          pointer-events: none;
          z-index: 10;
        }
      `}</style>


      <div className="sr-only">
        {teamData.map((member, idx) => (
          <article key={idx}>
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Nuestro <span className="gradient-text-original">Equipo</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
              Ingeniería y desarrollo de élite distribuidos globalmente para construir infraestructura de alto nivel.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="team-card flex flex-col justify-between p-8 group"
            >
              <div>
                <div className="relative w-full aspect-[3/4] rounded-2xl bg-[#e5e5e7] overflow-hidden mb-8 shadow-inner">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top z-0"
                  />

                  <div className="smoke-glow" />

                  <div className="absolute bottom-4 left-4 z-30 flex md:hidden flex-col gap-2 bg-[#121214]/90 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-2xl">
                    {member.socials.map((social, sIdx) => (
                      social.active ? (
                        <a
                          key={sIdx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white"
                        >
                          <i className={`bi ${social.icon} text-sm`} />
                        </a>
                      ) : (
                        <div
                          key={sIdx}
                          className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/20 cursor-not-allowed"
                        >
                          <i className={`bi ${social.icon} text-sm`} />
                        </div>
                      )
                    ))}
                  </div>

                  <AnimatePresence>
                    {(hoveredIndex === index) && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: -20, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-4 left-4 z-30 hidden md:flex flex-col gap-2.5 bg-[#121214]/90 backdrop-blur-md p-2.5 rounded-2xl border border-white/10 shadow-2xl"
                      >
                        {member.socials.map((social, sIdx) => (
                          social.active ? (
                            <a
                              key={sIdx}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all hover:bg-[#008EFF] hover:border-transparent hover:scale-110"
                            >
                              <i className={`bi ${social.icon} text-base`} />
                            </a>
                          ) : (
                            <div
                              key={sIdx}
                              className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 cursor-not-allowed"
                            >
                              <i className={`bi ${social.icon} text-base`} />
                            </div>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold gradient-role mb-2">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/50 mb-3">
                      <i className="bi bi-geo-alt-fill text-[#008EFF]" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span className="block text-base font-bold text-white mb-0.5">
                      <CountUp to={member.experience} suffix=" años" />
                    </span>
                    <span className="block text-[9px] uppercase tracking-widest text-white/40">{member.expLabel}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span className="block text-base font-bold text-white mb-0.5">
                      <CountUp to={member.projects} suffix="+" />
                    </span>
                    <span className="block text-[9px] uppercase tracking-widest text-white/40">{member.projLabel}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}