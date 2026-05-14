"use client";
import DiagramLayout from "../DiagramLayout";

export default function SlideERD() {
  return (
    <DiagramLayout label="Our Strategy" title="Entity Relational Diagram">
      <svg width="100%" viewBox="0 0 980 640" className="diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="var(--arr)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>

        {/* ROW 1: daily_reports (top center) */}
        <g className="nb"><rect x="390" y="14" width="164" height="36" rx="7"/>
          <text className="nt-title" x="472" y="32" textAnchor="middle" dominantBaseline="central">daily_reports</text>
        </g>

        {/* daily_reports → report_attachments (contains) */}
        <path d="M430 50 Q290 80 118 116" className="conn"/>
        <text className="clbl" x="256" y="74" textAnchor="middle">contains</text>

        {/* daily_reports → feedbacks */}
        <path d="M454 50 Q384 80 278 116" className="conn"/>

        {/* daily_reports → location_check_ins */}
        <path d="M510 50 Q596 80 638 116" className="conn"/>

        {/* daily_reports → daily_tasks (references) */}
        <path d="M538 50 Q710 78 822 116" className="conn"/>
        <text className="clbl" x="706" y="74" textAnchor="middle">references</text>

        {/* ROW 2 */}
        <g className="nz"><rect x="16"  y="116" width="164" height="36" rx="7"/>
          <text className="nt-title" x="98"  y="134" textAnchor="middle" dominantBaseline="central">report_attachments</text>
        </g>
        <g className="nz"><rect x="196" y="116" width="128" height="36" rx="7"/>
          <text className="nt-title" x="260" y="134" textAnchor="middle" dominantBaseline="central">feedbacks</text>
        </g>
        <g className="nz"><rect x="554" y="116" width="168" height="36" rx="7"/>
          <text className="nt-title" x="638" y="134" textAnchor="middle" dominantBaseline="central">location_check_ins</text>
        </g>
        <g className="nz"><rect x="738" y="116" width="136" height="36" rx="7"/>
          <text className="nt-title" x="806" y="134" textAnchor="middle" dominantBaseline="central">daily_tasks</text>
        </g>

        {/* ROW 2 → ROW 3 connections */}
        {/* report_attachments → users (belongs_to) */}
        <path d="M98 152 L140 252" className="conn"/>
        <text className="clbl" x="93" y="202" textAnchor="end">belongs_to</text>

        {/* feedbacks → users (sender) */}
        <path d="M236 152 L185 252" className="conn"/>
        <text className="clbl" x="196" y="198">sender</text>

        {/* feedbacks → faculties (recipient) */}
        <path d="M284 152 Q362 198 432 252" className="conn"/>
        <text className="clbl" x="372" y="198" textAnchor="middle">recipient</text>

        {/* feedbacks → internships (optional) */}
        <path d="M296 152 Q502 194 690 252" className="conn"/>
        <text className="clbl" x="502" y="188" textAnchor="middle">optional</text>

        {/* location_check_ins → internships (registered_for) */}
        <path d="M638 152 L694 252" className="conn"/>
        <text className="clbl" x="702" y="202" textAnchor="start">registered_for</text>

        {/* daily_tasks → internships (belongs_to) */}
        <path d="M806 152 L742 252" className="conn"/>
        <text className="clbl" x="810" y="202" textAnchor="start">belongs_to</text>

        {/* ROW 3 */}
        <g className="nb"><rect x="76"  y="252" width="128" height="36" rx="7"/>
          <text className="nt-title" x="140" y="270" textAnchor="middle" dominantBaseline="central">users</text>
        </g>
        <g className="np"><rect x="360" y="252" width="144" height="36" rx="7"/>
          <text className="nt-title" x="432" y="270" textAnchor="middle" dominantBaseline="central">faculties</text>
        </g>
        <g className="nt"><rect x="616" y="252" width="152" height="36" rx="7"/>
          <text className="nt-title" x="692" y="270" textAnchor="middle" dominantBaseline="central">internships</text>
        </g>

        {/* ROW 3 → ROW 4 connections */}
        {/* users → departments (uses) */}
        <path d="M178 276 Q282 330 318 370" className="conn"/>
        <text className="clbl" x="232" y="324" textAnchor="middle">uses</text>

        {/* users → students (has) */}
        <path d="M100 288 Q80 388 152 446" className="conn"/>
        <text className="clbl" x="62" y="374" textAnchor="end">has</text>

        {/* users → lecturers (supervises) */}
        <path d="M162 288 Q212 384 376 446" className="conn"/>
        <text className="clbl" x="222" y="374" textAnchor="middle">supervises</text>

        {/* faculties → departments (consists_of) */}
        <path d="M416 288 L390 370" className="conn"/>
        <text className="clbl" x="374" y="334" textAnchor="end">consists_of</text>

        {/* faculties → departments (assigns) */}
        <path d="M452 288 L432 370" className="conn"/>
        <text className="clbl" x="468" y="334" textAnchor="start">assigns</text>

        {/* internships → companies (involves) */}
        <path d="M692 288 L634 370" className="conn"/>
        <text className="clbl" x="638" y="334" textAnchor="end">involves</text>

        {/* internships → students */}
        <path d="M634 288 Q420 394 228 446" className="conn"/>

        {/* internships → lecturers (supervises) */}
        <path d="M660 288 Q572 384 484 446" className="conn"/>
        <text className="clbl" x="578" y="380" textAnchor="middle">supervises</text>

        {/* internships → company_supervisors (mentors) */}
        <path d="M744 288 Q792 384 780 446" className="conn"/>
        <text className="clbl" x="800" y="368" textAnchor="start">mentors</text>

        {/* ROW 4 */}
        <g className="na"><rect x="306" y="370" width="148" height="36" rx="7"/>
          <text className="nt-title" x="380" y="388" textAnchor="middle" dominantBaseline="central">departments</text>
        </g>
        <g className="nc"><rect x="560" y="370" width="148" height="36" rx="7"/>
          <text className="nt-title" x="634" y="388" textAnchor="middle" dominantBaseline="central">companies</text>
        </g>

        {/* ROW 4 → ROW 5 connections */}
        {/* departments → students (includes) */}
        <path d="M344 406 L232 446" className="conn"/>
        <text className="clbl" x="272" y="430" textAnchor="middle">includes</text>

        {/* departments → lecturers (includes) */}
        <path d="M412 406 L450 446" className="conn"/>
        <text className="clbl" x="448" y="430" textAnchor="start">includes</text>

        {/* companies → company_supervisors (employs) */}
        <path d="M636 406 L720 446" className="conn"/>
        <text className="clbl" x="702" y="430" textAnchor="start">employs</text>

        {/* ROW 5 */}
        <g className="nb"><rect x="138" y="446" width="128" height="36" rx="7"/>
          <text className="nt-title" x="202" y="464" textAnchor="middle" dominantBaseline="central">students</text>
        </g>
        <g className="np"><rect x="374" y="446" width="128" height="36" rx="7"/>
          <text className="nt-title" x="438" y="464" textAnchor="middle" dominantBaseline="central">lecturers</text>
        </g>
        <g className="nt"><rect x="616" y="446" width="192" height="36" rx="7"/>
          <text className="nt-title" x="712" y="464" textAnchor="middle" dominantBaseline="central">company_supervisors</text>
        </g>
      </svg>
    </DiagramLayout>
  );
}
