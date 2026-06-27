import React, { useState } from "react";
import { ExternalLink, Github, Sparkles, Code2, ShieldAlert, ArrowUpRight, Cpu, Bot, Eye } from "lucide-react";
import { projectsData } from "../data";
import ScrollReveal from "./ScrollReveal";

const projectTagIcons = {
  cpu: Cpu,
  "shield-alert": ShieldAlert,
  bot: Bot,
  eye: Eye
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#F5F1E8] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#FF3DCB] text-white font-mono text-xs sm:text-sm font-black px-3.5 py-1.5 border-[3px] border-black shadow-[3px_3px_0px_#000] rotate-[1.5deg] uppercase">
                Featured Work
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-black">
                Personal <span className="underline decoration-[#CCFF00] decoration-wavy">Projects</span>
              </h2>
            </div>
            <p className="text-gray-700 font-sans max-w-md text-base leading-relaxed">
              Showcasing production-ready full-stack architectures, deep LLM integrations, and robust automated natural language processors.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsData.map((project, idx) => {
            const TagIcon = projectTagIcons[project.tag.icon];

            return (
              <div key={project.id} className="w-full">
                <ScrollReveal delay={idx * 0.15}>
                  <div
                    onMouseEnter={() => setActiveProject(project.id)}
                    onMouseLeave={() => setActiveProject(null)}
                    className="group relative bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000] rounded-lg hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-[2px_2px_0px_#000] transition-all duration-200 flex flex-col justify-between h-full"
                  >
                    {/* Top Decorative Floating Sticker */}
                    <div className="absolute -top-3.5 right-6 bg-black text-white font-mono text-xs font-bold px-3 py-1 border-[2px] border-white rotate-[-1.5deg] shadow-[2px_2px_0px_#FFE600] uppercase flex items-center gap-1">
                      <TagIcon className="w-3 h-3" style={{ color: project.tag.color }} />
                      {project.tag.label}
                    </div>

                    <div className="space-y-6">
                      {/* Name / Category */}
                      <div className="space-y-1">
                        <div className="font-mono text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                          <Code2 className="w-4 h-4 text-black" />
                          {project.period}
                        </div>
                        <h3 className="font-display font-black text-2xl sm:text-3.5xl text-black flex items-center gap-2 mt-1">
                          {project.title}
                          <ArrowUpRight className="w-6 h-6 text-black opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150" />
                        </h3>
                        <p className="font-display font-extrabold text-base text-gray-800 bg-[#CCFF00] border-[2px] border-black px-2.5 py-1 w-fit rounded-sm shadow-[2px_2px_0px_#000] mt-1.5 rotate-[-0.5deg]">
                          {project.description}
                        </p>
                      </div>

                      {/* Detailed Bullet Points */}
                      <ul className="space-y-3 pt-2">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-800 font-sans leading-relaxed">
                            <span className="text-black select-none font-bold text-lg">■</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Tech + Links bar */}
                    <div className="border-t-[3px] border-black pt-6 mt-8 space-y-4">
                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-[#F5F1E8] text-black border-[2px] border-black font-mono text-xs font-bold px-2.5 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Repo + Simulated Demo Links */}
                      <div className="flex items-center gap-4 pt-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-black text-white font-mono text-xs sm:text-sm font-bold px-3.5 py-2 border-[2px] border-black shadow-[3px_3px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1.5px_1.5px_0px_#FFE600] active:shadow-[0px_0px_0px_#000] transition-all"
                        >
                          <Github className="w-4 h-4 text-white" />
                          View Source Code
                        </a>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
