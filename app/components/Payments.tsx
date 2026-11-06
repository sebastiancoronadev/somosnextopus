"use client";
import Image from "next/image";

const paymentMethods = [
  { name: "Zelle", icon: "/images/payments/Zelle_logo.png" },
  { name: "Binance", icon: "/images/payments/binance.png" },
  { name: "PayPal", icon: "/images/payments/paypal.png" },
  { name: "Visa", icon: "/images/payments/visa.png" },
  { name: "Mastercard", icon: "/images/payments/mastercard.png" },
  { name: "Apple Pay", icon: "/images/payments/applepay.png" },
  { name: "Google Pay", icon: "/images/payments/googlepay.png" },
  { name: "American Express", icon: "/images/payments/american-express.png" },
  { name: "Zinli", icon: "/images/payments/zinli.png" },
  { name: "Alipay", icon: "/images/payments/Alipay_Wordmark_Logo.png" },
  { name: "Banesco", icon: "/images/payments/banesco.png" },
  { name: "BNC", icon: "/images/payments/bnc.png", isBnc: true },
  { name: "Brubank", icon: "/images/payments/brubank.png" },
  { name: "Discover", icon: "/images/payments/discover.png" },
  { name: "Diners Club", icon: "/images/payments/diners-club.png" }
];

export default function Payments() {
  const row1 = [...paymentMethods.slice(0, 8), ...paymentMethods.slice(0, 8)];
  const row2 = [...paymentMethods.slice(8), ...paymentMethods.slice(8), ...paymentMethods.slice(8)];

  return (
    <section id="pagos" className="relative bg-[#0a0a0a] border-y border-white/5 py-28 overflow-hidden">


      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[200px] md:h-[350px] bg-blue-600/10 md:bg-blue-600/15 blur-[120px] md:blur-[160px] rounded-full" />
      </div>

      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(90deg, #008EFF 0%, #7C3AED 50%, #00E364 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .payment-box {
          background: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          display: flex;
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .marquee-track-left {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scrollLeft 50s linear infinite;
        }

        .marquee-track-right {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scrollRight 55s linear infinite;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>


      <div className="container-x relative z-10 max-w-[1450px] mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
          Infraestructura de pagos <span className="gradient-text">global y flexible</span>
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light">
          Nos adaptamos a tu flujo financiero con pasarelas internacionales, criptomonedas y banca local sin fricciones.
        </p>
      </div>


      <div className="space-y-6 relative z-10">


        <div className="marquee-container py-2">
          <div className="marquee-track-left">
            {row1.map((method, i) => (
              <div
                key={`r1-${i}`}
                className="payment-box flex items-center justify-center px-6 py-4 w-[180px] md:w-[210px] h-20 md:h-24 shadow-xl"
              >
                <div className="relative w-32 md:w-40 h-12 md:h-14 flex items-center justify-center">
                  <Image
                    src={method.icon}
                    alt={method.name}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    priority={i < 8}
                    unoptimized
                    className={`object-contain ${method.isBnc ? 'scale-125' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="marquee-container py-2">
          <div className="marquee-track-right">
            {row2.map((method, i) => (
              <div
                key={`r2-${i}`}
                className="payment-box flex items-center justify-center px-6 py-4 w-[180px] md:w-[210px] h-20 md:h-24 shadow-xl"
              >
                <div className="relative w-32 md:w-40 h-12 md:h-14 flex items-center justify-center">
                  <Image
                    src={method.icon}
                    alt={method.name}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    unoptimized
                    className={`object-contain ${method.isBnc ? 'scale-125' : ''}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}