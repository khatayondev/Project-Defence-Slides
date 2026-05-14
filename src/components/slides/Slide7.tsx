"use client";

import { motion } from "framer-motion";

import { Smartphone, MapPin, Mail, BarChart4 } from "lucide-react";

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
          04
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-fg tracking-tight">Core System Features</h2>
          <p className="text-xl text-muted-fg font-medium mt-1">Key functional modules for all stakeholders</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full pt-4">
        {[
          {
            title: "PWA Digital Logbook",
            desc: "A mobile-ready interface for students to record daily tasks, upload photos, and track learning outcomes offline or online.",
            icon: <Smartphone size={40} className="text-primary" />
          },
          {
            title: "GPS-Verified Presence",
            desc: "Geofencing technology ensures students are at their assigned workplace during logbook entries, adding an layer of verification.",
            icon: <MapPin size={40} className="text-primary" />
          },
          {
            title: "Automated Placements",
            desc: "One-click generation of institutional placement letters and automated onboarding for company supervisors.",
            icon: <Mail size={40} className="text-primary" />
          },
          {
            title: "Rubric-Based Grading",
            desc: "A standardized grading engine that aggregates feedback from internal and external supervisors for final assessment.",
            icon: <BarChart4 size={40} className="text-primary" />
          }
        ].map((feature, i) => (
          <motion.div key={i} variants={item} className="flex gap-6 p-8 bg-card border border-primary/20 rounded-2xl shadow-sm hover:border-primary/50 transition-all hover:bg-primary/5">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black text-fg">{feature.title}</h3>
              <p className="text-xl text-muted-fg leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
