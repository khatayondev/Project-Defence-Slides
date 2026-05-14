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
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Slide12() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-center items-center text-center bg-gradient-to-br from-primary to-[#052b69]"
    >
      <motion.div variants={item} className="mb-12 flex flex-col items-center">
        <div className="relative w-24 h-24 mb-6 opacity-90 hover:opacity-100 hover:scale-110 transition-all drop-shadow-lg">
          <Image src="/htu-logo.png" alt="HTU Logo" fill className="object-contain" priority />
        </div>
        <h1 className="text-8xl md:text-9xl font-black text-primary-fg tracking-tighter leading-none mb-6 drop-shadow-2xl">
          Thank You
        </h1>
        <p className="text-3xl text-primary-fg/80 font-medium tracking-wide">
          We welcome your questions.
        </p>
      </motion.div>

      <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
        <motion.div variants={item} className="bg-bg text-fg rounded-2xl p-10 shadow-2xl flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
          <span className="text-6xl font-black text-primary mb-2">153</span>
          <span className="text-sm font-bold uppercase tracking-widest text-muted-fg text-center">Total functional features implemented</span>
        </motion.div>
        
        <motion.div variants={item} className="bg-bg text-fg rounded-2xl p-10 shadow-2xl flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
          <span className="text-6xl font-black text-primary mb-2">6</span>
          <span className="text-sm font-bold uppercase tracking-widest text-muted-fg text-center">User roles supported</span>
        </motion.div>
        
        <motion.div variants={item} className="bg-bg text-fg rounded-2xl p-10 shadow-2xl flex flex-col items-center justify-center transform hover:scale-110 transition-transform">
          <span className="text-6xl font-black text-primary mb-2">9</span>
          <span className="text-sm font-bold uppercase tracking-widest text-muted-fg text-center">System modules</span>
        </motion.div>
      </motion.div>

      <motion.div variants={item} className="mt-auto flex flex-col items-center text-primary-fg/80 text-sm uppercase tracking-widest font-bold">
        <p className="mb-1">Ho Technical University | Faculty of Applied Sciences and Technology</p>
        <p className="mb-2">IAMS Project Defense | 14 - 15 May 2026</p>
      </motion.div>
    </motion.div>
  );
}
