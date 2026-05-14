"use client";

import { motion } from "framer-motion";

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

export default function Slide3() {
  const agenda = [
    { num: "01", title: "Introduction", desc: "Background and Theoretical Framework" },
    { num: "02", title: "Problem Statement", desc: "Key Weaknesses in Current Process" },
    { num: "03", title: "Aim & Objectives", desc: "Project Goals and Core Scope" },
    { num: "04", title: "Methodology", desc: "Development Approach and Technology Stack" },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-start items-start"
    >
      <motion.div variants={item} className="w-full flex items-center gap-6 mb-12 border-b border-primary pb-6">
        <div className="w-16 h-16 bg-primary text-primary-fg rounded-xl flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">
          TOC
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-fg tracking-tight">Presentation Agenda</h2>
          <p className="text-xl text-muted-fg font-medium mt-1">Structure of today's defense</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full pt-4">
        {agenda.map((section, i) => (
          <motion.div key={i} variants={item} className="group relative bg-card border border-primary/20 rounded-2xl p-10 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all overflow-hidden flex items-center gap-8 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            
            <div className="text-primary font-black text-7xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
              {section.num}
            </div>
            
            <div className="flex flex-col relative z-10">
              <h3 className="text-3xl font-bold text-fg mb-2">{section.title}</h3>
              <p className="text-xl text-muted-fg font-medium">{section.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
