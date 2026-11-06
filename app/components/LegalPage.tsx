"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  version: string;
  content: string;
}

export default function LegalPage({ title, subtitle, lastUpdated, version, content }: LegalPageProps) {
  const renderContent = (text: string) => {
    const lines = text.split("\n");
    const blocks: React.ReactElement[] = [];
    let listItems: React.ReactElement[] = [];
    let listKey = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        blocks.push(
          <ul key={`list-${listKey++}`} className="list-none space-y-1.5 mb-4 pl-4">
            {listItems}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (trimmed === "") return;

      if (trimmed.startsWith("## ")) {
        flushList();
        blocks.push(
          <h2 key={idx} className="text-xl md:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-white/10">
            {trimmed.replace("## ", "")}
          </h2>
        );
        return;
      }

      if (trimmed.startsWith("# ")) {
        flushList();
        blocks.push(
          <h1 key={idx} className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {trimmed.replace("# ", "")}
          </h1>
        );
        return;
      }

      if (/^[a-h]\)/.test(trimmed)) {
        listItems.push(
          <li key={idx} className="text-white/70 text-sm md:text-base pl-2">{trimmed}</li>
        );
        return;
      }

      flushList();

      const formattedText = trimmed.split("**").map((part, i) => {
        if (i % 2 === 1) {
          return <strong key={i} className="font-bold text-white">{part}</strong>;
        }
        return <span key={i}>{part}</span>;
      });

      blocks.push(
        <p key={idx} className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
          {formattedText}
        </p>
      );
    });

    flushList();
    return blocks;
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full" />
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

        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
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

        .nextopus-btn:hover::before {
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
        }
      `}</style>

      <div className="container-x relative z-10 max-w-4xl mx-auto px-6">


        <div className="mb-8">
          <div className="nextopus-btn">
            <Link
              href="/"
              className="nextopus-btn-inner px-6 py-3"
            >
              <span className="relative z-10 flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold">
                <i className="bi bi-arrow-left" />
                Volver al inicio
              </span>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#121214] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >

          <div className="mb-10 pb-8 border-b border-white/10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 gradient-text">
              {title}
            </h1>
            <p className="text-white/60 text-base md:text-lg mb-4">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-white/40 font-mono">
              <span><strong className="text-white/60">Última actualización:</strong> {lastUpdated}</span>
              <span><strong className="text-white/60">Versión:</strong> {version}</span>
            </div>
          </div>

          <article className="legal-content">
            {renderContent(content)}
          </article>

        </motion.div>


        <div className="flex justify-center mt-10">
          <div className="nextopus-btn">
            <Link
              href="/"
              className="nextopus-btn-inner px-6 py-3"
            >
              <span className="relative z-10 flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold">
                <i className="bi bi-arrow-left" />
                Volver al inicio
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}