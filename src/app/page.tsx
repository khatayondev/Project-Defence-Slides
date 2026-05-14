"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Layout, Moon, Sun, Loader2 } from "lucide-react";
import { generateEditablePPTX } from "@/lib/exportPptx";
import { generatePDF } from "@/lib/exportPdf";

// Import all 10 slides
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide8 from "@/components/slides/Slide8";
import Slide7 from "@/components/slides/Slide7";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import SlideArch from "@/components/slides/SlideArch";
import SlideERD from "@/components/slides/SlideERD";
import SlideStudentFlow from "@/components/slides/SlideStudentFlow";
import SlideLecturerFlow from "@/components/slides/SlideLecturerFlow";
import SlideCompanyFlow from "@/components/slides/SlideCompanyFlow";
import SlideHodFlow from "@/components/slides/SlideHodFlow";
import SlideCloFlow from "@/components/slides/SlideCloFlow";
import Slide12 from "@/components/slides/Slide12";

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide8, Slide7, Slide10, Slide11, 
  SlideArch, SlideERD, SlideStudentFlow, SlideLecturerFlow, SlideCompanyFlow, SlideHodFlow, SlideCloFlow, 
  Slide12
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<string | null>(null);
  const [exportProgress, setExportProgress] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  // Sync dark mode class with state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const goNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const exportPDF = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setExportType("PDF");
    setExportProgress("Preparing slides...");
    try {
      await generatePDF(slides, (current, total) => {
        setExportProgress(`Rendering slide ${current} of ${total}...`);
      });
    } catch (e) {
      console.error("PDF export failed:", e);
    }
    setIsExporting(false);
    setExportType(null);
    setExportProgress("");
  };

  const exportPPTX = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setExportType("PPTX");
    setExportProgress("Generating PowerPoint...");
    try {
      await generateEditablePPTX();
    } catch (e) {
      console.error("PPTX export failed:", e);
    }
    setIsExporting(false);
    setExportType(null);
    setExportProgress("");
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-bg text-fg selection:bg-primary selection:text-primary-fg transition-colors duration-300">
      {/* Floating Toolbar */}
      <div className="no-print absolute top-6 right-6 z-50 flex items-center gap-3">
        <div className="px-4 py-2 bg-card border border-border text-muted-fg text-xs font-bold rounded-full mr-2 shadow-sm">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <div className="flex bg-card backdrop-blur-md p-1.5 rounded-full border border-border shadow-sm">
          <button onClick={toggleTheme} title="Toggle Theme" className="p-2 hover:bg-muted hover:text-primary rounded-full transition-all text-muted-fg">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="w-px h-4 bg-border self-center mx-1" />
          <button onClick={exportPDF} title="Download PDF" disabled={isExporting} className={`p-2 hover:bg-muted hover:text-primary rounded-full transition-all text-muted-fg ${isExporting && exportType === 'PDF' ? 'animate-pulse text-primary' : ''}`}>
            <FileText size={18} />
          </button>
          <button onClick={exportPPTX} title="Download PPTX" disabled={isExporting} className={`p-2 hover:bg-muted hover:text-primary rounded-full transition-all text-muted-fg ${isExporting && exportType === 'PPTX' ? 'animate-pulse text-primary' : ''}`}>
            <Layout size={18} />
          </button>
        </div>
      </div>

      {/* Interaction Zones — top-20 keeps them below the toolbar */}
      <div className="no-print absolute left-0 top-20 w-32 bottom-0 z-40 cursor-w-resize" onClick={goPrev} />
      <div className="no-print absolute right-0 top-20 w-32 bottom-0 z-40 cursor-e-resize" onClick={goNext} />

      {/* Main Slide Display (hidden during print) */}
      <div className="main-slide-view w-full h-full" ref={slideRef}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)", y: direction * 20 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)", y: direction * -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Export Progress Overlay */}
      {isExporting && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 min-w-[300px]">
            <Loader2 size={40} className="animate-spin text-primary" />
            <p className="text-fg font-bold text-lg">Exporting {exportType}...</p>
            <p className="text-muted-fg text-sm">{exportProgress}</p>
          </div>
        </div>
      )}

      {/* Bottom Progress Line */}
      <div className="progress-bar no-print absolute bottom-0 left-0 w-full h-1.5 bg-muted">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </main>
  );
}
