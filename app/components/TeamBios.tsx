"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sebastián Ernesto Corona Bencomo",
    role: "Fundador & CTO",
    location: "Carabobo, Venezuela",
    highlights: [
      "Fundador de Nextopus",
      "Líder de operaciones en Mi Pana en Linyi",
      "40+ tecnologías dominadas",
      "Consultor internacional en China, Japón y Argentina"
    ],
    image: "/images/bio/sebastian.webp",
    socials: [
      { icon: "bi-github", href: "https://github.com/sebastiancoronadev", active: true },
      { icon: "bi-linkedin", href: "https://www.linkedin.com/in/sebastiancoronadev/", active: true },
      { icon: "bi-whatsapp", href: "https://wa.me/584125008324", active: true }
    ],
    bio: [
      "Sebastián Ernesto Corona Bencomo es un desarrollador de software Full-Stack enfocado en la arquitectura de sistemas escalables y la automatización corporativa a nivel global. Tras varios años de aprendizaje técnico autodidacta explorando el funcionamiento de las computadoras, su inmersión en el mercado laboral formal ocurrió a los 15 años. Aprovechando el auge del trabajo remoto impulsado por la pandemia global, comenzó a monetizar sus habilidades técnicas, demostrando rápidamente que su capacidad de ejecución y calidad de código superaban cualquier barrera generacional. A la par de su consolidación profesional temprana, completó su educación secundaria ininterrumpida en la U.E. Los Pinos, proyectando su egreso como Bachiller en Ciencias en 2026.",
      "Su trayectoria progresiva abarca un espectro internacional de alta complejidad técnica. Inició colaborando como desarrollador web para Smart Home Zhiran S.A. en Hangzhou, China, donde optimizó plataformas E-commerce y sistemas de gestión Odoo. Impulsado por su afinidad por la investigación, entre 2022 y 2023 fundó y dirigió una iniciativa independiente: un Laboratorio de Ciberseguridad Aplicada, donde coordinó simulaciones de respuesta a incidentes y análisis OSINT para la recuperación de cuentas corporativas. Esta base sólida le permitió escalar hacia roles de consultoría internacional, automatizando procesos financieros para Musashi Transport Co. en Japón y centralizando la gestión operativa para Yerbatera del Sur Co. en Argentina.",
      "A nivel operativo y estratégico, Sebastián posee un perfil dual que unifica la ingeniería de software con una profunda visión logística y comercial. En diciembre de 2025 asumió el rol de Director Técnico al fundar la marca tecnológica Nextopus, desarrollando sistemas de control operativo para pymes. Simultáneamente, su profundo entendimiento del comercio internacional lo ha posicionado como líder de operaciones de cadena de suministro para Mi Pana en Linyi, gestionando negociaciones logísticas mayoristas directamente con fabricantes chinos para el mercado latinoamericano.",
      "Su capacidad para orquestar soluciones transfronterizas destacó notablemente en su rol como Ingeniero de Automatización para Huizhiyun Technologies en Shenzhen. Allí resolvió complejos problemas de facturación multilingüe, procesando flujos de datos en caracteres chinos sin pérdida de información, y desarrollando herramientas algorítmicas de seguridad junto a equipos locales. El impacto de su trabajo técnico y operativo en el mercado asiático ha sido tan significativo que corporaciones internacionales actualmente financian su formación en idioma mandarín. Esta inversión responde a una visión estratégica concreta: el traslado y expansión de sus operaciones a China a mediano plazo, para ejercer roles de alto nivel tecnológico tanto en modalidad presencial como remota.",
      "Con un dominio comprobado de más de 40 tecnologías de Frontend, Backend, Bases de Datos y Cloud Computing, Sebastián mantiene una intensa actividad en investigación y desarrollo independiente. Es autor de proyectos técnicos avanzados como TempusDB (un motor de base de datos en Rust y Go para series temporales con algoritmos de compresión LZ4), Typeon (un framework para APIs REST con cifrado simétrico), y Lipid-Profile-Predictor (un sistema de análisis predictivo basado en datos clínicos).",
      "A sus 17 años, Sebastián Corona se consolida como un referente técnico excepcionalmente versátil: un ingeniero capaz de diseñar infraestructuras robustas y un líder con la visión logística necesaria para operar en los mercados más exigentes del mundo."
    ]
  },
  {
    name: "Liang Zhao",
    role: "Programador Senior",
    location: "Shenzhen, China",
    highlights: [
      "10 años de experiencia",
      "Senior Engineer en Huizhiyun Technologies",
      "Especialista en Rust y Go",
      "450+ proyectos entregados"
    ],
    image: "/images/bio/liang.webp",
    socials: [
      { icon: "bi-github", href: "https://github.com/liangzhaodev", active: true },
      { icon: "bi-linkedin", href: "#", active: false },
      { icon: "bi-wechat", href: "#", active: false }
    ],
    bio: [
      "赵亮 (Liang Zhao) nació en 1992 en Wuhan, Hubei, una ciudad industrial del centro de China. Creció en una familia de clase media: su padre era ingeniero mecánico y su madre profesora de matemáticas. Desde los 12 años desarmaba computadoras viejas en el garaje de su edificio, fascinado por entender cómo funcionaban las cosas por dentro.",
      "Estudió Ciencias de la Computación en la Universidad de Huazhong en Wuhan, una de las mejores escuelas de ingeniería del país. Durante la universidad ganó una beca nacional por un proyecto de procesamiento distribuido de datos meteorológicos —su primera experiencia real con sistemas que escalan.",
      "En 2014, con 22 años, se mudó a Shenzhen con una mochila, una laptop y 3,000 yuanes ahorrados. Empezó como desarrollador junior en una incubadora del distrito de Nanshan, durmiendo en un apartamento compartido con otros cinco ingenieros. Diez años después, es Senior Software Engineer en 汇智云科技股份有限公司 (Huizhiyun Technologies Inc.), liderando la arquitectura de datos de la empresa desde un espacio de coworking en el Hi-Tech Park de Nanshan.",
      "Liang es del tipo que puede pasarse 14 horas debuggeando un memory leak en Go, pero se pierde completamente cuando tiene que lidiar con temas que no sean puramente técnicos. No le interesa la política de oficina, odia las reuniones innecesarias, y su única debilidad real es el té de oolong de Fujian que su madre le envía cada mes por correo.",
      "Huizhiyun Technologies estaba en pleno proceso de expansión, con el objetivo de construir un puente tecnológico para el comercio entre China y Latinoamérica. El desafío técnico era complejo: necesitaban desarrollar un pipeline de facturación multilingüe cross-border. El sistema exigía procesar facturas que manejaran conversiones múltiples y simultáneas en un solo documento, cruzando Euros (EUR), Dólares (USD) y Yuanes chinos (CNY) con tasas de cambio en tiempo real.",
      "Liang llevaba 10 años construyendo sistemas distribuidos y arquitecturas de microservicios. Podía hacer que una base de datos procesara millones de peticiones por segundo, pero al sentarse a diseñar este sistema, se topó con un muro: no tenía ni idea de cómo funcionaban los flujos aduaneros, comerciales y logísticos de América Latina.",
      "Era un problema de dominio de negocio, no de código. Liang entendía la matemática de la conversión de divisas, pero no comprendía la idiosincrasia del mercado latinoamericano, ni cómo debía estructurarse esa información de facturación para que realmente tuviera sentido operativo para los importadores al otro lado del mundo.",
      "Buscando perspectiva, Liang planteó el desafío arquitectónico en un entorno de código abierto (GitHub), buscando discutir cómo estructurar pipelines de datos que manejaran múltiples monedas en un mismo bloque sin perder precisión. El título de su consulta fue seco y directo, típico de él: Real-time multi-currency invoice aggregation: CNY/EUR/USD in cross-border pipelines.",
      "Apareció Sebastián Corona. Sebastián no respondió con un simple parche de código. Hizo un análisis completo: le explicó la lógica operativa detrás de las compras internacionales en LATAM, cómo los clientes necesitaban visualizar esas tres divisas cruzadas en la misma factura, y aportó soluciones sobre cómo procesar los archivos de Excel y CSV con codificaciones mixtas (texto occidental y caracteres chinos) sin que se corrompieran los datos. Lo que más impresionó a Liang no fue solo la destreza técnica, sino que Sebastián entendía el contexto de negocio que a él se le escapaba por completo.",
      "La conversación técnica rápidamente pasó a correos electrónicos y luego a largas videollamadas. Liang, siempre con su té oolong al lado de la laptop, comprobó que Sebastián poseía la pieza exacta que a su equipo en Shenzhen le faltaba: una mente de ingeniería de software con una visión logística nativa de Latinoamérica.",
      "Poco tiempo después, Liang fue directo al grano: Sebastián, en Huizhiyun estamos construyendo algo que no existe todavía: un sistema que conecte realmente a China con LATAM a nivel de datos y facturación. Necesito a alguien que entienda esa región mejor que yo. ¿Te interesa entrar al proyecto y liderar esta arquitectura con nosotros?",
      "Sebastián aceptó el reto de consultoría. Juntos no solo sacaron adelante el complejo sistema de facturación multilingüe, sino que lograron una sinergia tan fluida que terminaron desarrollando herramientas conjuntas adicionales, incluyendo un sistema de análisis preventivo de archivos maliciosos.",
      "Así fue como un Senior Engineer en Shenzhen terminó integrando a su equipo a un desarrollador venezolano. Liang siempre lo resume con una frase: El código no tiene nacionalidad. Pero los negocios y la logística sí."
    ]
  },
  {
    name: "Carlos Gabriel Romero Marín",
    role: "Ejecutivo de Ventas",
    location: "Nueva Esparta, Venezuela",
    highlights: [
      "6 años de experiencia comercial",
      "150+ negociaciones exitosas",
      "Especialista en networking y rentabilidad",
      "Cofundador de comunidad gaming internacional"
    ],
    image: "/images/bio/carlos.webp",
    socials: [
      { icon: "bi-github", href: "#", active: false },
      { icon: "bi-linkedin", href: "#", active: false },
      { icon: "bi-whatsapp", href: "https://wa.me/584266372581", active: true }
    ],
    bio: [
      "Carlos Gabriel Romero Marín nació el 6 de octubre de 2003. Gran parte de su desarrollo académico y personal se forjó en las aulas de la U.E. Nuestra Señora de Santa Ana, institución donde cursó toda su etapa de bachillerato entre 2015 y 2020. Su graduación coincidió con un año atípico en el que el mundo entero se detuvo por la pandemia, empujando a su generación a encontrar nuevas formas de conectar, colaborar y crear a través de entornos digitales.",
      "Para Carlos, la tecnología siempre ha sido mucho más que código o hardware; es una herramienta estratégica. Dentro del ecosistema tecnológico, su verdadera pasión radica en el networking y la construcción de relaciones laborales con un fuerte enfoque en la efectividad financiera. Tiene una habilidad natural para conectar personas, optimizar recursos y asegurar que los proyectos no solo funcionen, sino que sean rentables y sostenibles. Esta mentalidad orientada a los negocios sería el detonante de una de sus alianzas más importantes.",
      "Buscando aplicar su visión administrativa y financiera en un entorno digital, Carlos tenía en mente el diseño de un servidor de Minecraft. No buscaba crear un espacio común para jugar, sino un entorno de supervivencia altamente estructurado, competitivo y, sobre todo, regido por una economía sólida y funcional. Fue en esta búsqueda del talento técnico adecuado para materializar su visión donde cruzó caminos con Sebastián Corona.",
      "El objetivo inicial era ambicioso: configurar un servidor desde cero. Lo que empezó con profundos debates sobre cómo estructurar una economía multidivisa, cómo equilibrar la oferta y la demanda virtual, y qué mecánicas integrar para garantizar la retención de usuarios, rápidamente se transformó en una verdadera mesa de trabajo empresarial.",
      "Carlos y Sebastián pasaron incontables horas configurando y puliendo el servidor. En ese proceso, descubrieron una sinergia de trabajo excepcional. La visión estratégica, el networking y el enfoque financiero de Carlos encajaban a la perfección con la mentalidad analítica y la capacidad de ejecución arquitectónica de Sebastián. Donde Carlos veía un modelo de negocio, alianzas y rentabilidad, Sebastián veía la infraestructura técnica exacta para hacerlo realidad.",
      "Aquel proyecto de Minecraft fue la prueba de fuego perfecta. Demostró que ambos podían lidiar con la presión de administrar sistemas, gestionar recursos (incluso virtuales), tomar decisiones financieras rápidas y coordinar esfuerzos sin la más mínima fricción. Se llevaron tan bien a nivel personal y profesional que la colaboración rompió las barreras del juego.",
      "Lo que nació como una alianza para administrar economías en mundos virtuales se convirtió en una sólida amistad y en el punto de partida de una estrecha relación laboral en el mundo real. Hoy en día, Carlos y Sebastián colaboran de manera conjunta, demostrando que cuando combinas una mente brillante para las relaciones públicas y la efectividad financiera con un arquitecto de software de alto nivel, los resultados trascienden cualquier pantalla."
    ]
  }
];

