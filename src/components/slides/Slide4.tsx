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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full h-full pt-4">
        <motion.div variants={item} className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-primary text-sm uppercase tracking-[0.2em] font-black border-l-4 border-primary pl-4">
              Project Overview
            </p>
            <h3 className="text-4xl font-black text-fg leading-tight">
              Transforming the University Attachment Lifecycle
            </h3>
            <p className="text-2xl text-muted-fg leading-relaxed">
              HTU IAMS is a central hub for <span className="text-primary font-bold">CLOs, DLOs, students, lecturers, and company supervisors</span> to connect and monitor internship progress in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mt-4">
            {[
              { title: "Digital Logbooks", desc: "Daily task reporting & digital approvals" },
              { title: "Presence Verification", desc: "GPS geofencing for on-site monitoring" },
              { title: "Accreditation Tools", desc: "Comprehensive analytics & PDF/CSV exports" }
            ].map((feature, i) => (
              <div key={i} className="bg-card border border-primary/10 p-6 rounded-2xl shadow-sm hover:border-primary/30 transition-colors">
                <p className="font-black text-primary text-lg mb-1">{feature.title}</p>
                <p className="text-muted-fg font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="flex flex-col">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <h4 className="text-2xl font-black text-fg mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-base">★</span>
              Key Stakeholders
            </h4>
            
            <div className="space-y-6">
              {[
                { role: "Students", detail: "Digital logbooks & daily task tracking" },
                { role: "Lecturers", detail: "Internal supervision & academic grading" },
                { role: "Companies", detail: "External oversight & performance feedback" },
                { role: "Administrators", detail: "Placement management & data analytics" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-fg text-xl">{item.role}</p>
                    <p className="text-muted-fg text-lg">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
