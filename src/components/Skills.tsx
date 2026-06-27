import React, { useState } from "react";
import { Sparkles, Terminal, Code, Settings, Shield, HelpCircle } from "lucide-react";
import { skillCategories } from "../data";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Code className="w-5 h-5" />;
      case "frameworks":
        return <Terminal className="w-5 h-5" />;
      case "databases":
        return <Settings className="w-5 h-5" />;
      case "tools":
        return <Settings className="w-5 h-5" />;
      case "testing":
        return <Shield className="w-5 h-5" />;
      default:
        return <HelpCircle className="w-5 h-5" />;
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#F5F1E8] border-y-[4px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#CCFF00] text-black font-mono text-xs sm:text-sm font-black px-3.5 py-1.5 border-[3px] border-black shadow-[3px_3px_0px_#000] rotate-[-2deg] uppercase">
                Expertise
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black">
                Technical <span className="underline decoration-[#FF3DCB] decoration-wavy">Skills</span>
              </h2>
            </div>
            <p className="text-gray-700 font-sans max-w-md text-base leading-relaxed">
              Highly specialized technical capabilities across data structures, microservices, cloud deployments, and predictive NLP algorithms.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Selection Filter Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 font-display font-bold text-sm border-[3px] border-black shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#000] transition-all rounded-[4px] ${
                selectedCategory === "all" ? "bg-accent text-black" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              🚀 All Expertise
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 font-display font-bold text-sm border-[3px] border-black shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#000] transition-all rounded-[4px] flex items-center gap-2 ${
                  selectedCategory === cat.id ? "bg-accent text-black" : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {getCategoryIcon(cat.id)}
                {cat.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills List Containers */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.id} delay={catIdx * 0.1}>
              <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] rounded-lg">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b-[3px] border-black pb-4 mb-6">
                  <div className="bg-[#FF3DCB] text-white p-2 border-[2px] border-black shadow-[2px_2px_0px_#000] rotate-[-2deg]">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-black">
                    {cat.name}
                  </h3>
                </div>

                {/* Skills Grid within Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-[#F5F1E8] p-4 border-[3px] border-black shadow-[4px_4px_0px_#000] rounded hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] transition-all"
                    >
                      <div className="flex justify-between items-center mb-2.5 font-mono">
                        <span className="font-bold text-black text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs text-gray-500 font-black bg-white border-[2.5px] border-black px-1.5 py-0.5 rounded-sm">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Neubrutalist Level Bar */}
                      <div className="w-full h-4 border-[2.5px] border-black bg-white overflow-hidden rounded-sm">
                        <div
                          className="h-full bg-accent border-r-[2.5px] border-black"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
