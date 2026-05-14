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
        <div className="relative w-32 h-32 mb-6 drop-shadow-xl hover:scale-105 transition-transform">
          <Image src="/htu-logo.png" alt="HTU Logo" fill className="object-contain" priority />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-primary tracking-[0.2em] uppercase mb-4">
          Ho Technical University
        </h3>
        <p className="text-muted-fg font-medium tracking-wide">
          Faculty of Applied Sciences and Technology<br />
          Bachelor of Technology in Computer Science
        </p>
      </motion.div>

      <motion.div variants={item} className="relative z-10 my-4">
        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl -z-10" />
        <h1 className="text-6xl md:text-8xl font-black text-fg tracking-tighter leading-[1.1] drop-shadow-sm">
          Industrial Attachment<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/70">
            Management System
          </span>
        </h1>
        
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="bg-primary text-primary-fg font-bold px-4 py-2 rounded-md text-xl tracking-wide shadow-md shadow-primary/20 hover:scale-105 transition-transform">
            IAMS
          </span>
          <span className="text-3xl text-muted-fg font-medium"> for Ho Technical University</span>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-16 bg-card border border-primary/20 px-8 py-6 rounded-2xl shadow-sm">
        <div>
          <p className="text-primary text-sm uppercase tracking-wider mb-1 font-bold">Event</p>
          <p className="font-bold text-fg text-2xl">Project Defense | 14 - 15 May 2026</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
