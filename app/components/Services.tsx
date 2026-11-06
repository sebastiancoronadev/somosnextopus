"use client";
import { motion } from "framer-motion";

const detailedServices = [
  {
    icon: "bi-code-slash",
    title: "Desarrollo Full-Stack",
    desc: "Aplicaciones web de alto rendimiento con Next.js, React y arquitecturas serverless. Código limpio, escalable y optimizado para Core Web Vitals.",
    bullets: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"]
  },
  {
    icon: "bi-cpu",
    title: "Servidores Minecraft & Gaming",
    desc: "Infraestructura de alto rendimiento, economía multicurrency, plugins personalizados en Java/Paper, sistemas de rangos y optimización de baja latencia.",
    bullets: ["Java", "Spigot", "Paper", "MySQL", "Docker", "Redis"]
  },
  {
    icon: "bi-robot",
    title: "Discord Bots & IA",
    desc: "Automatización avanzada de comunidades, moderación inteligente, pasarelas de pago integradas y sistemas de tickets de alto tráfico.",
    bullets: ["Python", "Node.js", "Discord.js", "Webhooks", "OpenAI API"]
  },
  {
    icon: "bi-camera-reels",
    title: "Edición de Video & Post-Producción",
    desc: "Producción audiovisual de alto impacto para marcas, optimización de retención en redes sociales, efectos visuales y mezcla de audio profesional.",
    bullets: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Sound Design"]
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Automatización Empresarial",
    desc: "Integración de sistemas ERP (Odoo), pipelines de datos masivos, facturación multilingüe y optimización de flujos operativos B2B.",
    bullets: ["Python", "Odoo ERP", "PostgreSQL", "Pandas", "REST APIs"]
  },
  {
    icon: "bi-globe-americas",
    title: "Logística E-commerce & Cross-Border",
    desc: "Sistemas de inventario global, gestión de envíos internacionales, integración de pasarelas multi-moneda y control automatizado de proveedores.",
    bullets: ["Supabase", "Stripe", "Logistics API", "Cloudflare", "Vercel"]
  }
];

export default function Services() {
  return (
    <section id="servicios" className="section-pad relative bg-[#0a0a0a] overflow-hidden py-32">


      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>


      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.25, 0.95, 1],
            rotate: [0, 25, -10, 0],
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[5%] top-[15%] w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-[#022c22] via-[#047857] to-[#059669] rounded-full blur-[100px] opacity-40 md:opacity-60"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, -30, 15, 0],
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[2%] bottom-[10%] w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-gradient-to-bl from-[#1e1b4b] via-[#1d4ed8] to-[#4338ca] rounded-full blur-[110px] opacity-45 md:opacity-65"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1.05, 1],
            rotate: [0, 40, -20, 0],
            x: [0, -20, 15, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[30%] top-[40%] w-[240px] h-[240px] md:w-[360px] md:h-[360px] bg-gradient-to-br from-[#312e81] via-[#6d28d9] to-[#7c3aed] rounded-full blur-[90px] opacity-30 md:opacity-50"
        />
      </div>


      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">


        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Soluciones de ingeniería adaptadas a <span className="gradient-text">tu entorno operativo</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
              Desarrollamos software robusto, arquitecturas web escalables y producción audiovisual de alto impacto para resolver necesidades reales del mercado actual.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedServices.map((s, index) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-8 group overflow-hidden bg-[#121214]/80 backdrop-blur-2xl border border-white/10 hover:border-white/25 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >

              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#7C3AED]/15 blur-3xl rounded-full group-hover:bg-[#00E364]/25 transition-all duration-700 pointer-events-none" />

              <div className="relative z-10">

                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white/15 to-white/5 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#008EFF]/50 group-hover:shadow-[0_0_25px_rgba(0,142,255,0.3)] transition-all duration-300">
                  <i className={`bi ${s.icon} text-2xl text-white`} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{s.title}</h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed font-light">{s.desc}</p>
              </div>


              <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {s.bullets.map((b) => (
                  <span
                    key={b}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-white/70 group-hover:border-white/15 transition-colors"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}