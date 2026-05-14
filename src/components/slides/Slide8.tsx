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

export default function Slide8() {
  const objectives = [
    {
      num: "01",
      title: "Investigate",
      desc: "Investigate the current paper-based attachment process at HTU and identify the workflow gaps that a digital system should address."
    },
    {
      num: "02",
      title: "Design architecture",
      desc: "Design a role-based system architecture supporting six roles - Central Liaison Office, Departmental Liaisons, Students, Academic Supervisors, Industry Supervisors, and Heads of Department - with appropriate permissions for each."
    },
    {
      num: "03",
      title: "Implement core features",
      desc: "Implement a digital logbook with GPS-verified daily attendance, automated placement-letter generation, and a structured multi-source grading engine."
    }
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-start items-start"
    >
      <motion.div variants={item} className="w-full flex items-center gap-6 mb-8 border-b border-primary pb-6">
        <div className="w-16 h-16 bg-primary text-primary-fg rounded-xl flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">
          03
        </div>
        <h2 className="text-4xl font-extrabold text-fg tracking-tight">Aim & Objectives</h2>
      </motion.div>

      <motion.div variants={item} className="w-full bg-accent/30 border-l-4 border-primary p-6 rounded-r-xl mb-12">
        <span className="inline-block px-3 py-1 bg-primary text-primary-fg rounded text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
          Project Aim
        </span>
        <p className="text-3xl font-bold leading-relaxed text-fg">
          To design, develop, and evaluate a web-based Industrial Attachment Management System (IAMS) for Ho Technical University that digitises the full attachment lifecycle and supports the six categories of users involved in it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {[
          {
            num: "01",
            title: "Digitize Process",
            desc: "Eliminate paper logbooks and physical signatures by moving all daily reports and approvals to a single digital platform."
          },
          {
            num: "02",
            title: "Centralize Data",
            desc: "Consolidate student, company, and supervisor data for easy access and reporting across all academic units."
          },
          {
            num: "03",
            title: "Real-Time Monitoring",
            desc: "Provide real-time notifications and GPS-based presence verification for students and supervisors."
          },
          {
            num: "04",
            title: "Analytics & Exports",
            desc: "Generate comprehensive analytics and exportable reports (PDF/CSV) for institutional use and accreditation."
          }
        ].map((obj, i) => (
          <motion.div key={i} variants={item} className="flex flex-col bg-card border border-primary/20 rounded-xl p-8 shadow-sm hover:border-primary transition-all hover:-translate-y-2 group h-full">
            <div className="text-primary font-black text-5xl mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">{obj.num}</div>
            <h3 className="text-xl font-bold text-fg mb-3">{obj.title}</h3>
            <p className="text-lg text-muted-fg leading-relaxed">{obj.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
