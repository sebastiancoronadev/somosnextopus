"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FULL_TEXT = "Hola humano, ¿nos necesitas? Somos Nextopus";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    window.scrollTo(0, 0);

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(id);
        setTimeout(() => {
          setDone(true);

          document.body.style.position = "";
          document.body.style.top = "";
          document.body.style.left = "";
          document.body.style.right = "";
          document.body.style.width = "";
          document.body.style.overflow = "";
          window.scrollTo(0, scrollY);
          window.dispatchEvent(new Event("reveal-ui"));
        }, 600);
      }
    }, 50);

    return () => {
      clearInterval(id);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center">

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
            #2563EB 90deg,
            #7C3AED 180deg,
            #38bdf8 270deg,
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

        .nextopus-btn:active {
          transform: translateY(0);
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.25, 0.95, 1],
            rotate: [0, 25, -10, 0],
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[10%] bottom-[0%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-[#022c22] via-[#047857] to-[#059669] rounded-full blur-[90px] md:blur-[130px] opacity-45 md:opacity-85"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, -30, 15, 0],
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[10%] top-[10%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-[#1e1b4b] via-[#1d4ed8] to-[#4338ca] rounded-full blur-[100px] md:blur-[140px] opacity-50 md:opacity-90"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1.05, 1],
            rotate: [0, 40, -20, 0],
            x: [0, -20, 15, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[2%] w-[240px] h-[240px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#312e81] via-[#6d28d9] to-[#7c3aed] rounded-full blur-[90px] md:blur-[120px] opacity-40 md:opacity-80"
        />
      </motion.div>

      <div className="container-x w-full relative z-25">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center pt-20 pb-32 md:py-0 min-h-[80vh]">

          <div className="flex items-center justify-center w-full mb-8 md:mb-12">
            <h1 className="sr-only">Hola humano, ¿nos necesitas? Somos Nextopus</h1>
            <div aria-hidden="true" className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white text-center px-4">
              <span>{typed}</span>
              <span className="inline-block w-[3px] md:w-[5px] h-[1em] bg-white ml-2 align-middle blinking-cursor" />
            </div>
          </div>

          <div className={`flex flex-col items-center gap-6 transition-opacity duration-1000 ${done ? 'opacity-100' : 'opacity-0'}`}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed text-center px-4"
            >
              Construimos la infraestructura tecnológica y sistemas a medida que las grandes industrias necesitan para operar sin fricciones. Llevamos tus procesos complejos al siguiente nivel de eficiencia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 mt-4"
            >
              <div className="nextopus-btn">
                <a href="#servicios" className="nextopus-btn-inner text-white text-sm font-semibold px-8 py-3.5">
                  Explorar Servicios
                </a>
              </div>

              <div className="nextopus-btn">
                <a href="#contacto" className="nextopus-btn-inner text-white text-sm font-semibold px-8 py-3.5">
                  Iniciar Proyecto
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}