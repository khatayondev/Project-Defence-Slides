"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

export default function Slide1() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-center items-center text-center relative"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
      
      <motion.div variants={item} className="mb-8 flex flex-col items-center">
        <div className="relative w-36 h-36 mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
          <Image src="/htu-logo.png" alt="HTU Logo" fill className="object-contain" priority />
        </div>
        <h3 className="text-xl md:text-2xl font-black text-primary tracking-[0.3em] uppercase mb-2">
          Ho Technical University
        </h3>
        <p className="text-sm text-muted-fg font-semibold tracking-widest uppercase opacity-80">
          Faculty of Applied Sciences and Technology<br />
          Bachelor of Technology in Computer Science
        </p>
      </motion.div>

      <motion.div variants={item} className="relative z-10 my-2">
        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl -z-10" />
        <h1 className="text-5xl md:text-6xl font-black text-fg tracking-tighter leading-[1.1] drop-shadow-sm">
          Industrial Attachment<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/70">
            Management System
          </span>
        </h1>
        
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="bg-primary text-primary-fg font-bold px-4 py-2 rounded-md text-lg tracking-wide shadow-md shadow-primary/20 hover:scale-105 transition-transform">
            IAMS
          </span>
          <span className="text-2xl text-muted-fg font-medium"> for Ho Technical University</span>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-10 bg-card border border-primary/20 px-6 py-4 rounded-2xl shadow-sm">
        <div>
          <p className="text-primary text-xs uppercase tracking-wider mb-1 font-bold">Event</p>
          <p className="font-bold text-fg text-xl">Project Defense | 14 - 15 May 2026</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
