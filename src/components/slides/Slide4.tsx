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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

export default function Slide4() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-start items-start"
    >
      <motion.div variants={item} className="w-full flex items-center gap-6 mb-12 border-b border-primary pb-6">
        <div className="w-16 h-16 bg-primary text-primary-fg rounded-xl flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">
          01
        </div>
        <h2 className="text-4xl font-extrabold text-fg tracking-tight">Introduction</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full h-full">
        <motion.div variants={item} className="flex flex-col gap-6">
          <div className="inline-block bg-accent text-accent-fg font-bold px-4 py-2 rounded-md uppercase tracking-wider text-sm shadow-sm w-fit border border-primary/20">
            Background
          </div>
          <p className="text-3xl leading-relaxed text-fg font-medium">
            Every HTU undergraduate must complete a mandatory industrial attachment before graduating, a requirement governed by Ghana's TVET framework.
          </p>
          <p className="text-2xl leading-relaxed text-muted-fg mt-4">
            The attachment places students in real companies, exposing them to practical skills and professional environments that classroom instruction cannot fully replicate.
          </p>
        </motion.div>

        <motion.div variants={item} className="bg-card border border-primary/20 rounded-2xl p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
          
          <div className="inline-block bg-primary text-primary-fg font-bold px-4 py-2 rounded-md uppercase tracking-wider text-sm shadow-sm w-fit mb-8">
            Theoretical Grounding: Kolb (1984)
          </div>
          
          <p className="text-2xl text-fg mb-6 font-medium relative z-10">
            Kolb's Experiential Learning Theory underpins the requirement. Deep competence develops through a four-stage cycle:
          </p>
          
          <ul className="space-y-4 mb-8 relative z-10">
            {["Concrete experience", "Reflective observation", "Abstract conceptualisation", "Active experimentation"].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-2xl font-semibold text-fg">
                <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm shadow-primary" />
                {text}
              </li>
            ))}
          </ul>
          
          <div className="p-5 bg-accent/50 rounded-xl border border-primary/30 relative z-10">
            <p className="text-xl text-fg font-medium">
              A workplace placement sustains this full cycle over weeks or months. A classroom can only briefly invoke it.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
