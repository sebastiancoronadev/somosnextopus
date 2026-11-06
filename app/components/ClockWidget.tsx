"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ClockWidget() {
  const [ready, setReady] = useState(false);
  const [time, setTime] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [flipRotation, setFlipRotation] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleReveal = () => setReady(true);
    window.addEventListener("reveal-ui", handleReveal);

    setTime(new Date());
    const timer = setInterval(() => {
      if (!isFlipping) {
        setTime(new Date());
      }
    }, 1000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("reveal-ui", handleReveal);
      clearInterval(timer);
    };
  }, [isFlipping]);

  const seconds = time ? time.getSeconds() : 0;
  const minutes = time ? time.getMinutes() : 0;
  const hours24 = time ? time.getHours() : 0;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours24 % 12) * 30 + minutes * 0.5;

  const handleOpen = () => {
    if (isFlipping || isOpen) return;

    setIsFlipping(true);
    setFlipRotation((prev) => prev + 360);
    setShowText(false);

    setTimeout(() => {
      setIsOpen(true);
    }, 300);

    setTimeout(() => {
      setShowText(true);
    }, 1150);

    setTimeout(() => {
      setTime(new Date());
      setIsFlipping(false);
    }, 1500);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFlipping || !isOpen) return;

    setIsFlipping(true);
    setFlipRotation((prev) => prev + 360);
    setShowText(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 450);

    setTimeout(() => {
      setTime(new Date());
      setIsFlipping(false);
    }, 1500);
  };

  const pad = (n: number) => n.toString().padStart(2, "0");
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const timeFormatted = `${pad(hours12)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;

  const closedSize = isMobile ? 80 : 100;
  const openWidth = isMobile ? 270 : 320;
  const openHeight = isMobile ? 360 : 420;
  const clockSize = isOpen
    ? (isMobile ? 150 : 180)
    : (isMobile ? 64 : 80);
  const clockTop = isOpen ? (isMobile ? 35 : 45) : (isMobile ? 8 : 10);
  const clockRight = isOpen ? (isMobile ? 60 : 70) : (isMobile ? 8 : 10);
  const marginRight = isOpen ? (isMobile ? 16 : 32) : 0;

  return (
    <AnimatePresence>
      {ready && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 top-[48%] lg:top-[40%] -translate-y-1/2 z-40 flex items-center justify-end"
        >

          <motion.div
            animate={{
              width: isOpen ? openWidth : closedSize,
              height: isOpen ? openHeight : closedSize,
              borderRadius: isOpen ? "1.5rem" : "1.5rem 0 0 1.5rem",
              marginRight: marginRight,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-visible ${!isOpen ? "cursor-pointer hover:bg-[#121214]" : "cursor-default"}`}
            onClick={!isOpen ? handleOpen : undefined}
          >

            <AnimatePresence>
              {isOpen && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.5, x: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={handleClose}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#1a1a1f] border border-white/30 flex items-center justify-center text-white hover:bg-[#25252c] hover:border-white/50 transition-all shadow-xl"
                  aria-label="Cerrar reloj"
                >
                  <i className="bi bi-x-lg text-sm" />
                </motion.button>
              )}
            </AnimatePresence>

            <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
              <motion.div
                animate={{
                  width: clockSize,
                  height: clockSize,
                  top: clockTop,
                  right: clockRight,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute shrink-0 z-10"
              >
                <div
                  className="absolute inset-0 z-20"
                  style={{
                    transform: `rotate(${flipRotation}deg)`,
                    transition: isFlipping ? "transform 1500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none"
                  }}
                >
                  <Image src="/images/clock/bizel.webp" alt="Bizel" fill sizes={isMobile ? "150px" : "180px"} className="object-contain" />
                </div>

                <div className="absolute inset-0">
                  <Image src="/images/clock/dial.webp" alt="Dial" fill sizes={isMobile ? "150px" : "180px"} className="object-contain" />
                </div>

                {ready && (
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${hourDeg + flipRotation}deg)`,
                      transition: isFlipping ? "transform 1500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none"
                    }}
                  >
                    <Image src="/images/clock/hours.webp" alt="Horas" fill sizes={isMobile ? "150px" : "180px"} className="object-contain" />
                  </div>
                )}

                {ready && (
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${minuteDeg + flipRotation}deg)`,
                      transition: isFlipping ? "transform 1500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none"
                    }}
                  >
                    <Image src="/images/clock/minutes.webp" alt="Minutos" fill sizes={isMobile ? "150px" : "180px"} className="object-contain" />
                  </div>
                )}

                {ready && (
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${secondDeg + flipRotation}deg)`,
                      transition: isFlipping ? "transform 1500ms cubic-bezier(0.4, 0, 0.2, 1)" : "none"
                    }}
                  >
                    <Image src="/images/clock/seconds.webp" alt="Segundos" fill sizes={isMobile ? "150px" : "180px"} className="object-contain" />
                  </div>
                )}
              </motion.div>

              <AnimatePresence>
                {showText && (
                  <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`absolute bottom-8 left-0 right-0 text-center ${isMobile ? "px-4" : "px-6"}`}
                  >
                    <p className={`font-bold text-white leading-snug mb-6 ${isMobile ? "text-xs" : "text-sm"}`}>
                      Cada minuto cuenta para hacer crecer tu negocio.
                    </p>
                    <div className={`font-bold text-white tracking-wider font-mono ${isMobile ? "text-2xl" : "text-3xl"}`}>
                      {ready && time ? timeFormatted : "00:00:00 AM"}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}