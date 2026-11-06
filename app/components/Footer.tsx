"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "../lib/site";

export default function Footer() {
  const [ready, setReady] = useState(false);
  const [time, setTime] = useState<Date | null>(null);
  const [userCountry, setUserCountry] = useState({ name: "Venezuela", code: "ve", zone: "America/Caracas" });

  useEffect(() => {
    setReady(true);
    setTime(new Date());

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes("Madrid") || tz.includes("Europe")) {
        setUserCountry({ name: "España", code: "es", zone: tz });
      } else if (tz.includes("Bogota")) {
        setUserCountry({ name: "Colombia", code: "co", zone: tz });
      } else if (tz.includes("Buenos_Aires")) {
        setUserCountry({ name: "Argentina", code: "ar", zone: tz });
      } else if (tz.includes("Mexico")) {
        setUserCountry({ name: "México", code: "mx", zone: tz });
      } else if (tz.includes("Santiago")) {
        setUserCountry({ name: "Chile", code: "cl", zone: tz });
      } else if (tz.includes("Lima")) {
        setUserCountry({ name: "Perú", code: "pe", zone: tz });
      } else if (tz.includes("New_York") || tz.includes("Chicago") || tz.includes("Los_Angeles")) {
        setUserCountry({ name: "Estados Unidos", code: "us", zone: tz });
      }
    } catch {

    }

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time ? time.getSeconds() : 0;
  const minutes = time ? time.getMinutes() : 0;
  const hours = time ? time.getHours() : 0;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <footer className="border-t border-white/5 pt-16 pb-10 bg-[#0a0a0a] relative overflow-hidden text-sm">

      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6">


        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">


          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">


            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-white">Ubicación</h3>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <i className="bi bi-geo-alt-fill text-[#008EFF]" />
                  <span>{site.address}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3 text-white">Contacto</h3>
                <ul className="space-y-2.5 text-white/60 text-sm">
                  <li className="flex items-center gap-3">
                    <i className="bi bi-telephone text-[#008EFF]" />
                    <span>{site.phone}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="bi bi-envelope text-[#008EFF]" />
                    <span>contacto@somosnextopus.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="bi bi-globe text-[#008EFF]" />
                    <span>{site.url.replace("https://", "")}</span>
                  </li>
                </ul>
              </div>
            </div>


            <div>
              <h3 className="text-sm font-semibold mb-3 text-white">Canales Oficiales</h3>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {Object.entries(site.socials).map(([key, url]) => {
                  const iconMap: Record<string, string> = {
                    linkedin: "bi-linkedin",
                    reddit: "bi-reddit",
                    github: "bi-github",
                    youtube: "bi-youtube",
                    discord: "bi-discord",
                    instagram: "bi-instagram",
                    x: "bi-twitter-x",
                    facebook: "bi-facebook"
                  };
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-white/10 grid place-items-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                      aria-label={key}
                    >
                      <i className={`bi ${iconMap[key] || "bi-globe"} text-lg`} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>


          <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center">

            <div className="flex flex-col items-center md:items-center w-full">


              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                  Hora Local ({userCountry.name})
                </span>
                <img src={`https://flagcdn.com/w40/${userCountry.code}.png`} alt={userCountry.name} className="w-4 h-auto rounded-xs object-cover shadow-sm" />
              </div>


              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex-shrink-0 select-none mb-4">
                <div className="absolute inset-0">
                  <Image src="/images/clock/dial.webp" alt="Reloj Dial" fill sizes="(max-width: 768px) 144px, 192px" className="object-contain" priority />
                </div>
                {ready && (
                  <div className="absolute inset-0" style={{ transform: `rotate(${hourDeg}deg)` }}>
                    <Image src="/images/clock/hours.webp" alt="Hora" fill sizes="(max-width: 768px) 144px, 192px" className="object-contain" priority />
                  </div>
                )}
                {ready && (
                  <div className="absolute inset-0" style={{ transform: `rotate(${minuteDeg}deg)` }}>
                    <Image src="/images/clock/minutes.webp" alt="Minutos" fill sizes="(max-width: 768px) 144px, 192px" className="object-contain" priority />
                  </div>
                )}
                {ready && (
                  <div className="absolute inset-0" style={{ transform: `rotate(${secondDeg}deg)` }}>
                    <Image src="/images/clock/seconds.webp" alt="Segundos" fill sizes="(max-width: 768px) 144px, 192px" className="object-contain" priority />
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none z-10">
                  <Image src="/images/clock/bizel.webp" alt="Reloj Bizel" fill sizes="(max-width: 768px) 144px, 192px" className="object-contain" priority />
                </div>
              </div>


              <div className="flex flex-col items-center">
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                  {ready && time ? time.toLocaleTimeString("es-VE", { timeZone: userCountry.zone }) : "00:00:00"}
                </div>
                <div className="text-xs text-white/50 mt-1 capitalize text-center">
                  {ready && time ? time.toLocaleDateString("es-VE", { timeZone: userCountry.zone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : "Cargando..."}
                </div>
              </div>

            </div>

          </div>

        </div>


        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center md:text-left">

          <div className="flex items-center justify-center gap-2">
            <span>Creado por</span>

            <div className="relative w-24 h-5 inline-block align-middle translate-y-[1.5px]">
              <Image
                src="/images/brand/nextopus.webp"
                alt="Nextopus"
                fill
                sizes="96px"
                className="object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/legal/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/legal/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/legal/condiciones" className="hover:text-white transition-colors">Condiciones</Link>
          </div>

          <div>
            © 2026 Nextopus. Todos los derechos reservados.
          </div>

        </div>

      </div>
    </footer>
  );
}