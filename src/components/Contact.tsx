import React, { useEffect, useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import { Mail, Phone, MapPin, Send, Check, Award, Github, Linkedin } from "lucide-react";
import { personalInfo, certificationsData } from "../data";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "motion/react";

type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

const rawFormspreeValue = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim() ?? "";

const formspreeFormId = (() => {
  if (!rawFormspreeValue) return "";

  try {
    const parsedUrl = new URL(rawFormspreeValue);
    const endpointMatch = parsedUrl.pathname.match(/\/f\/([^/]+)\/?$/);

    if (endpointMatch) {
      return endpointMatch[1];
    }
  } catch {
    // Treat non-URL values as direct Formspree form IDs.
  }

  return rawFormspreeValue;
})();

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitState, submitToFormspree, resetSubmission] = useForm<ContactFormFields>(
    formspreeFormId || "missing-form-id"
  );

  useEffect(() => {
    if (!submitState.succeeded) return;

    setName("");
    setEmail("");
    setMessage("");

    const timer = window.setTimeout(() => resetSubmission(), 5000);
    return () => window.clearTimeout(timer);
  }, [resetSubmission, submitState.succeeded]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formspreeFormId) {
      setSubmitError(`Contact form isn't configured yet. Please email me directly at ${personalInfo.email}.`);
      return;
    }

    await submitToFormspree(e);
  };

  const formErrorMessage = submitState.errors?.getFormErrors().map((error) => error.message).join(" ") ?? "";

  return (
    <section id="contact" className="py-20 bg-[#F5F1E8] border-t-[4px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. CERTIFICATIONS Badges Wall */}
        <div className="space-y-10">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="inline-block bg-[#FF3DCB] text-white font-mono text-xs sm:text-sm font-black px-3 py-1 border-[2px] border-black shadow-[3px_3px_0px_#000] rotate-[2deg] uppercase">
                Validated Skills
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4.5xl uppercase tracking-tight text-black">
                Education & <span className="underline decoration-[#CCFF00] decoration-wavy">Certifications</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 font-sans leading-relaxed">
                B.Tech in Computer Science & Engineering from <strong className="text-black font-extrabold">Dr. M.G.R. University, Chennai</strong> (Graduating 2026 | CGPA: 7.42). Check out my credential stickers:
              </p>
            </div>
          </ScrollReveal>

          {/* Sticker Wall Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificationsData.map((cert, idx) => {
              const tilts = ["rotate-[-2deg]", "rotate-[3deg]", "rotate-[-1.5deg]", "rotate-[2deg]", "rotate-[-3deg]"];
              const colors = ["bg-white", "bg-accent", "bg-[#CCFF00]", "bg-white", "bg-white"];

              const tiltClass = tilts[idx % tilts.length];
              const colorClass = colors[idx % colors.length];

              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div
                    className={`${colorClass} ${tiltClass} border-[3px] border-black p-4 shadow-[4px_4px_0px_#000] rounded-sm hover:rotate-0 hover:scale-105 hover:shadow-[6px_6px_0px_#000] transition-all duration-200 h-full flex items-center gap-3`}
                  >
                    <div className="bg-black text-white p-1.5 border-[2.5px] border-black shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-display font-black text-xs sm:text-sm text-black leading-snug">
                      {cert.name}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* 2. GET IN TOUCH Contacts & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-block bg-[#CCFF00] text-black font-mono text-xs sm:text-sm font-black px-3.5 py-1.5 border-[3px] border-black shadow-[3px_3px_0px_#000] rotate-[-2deg] uppercase">
                  Let's Collaborate
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-black">
                  Direct <span className="underline decoration-accent decoration-wavy">Coordinates</span>
                </h3>
                <p className="text-gray-700 text-sm sm:text-base font-sans leading-relaxed">
                  Have an opening, a freelance project, or just want to chat Python & AI? Reach out directly via these channels:
                </p>
              </div>
            </ScrollReveal>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <div className="bg-white border-[3px] border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all">
                  <div className="bg-[#FF3DCB] text-white p-3 border-[2px] border-black rotate-[-3deg] shadow-[2px_2px_0px_#000]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-500 font-bold uppercase">Send email</div>
                    <a href={`mailto:${personalInfo.email}`} className="font-display font-black text-sm sm:text-base text-black hover:underline break-all">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="bg-white border-[3px] border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all">
                  <div className="bg-accent text-black p-3 border-[2px] border-black rotate-[2deg] shadow-[2px_2px_0px_#000]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-500 font-bold uppercase">Call directly</div>
                    <a href={`tel:${personalInfo.phone}`} className="font-display font-black text-sm sm:text-base text-black hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white border-[3px] border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all">
                  <div className="bg-[#CCFF00] text-black p-3 border-[2px] border-black rotate-[-2deg] shadow-[2px_2px_0px_#000]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-gray-500 font-bold uppercase">Current station</div>
                    <div className="font-display font-black text-sm sm:text-base text-black">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Social handles block */}
            <div className="flex gap-4 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white border-[3px] border-black py-3 px-4 font-mono text-xs font-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4 text-black" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white border-[3px] border-black py-3 px-4 font-mono text-xs font-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] rounded-lg relative">
                {/* Visual Status Tag */}
                <div className="absolute -top-3.5 right-6 bg-accent text-black font-mono text-xs font-black px-3 py-1 border-[2px] border-black rotate-[2.5deg] shadow-[2px_2px_0px_#000] uppercase">
                  Secure Transmission
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="New portfolio contact message" />

                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="font-display font-black text-sm uppercase text-black flex items-center gap-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full p-3.5 border-[3px] border-black rounded-sm bg-[#F5F1E8] shadow-[4px_4px_0px_#000] font-sans text-sm focus:outline-none focus:bg-white"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={submitState.errors}
                      className="font-mono text-xs font-bold text-[#D72638]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="font-display font-black text-sm uppercase text-black">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full p-3.5 border-[3px] border-black rounded-sm bg-[#F5F1E8] shadow-[4px_4px_0px_#000] font-sans text-sm focus:outline-none focus:bg-white"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={submitState.errors}
                      className="font-mono text-xs font-bold text-[#D72638]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="font-display font-black text-sm uppercase text-black">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      placeholder="Hey Sai Laxma Reddy, I checked your SiteSafe project and loved the spaCy implementation! Let's connect..."
                      className="w-full p-3.5 border-[3px] border-black rounded-sm bg-[#F5F1E8] shadow-[4px_4px_0px_#000] font-sans text-sm focus:outline-none focus:bg-white"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={submitState.errors}
                      className="font-mono text-xs font-bold text-[#D72638]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitState.submitting}
                    className="w-full bg-accent text-black font-display font-black text-base py-4 border-[3px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-[0px_0px_0px_#000] transition-all flex items-center justify-center gap-2 rounded-sm disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0px_#000]"
                  >
                    <Send className="w-5 h-5 text-black" />
                    {submitState.submitting ? "Transmitting..." : "Transmit Message"}
                  </button>

                  <AnimatePresence mode="wait">
                    {submitState.succeeded ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 1 }}
                        exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        className="p-4 bg-[#CCFF00] text-black border-[3px] border-black font-mono text-sm font-black text-center shadow-[4px_4px_0px_#000] rounded-sm flex items-center justify-center gap-2 mt-4"
                        aria-live="polite"
                      >
                        <Check className="w-5 h-5 text-black" />
                        MESSAGE TRANSMITTED SECURELY! THANKS!
                      </motion.div>
                    ) : submitError || formErrorMessage ? (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 1 }}
                        exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        className="p-4 bg-[#FFD7D7] text-black border-[3px] border-black font-mono text-sm font-black text-center shadow-[4px_4px_0px_#000] rounded-sm mt-4"
                        aria-live="polite"
                      >
                        {submitError || formErrorMessage}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
