"use client";
import { clients } from "../lib/site";
import Image from "next/image";

export default function Ticker() {
  const items = [...clients, ...clients, ...clients, ...clients];

  return (
    <section aria-label="Tecnología de última generación" className="relative py-16 border-y border-white/5 overflow-hidden bg-[#0a0a0a]">

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          display: flex;
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          gap: 3rem;
          align-items: center;
          width: max-content;
          animation: marqueeScroll 80s linear infinite;
        }


        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }


        .logo-box {
          background: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
      `}</style>


      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6 mb-12 text-center">
        <h3 className="text-sm md:text-base uppercase tracking-[0.3em] font-bold text-white">
          Utilizamos tecnología de última generación
        </h3>
      </div>


      <div className="marquee-container py-4">
        <div className="marquee-track">
          {items.map((client, i) => (
            <div
              key={i}
              className="logo-box flex items-center justify-center px-6 py-4 min-w-[170px] md:min-w-[210px] h-20 md:h-24 pointer-events-none"
            >
              <div className="relative w-32 md:w-38 h-10 md:h-12 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}