import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowRight } from "lucide-react";
import { personalInfo } from "../data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Identify Active Section
      const offsets = navLinks.map((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: link.id, top: rect.top + window.scrollY - 120 };
        }
        return { id: link.id, top: 0 };
      });

      const currentScroll = window.scrollY;
      let currentSection = "home";

      for (let i = 0; i < offsets.length; i++) {
        if (currentScroll >= offsets[i].top) {
          currentSection = offsets[i].id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F5F1E8] border-b-[4px] border-black select-none">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black z-50">
        <div
          className="h-full bg-accent transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Box */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 bg-black text-white px-5 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(255,230,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(255,230,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(255,230,0,1)] cursor-pointer transition-all rounded-[2px]"
          >
            <Terminal className="w-5 h-5 text-accent" />
            <span className="font-display font-black text-base sm:text-lg tracking-tighter italic uppercase">
              SAI_LAXMA.py
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1.5 font-display font-bold text-sm border-[3px] transition-all hover:translate-x-0.5 hover:translate-y-0.5 rounded-[4px] ${
                  activeSection === link.id
                    ? "bg-accent text-black border-black shadow-[3px_3px_0px_#000]"
                    : "bg-transparent text-black border-transparent hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_#000]"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Quick Hire CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-black text-white font-display font-bold text-sm px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFE600] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#FFE600] transition-all flex items-center gap-1"
            >
              Hire Me <ArrowRight className="w-4 h-4 text-accent" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-accent p-2 border-[3px] border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t-[4px] border-black p-4 space-y-3 shadow-[0px_10px_20px_rgba(0,0,0,0.15)] animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-4 py-3 font-display font-bold border-[3px] border-black rounded-[4px] shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] transition-all block ${
                activeSection === link.id
                  ? "bg-accent text-black"
                  : "bg-[#F5F1E8] text-black hover:bg-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full text-center bg-black text-white py-3 font-display font-bold border-[3px] border-black shadow-[4px_4px_0px_#FFE600] block"
          >
            Hire Sai Laxma Reddy
          </button>
        </div>
      )}
    </nav>
  );
}
