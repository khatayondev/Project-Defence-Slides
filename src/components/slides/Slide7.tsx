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

export default function Slide7() {
  const problems = [
    {
      num: "3",
      title: "Unverified attendance",
      desc: "No independent mechanism exists to verify that a student was actually present at the host company on any given day. The student's word is the only evidence."
    },
    {
      num: "4",
      title: "Back-loaded assessment",
      desc: "Assessment relies almost entirely on a single industry supervisor's recall at term end. Evaluation forms are often returned weeks late - or not returned at all - leaving the academic supervisor to grade on a written report alone."
    },
    {
      num: "5",
      title: "Reactive oversight",
      desc: "The Central Liaison Office has no real-time view of how many students are on active placement, how many companies are pending approval, or how many evaluations are overdue. Interventions always happen after the fact."
    }
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
          02
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-fg tracking-tight">Problem Statement</h2>
          <p className="text-xl text-muted-fg font-medium mt-1">(Continued)</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-full pt-4">
        {problems.map((p, i) => (
          <motion.div key={i} variants={item} className="flex flex-col h-full group hover:-translate-y-2 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-black shadow-sm group-hover:bg-primary group-hover:text-primary-fg transition-colors">
                {p.num}
              </div>
              <h3 className="text-2xl font-bold text-fg">{p.title}</h3>
            </div>
            <div className="flex-1 p-8 bg-card border border-primary/20 rounded-2xl shadow-sm group-hover:border-primary/50 transition-colors">
              <p className="text-xl text-muted-fg leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
