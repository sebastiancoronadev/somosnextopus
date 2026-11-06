import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import Showreel from "./components/Showreel";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Team from "./components/Team";
import TeamBios from "./components/TeamBios";
import Testimonials from "./components/Testimonials";
import Payments from "./components/Payments";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ClockWidget from "./components/ClockWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <ClockWidget />
      <main>
        <Hero />
        <Ticker />
        <Metrics />
        <Services />
        <Showreel />
        <Projects />
        <Stack />
        <Team />
        <Testimonials />
        <Payments />
        <TeamBios />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}