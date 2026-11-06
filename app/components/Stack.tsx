"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", lightBg: true },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ]
  },
  {
    category: "Bases de Datos",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", lightBg: true },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
      { name: "amazonwebservices", displayName: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg", lightBg: true },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
    ]
  },
  {
    category: "Herramientas y Testing",
    items: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", lightBg: true },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", lightBg: true },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" }
    ]
  }
];

export default function Stack() {
  const allTechs = techCategories.flatMap(cat => cat.items);

  return (
    <section id="stack" className="relative bg-[#0a0a0a] border-y border-white/5 py-28 overflow-hidden">


      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        <div className="absolute -top-20 -left-32 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-600/20 md:bg-cyan-600/25 blur-[100px] md:blur-[150px] rounded-full animate-orbFloat1" />

        <div className="absolute top-1/3 left-1/4 w-[350px] md:w-[650px] h-[350px] md:h-[650px] bg-blue-600/20 md:bg-blue-600/25 blur-[100px] md:blur-[150px] rounded-full animate-orbFloat2" />

        <div className="absolute top-1/2 -right-32 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/20 md:bg-purple-600/25 blur-[110px] md:blur-[160px] rounded-full animate-orbFloat1" />

        <div className="absolute -bottom-32 left-10 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-emerald-500/15 md:bg-emerald-500/20 blur-[110px] md:blur-[160px] rounded-full animate-orbFloat3" />
      </div>

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


        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 50px) scale(1.1); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, -40px) scale(1.15); }
        }

        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -30px) scale(1.05); }
        }

        .animate-orbFloat1 {
          animation: orbFloat1 12s ease-in-out infinite;
        }

        .animate-orbFloat2 {
          animation: orbFloat2 15s ease-in-out infinite;
        }

        .animate-orbFloat3 {
          animation: orbFloat3 18s ease-in-out infinite;
        }


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
          gap: 1.5rem;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }

        .marquee-container:hover .marquee-track,
        .marquee-container:active .marquee-track,
        .marquee-container:focus-within .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .tech-card {
          position: relative;
          border-radius: 1rem;
          background: #121214;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 300ms ease, border-color 300ms ease;
          flex-shrink: 0;
          width: 150px;
          height: 110px;
        }

        .tech-card:hover {
          transform: translateY(-3px);
          border-color: transparent;
        }

        .tech-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 1rem;
          background: conic-gradient(
            from var(--angle),
            transparent 0deg,
            #2563EB 90deg,
            #7C3AED 180deg,
            #38bdf8 270deg,
            transparent 360deg
          );
          opacity: 0;
          transition: opacity 300ms ease;
          animation: orbitLight 3s linear infinite;
          z-index: 0;
        }

        .tech-card:hover::before {
          opacity: 1;
        }

        .tech-card::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: calc(1rem - 1px);
          background: #121214;
          z-index: 1;
        }

        .tech-card-inner {
          position: relative;
          z-index: 2;
        }
      `}</style>


      <div className="sr-only">
        {techCategories.map((cat, idx) => (
          <div key={idx}>
            <h3>{cat.category}</h3>
            <ul>
              {cat.items.map((t, i) => (
                <li key={i}>{t.displayName || t.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": allTechs.map((t, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": t.displayName || t.name
            }))
          })
        }}
      />

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Stack <span className="gradient-text">Tecnológico</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
            Ecosistema de herramientas de alto rendimiento con el que diseñamos arquitectura de software escalable y de clase mundial.
          </p>
        </div>

        <div className="space-y-12">
          {techCategories.map((cat, cIdx) => {
            const duplicatedItems = [...cat.items, ...cat.items];

            return (
              <div key={cIdx} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-white/50 border-b border-white/5 pb-2">
                  {cat.category}
                </h3>

                <div className="marquee-container py-2">
                  <div className="marquee-track">
                    {duplicatedItems.map((tech, tIdx) => {
                      const displayName = tech.displayName || tech.name;
                      return (
                        <div
                          key={`${tech.name}-${tIdx}`}
                          className="tech-card p-3.5 flex flex-col items-center justify-center gap-2.5 text-center"
                        >
                          <div className="tech-card-inner flex flex-col items-center justify-center gap-2 w-full h-full">
                            <div className={`relative w-8 h-8 flex items-center justify-center ${tech.lightBg ? 'bg-white rounded-lg p-1 shadow-sm' : ''}`}>
                              <Image
                                src={tech.icon}
                                alt={displayName}
                                width={32}
                                height={32}
                                className="object-contain w-full h-full"
                              />
                            </div>
                            <span className="text-[11px] font-medium text-white/80 tracking-tight truncate w-full">
                              {displayName}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}