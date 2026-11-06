"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  { name: "Venezuela", code: "VE", dial: "+58" },
  { name: "Estados Unidos", code: "US", dial: "+1" },
  { name: "España", code: "ES", dial: "+34" },
  { name: "Argentina", code: "AR", dial: "+54" },
  { name: "Colombia", code: "CO", dial: "+57" },
  { name: "México", code: "MX", dial: "+52" },
  { name: "Chile", code: "CL", dial: "+56" },
  { name: "Perú", code: "PE", dial: "+51" },
  { name: "China", code: "CN", dial: "+86" },
  { name: "Japón", code: "JP", dial: "+81" },
  { name: "Alemania", code: "DE", dial: "+49" },
  { name: "Canadá", code: "CA", dial: "+1" },
  { name: "Brasil", code: "BR", dial: "+55" },
  { name: "Francia", code: "FR", dial: "+33" },
  { name: "Reino Unido", code: "GB", dial: "+44" },
  { name: "Italia", code: "IT", dial: "+39" },
  { name: "Uruguay", code: "UY", dial: "+598" },
  { name: "Ecuador", code: "EC", dial: "+593" },
  { name: "Panamá", code: "PA", dial: "+507" },
  { name: "Costa Rica", code: "CR", dial: "+506" },
  { name: "República Dominicana", code: "DO", dial: "+1" },
  { name: "Bolivia", code: "BO", dial: "+591" },
  { name: "Paraguay", code: "PY", dial: "+595" },
  { name: "Guatemala", code: "GT", dial: "+502" },
  { name: "Honduras", code: "HN", dial: "+504" },
  { name: "El Salvador", code: "SV", dial: "+503" },
  { name: "Nicaragua", code: "NI", dial: "+505" },
  { name: "Puerto Rico", code: "PR", dial: "+1" },
  { name: "Cuba", code: "CU", dial: "+53" },
  { name: "Australia", code: "AU", dial: "+61" },
  { name: "Suiza", code: "CH", dial: "+41" },
  { name: "Portugal", code: "PT", dial: "+351" },
  { name: "Corea del Sur", code: "KR", dial: "+82" },
  { name: "Singapur", code: "SG", dial: "+65" },
  { name: "Emiratos Árabes Unidos", code: "AE", dial: "+971" }
];

