"use client";
import DiagramLayout from "../DiagramLayout";

export default function SlideCompanyFlow() {
  return (
    <DiagramLayout label="Our Strategy · User Flow" title="Company Supervisor">
      <svg width="100%" viewBox="0 0 980 580" className="diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="var(--arr)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
        <text className="chdr" x="245" y="18" textAnchor="middle">Onboarding</text>
        <text className="chdr" x="735" y="18" textAnchor="middle">Report Review</text>

        {/* ONBOARDING */}
        <g className="ng"><rect x="183" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="245" y="44" textAnchor="middle" dominantBaseline="central">START Onboarding</text>
        </g>
        <line x1="245" y1="60" x2="245" y2="84" className="conn"/>
        <g className="nb"><rect x="149" y="84" width="192" height="36" rx="7"/>
          <text className="nt-title" x="245" y="102" textAnchor="middle" dominantBaseline="central">Receives Invitation Email</text>
        </g>
        <line x1="245" y1="120" x2="245" y2="148" className="conn"/>
        <g className="nb"><rect x="149" y="148" width="192" height="36" rx="7"/>
          <text className="nt-title" x="245" y="166" textAnchor="middle" dominantBaseline="central">Clicks Registration Link</text>
        </g>
        <line x1="245" y1="184" x2="245" y2="212" className="conn"/>
        <g className="nb"><rect x="133" y="212" width="224" height="36" rx="7"/>
          <text className="nt-title" x="245" y="230" textAnchor="middle" dominantBaseline="central">Sets Password &amp; Completes Profile</text>
        </g>
        <line x1="245" y1="248" x2="245" y2="276" className="conn"/>
        <g className="nt"><rect x="149" y="276" width="192" height="36" rx="7"/>
          <text className="nt-title" x="245" y="294" textAnchor="middle" dominantBaseline="central">Linked to Students</text>
        </g>
        <line x1="245" y1="312" x2="245" y2="340" className="conn"/>
        <g className="nt"><rect x="149" y="340" width="192" height="36" rx="7"/>
          <text className="nt-title" x="245" y="358" textAnchor="middle" dominantBaseline="central">Views Dashboard</text>
        </g>
        <line x1="245" y1="376" x2="245" y2="404" className="conn"/>
        <g className="ng"><rect x="183" y="404" width="124" height="32" rx="16"/>
          <text className="nt-title" x="245" y="420" textAnchor="middle" dominantBaseline="central">END Onboarding</text>
        </g>

        {/* REVIEW */}
        <g className="ng"><rect x="673" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="735" y="44" textAnchor="middle" dominantBaseline="central">START Review</text>
        </g>
        <line x1="735" y1="60" x2="735" y2="84" className="conn"/>
        <g className="nb"><rect x="631" y="84" width="208" height="36" rx="7"/>
          <text className="nt-title" x="735" y="102" textAnchor="middle" dominantBaseline="central">Receives Report Notification</text>
        </g>
        <line x1="735" y1="120" x2="735" y2="148" className="conn"/>
        <g className="nb"><rect x="631" y="148" width="208" height="36" rx="7"/>
          <text className="nt-title" x="735" y="166" textAnchor="middle" dominantBaseline="central">Logs Into Web Portal</text>
        </g>
        <line x1="735" y1="184" x2="735" y2="212" className="conn"/>
        <g className="nb"><rect x="631" y="212" width="208" height="36" rx="7"/>
          <text className="nt-title" x="735" y="230" textAnchor="middle" dominantBaseline="central">Views Pending Reports</text>
        </g>
        <line x1="735" y1="248" x2="735" y2="276" className="conn"/>
        <g className="nb"><rect x="631" y="276" width="208" height="36" rx="7"/>
          <text className="nt-title" x="735" y="294" textAnchor="middle" dominantBaseline="central">Reviews Report Context</text>
        </g>
        <line x1="735" y1="312" x2="735" y2="342" className="conn"/>

        {/* Report Satisfactory? */}
        <polygon points="735,342 777,366 735,390 693,366" className="dmnd"/>
        <text className="nt-sub" x="735" y="366" textAnchor="middle" dominantBaseline="central" fill="var(--text)">Report Satisfactory?</text>

        {/* No branch */}
        <path d="M693 366 L624 408" className="conn"/>
        <text className="clbl" x="652" y="382">No</text>
        <g className="nr"><rect x="534" y="390" width="90" height="36" rx="7"/>
          <text className="nt-sub" x="579" y="408" textAnchor="middle" dominantBaseline="central" fill="var(--red-800)">Rejects + Adds Feedback</text>
        </g>
        <line x1="579" y1="426" x2="579" y2="454" className="conn"/>
        <g className="na"><rect x="534" y="454" width="90" height="36" rx="7"/>
          <text className="nt-sub" x="579" y="472" textAnchor="middle" dominantBaseline="central" fill="var(--amber-800)">Notifies Student</text>
        </g>

        {/* Yes branch */}
        <path d="M777 366 L848 408" className="conn"/>
        <text className="clbl" x="818" y="382">Yes</text>
        <g className="ng"><rect x="848" y="390" width="110" height="36" rx="7"/>
          <text className="nt-sub" x="903" y="408" textAnchor="middle" dominantBaseline="central" fill="var(--green-800)">Approves + Comments</text>
        </g>
        <line x1="903" y1="426" x2="903" y2="454" className="conn"/>
        <g className="nt"><rect x="848" y="454" width="110" height="36" rx="7"/>
          <text className="nt-sub" x="903" y="472" textAnchor="middle" dominantBaseline="central" fill="var(--teal-800)">Notifies Student &amp; Lecturer</text>
        </g>

        {/* Both merge to END */}
        <path d="M579 490 Q579 526 735 526" className="conn"/>
        <path d="M903 490 Q903 526 735 526" fill="none" stroke="var(--arr)" strokeWidth="1.2"/>
        <line x1="735" y1="526" x2="735" y2="518" className="conn"/>
        <g className="ng"><rect x="673" y="510" width="124" height="32" rx="16"/>
          <text className="nt-title" x="735" y="526" textAnchor="middle" dominantBaseline="central">END</text>
        </g>
      </svg>
    </DiagramLayout>
  );
}
