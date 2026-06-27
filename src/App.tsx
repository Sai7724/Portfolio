import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-accent selection:text-[#1A1A1A]">
      {/* Sticky Header */}
      <Navbar />

      <main className="relative">
        {/* Hero Banner Section */}
        <Hero />

        {/* Professional Experience Section */}
        <Experience />

        {/* Featured Projects Section */}
        <Projects />

        {/* Technical Skills Grid Section */}
        <Skills />

        {/* Contact Coordinates & Trust Sticker Wall */}
        <Contact />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}

