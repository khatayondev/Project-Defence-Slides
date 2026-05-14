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

export default function Slide10() {
  const stack = [
    { label: "Backend", val: "Laravel 11  |  PHP 8.3" },
    { label: "Frontend", val: "Vue.js  +  Progressive Web App (PWA)" },
    { label: "Database", val: "PostgreSQL  +  Redis (cache & sessions)" },
    { label: "File storage", val: "S3-compatible object store" },
    { label: "Authentication", val: "Google SSO (@htu.edu.gh)  |  Magic-link URLs" },
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
          04
        </div>
        <h2 className="text-4xl font-extrabold text-fg tracking-tight">Methodology</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full h-full">
        <motion.div variants={item} className="flex flex-col gap-6">
          <div className="inline-block bg-accent text-primary font-bold px-4 py-2 rounded-md uppercase tracking-wider text-sm shadow-sm w-fit border border-primary/20">
            Development Approach
          </div>
          <h3 className="text-3xl font-bold text-fg">Agile / Iterative Development</h3>
          <p className="text-2xl leading-relaxed text-muted-fg mt-4">
            Requirements were gathered through structured interviews with students, liaison officers, and academic supervisors. The system was designed and built in iterative sprints, with testing at each stage against a pre-defined set of acceptance criteria.
          </p>
        </motion.div>

        <motion.div variants={item} className="bg-card border border-primary/20 rounded-2xl p-10 shadow-sm relative overflow-hidden flex flex-col justify-center hover:shadow-xl hover:shadow-primary/10 transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
          
          <div className="inline-block bg-primary text-primary-fg font-bold px-4 py-2 rounded-md uppercase tracking-wider text-sm shadow-sm w-fit mb-8">
            Technology Stack
          </div>
          
          <div className="space-y-6 relative z-10">
            {stack.map((t, i) => (
              <div key={i} className="flex flex-col border-b border-primary/20 pb-4 last:border-0 last:pb-0 hover:translate-x-2 transition-transform">
                <span className="text-sm font-bold text-primary uppercase tracking-wider mb-1">{t.label}</span>
                <span className="text-2xl font-semibold text-fg">{t.val}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
