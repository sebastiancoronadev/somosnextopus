export const site = {
  name: "Nextopus",
  legalName: "Nextopus Digital Agency",
  url: "https://somosnextopus.com",
  description: "Agencia de arquitectura de software y desarrollo web de alto rendimiento. Automatización empresarial y soluciones digitales desde Venezuela para el mundo.",
  email: "contacto@somosnextopus.com",
  email2: "sebastiancorona@somosnextopus.com",
  phone: "+58 412-5008324",
  country: "Venezuela",
  city: "Valencia",
  address: "Valencia, Carabobo, Venezuela",
  socials: {
    linkedin: "https://www.linkedin.com/company/somosnextopus",
    reddit: "https://www.reddit.com/user/sebastiancoronadev",
    github: "https://github.com/sebastiancoronadev",
    youtube: "https://www.youtube.com/@somosnextopus",
    discord: "https://discord.com/users/sebmaster09",
    instagram: "https://instagram.com/somosnextopus",
    x: "https://x.com/somosnextopus",
    facebook: "https://facebook.com/somosnextopus"
  }
} as const;

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#equipo", label: "Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#biografia", label: "Biografías" },
  { href: "#contacto", label: "Contacto" },
];

export const clients = [
  { name: "Microsoft", logo: "/images/tech/Microsoft_logo_(2012).svg", needsInvert: false },
  { name: "Google", logo: "/images/tech/Google_2026_logo.svg", needsInvert: false },
  { name: "Amazon", logo: "/images/tech/Amazon_logo.svg", needsInvert: false },
  { name: "Apple", logo: "/images/tech/Apple_logo_black.svg", needsInvert: true },
  { name: "AMD", logo: "/images/tech/AMD_Ryzen_logo.svg", needsInvert: true },
  { name: "Intel", logo: "/images/tech/Intel_logo_(2006-2020).svg", needsInvert: true },
  { name: "NVIDIA", logo: "/images/tech/NVIDIA_logo.svg", needsInvert: false },
  { name: "Cloudflare", logo: "/images/tech/Cloudflare_Logo.svg", needsInvert: false },
  { name: "Samsung", logo: "/images/tech/Samsung_wordmark.svg", needsInvert: true }
] as const;

export const metrics = [
  { value: "+180", label: "Proyectos entregados" },
  { value: "98%", label: "Satisfacción de clientes" },
  { value: "12", label: "Países atendidos" },
  { value: "4.9/5", label: "Rating promedio" }
] as const;

export const services = [
  { icon: "bi-code-slash", title: "Desarrollo Web y Apps", desc: "Interfaces rápidas, escalables y medibles. Next.js, TypeScript y arquitecturas serverless.", bullets: ["Web App", "E-commerce", "APIs"] },
  { icon: "bi-camera-reels", title: "Edición de Video", desc: "Storytelling audiovisual de alto impacto: reels, spots y contenido para performance.", bullets: ["Reels", "Spots", "Motion"] },
  { icon: "bi-vector-pen", title: "Diseño UI/UX", desc: "Diseño de producto con foco en conversión, accesibilidad y sistemas de diseño.", bullets: ["Design System", "Prototipos", "Research"] },
  { icon: "bi-graph-up-arrow", title: "Marketing de Rendimiento", desc: "Campañas con ROAS medible. SEO técnico, paid media y analítica avanzada.", bullets: ["SEO", "Paid", "Analytics"] },
  { icon: "bi-robot", title: "Automatización e IA", desc: "Integraciones con LLMs, agentes y flujos que reducen costos operativos.", bullets: ["Agentes", "RAG", "Integraciones"] },
  { icon: "bi-shield-check", title: "Ciberseguridad", desc: "Auditorías, hardening y monitoreo continuo para productos críticos.", bullets: ["Pentest", "Hardening", "SOC"] }
] as const;

export const testimonials = [
  { quote: "Pasamos de una landing lenta a un activo de ventas que convierte x3.", author: "Laura Méndez", role: "CMO, Nexora" },
  { quote: "El equipo entiende negocio y ejecuta rápido. Un socio real.", author: "Andrés Gil", role: "Founder, Velora" },
  { quote: "Nuestro stack ahora es moderno, rápido y medible. Cero deuda técnica.", author: "Carla Rojas", role: "CTO, Orbita Labs" }
] as const;

export const faq = [
  { q: "¿Cuánto tarda un proyecto típico de Nextopus?", a: "Depende del alcance. Una landing premium puede tardar de 2 a 4 semanas. Un producto completo entre 6 y 12 semanas, con entregas semanales." },
  { q: "¿Trabajan con equipos internos de las empresas?", a: "Sí. Nos integramos con tu equipo de producto, diseño y desarrollo para acelerar la ejecución sin fricción." },
  { q: "¿Cómo garantizan rendimiento y SEO?", a: "Usamos Next.js con SSR y SSG, datos estructurados JSON-LD, Core Web Vitals monitoreados y auditorías técnicas en cada release." },
  { q: "¿Qué métodos de pago aceptan?", a: "Tarjetas vía Stripe, transferencias bancarias, criptomonedas (USDT, BTC, ETH) y pagos por hitos para proyectos grandes." },
  { q: "¿Ofrecen soporte después del lanzamiento?", a: "Sí. Todos los proyectos incluyen 30 días de soporte. Contamos con planes mensuales de mantenimiento y growth." }
] as const;