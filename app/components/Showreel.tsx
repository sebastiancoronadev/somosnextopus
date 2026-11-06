"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const countriesData = [
  { name: "Venezuela", code: "ve" },
  { name: "Austria", code: "at" },
  { name: "Argentina", code: "ar" },
  { name: "Colombia", code: "co" },
  { name: "Ecuador", code: "ec" },
  { name: "Estados Unidos", code: "us" },
  { name: "Japón", code: "jp" },
  { name: "China", code: "cn" },
  { name: "Canadá", code: "ca" },
  { name: "España", code: "es" },
  { name: "Chile", code: "cl" }
];

export default function GlobalReach() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % countriesData.length);
        }
      }, 40);
    } else {
      const currentCountry = countriesData[index].name;
      timeout = setTimeout(() => {
        setText((prev) => currentCountry.slice(0, prev.length + 1));
        if (text === currentCountry) {
          timeout = setTimeout(() => setIsDeleting(true), 2500);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section id="operaciones" className="relative w-full min-h-[95svh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] py-24">

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient-text {
          background: linear-gradient(90deg, #008EFF, #7C3AED, #00E364, #008EFF);
          background-size: 300% 300%;
          animation: gradientMove 5s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          padding-bottom: 0.15em;
          display: inline-block;
          line-height: 1.1;
        }
      `}</style>


      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/earth-1.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>


      <div className="container-x relative z-10 w-full flex flex-col items-center text-center px-4">

        <header className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6"
          >
            Conectando el mundo, impulsando el futuro en...
          </motion.p>

          <h2 className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 text-white min-h-[1.2em] flex items-center justify-center overflow-visible">
            <span className="animated-gradient-text">{text}</span>
            <span className="animate-pulse text-white font-light ml-1 -translate-y-1">|</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm md:text-xl leading-relaxed max-w-2xl mx-auto font-light px-2"
          >
            Operamos desde Venezuela para el mundo. Nuestra red de colaboradores y clientes abarca múltiples continentes, garantizando resultados sin fronteras.
          </motion.p>
        </header>


        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <p className="text-white font-medium text-lg mb-2">Países donde operamos</p>
          <p className="text-white/40 text-sm mb-8">{countriesData.length} operaciones activas</p>


          <div className="w-full px-2 md:hidden">
            <ul className="grid grid-cols-2 gap-3 max-w-md mx-auto pb-8">
              {countriesData.map((country, idx) => (
                <motion.li
                  key={country.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center justify-center gap-2.5 bg-[#121214]/70 backdrop-blur-md border border-white/10 rounded-2xl h-24 hover:bg-white/10 hover:border-white/25 transition-colors duration-300 cursor-default group p-3 w-full">
                    <div className="w-12 h-8 rounded-sm overflow-hidden border border-white/20 group-hover:border-white/50 transition-all duration-300 shrink-0">
                      <img
                        src={`https://flagcdn.com/${country.code}.svg`}
                        alt={`Bandera de ${country.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-white/70 group-hover:text-white transition-colors duration-300 text-center px-1 leading-tight w-full truncate">
                      {country.name}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>


          <div className="hidden md:flex w-full justify-center pb-8">
            <ul className="flex flex-wrap items-center justify-center gap-4 max-w-5xl">
              {countriesData.map((country, idx) => (
                <motion.li
                  key={country.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="shrink-0"
                >
                  <div className="flex flex-col items-center justify-center gap-3 bg-[#121214]/70 backdrop-blur-md border border-white/10 rounded-2xl w-28 h-28 hover:bg-white/10 hover:border-white/25 transition-colors duration-300 cursor-default group p-3">
                    <div className="w-12 h-8 rounded-sm overflow-hidden border border-white/20 group-hover:border-white/50 transition-all duration-300 shrink-0">
                      <img
                        src={`https://flagcdn.com/${country.code}.svg`}
                        alt={`Bandera de ${country.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-white/70 group-hover:text-white transition-colors duration-300 text-center px-1 leading-tight w-full truncate">
                      {country.name}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}