import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail, Download, Check, Sparkles, MapPin, Terminal } from "lucide-react";
import { personalInfo } from "../data";

const profileImage = new URL("../../assets/profile.png", import.meta.url).href;
const resumePdf = new URL("../../assets/Resume.1.pdf", import.meta.url).href;

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Title & Intro */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Rotated badge/sticker */}
          <motion.div 
            variants={itemVariants}
            className="inline-block bg-[#FF3DCB] text-white border-[3px] border-black px-4 py-1.5 font-mono text-xs sm:text-sm font-black uppercase tracking-wider rotate-[-2deg] shadow-[4px_4px_0px_#000] rounded-sm"
          >
            🚀 Open For Core Developer Roles!
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              variants={itemVariants}
              className="font-display font-black text-5xl sm:text-7xl lg:text-[85px] leading-[0.85] text-black uppercase tracking-tighter"
            >
              PYTHON<br/>
              <span className="bg-black text-white px-3 inline-block my-1 rotate-[-0.5deg] shadow-[4px_4px_0px_#FFE600]">DEV</span><br/>
              & AI Fullstack <span className="bg-black text-white px-3 inline-block my-1 rotate-[-0.5deg] shadow-[4px_4px_0px_#FFE600]">Engineer</span><br/>

            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="font-display font-black text-2xl sm:text-3xl text-black"
            >
              Sai Laxma Reddy R
            </motion.p>
          </div>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg sm:text-xl font-bold text-gray-800 border-l-[8px] border-black pl-6 py-2 max-w-2xl leading-tight"
          >
            {personalInfo.objective}
          </motion.p>

          {/* Social Tags and Quick Location Badge */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-1.5 bg-white border-[3px] border-black px-3 py-1 font-mono text-sm font-bold shadow-[3px_3px_0px_#000]">
              <MapPin className="w-4 h-4 text-[#FF3DCB]" />
              {personalInfo.location}
            </div>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="bg-white border-[3px] border-black px-3 py-1 font-mono text-sm font-bold shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000] active:shadow-[0px_0px_0px_#000] transition-all"
            >
              github/{personalInfo.githubUser}
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="bg-white border-[3px] border-black px-3 py-1 font-mono text-sm font-bold shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000] active:shadow-[0px_0px_0px_#000] transition-all"
            >
              linkedin/{personalInfo.linkedinUser}
            </a>
          </motion.div>

          {/* Interactive Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            
            <button
              onClick={handleScrollToProjects}
              className="bg-accent text-black font-display font-black text-base px-6 py-4 border-[4px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-[0px_0px_0px_#000] transition-all flex items-center gap-2 rounded-sm"
            >
              View Featured Work <ArrowDown className="w-5 h-5" />
            </button>

            <button
              onClick={copyEmailToClipboard}
              className="bg-white text-black font-display font-bold text-base px-6 py-4 border-[4px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-[0px_0px_0px_#000] transition-all flex items-center gap-2 rounded-sm"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-600" />
                  Copied Email!
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5 text-black" />
                  Copy Direct Email
                </>
              )}
            </button>

            {/* Resume Download Button */}
            <a
              href={resumePdf}
              download="Sai-Laxma-Reddy-Resume.pdf"
              className="bg-[#CCFF00] text-black font-display font-bold text-base px-4 py-4 border-[4px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-[0px_0px_0px_#000] transition-all flex items-center gap-2 rounded-sm"
              title="Download resume PDF"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>

          </motion.div>
        </div>

        {/* Right Column: Visual Neubrutalist Bento/Avatar Card */}
        <div className="lg:col-span-5 relative">
          
          <motion.div
            variants={itemVariants}
            className="relative bg-white border-[4px] border-black p-6 shadow-[10px_10px_0px_#000] rounded-lg max-w-md mx-auto"
          >
            {/* Corner Decorative Dots */}
            <div className="absolute top-4 right-4 flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            </div>

            {/* Stylized CSS Avatar & Illustration */}
            <div className="w-full aspect-square border-[4px] border-black rounded mb-6 relative overflow-hidden group">
              {/* Profile image */}
              <img
                src={profileImage}
                alt="Portrait of Sai Laxma Reddy R"
                className="h-full w-full object-cover object-top"
                draggable={false}
              />

              {/* Float sticker 1 */}
              <div className="absolute bottom-4 left-4 bg-black text-white font-mono text-xs font-bold px-2 py-1 border-[2px] border-white rotate-[-5deg] shadow-[2px_2px_0px_#000] z-10">
                import tensorflow as Wtf
              </div>

              {/* Float sticker 2 */}
              <div className="absolute top-4 left-4 bg-white text-black font-mono text-xs font-bold px-2 py-1 border-[2px] border-black rotate-[4deg] shadow-[2px_2px_0px_#000] flex items-center gap-1 z-10">
                <Sparkles className="w-3 h-3 text-[#FF3DCB]" /> NLP Expert
              </div>

              {/* Floating tech label */}
              <div className="absolute right-4 bottom-12 bg-[#FF3DCB] text-white font-mono text-xs font-bold px-2 py-1 border-[2px] border-black rotate-[6deg] shadow-[2px_2px_0px_#000] z-10">
                React & FastAPI
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((st, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FFFDF7] p-3 border-[3px] border-black shadow-[4px_4px_0px_#000] rounded-sm hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] transition-all"
                >
                  <div className="font-mono text-xs text-gray-500 font-bold uppercase">{st.label}</div>
                  <div className="font-display font-black text-lg sm:text-xl text-black mt-0.5">{st.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}



