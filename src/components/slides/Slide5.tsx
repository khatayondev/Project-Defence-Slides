"use client";

import { motion } from "framer-motion";

import { Settings, FileText, PlugZap } from "lucide-react";

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
        {[
          {
            title: "Systemic Gaps",
            desc: "The existing digital framework is functionally insufficient, acting as a static database rather than an active workflow tool.",
            icon: <Settings size={40} className="text-primary" />
          },
          {
            title: "Manual Dependencies",
            desc: "Key processes like supervisor onboarding and rubric-based grading remain manual, relying on paper logbooks and physical signatures.",
            icon: <FileText size={40} className="text-primary" />
          },
          {
            title: "Operational Silos",
            desc: "Lack of real-time GPS monitoring and microservice integration compromises data integrity and administrative efficiency.",
            icon: <PlugZap size={40} className="text-primary" />
          }
        ].map((problem, i) => (
          <motion.div 
            key={i} 
            variants={item}
            className="bg-card border border-primary/20 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all flex flex-col h-full group"
          >
            <div className="text-4xl mb-6 group-hover:scale-125 transition-transform origin-left">
              {problem.icon}
            </div>
            <h3 className="text-2xl font-black text-fg mb-4">
              {problem.title}
            </h3>
            <p className="text-xl text-muted-fg leading-relaxed font-medium">
              {problem.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item} className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl">
          <p className="text-red-500 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Impact on Students
          </p>
          <ul className="space-y-3">
            {["No structured daily reporting tool", "Paper-based logbooks easily lost", "No visibility into grading criteria"].map((txt, i) => (
              <li key={i} className="text-fg font-bold flex items-center gap-3">
                <span className="text-red-500">✕</span> {txt}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl">
          <p className="text-red-500 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Impact on Admin
          </p>
          <ul className="space-y-3">
            {["Difficult to track student placements", "No real-time attendance monitoring", "Manual reporting for accreditation"].map((txt, i) => (
              <li key={i} className="text-fg font-bold flex items-center gap-3">
                <span className="text-red-500">✕</span> {txt}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
