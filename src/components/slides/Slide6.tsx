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

export default function Slide6() {
  const problems = [
    {
      num: "1",
      title: "Manual document production",
      desc: "Placement letters are typed by hand, one at a time. Errors require the student to return to the liaison office and redo the process. The copy kept by the university often differs from the one received by the company."
    },
    {
      num: "2",
      title: "Paper logbook",
      desc: "Students carry a paper notebook to the workplace and the industry supervisor signs it weekly. Logbooks are lost, water-damaged, or submitted at the end of term with retroactive entries. Real-time monitoring is impossible."
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
          <p className="text-xl text-muted-fg font-medium mt-1">Five chronic weaknesses in HTU's current paper-based attachment process:</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full pt-4">
        {problems.map((p, i) => (
          <motion.div key={i} variants={item} className="flex flex-col h-full group hover:-translate-y-2 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-black shadow-sm group-hover:bg-primary group-hover:text-primary-fg transition-colors">
                {p.num}
              </div>
              <h3 className="text-2xl font-bold text-fg">{p.title}</h3>
            </div>
            <div className="flex-1 p-8 bg-card border border-primary/20 rounded-2xl shadow-sm group-hover:border-primary/50 transition-colors">
              <p className="text-2xl text-muted-fg leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
