"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

interface Props {
  label: string;
  title: string;
  children: ReactNode;
}

export default function DiagramLayout({ label, title, children }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-start items-start"
    >
      <motion.div variants={item} className="w-full mb-2">
        <p style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text2)", marginBottom: 4 }}>{label}</p>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--fg)", marginBottom: 12 }}>{title}</h2>
      </motion.div>
      <motion.div variants={item} className="diagram-card w-full flex-1 overflow-hidden flex items-center justify-center relative" style={{ minHeight: 0 }}>
        <div className="w-full h-full flex items-center justify-center [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
