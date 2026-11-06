"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const trustImages = [
  "/images/trust/veraux-ropa.png",
  "/images/trust/velmor-arquitecto.png",
  "/images/trust/concretera.png",
  "/images/trust/concesionario.png",
  "/images/trust/noogui.png",
  "/images/trust/mipanaenlinyi.png",
  "/images/trust/cadena.png",
  "/images/trust/gripstage.png"
];

const metricsData = [
  { title: "SISTEMAS DESPLEGADOS", text: "1K+" },
  { title: "EFICIENCIA OPERATIVA", text: "300%" },
  { title: "AÑOS ACTIVOS", text: "7+" },
  { title: "PAÍSES ALCANZADOS", text: "12+" }
];

export default function Metrics() {
  return (
    <section id="porque" className="section-pad relative border-y border-white/5 bg-[#0a0a0a] overflow-hidden py-28">


      <style jsx>{`
        .outline-stat-text {
          font-size: clamp(6.5rem, 26vw, 9.5rem);
          line-height: 1;
          font-weight: 900;
          font-style: italic;
          color: #0a0a0a;
          -webkit-text-fill-color: #0a0a0a;
          -webkit-text-stroke: 3px transparent;
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          background-clip: text;
          letter-spacing: -0.04em;
        }

        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }


        .marquee-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
        }
      `}</style>

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">
            Por qué ellos confían en <span className="gradient-text">nosotros</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Marcas que han confiado y transformado su presencia digital con nosotros.
          </p>
        </div>


        <div className="mb-28 relative overflow-hidden w-full flex marquee-fade">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="flex gap-20 md:gap-32 items-center w-max py-8"
          >
            {[...trustImages, ...trustImages].map((src, i) => (
              <div key={i} className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={src}
                  alt="Cliente Nextopus"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            ))}
          </motion.div>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-center gap-12 lg:gap-16 w-full px-2 overflow-visible">
          {metricsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center text-center py-6 overflow-visible"
            >
              <div className="relative inline-flex items-center justify-center px-6 py-4 overflow-visible">


                <div className="absolute bottom-[32px] sm:bottom-[49px] left-2 sm:left-4 z-20 text-left pointer-events-none bg-[#0a0a0a] px-2 py-0.5">
                  <span className="text-white font-bold italic text-sm sm:text-base md:text-lg tracking-tight uppercase whitespace-nowrap">
                    {item.title}
                  </span>
                </div>


                <div className="flex items-baseline justify-center overflow-visible">
                  <h3 className="outline-stat-text select-none m-0 px-2">
                    {item.text}
                  </h3>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}