const projectTypes = [
  "Desarrollo Web / App (Next.js / Full-Stack)",
  "E-commerce & Pasarelas de Pago",
  "Automatización de Procesos e IA",
  "Edición de Video & Post-Producción",
  "Diseño UI/UX de Producto",
  "Ciberseguridad y Auditoría",
  "Otro proyecto de ingeniería"
];

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedProject, setSelectedProject] = useState("");
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);

  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const projectDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredCountries = useMemo(() => {
    return countries.filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.dial.includes(searchQuery)
    );
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (projectDropdownRef.current && !projectDropdownRef.current.contains(event.target as Node)) {
        setIsProjectDropdownOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedProject) {
      setFormState("error");
      setErrorMessage("Por favor selecciona un tipo de proyecto.");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: `${selectedCountry.dial} ${formData.get("telefono")}`,
      tipoProyecto: selectedProject,
      mensaje: formData.get("mensaje") as string
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const responseData = await res.json();

      if (res.ok && responseData.success) {
        setFormState("success");
        form.reset();
        setSelectedProject("");
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        throw new Error(responseData.error || "Error interno del servidor.");
      }
    } catch (err: any) {
      console.error("Error detallado del envío:", err);
      setFormState("error");
      setErrorMessage("Hubo un problema al enviar tu mensaje. Escríbenos por WhatsApp para asegurar la entrega.");
      setTimeout(() => setFormState("idle"), 8000);
    }
  };

  return (
    <section id="contacto" className="section-pad relative py-28 bg-[#0a0a0a] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-600/15 blur-[120px] md:blur-[160px] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/15 blur-[120px] md:blur-[160px] rounded-full" />
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
          width: 100%;
        }

        .nextopus-btn:hover {
          transform: translateY(-1px);
          border-color: transparent;
        }

        .nextopus-btn:hover::before,
        .nextopus-btn.loading::before,
        .nextopus-btn.success::before,
        .nextopus-btn.error::before {
          opacity: 1;
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
          width: 100%;
        }

        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-box {
          background: #121214;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .loader-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .loader-dot {
          width: 8px;
          height: 8px;
          background-color: #ffffff;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .loader-dot:nth-child(1) { animation-delay: -0.32s; }
        .loader-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">
        <div className="glass-box rounded-3xl p-8 md:p-14 overflow-visible relative shadow-2xl">

          <div className="relative grid lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                  Iniciar un <span className="gradient-text">proyecto</span>
                </h2>
                <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                  Cuéntanos qué necesitas. Nuestro equipo técnico senior te responderá en menos de 24 horas.
                </p>
              </div>

              <ul className="space-y-4 text-sm text-white/70 pt-4 border-t border-white/5">
                <li className="flex items-center gap-3">
                  <i className="bi bi-check-circle-fill text-[#00E364] text-lg" />
                  <span>Consultoría inicial y viabilidad técnica sin costo</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="bi bi-check-circle-fill text-[#00E364] text-lg" />
                  <span>Propuesta y arquitectura en menos de 48 horas</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="bi bi-check-circle-fill text-[#00E364] text-lg" />
                  <span>Equipo senior asignado directamente al core</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label htmlFor="nombre" className="block text-xs uppercase tracking-wider mb-2 text-white/60 font-semibold">
                    Nombre Completo <span className="text-[#00E364]">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Ej. Sebastián Corona"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#008EFF] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider mb-2 text-white/60 font-semibold">
                    Correo Electrónico <span className="text-[#00E364]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@negocio.com"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#008EFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-white/60 font-semibold">
                    Número de Teléfono <span className="text-[#00E364]">*</span>
                  </label>
                  <div className="relative flex gap-3" ref={dropdownRef}>

                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl px-3.5 py-3.5 text-sm text-white focus:outline-none transition-colors shrink-0"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                        alt={selectedCountry.name}
                        className="w-5 h-auto rounded-sm object-cover shadow-sm"
                      />
                      <span className="font-mono font-medium">{selectedCountry.dial}</span>
                      <i className={`bi bi-chevron-down text-xs text-white/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 max-h-72 bg-[#18181b] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col"
                        >
                          <div className="p-3 border-b border-white/10 bg-[#121214]">
                            <input
                              ref={searchInputRef}
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Buscar país o prefijo..."
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#008EFF]"
                            />
                          </div>

                          <div className="overflow-y-auto flex-1 p-1 custom-scrollbar">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((c) => (
                                <button
                                  key={c.code}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(c);
                                    setIsDropdownOpen(false);
                                    setSearchQuery("");
                                  }}
                                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 text-left text-xs transition-colors group"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <img
                                      src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                                      alt={c.name}
                                      className="w-5 h-auto rounded-sm object-cover"
                                    />
                                    <span className="text-white/80 group-hover:text-white font-medium">{c.name}</span>
                                  </div>
                                  <span className="font-mono text-white/50">{c.dial}</span>
                                </button>
                              ))
                            ) : (
                              <div className="py-6 text-center text-xs text-white/40">
                                No se encontró el país
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      placeholder="412 0001234"
                      className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#008EFF] transition-colors"
                    />

                  </div>
                </div>

                <div className="relative" ref={projectDropdownRef}>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-white/60 font-semibold">
                    Tipo de Proyecto <span className="text-[#00E364]">*</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
                    className="w-full flex items-center justify-between bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-xl px-4 py-3.5 text-sm text-left text-white focus:outline-none transition-colors"
                  >
                    <span className={selectedProject ? "text-white font-medium" : "text-white/30"}>
                      {selectedProject || "Selecciona una categoría..."}
                    </span>
                    <i className={`bi bi-chevron-down text-xs text-white/50 transition-transform ${isProjectDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isProjectDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 max-h-64 bg-[#18181b] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col p-1"
                      >
                        <div className="overflow-y-auto flex-1 custom-scrollbar space-y-1">
                          {projectTypes.map((type, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setSelectedProject(type);
                                setIsProjectDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs md:text-sm transition-colors ${
                                selectedProject === type
                                  ? 'bg-[#008EFF]/20 text-[#008EFF] font-semibold'
                                  : 'text-white/80 hover:bg-white/5 hover:text-[#008EFF]'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs uppercase tracking-wider mb-2 text-white/60 font-semibold">
                    Descripción del Proyecto <span className="text-[#00E364]">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="Cuéntanos los objetivos, alcances o tecnologías que deseas implementar..."
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#008EFF] transition-colors resize-none"
                  />
                </div>

                <div className={`nextopus-btn mt-2 ${formState === "loading" ? "loading" : ""} ${formState === "success" ? "success" : ""} ${formState === "error" ? "error" : ""}`}>
                  <button
                    type="submit"
                    disabled={formState === "loading" || formState === "success"}
                    className="nextopus-btn-inner text-white text-sm font-semibold px-8 py-4 flex items-center justify-center gap-2 h-[52px] transition-all duration-300"
                  >
                    {formState === "loading" ? (
                      <div className="loader-dots">
                        <div className="loader-dot" />
                        <div className="loader-dot" />
                        <div className="loader-dot" />
                      </div>
                    ) : formState === "success" ? (
                      <motion.i
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bi bi-check2-circle text-[#00E364] text-2xl"
                      />
                    ) : formState === "error" ? (
                      <motion.i
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bi bi-x-circle text-red-500 text-2xl"
                      />
                    ) : (
                      <span>Enviar Mensaje</span>
                    )}
                  </button>
                </div>

                <div className="min-h-[60px] mt-4">
                  <AnimatePresence mode="wait">
                    {formState === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-[#00E364]/10 border border-[#00E364]/30 text-[#00E364] text-xs md:text-sm flex items-center gap-3"
                      >
                        <i className="bi bi-check-circle-fill text-lg shrink-0" />
                        <span>¡Mensaje enviado con éxito! Te responderemos en menos de 24 horas.</span>
                      </motion.div>
                    )}

                    {formState === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <i className="bi bi-exclamation-triangle-fill text-lg shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                        <a
                          href="https://wa.me/584125008324?text=Hola,%20tuve%20un%20problema%20al%20enviar%20el%20formulario%20en%20su%20web"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-300 text-xs font-semibold transition-colors"
                        >
                          <i className="bi bi-whatsapp" />
                          Contactar por WhatsApp
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}