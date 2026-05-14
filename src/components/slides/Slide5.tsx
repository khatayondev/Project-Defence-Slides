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

export default function Slide5() {
  const literature = [
    {
      title: "Employment outcomes",
      author: "Ababio et al. (2024)",
      text: "Students who completed structured attachment had measurably higher employment rates within one year of graduation - from a Ghana-wide TVET tracer study.",
      highlight: true
    },
    {
      title: "Practical skills",
      author: "Aboagye & Puoza (2021)",
      text: "Quality of practical exposure at Sunyani Technical University was more predictive of graduate employment than academic grade.",
      highlight: false
    },
    {
      title: "Soft competencies",
      author: "Adegbite & Hoole (2024)",
      text: "Work-integrated learning has a statistically significant positive effect on communication, teamwork, and time management across Nigerian universities.",
      highlight: false
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
          01
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-fg tracking-tight">Introduction</h2>
          <p className="text-xl text-muted-fg font-medium mt-1">Evidence from the Literature</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-full pt-4">
        {literature.map((item, i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }} 
            className="flex h-full group"
          >
            <div className={`flex flex-col flex-1 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              item.highlight 
                ? 'bg-primary text-primary-fg shadow-lg shadow-primary/30' 
                : 'bg-card border border-primary/20 hover:border-primary/50'
            }`}>
              
              {item.highlight && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full" />
              )}
              
              <h3 className={`text-3xl font-bold mb-6 ${item.highlight ? 'text-white' : 'text-fg'}`}>
                {item.title}
              </h3>
              
              <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${item.highlight ? 'text-primary-fg/80' : 'text-primary'}`}>
                {item.author}
              </p>
              <p className={`text-2xl leading-relaxed font-medium ${item.highlight ? 'text-white' : 'text-muted-fg'}`}>
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
