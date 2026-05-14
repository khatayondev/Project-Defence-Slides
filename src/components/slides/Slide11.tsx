"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Slide11() {
  const phases = [
    "Application & company approval",
    "Document generation (automated placement-letter creation)",
    "Academic supervisor assignment",
    "GPS-verified daily attendance",
    "Weekly logbook entries & mid-term evaluation",
    "Multi-source grading & term archive"
  ];

  const roles = [
    "Central Liaison Office", "Departmental Liaison", "Student", 
    "Academic Supervisor", "Industry Supervisor", "Head of Department"
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-start items-start relative overflow-hidden"
    >
      <motion.div variants={item} className="w-full flex items-center gap-6 mb-12 border-b border-primary pb-6 relative z-10">
        <div className="w-16 h-16 bg-primary text-primary-fg rounded-xl flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">
          04
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-fg tracking-tight">Methodology</h2>
          <p className="text-xl text-muted-fg font-medium mt-1">(Continued)</p>
        </div>
      </motion.div>

      <div className="flex gap-16 w-full h-full relative z-10">
        {/* Left Side: Lifecycle */}
        <motion.div variants={item} className="flex flex-col gap-6 w-1/2">
          <div className="inline-block bg-accent text-primary font-bold px-4 py-2 rounded-md uppercase tracking-wider text-sm shadow-sm w-fit mb-4 border border-primary/20">
            System Lifecycle - 6 Phases
          </div>
          
          <div className="flex flex-col relative">
            <div className="absolute left-[11px] top-4 bottom-4 w-1 bg-primary/30 rounded-full" />
            {phases.map((phase, i) => (
              <div key={i} className="flex items-start gap-6 mb-8 last:mb-0 relative z-10 group hover:translate-x-2 transition-transform">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-fg flex items-center justify-center text-xs font-bold mt-1 shadow-md shadow-primary/30 shrink-0 group-hover:scale-125 transition-transform">
                  {i + 1}
                </div>
                <p className="text-2xl font-medium text-fg">{phase}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Roles and Image */}
        <motion.div variants={item} className="w-1/2 flex flex-col gap-8">
          <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-sm">
            <div className="inline-block bg-primary text-primary-fg font-bold px-4 py-2 rounded-md uppercase tracking-wider text-sm shadow-sm w-fit mb-6">
              Six User Roles
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role, i) => (
                <div key={i} className="bg-accent/50 border border-primary/20 p-4 rounded-xl flex items-center justify-center text-center shadow-sm hover:bg-primary hover:text-primary-fg transition-colors">
                  <p className="text-lg font-bold">{role}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full relative rounded-2xl overflow-hidden border border-primary/20 shadow-xl shadow-primary/10">
             <Image 
                src="/student_logbook_mobile.png" 
                alt="Student Logbook App" 
                fill 
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg tracking-wider uppercase text-primary-fg">Mobile App</p>
                <p className="text-2xl font-black">Student Logbook View</p>
              </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