export default function TeamBios() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [openIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="biografia" className="relative bg-[#0a0a0a] py-28 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-32 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-600/15 blur-[120px] md:blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/15 blur-[120px] md:blur-[160px] rounded-full" />
      </div>

      <style jsx>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes orbitLight {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }

        .nextopus-btn {
          position: relative;
          display: inline-flex;
          border-radius: 100px;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 300ms ease-in-out, border-color 300ms ease-in-out;
        }
        .nextopus-btn:hover {
          transform: translateY(-1px);
          border-color: transparent;
        }
        .nextopus-btn::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 100px;
          background: conic-gradient(
            from var(--angle),
            transparent 0deg,
            #008EFF 90deg,
            #00E364 180deg,
            #008EFF 270deg,
            transparent 360deg
          );
          opacity: 0;
          transition: opacity 300ms ease-in-out;
          animation: orbitLight 3s linear infinite;
          z-index: 0;
        }
        .nextopus-btn:hover::before {
          opacity: 1;
        }
        .nextopus-btn::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 100px;
          background: #121214;
          z-index: 1;
          transition: background 300ms ease;
        }
        .nextopus-btn-inner {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          outline: none;
          background: transparent;
          cursor: pointer;
          white-space: nowrap;
          border: none;
        }

        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }


        .arrow-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .arrow-icon {
          transform: rotate(-45deg);
        }
      `}</style>

      <div className="sr-only">
        {teamMembers.map((member, idx) => (
          <article key={idx}>
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.bio.join(" ")}</p>
          </article>
        ))}
      </div>

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">

        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
            Conoce las historias detrás de <span className="gradient-text">Nextopus</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light">
            Ingenieros y estrategas globales unidos para construir la infraestructura digital de alto rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
              onClick={() => setOpenIndex(idx)}
            >

              <div className="h-full rounded-[22px] p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 group-hover:from-[#008EFF]/60 group-hover:via-[#7C3AED]/30 group-hover:to-[#00E364]/60 transition-all duration-500 shadow-xl">

                <div className="rounded-[21px] bg-[#0a0a0a] overflow-hidden h-full flex flex-col">

                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 z-30 flex md:hidden flex-col gap-2 bg-[#121214]/90 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-2xl">
                      {member.socials.map((social, sIdx) => (
                        social.active ? (
                          <a
                            key={sIdx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Social Link"
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
                      {(hoveredIndex === idx) && (
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
                                onClick={(e) => e.stopPropagation()}
                                aria-label="Social Link"
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

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white tracking-tight mb-1">{member.name}</h3>
                    <div className="text-sm font-medium gradient-text mb-2">{member.role}</div>

                    <div className="flex items-center gap-1.5 text-xs text-white/50 mb-6 font-mono">
                      <i className="bi bi-geo-alt-fill text-[#008EFF]" />
                      <span>{member.location}</span>
                    </div>

                    <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-6 text-sm text-white/70 flex-grow">
                      {member.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2.5">
                          <i className="bi bi-check-circle-fill text-[#00E364] text-xs shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/5 mt-auto">
                      <button className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-white/80 group-hover:text-[#008EFF] transition-colors">
                        <span>Leer biografía</span>

                        <i className="bi bi-arrow-right text-base arrow-icon" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#050505]/90 backdrop-blur-2xl cursor-pointer"
              onClick={() => setOpenIndex(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121214] border border-white/10 shadow-2xl no-scrollbar z-10 p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >

              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                <button
                  onClick={() => setOpenIndex(null)}
                  className="nextopus-btn w-10 h-10 md:w-11 md:h-11"
                  aria-label="Cerrar modal"
                >
                  <span className="nextopus-btn-inner w-full h-full text-white">
                    <i className="bi bi-x-lg text-lg" />
                  </span>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-8 pb-8 border-b border-white/10 items-center md:items-start">
                <div className="relative w-36 h-44 md:w-48 md:h-60 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                  <Image src={teamMembers[openIndex].image} alt={teamMembers[openIndex].name} fill sizes="192px" className="object-cover object-top" />
                </div>
                <div className="text-center md:text-left flex-1 mt-2">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 pr-10 md:pr-12">{teamMembers[openIndex].name}</h3>
                  <div className="text-sm md:text-base font-semibold gradient-text mb-3">
                    {teamMembers[openIndex].role}
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/60 mb-6 font-mono">
                    <i className="bi bi-geo-alt-fill text-[#008EFF]" />
                    <span>{teamMembers[openIndex].location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {teamMembers[openIndex].highlights.map((h, hIdx) => (
                      <span key={hIdx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 flex items-center gap-2">
                        <i className="bi bi-check-circle-fill text-[#00E364] text-[10px]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-white/80 text-sm md:text-base leading-relaxed space-y-5 font-light">
                {teamMembers[openIndex].bio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}