import React from "react";
import { Terminal, Heart, Sparkles, Code2 } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black text-white py-12 border-t-[4px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b-[3px] border-gray-800 pb-10">
          
          {/* Logo Brand Box */}
          <div 
            onClick={handleScrollToTop}
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFE600] active:translate-x-1 active:translate-y-1 cursor-pointer transition-all rounded-[4px]"
          >
            <Terminal className="w-5 h-5 text-black" />
            <span className="font-display font-black text-base tracking-tight">
              SAI_LAXMA.py
            </span>
          </div>

          {/* Core tech statement */}
           <button 
            onClick={handleScrollToTop}
            className="bg-[#CCFF00] text-black border-[3.5px] border-black px-4 py-2 font-display font-black text-xs hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_#000] active:shadow-[0px_0px_0px_#000] shadow-[3px_3px_0px_#000] transition-all flex items-center gap-1 uppercase"
          >
            <span>Back to Summit</span> 🚀
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center pt-8 gap-4">
          <div className="text-gray-400 font-mono text-xs text-center sm:text-left">
            © {currentYear} Sai Laxma Reddy R. All rights reserved. Registered city in Hyderabad, India.
          </div>
        </div>

      </div>
    </footer>
  );
}
