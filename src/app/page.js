import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesPage from "./components/Certificates";
// import { TracingBeam } from "./components/ui/tracing-beam"; // Example Shadcn/Aceternity component

export default function Home() {
  return (
    // The main wrapper handles the Dark/Light background transition
    <main className="min-h-screen bg-slate-800  text-black dark:text-slate-100 transition-colors duration-500">
      <Navbar />

      {/* Hero Section: Better mobile handling */}
      <section className="relative flex flex-col items-center justify-center pt-20 md:pt-0 min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* Add a modern background grid or gradient here */}
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <HeroSection />
        </div>
      </section>

      {/* Main Content with Tracing Beam or subtle dividers */}
      <main className="container mx-auto px-6 space-y-24 py-20">

        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>

        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>

        <section id="certificates" className="scroll-mt-20">
          <CertificatesPage />
        </section>

        <section id="contact" className="scroll-mt-20">
          <EmailSection />
        </section>

      </main>

      <Footer />
    </main>
  );
}
