import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { renderAsync } from "docx-preview";
import {
  ArrowLeft,
  Download,
  FileText,
  Sparkles,
  Eye,
  Terminal,
  X,
  Loader2,
} from "lucide-react";

interface ResumeCard {
  id: string;
  title: string;
  subtitle: string;
  filename: string;
  downloadName: string;
  accentColor: string;
  shadowColor: string;
  icon: ReactNode;
  tags: string[];
}

const resumes: ResumeCard[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer Resume",
    subtitle: "Machine Learning · NLP · LLMs · Agentic AI",
    filename: "SAI_LAXMA_AI_ENGINEER.docx",
    downloadName: "Sai-Laxma-Reddy-AI-Engineer-CV.docx",
    accentColor: "#FF3DCB",
    shadowColor: "#FF3DCB",
    icon: <Sparkles className="w-6 h-6" />,
    tags: ["Python", "FastAPI", "LangChain","LLM", "PyTorch", "NLP"],
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Developer Resume",
    subtitle: "React · Node.js · Python · REST APIs",
    filename: "SAI_LAXMA_Fullstack_Dev_CV.docx",
    downloadName: "Sai-Laxma-Reddy-FullStack-CV.docx",
    accentColor: "#CCFF00",
    shadowColor: "#000",
    icon: <Terminal className="w-6 h-6" />,
    tags: ["React","Nest.js", "Node.js", "Express", "MongoDB", "SQL"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function DownloadCVPage() {
  const [previewResume, setPreviewResume] = useState<ResumeCard | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Render the .docx with its own styles/layout so it looks exactly like the Word file
  useEffect(() => {
    const container = previewRef.current;
    if (!previewResume || !container) return;

    setPreviewLoading(true);
    setPreviewError(null);
    container.innerHTML = "";

    fetch(`/resumes/${previewResume.filename}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch resume file");
        return response.blob();
      })
      .then((blob) => renderAsync(blob, container))
      .catch((err) =>
        setPreviewError(err instanceof Error ? err.message : "Failed to load preview")
      )
      .finally(() => setPreviewLoading(false));
  }, [previewResume]);

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-accent selection:text-[#1A1A1A]">
      {/* Minimal Header */}
      <nav className="sticky top-0 z-50 w-full bg-[#F5F1E8] border-b-[4px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 bg-black text-white px-5 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(255,230,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(255,230,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_rgba(255,230,0,1)] cursor-pointer transition-all rounded-[2px]"
            >
              <Terminal className="w-5 h-5 text-accent" />
              <span className="font-display font-black text-base sm:text-lg tracking-tighter italic uppercase">
                SAI_LAXMA.py
              </span>
            </Link>

            {/* Back Button */}
            <Link
              to="/"
              className="flex items-center gap-2 bg-white text-black font-display font-bold text-sm px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#000] transition-all rounded-[2px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block bg-[#FF3DCB] text-white border-[3px] border-black px-4 py-1.5 font-mono text-xs sm:text-sm font-black uppercase tracking-wider rotate-[-2deg] shadow-[4px_4px_0px_#000] rounded-sm mb-6">
              📄 Resume Downloads
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-black uppercase tracking-tighter leading-[0.9]">
              My{" "}
              <span className="bg-black text-white px-3 inline-block rotate-[-0.5deg] shadow-[4px_4px_0px_#FFE600]">
                Resumes
              </span>
            </h1>
            <p className="font-sans text-lg sm:text-xl font-bold text-gray-700 mt-6 max-w-2xl mx-auto">
              Choose the resume that best fits the role you're considering me
              for. Preview before downloading!
            </p>
          </motion.div>

          {/* Resume Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {resumes.map((resume) => (
              <motion.div
                key={resume.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-white border-[4px] border-black rounded-lg shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] transition-all duration-300 overflow-hidden">
                  {/* Card Header */}
                  <div
                    className="p-6 border-b-[4px] border-black"
                    style={{ backgroundColor: resume.accentColor + "20" }}
                  >
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="p-3 border-[3px] border-black rounded-lg shadow-[3px_3px_0px_#000]"
                        style={{ backgroundColor: resume.accentColor }}
                      >
                        {resume.icon}
                      </div>
                      <span className="bg-black text-white font-mono text-xs font-bold px-3 py-1 border-[2px] border-black uppercase tracking-wider">
                        .DOCX
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-black uppercase tracking-tight">
                      {resume.title}
                    </h2>
                    <p className="font-mono text-sm text-gray-600 font-bold mt-1">
                      {resume.subtitle}
                    </p>
                  </div>

                  {/* Tags Section */}
                  <div className="px-6 pt-5 pb-3">
                    <div className="flex flex-wrap gap-2">
                      {resume.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F5F1E8] text-black font-mono text-xs font-bold px-2.5 py-1 border-[2px] border-black rounded-sm shadow-[2px_2px_0px_#000]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Preview Area */}
                  <div className="px-6 py-4">
                    <div className="bg-[#F5F1E8] border-[3px] border-black rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden">
                      {/* Decorative dots pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, #000 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div
                          className="w-20 h-20 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_#000] flex items-center justify-center mb-5"
                          style={{ backgroundColor: resume.accentColor }}
                        >
                          <FileText className="w-10 h-10 text-black" />
                        </div>
                        <p className="font-display font-bold text-lg text-black mb-1">
                          {resume.filename}
                        </p>
                        <p className="font-mono text-xs text-gray-500 font-bold">
                          Microsoft Word Document
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
                    {/* Preview Button */}
                    <button
                      onClick={() => setPreviewResume(resume)}
                      className="flex-1 bg-white text-black font-display font-bold text-base px-5 py-3.5 border-[3px] border-black shadow-[4px_4px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_#000] transition-all flex items-center justify-center gap-2 rounded-sm"
                    >
                      <Eye className="w-5 h-5" />
                      Preview
                    </button>

                    {/* Download Button */}
                    <a
                      href={`/resumes/${resume.filename}`}
                      download={resume.downloadName}
                      className="flex-1 text-black font-display font-black text-base px-5 py-3.5 border-[4px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-[0px_0px_0px_#000] transition-all flex items-center justify-center gap-2 rounded-sm"
                      style={{ backgroundColor: resume.accentColor }}
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="inline-block bg-white border-[4px] border-black p-8 shadow-[8px_8px_0px_#000] rounded-lg">
              <p className="font-display font-bold text-xl text-black mb-4">
                Interested in working together?
              </p>
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }, 100);
                }}
                className="inline-flex items-center gap-2 bg-black text-white font-display font-bold text-base px-6 py-3.5 border-[3px] border-black shadow-[4px_4px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFE600] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_#FFE600] transition-all rounded-sm"
              >
                Get In Touch
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Preview Modal — renders .docx as-is via docx-preview */}
      {previewResume && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setPreviewResume(null)}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white border-[4px] border-black rounded-lg shadow-[12px_12px_0px_#000] flex flex-col overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b-[4px] border-black bg-[#F5F1E8]">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 border-[2px] border-black rounded-md"
                  style={{ backgroundColor: previewResume.accentColor }}
                >
                  <FileText className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-black uppercase tracking-tight">
                    {previewResume.title}
                  </h3>
                  <p className="font-mono text-xs text-gray-500 font-bold">
                    {previewResume.filename}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`/resumes/${previewResume.filename}`}
                  download={previewResume.downloadName}
                  className="flex items-center gap-2 text-black font-display font-bold text-sm px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000] transition-all rounded-sm"
                  style={{ backgroundColor: previewResume.accentColor }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={() => setPreviewResume(null)}
                  className="bg-black text-white p-2 border-[3px] border-black shadow-[3px_3px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#FFE600] transition-all rounded-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Preview Content — the Word document, rendered page by page */}
            <div className="flex-1 overflow-auto bg-white">
              {previewLoading && (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <Loader2 className="w-10 h-10 text-black animate-spin" />
                  <p className="font-display font-bold text-lg text-black">
                    Loading preview...
                  </p>
                </div>
              )}

              {previewError && (
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
                  <div className="bg-red-100 border-[3px] border-black p-6 rounded-lg shadow-[4px_4px_0px_#000] text-center max-w-md">
                    <FileText className="w-12 h-12 text-red-500 mx-auto mb-3" />
                    <p className="font-display font-bold text-lg text-black mb-2">
                      Preview Unavailable
                    </p>
                    <p className="font-mono text-sm text-gray-600">
                      {previewError}
                    </p>
                    <a
                      href={`/resumes/${previewResume.filename}`}
                      download={previewResume.downloadName}
                      className="inline-flex items-center gap-2 mt-4 bg-black text-white font-display font-bold text-sm px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_#FFE600] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#FFE600] transition-all rounded-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download Instead
                    </a>
                  </div>
                </div>
              )}

              <div ref={previewRef} hidden={previewLoading || !!previewError} />

            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="border-t-[4px] border-black py-8 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-sm text-gray-600 font-bold">
            © {new Date().getFullYear()} Sai Laxma Reddy R. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
