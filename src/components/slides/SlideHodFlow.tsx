"use client";
import DiagramLayout from "../DiagramLayout";

export default function SlideHodFlow() {
  return (
    <DiagramLayout label="Our Strategy · User Flow" title="Head of Department">
      <svg width="100%" viewBox="0 0 980 540" className="diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="var(--arr)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
        <text className="chdr" x="164" y="18" textAnchor="middle">Dashboard</text>
        <text className="chdr" x="490" y="18" textAnchor="middle">Review</text>
        <text className="chdr" x="816" y="18" textAnchor="middle">Reports &amp; Analytics</text>

        {/* DASHBOARD */}
        <g className="ng"><rect x="102" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="164" y="44" textAnchor="middle" dominantBaseline="central">START</text>
        </g>
        <line x1="164" y1="60" x2="164" y2="84" className="conn"/>
        <g className="nb"><rect x="88" y="84" width="152" height="36" rx="7"/>
          <text className="nt-title" x="164" y="102" textAnchor="middle" dominantBaseline="central">Logs In</text>
        </g>
        <line x1="164" y1="120" x2="164" y2="148" className="conn"/>
        <g className="nb"><rect x="64" y="148" width="200" height="36" rx="7"/>
          <text className="nt-title" x="164" y="166" textAnchor="middle" dominantBaseline="central">Views Department Dashboard</text>
        </g>
        <line x1="164" y1="184" x2="164" y2="212" className="conn"/>
        <g className="np"><rect x="64" y="212" width="200" height="36" rx="7"/>
          <text className="nt-title" x="164" y="230" textAnchor="middle" dominantBaseline="central">Sees Faculty/Dept Statistics</text>
        </g>
        <line x1="164" y1="248" x2="164" y2="276" className="conn"/>
        <g className="ng"><rect x="102" y="276" width="124" height="32" rx="16"/>
          <text className="nt-title" x="164" y="292" textAnchor="middle" dominantBaseline="central">END Dashboard</text>
        </g>

        {/* REVIEW */}
        <g className="ng"><rect x="428" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="490" y="44" textAnchor="middle" dominantBaseline="central">START Review</text>
        </g>
        <line x1="490" y1="60" x2="490" y2="84" className="conn"/>
        <g className="nb"><rect x="374" y="84" width="232" height="36" rx="7"/>
          <text className="nt-title" x="490" y="102" textAnchor="middle" dominantBaseline="central">Browses Department Students</text>
        </g>
        <line x1="490" y1="120" x2="490" y2="148" className="conn"/>
        <g className="nb"><rect x="374" y="148" width="232" height="36" rx="7"/>
          <text className="nt-title" x="490" y="166" textAnchor="middle" dominantBaseline="central">Selects Student</text>
        </g>
        <line x1="490" y1="184" x2="490" y2="212" className="conn"/>
        <g className="np"><rect x="350" y="212" width="280" height="36" rx="7"/>
          <text className="nt-title" x="490" y="230" textAnchor="middle" dominantBaseline="central">Views Reports + Faculty/Dept Context</text>
        </g>
        <line x1="490" y1="248" x2="490" y2="276" className="conn"/>
        <g className="ng"><rect x="428" y="276" width="124" height="32" rx="16"/>
          <text className="nt-title" x="490" y="292" textAnchor="middle" dominantBaseline="central">END Review</text>
        </g>

        {/* REPORTS */}
        <g className="ng"><rect x="754" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="816" y="44" textAnchor="middle" dominantBaseline="central">START Reports</text>
        </g>
        <line x1="816" y1="60" x2="816" y2="84" className="conn"/>
        <g className="nb"><rect x="714" y="84" width="204" height="36" rx="7"/>
          <text className="nt-title" x="816" y="102" textAnchor="middle" dominantBaseline="central">Navigates to Analytics</text>
        </g>
        <line x1="816" y1="120" x2="816" y2="148" className="conn"/>
        <g className="nb"><rect x="714" y="148" width="204" height="36" rx="7"/>
          <text className="nt-title" x="816" y="166" textAnchor="middle" dominantBaseline="central">Selects Report Type</text>
        </g>
        <line x1="816" y1="184" x2="816" y2="212" className="conn"/>
        <g className="nb"><rect x="714" y="212" width="204" height="36" rx="7"/>
          <text className="nt-title" x="816" y="230" textAnchor="middle" dominantBaseline="central">Filters by Department</text>
        </g>
        <line x1="816" y1="248" x2="816" y2="276" className="conn"/>
        <g className="na"><rect x="714" y="276" width="204" height="36" rx="7"/>
          <text className="nt-title" x="816" y="294" textAnchor="middle" dominantBaseline="central">Generates Report</text>
        </g>
        <line x1="816" y1="312" x2="816" y2="340" className="conn"/>
        <g className="nt"><rect x="714" y="340" width="204" height="36" rx="7"/>
          <text className="nt-title" x="816" y="358" textAnchor="middle" dominantBaseline="central">Exports CSV / PDF</text>
        </g>
        <line x1="816" y1="376" x2="816" y2="404" className="conn"/>
        <g className="ng"><rect x="754" y="404" width="124" height="32" rx="16"/>
          <text className="nt-title" x="816" y="420" textAnchor="middle" dominantBaseline="central">END</text>
        </g>
      </svg>
    </DiagramLayout>
  );
}
