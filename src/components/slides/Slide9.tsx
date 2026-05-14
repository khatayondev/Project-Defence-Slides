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
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

export default function Slide9() {
  const objectives = [
    {
      num: "04",
      title: "Test",
      desc: "Test the system against a defined set of acceptance criteria covering authentication, application workflow, document generation, attendance, evaluation, and archiving."
    },
    {
      num: "05",
      title: "Evaluate",
      desc: "Evaluate the system's usability with a representative group of students and liaison staff, and document recommendations for institutional rollout."
    }
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-start items-start"
    >
      <motion.div variants={item} className="w-full flex items-center gap-6 mb-16 border-b border-primary pb-6">
        <div className="w-16 h-16 bg-primary text-primary-fg rounded-xl flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">
          03
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-fg tracking-tight">Objectives</h2>
          <p className="text-xl text-muted-fg font-medium mt-1">(Continued)</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full h-full">
        {objectives.map((obj, i) => (
          <motion.div key={i} variants={item} className="flex flex-col bg-card border border-primary/20 rounded-2xl p-12 shadow-sm hover:border-primary transition-all hover:-translate-y-2 group">
            <div className="text-primary font-black text-7xl mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">{obj.num}</div>
            <h3 className="text-3xl font-bold text-fg mb-6">{obj.title}</h3>
            <p className="text-2xl text-muted-fg leading-relaxed">{obj.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
