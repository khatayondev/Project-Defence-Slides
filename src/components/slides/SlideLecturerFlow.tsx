"use client";
import DiagramLayout from "../DiagramLayout";

export default function SlideLecturerFlow() {
  return (
    <DiagramLayout label="Our Strategy · User Flow" title="Lecturers (Internal Supervisors)">
      <svg width="100%" viewBox="0 0 980 520" className="diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="var(--arr)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
        <text className="chdr" x="245" y="18" textAnchor="middle">Dashboard</text>
        <text className="chdr" x="735" y="18" textAnchor="middle">Feedback Flow</text>

        {/* DASHBOARD */}
        <g className="ng"><rect x="183" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="245" y="44" textAnchor="middle" dominantBaseline="central">START</text>
        </g>
        <line x1="245" y1="60" x2="245" y2="84" className="conn"/>
        <g className="nb"><rect x="165" y="84" width="160" height="36" rx="7"/>
          <text className="nt-title" x="245" y="102" textAnchor="middle" dominantBaseline="central">Logs In</text>
        </g>
        <line x1="245" y1="120" x2="245" y2="148" className="conn"/>
        <g className="nb"><rect x="141" y="148" width="208" height="40" rx="7"/>
          <text className="nt-sub" x="245" y="163" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Views Dashboard with</text>
          <text className="nt-sub" x="245" y="179" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Faculty/Dept Filters</text>
        </g>
        <line x1="245" y1="188" x2="245" y2="216" className="conn"/>
        <g className="nb"><rect x="165" y="216" width="160" height="36" rx="7"/>
          <text className="nt-title" x="245" y="234" textAnchor="middle" dominantBaseline="central">Selects Student</text>
        </g>
        <line x1="245" y1="252" x2="245" y2="280" className="conn"/>
        <g className="nb"><rect x="141" y="280" width="208" height="40" rx="7"/>
          <text className="nt-sub" x="245" y="295" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Views Student Profile +</text>
          <text className="nt-sub" x="245" y="311" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Faculty/Dept</text>
        </g>
        <line x1="245" y1="320" x2="245" y2="346" className="conn"/>
        <g className="ng"><rect x="183" y="346" width="124" height="32" rx="16"/>
          <text className="nt-title" x="245" y="362" textAnchor="middle" dominantBaseline="central">END Dashboard</text>
        </g>

        {/* FEEDBACK FLOW */}
        <g className="ng"><rect x="673" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="735" y="44" textAnchor="middle" dominantBaseline="central">START Feedback</text>
        </g>
        <line x1="735" y1="60" x2="735" y2="84" className="conn"/>
        <g className="np"><rect x="655" y="84" width="160" height="36" rx="7"/>
          <text className="nt-title" x="735" y="102" textAnchor="middle" dominantBaseline="central">Navigates to Reports</text>
        </g>
        <line x1="735" y1="120" x2="735" y2="148" className="conn"/>
        <g className="np"><rect x="655" y="148" width="160" height="36" rx="7"/>
          <text className="nt-title" x="735" y="166" textAnchor="middle" dominantBaseline="central">Selects Daily Report</text>
        </g>
        <line x1="735" y1="184" x2="735" y2="212" className="conn"/>
        <g className="np"><rect x="631" y="212" width="208" height="40" rx="7"/>
          <text className="nt-sub" x="735" y="227" textAnchor="middle" dominantBaseline="central" fill="var(--purple-800)">Reviews Supervisor</text>
          <text className="nt-sub" x="735" y="243" textAnchor="middle" dominantBaseline="central" fill="var(--purple-800)">Feedback</text>
        </g>
        <line x1="735" y1="252" x2="735" y2="280" className="conn"/>
        <g className="np"><rect x="631" y="280" width="208" height="36" rx="7"/>
          <text className="nt-title" x="735" y="298" textAnchor="middle" dominantBaseline="central">Adds Lecturer Comments</text>
        </g>
        <line x1="735" y1="316" x2="735" y2="344" className="conn"/>
        <g className="nt"><rect x="655" y="344" width="160" height="36" rx="7"/>
          <text className="nt-title" x="735" y="362" textAnchor="middle" dominantBaseline="central">Saves Feedback</text>
        </g>
        <line x1="735" y1="380" x2="735" y2="408" className="conn"/>
        <g className="nt"><rect x="655" y="408" width="160" height="36" rx="7"/>
          <text className="nt-title" x="735" y="426" textAnchor="middle" dominantBaseline="central">Notifies Student</text>
        </g>
        <line x1="735" y1="444" x2="735" y2="468" className="conn"/>
        <g className="ng"><rect x="673" y="468" width="124" height="32" rx="16"/>
          <text className="nt-title" x="735" y="484" textAnchor="middle" dominantBaseline="central">END</text>
        </g>
      </svg>
    </DiagramLayout>
  );
}
