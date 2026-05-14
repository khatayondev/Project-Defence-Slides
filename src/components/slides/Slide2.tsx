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

export default function Slide2() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="slide-container justify-start items-start"
    >
      <motion.div variants={item} className="w-full flex items-center gap-6 mb-12 border-b border-primary pb-6">
        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 relative overflow-hidden">
          <Image src="/htu-logo.png" alt="HTU Logo" fill className="object-contain p-1" />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-fg tracking-tight">Project Defense Team</h2>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16 w-full h-full items-center">
        
        {/* Left Side: Names */}
        <motion.div variants={item} className="flex-1 flex flex-col gap-10">
          <div>
            <p className="text-primary text-lg uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Academic Supervisor
            </p>
            <p className="font-bold text-fg text-3xl">[Supervisor Name]</p>
          </div>
          
          <div>
            <p className="text-primary text-lg uppercase tracking-wider mb-6 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Presented By
            </p>
            <div className="grid grid-cols-1 gap-y-4 text-xl">
              <p className="font-bold text-fg flex justify-between items-center bg-card p-3 rounded-lg border border-primary/10 shadow-sm hover:scale-[1.02] transition-transform">
                <span>Daniel Gbegbeawu</span> <span className="text-primary font-black">0322080457</span>
              </p>
              <p className="font-bold text-fg flex justify-between items-center bg-card p-3 rounded-lg border border-primary/10 shadow-sm hover:scale-[1.02] transition-transform">
                <span>Gohoho Shanita Eyram</span> <span className="text-primary font-black">0322080294</span>
              </p>
              <p className="font-bold text-fg flex justify-between items-center bg-card p-3 rounded-lg border border-primary/10 shadow-sm hover:scale-[1.02] transition-transform">
                <span>Gabriel Demordzie Asampana</span> <span className="text-primary font-black">0322080295</span>
              </p>
              <p className="font-bold text-fg flex justify-between items-center bg-card p-3 rounded-lg border border-primary/10 shadow-sm hover:scale-[1.02] transition-transform">
                <span>Emmanuel Adedoyin Ajao</span> <span className="text-primary font-black">0322080236</span>
              </p>
              <p className="font-bold text-fg flex justify-between items-center bg-card p-3 rounded-lg border border-primary/10 shadow-sm hover:scale-[1.02] transition-transform">
                <span>Edzia Emmanuel K. Korshie</span> <span className="text-primary font-black">0322080275</span>
              </p>
              <p className="font-bold text-fg flex justify-between items-center bg-card p-3 rounded-lg border border-primary/10 shadow-sm hover:scale-[1.02] transition-transform">
                <span>Sadick Issaka</span> <span className="text-primary font-black">0322080383</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div variants={item} className="flex-1 w-full h-[600px] relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
          <Image 
            src="/clo_dashboard_mockup.png" 
            alt="CLO Dashboard Mockup" 
            fill 
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-bold text-lg tracking-wider uppercase text-primary-fg">Central Liaison Office</p>
            <p className="text-3xl font-black">Live Dashboard view</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
