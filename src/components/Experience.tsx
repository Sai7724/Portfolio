import React from "react";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { experienceData } from "../data";
import ScrollReveal from "./ScrollReveal";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#F5F1E8] border-y-[4px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with tilt badge */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#CCFF00] text-black font-mono text-xs sm:text-sm font-black px-3.5 py-1.5 border-[3px] border-black shadow-[3px_3px_0px_#000] rotate-[-2deg] uppercase">
                Work Experience
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black">
                Where I've <span className="underline decoration-accent decoration-wavy">Interned</span>
              </h2>
            </div>
            <p className="text-gray-700 font-sans max-w-md text-base leading-relaxed">
              Hands-on software engineering & data analyst roles implementing production-ready features, automated unit testing, and full-scale data warehouses.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Cards Grid/Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="w-full">
              <ScrollReveal delay={idx * 0.15}>
                <div className="h-full bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] rounded-lg flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#000] transition-all duration-200">
                  
                  {/* Card Header */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-black pb-4">
                      <div className="space-y-1">
                        <h3 className="font-display font-black text-xl sm:text-2xl text-black">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 font-mono text-sm font-extrabold text-[#FF3DCB]">
                          <Sparkles className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      
                      {/* Location Sticker */}
                      <span className="bg-[#FFE600] text-black border-[2px] border-black font-mono text-xs font-bold px-2.5 py-1 rotate-[2deg] shadow-[2px_2px_0px_#000]">
                        {exp.location}
                      </span>
                    </div>

                    {/* Timeline date */}
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-500 bg-[#F5F1E8] border-[2px] border-black px-3 py-1.5 w-fit rounded-sm shadow-[2px_2px_0px_#000]">
                      <Calendar className="w-4 h-4 text-black" />
                      {exp.period}
                    </div>

                    {/* Detailed Points */}
                    <ul className="space-y-3.5 pt-2">
                      {exp.description.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 font-sans leading-relaxed">
                          <span className="text-[#FF3DCB] mt-1.5 select-none font-extrabold text-base">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags footer */}
                  <div className="border-t-[3px] border-black pt-5 mt-6">
                    <div className="font-mono text-xs text-gray-400 font-bold uppercase mb-2">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="bg-[#F5F1E8] text-black border-[2px] border-black font-mono text-xs font-bold px-2.5 py-1 hover:bg-accent transition-colors"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
