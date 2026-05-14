"use client";

import DiagramLayout from "../DiagramLayout";

export default function SlideSupervisorFlow() {
  return (
    <DiagramLayout 
      title="User Flow: Supervisors" 
      subtitle="Academic (Internal) & Company (External) Oversight"
    >
      <div className="w-full h-full max-w-5xl mx-auto">
        <svg viewBox="0 0 980 400" className="w-full h-full">
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M2 2L8 5L2 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>

          {/* Academic Supervisor Column */}
          <text x="245" y="25" textAnchor="middle" className="text-sm font-black fill-primary uppercase tracking-widest">Internal (Lecturer)</text>
          
          <g className="text-primary">
            <rect x="145" y="40" width="200" height="36" rx="7" className="fill-primary/10 stroke-primary stroke-1" />
            <text x="245" y="63" textAnchor="middle" className="text-[10px] font-bold fill-primary uppercase">Logs Into Portal</text>
          </g>
          <line x1="245" y1="76" x2="245" y2="104" className="stroke-muted-fg/30 stroke-1" markerEnd="url(#arr)" />

          <g className="text-primary">
            <rect x="145" y="104" width="200" height="36" rx="7" className="fill-primary/10 stroke-primary stroke-1" />
            <text x="245" y="127" textAnchor="middle" className="text-[10px] font-bold fill-primary uppercase">Filters Students</text>
          </g>
          <line x1="245" y1="140" x2="245" y2="168" className="stroke-muted-fg/30 stroke-1" markerEnd="url(#arr)" />

          <g className="text-purple-500">
            <rect x="145" y="168" width="200" height="36" rx="7" className="fill-purple-500/10 stroke-purple-500 stroke-1" />
            <text x="245" y="191" textAnchor="middle" className="text-[10px] font-bold fill-purple-500 uppercase">Reviews Reports</text>
          </g>
          <line x1="245" y1="204" x2="245" y2="232" className="stroke-muted-fg/30 stroke-1" markerEnd="url(#arr)" />

          <g className="text-purple-500">
            <rect x="145" y="232" width="200" height="36" rx="7" className="fill-purple-500/10 stroke-purple-500 stroke-1" />
            <text x="245" y="255" textAnchor="middle" className="text-[10px] font-bold fill-purple-500 uppercase">Adds Academic Grade</text>
          </g>

          {/* Company Supervisor Column */}
          <text x="735" y="25" textAnchor="middle" className="text-sm font-black fill-primary uppercase tracking-widest">External (Company)</text>
          
          <g className="text-teal-500">
            <rect x="635" y="40" width="200" height="36" rx="7" className="fill-teal-500/10 stroke-teal-500 stroke-1" />
            <text x="735" y="63" textAnchor="middle" className="text-[10px] font-bold fill-teal-500 uppercase leading-none">Receives Email Invite</text>
          </g>
          <line x1="735" y1="76" x2="735" y2="104" className="stroke-muted-fg/30 stroke-1" markerEnd="url(#arr)" />

          <g className="text-teal-500">
            <rect x="635" y="104" width="200" height="36" rx="7" className="fill-teal-500/10 stroke-teal-500 stroke-1" />
            <text x="735" y="127" textAnchor="middle" className="text-[10px] font-bold fill-teal-500 uppercase">Onboards Students</text>
          </g>
          <line x1="735" y1="140" x2="735" y2="168" className="stroke-muted-fg/30 stroke-1" markerEnd="url(#arr)" />

          <g className="text-amber-500">
            <rect x="635" y="168" width="200" height="36" rx="7" className="fill-amber-500/10 stroke-amber-500 stroke-1" />
            <text x="735" y="191" textAnchor="middle" className="text-[10px] font-bold fill-amber-500 uppercase leading-none">Reviews Daily Logs</text>
          </g>
          <line x1="735" y1="204" x2="735" y2="232" className="stroke-muted-fg/30 stroke-1" markerEnd="url(#arr)" />

          <g className="text-green-500">
            <rect x="635" y="232" width="200" height="36" rx="7" className="fill-green-500/10 stroke-green-500 stroke-1" />
            <text x="735" y="255" textAnchor="middle" className="text-[10px] font-bold fill-green-500 uppercase">Approves Logbook</text>
          </g>
        </svg>
      </div>
    </DiagramLayout>
  );
}
