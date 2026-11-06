"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ve");

  const languages = [
    { code: "ve", name: "Español" },
    { code: "us", name: "English" },
    { code: "cn", name: "中文" },
    { code: "jp", name: "日本語" }
  ];

  useEffect(() => {
    const handleReveal = () => setVisible(true);
    window.addEventListener("reveal-ui", handleReveal);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("reveal-ui", handleReveal);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target as HTMLElement, {
        offset: -80,
        duration: 1.4
      });
    }

    if (open) setOpen(false);
  };

  if (!visible) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <style jsx>{`
        @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes orbitLight { from { --angle: 0deg; } to { --angle: 360deg; } }
        .nextopus-btn { position: relative; display: inline-flex; border-radius: 100px; cursor: pointer; border: 1px solid rgba(255, 255, 255, 0.2); transition: transform 300ms ease-in-out, border-color 300ms ease-in-out; }
        .nextopus-btn:hover { transform: translateY(-1px); border-color: transparent; }
        .nextopus-btn::before { content: ''; position: absolute; inset: -1px; border-radius: 100px; background: conic-gradient(from var(--angle), transparent 0deg, #2563EB 90deg, #7C3AED 180deg, #38bdf8 270deg, transparent 360deg); opacity: 0; transition: opacity 300ms ease-in-out; animation: orbitLight 3s linear infinite; z-index: 0; }
        .nextopus-btn:hover::before { opacity: 1; }
        .nextopus-btn::after { content: ''; position: absolute; inset: 1px; border-radius: 100px; background: #121214; z-index: 1; transition: background 300ms ease; }
        .nextopus-btn-inner { position: relative; z-index: 2; display: inline-flex; align-items: center; justify-content: center; border-radius: 100px; outline: none; background: transparent; cursor: pointer; white-space: nowrap; border: none; padding: 10px 24px; }
        .nav-link-effect { position: relative; }
        .nav-link-effect::after { content: ''; position: absolute; bottom: 0; left: 1rem; right: 1rem; height: 2px; background: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%); transform: scaleX(0); transform-origin: right; transition: transform 300ms ease-in-out; }
        .nav-link-effect:hover::after { transform: scaleX(1); transform-origin: left; }
      `}</style>

      <div className="container-x">
        <div className={`flex items-center justify-between rounded-2xl px-5 md:px-6 py-3 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-xl border border-white/10" : "bg-transparent"}`}>

          <Link href="/" className="flex items-center h-8" aria-label="Nextopus Inicio">
            <Image src="/images/brand/nextopus.webp" alt="Nextopus Logo" width={140} height={32} className="h-full w-auto object-contain" priority />
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="nav-link-effect px-3 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <img src={`https://flagcdn.com/${currentLang}.svg`} alt="Bandera" className="w-5 h-3.5 object-cover rounded-sm" />
                <motion.i animate={{ rotate: langOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="bi bi-chevron-down text-xs block" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-black/90 border border-white/10 rounded-lg p-2 flex flex-col gap-1 w-[220px] shadow-2xl z-50"
                  >
                    {languages.map((l) => {
                      const isCurrent = l.code === currentLang;
                      return (
                        <div
                          key={l.code}
                          className={`px-3 py-2 text-sm rounded flex items-center gap-2 whitespace-nowrap ${
                            isCurrent
                              ? "bg-white/10 text-white font-medium cursor-default"
                              : "text-white/30 cursor-not-allowed select-none"
                          }`}
                        >
                          <img
                            src={`https://flagcdn.com/${l.code}.svg`}
                            alt={l.name}
                            className={`w-5 h-3.5 object-cover rounded-sm ${isCurrent ? "" : "opacity-40"}`}
                          />
                          <span>{l.name}</span>
                          {isCurrent && <i className="bi bi-check2 text-[#00E364] text-xs ml-auto" />}
                          {!isCurrent && <span className="ml-auto text-[9px] text-white/20 uppercase tracking-wider">Pronto</span>}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="nextopus-btn">
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="nextopus-btn-inner text-white text-sm font-semibold"
              >
                <span className="relative z-10">Hablemos</span>
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden w-10 h-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-white"
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"} text-xl`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 px-5 pt-2"
          >
            <div className="bg-black/90 border border-white/10 rounded-2xl p-6 flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="text-base text-white/70 py-3 px-4 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="h-[1px] bg-white/10 my-2" />
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="text-center text-white text-sm font-semibold py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors mb-2"
              >
                Hablemos
              </a>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {languages.map((l) => {
                  const isCurrent = l.code === currentLang;
                  return (
                    <div
                      key={l.code}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                        isCurrent
                          ? "bg-white/10 text-white font-medium"
                          : "bg-white/5 text-white/30 cursor-not-allowed select-none"
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/${l.code}.svg`}
                        alt={l.name}
                        className={`w-4 h-3 object-cover rounded-sm ${isCurrent ? "" : "opacity-40"}`}
                      />
                      <span className="truncate">{l.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}