"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize, Download, FileText, Layout, Moon, Sun } from "lucide-react";
import { generateEditablePPTX } from "@/lib/exportPptx";

// Import all 10 slides
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide6 from "@/components/slides/Slide6";
import Slide7 from "@/components/slides/Slide7";
import Slide8 from "@/components/slides/Slide8";
import Slide9 from "@/components/slides/Slide9";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import Slide12 from "@/components/slides/Slide12";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
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

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const exportPDF = () => {
    window.print();
  };

  const exportPPTX = async () => {
    setIsExporting(true);
    try {
      await generateEditablePPTX();
    } catch (e) {
      console.error(e);
    }
    setIsExporting(false);
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
          <button onClick={exportPDF} title="Download PDF" className="p-2 hover:bg-muted hover:text-primary rounded-full transition-all text-muted-fg">
            <FileText size={18} />
          </button>
          <button onClick={exportPPTX} title="Download PPTX" disabled={isExporting} className={`p-2 hover:bg-muted hover:text-primary rounded-full transition-all text-muted-fg ${isExporting ? 'animate-pulse' : ''}`}>
            <Layout size={18} />
          </button>
          <div className="w-px h-4 bg-border self-center mx-1" />
          <button onClick={toggleFullscreen} title="Toggle Fullscreen" className="p-2 hover:bg-muted hover:text-primary rounded-full transition-all text-muted-fg">
            <Maximize size={18} />
          </button>
        </div>
      </div>

      {/* Interaction Zones */}
      <div className="no-print absolute left-0 top-0 w-32 h-full z-40 cursor-w-resize group" onClick={goPrev} />
      <div className="no-print absolute right-0 top-0 w-32 h-full z-40 cursor-e-resize group" onClick={goNext} />

      {/* Main Slide Display */}
      <div className="w-full h-full" ref={slideRef}>
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

      {/* Print View (Hidden normally, shown in print) */}
      <div className="hidden print:block">
        {slides.map((Slide, index) => (
          <div key={index} className="print-page bg-white text-black p-12">
            <Slide />
          </div>
        ))}
      </div>

      {/* Bottom Progress Line */}
      <div className="no-print absolute bottom-0 left-0 w-full h-1.5 bg-muted">
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
