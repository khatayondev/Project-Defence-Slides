"use client";
import DiagramLayout from "../DiagramLayout";

export default function SlideCloFlow() {
  return (
    <DiagramLayout label="Our Strategy · User Flow" title="CLO / DLO">
      <svg width="100%" viewBox="0 0 980 540" className="diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="var(--arr)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
        <text className="chdr" x="110" y="18" textAnchor="middle" style={{fontSize: 11}}>Dashboard</text>
        <text className="chdr" x="314" y="18" textAnchor="middle" style={{fontSize: 11}}>Structure</text>
        <text className="chdr" x="594" y="18" textAnchor="middle" style={{fontSize: 11}}>Assignment</text>
        <text className="chdr" x="848" y="18" textAnchor="middle" style={{fontSize: 11}}>User Mgmt</text>

        {/* DASHBOARD */}
        <g className="ng"><rect x="60" y="28" width="100" height="30" rx="15"/>
          <text className="nt-title" x="110" y="43" textAnchor="middle" dominantBaseline="central" style={{fontSize: 10}}>START</text>
        </g>
        <line x1="110" y1="58" x2="110" y2="80" className="conn"/>
        <g className="nb"><rect x="46" y="80" width="128" height="34" rx="7"/>
          <text className="nt-sub" x="110" y="97" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Logs In</text>
        </g>
        <line x1="110" y1="114" x2="110" y2="140" className="conn"/>
        <g className="nb"><rect x="30" y="140" width="160" height="34" rx="7"/>
          <text className="nt-sub" x="110" y="157" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Views University Dashboard</text>
        </g>
        <line x1="110" y1="174" x2="110" y2="200" className="conn"/>
        <g className="np"><rect x="30" y="200" width="160" height="34" rx="7"/>
          <text className="nt-sub" x="110" y="217" textAnchor="middle" dominantBaseline="central" fill="var(--purple-800)">Sees Faculty/Dept Breakdown</text>
        </g>
        <line x1="110" y1="234" x2="110" y2="258" className="conn"/>
        <g className="ng"><rect x="60" y="258" width="100" height="30" rx="15"/>
          <text className="nt-sub" x="110" y="273" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">END Dashboard</text>
        </g>

        {/* STRUCTURE */}
        <g className="ng"><rect x="264" y="28" width="100" height="30" rx="15"/>
          <text className="nt-sub" x="314" y="43" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">START Structure</text>
        </g>
        <line x1="314" y1="58" x2="314" y2="80" className="conn"/>
        <g className="nt"><rect x="230" y="80" width="168" height="34" rx="7"/>
          <text className="nt-sub" x="314" y="97" textAnchor="middle" dominantBaseline="central" fill="var(--teal-800)">Manages Faculties/Departments</text>
        </g>
        <line x1="314" y1="114" x2="314" y2="140" className="conn"/>
        <g className="nt"><rect x="230" y="140" width="168" height="34" rx="7"/>
          <text className="nt-sub" x="314" y="157" textAnchor="middle" dominantBaseline="central" fill="var(--teal-800)">Adds/Edits Academic Units</text>
        </g>
        <line x1="314" y1="174" x2="314" y2="200" className="conn"/>
        <g className="ng"><rect x="264" y="200" width="100" height="30" rx="15"/>
          <text className="nt-sub" x="314" y="215" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">END Structure</text>
        </g>

        {/* ASSIGNMENT */}
        <g className="ng"><rect x="544" y="28" width="100" height="30" rx="15"/>
          <text className="nt-sub" x="594" y="43" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">START Assignment</text>
        </g>
        <line x1="594" y1="58" x2="594" y2="80" className="conn"/>
        <g className="nb"><rect x="504" y="80" width="180" height="34" rx="7"/>
          <text className="nt-sub" x="594" y="97" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Filters Students by Faculty/Dept</text>
        </g>
        <line x1="594" y1="114" x2="594" y2="140" className="conn"/>
        <g className="nb"><rect x="504" y="140" width="180" height="34" rx="7"/>
          <text className="nt-sub" x="594" y="157" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Selects Unassigned Student</text>
        </g>
        <line x1="594" y1="174" x2="594" y2="200" className="conn"/>
        <g className="np"><rect x="492" y="200" width="204" height="34" rx="7"/>
          <text className="nt-sub" x="594" y="217" textAnchor="middle" dominantBaseline="central" fill="var(--purple-800)">Views Lecturers from Same Faculty/Dept</text>
        </g>
        <line x1="594" y1="234" x2="594" y2="260" className="conn"/>
        <g className="np"><rect x="504" y="260" width="180" height="34" rx="7"/>
          <text className="nt-sub" x="594" y="277" textAnchor="middle" dominantBaseline="central" fill="var(--purple-800)">Assigns Lecturer</text>
        </g>
        <line x1="594" y1="294" x2="594" y2="320" className="conn"/>
        <g className="nt"><rect x="504" y="320" width="180" height="34" rx="7"/>
          <text className="nt-sub" x="594" y="337" textAnchor="middle" dominantBaseline="central" fill="var(--teal-800)">Notifies Lecturer</text>
        </g>
        <line x1="594" y1="354" x2="594" y2="378" className="conn"/>
        <g className="ng"><rect x="544" y="378" width="100" height="30" rx="15"/>
          <text className="nt-sub" x="594" y="393" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">END</text>
        </g>

        {/* USER MGMT */}
        <g className="ng"><rect x="798" y="28" width="100" height="30" rx="15"/>
          <text className="nt-sub" x="848" y="43" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">START User Mgmt</text>
        </g>
        <line x1="848" y1="58" x2="848" y2="80" className="conn"/>
        <g className="nb"><rect x="764" y="80" width="168" height="34" rx="7"/>
          <text className="nt-sub" x="848" y="97" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Creates/Edits User</text>
        </g>
        <line x1="848" y1="114" x2="848" y2="144" className="conn"/>

        {/* Diamond: Student/Lecturer/HoD? */}
        <polygon points="848,144 890,168 848,192 806,168" className="dmnd"/>
        <text className="nt-sub" x="848" y="168" textAnchor="middle" dominantBaseline="central" fill="var(--text)" style={{fontSize: 9}}>Student/Lecturer/HoD?</text>

        {/* Yes → Sets Faculty/Dept */}
        <path d="M806 168 L748 210" className="conn"/>
        <text className="clbl" x="770" y="184">Yes</text>
        <g className="na"><rect x="696" y="192" width="52" height="34" rx="7"/>
          <text className="nt-sub" x="722" y="209" textAnchor="middle" dominantBaseline="central" fill="var(--amber-800)">Sets Faculty/Dept</text>
        </g>

        {/* No → Skips Faculty/Dept */}
        <path d="M890 168 L942 210" className="conn"/>
        <text className="clbl" x="920" y="184">No</text>
        <g className="nz"><rect x="900" y="192" width="70" height="34" rx="7"/>
          <text className="nt-sub" x="935" y="209" textAnchor="middle" dominantBaseline="central" fill="var(--gray-800)">Skips Faculty/Dept</text>
        </g>

        {/* Both merge → Saves Changes */}
        <path d="M722 226 Q722 268 848 296" className="conn"/>
        <path d="M935 226 Q935 268 848 296" fill="none" stroke="var(--arr)" strokeWidth="1.2"/>
        <line x1="848" y1="296" x2="848" y2="290" className="conn"/>
        <g className="nt"><rect x="764" y="282" width="168" height="34" rx="7"/>
          <text className="nt-sub" x="848" y="299" textAnchor="middle" dominantBaseline="central" fill="var(--teal-800)">Saves Changes</text>
        </g>
        <line x1="848" y1="316" x2="848" y2="340" className="conn"/>
        <g className="ng"><rect x="798" y="340" width="100" height="30" rx="15"/>
          <text className="nt-sub" x="848" y="355" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">END</text>
        </g>
      </svg>
    </DiagramLayout>
  );
}
