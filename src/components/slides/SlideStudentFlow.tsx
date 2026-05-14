"use client";
import DiagramLayout from "../DiagramLayout";

export default function SlideStudentFlow() {
  return (
    <DiagramLayout label="Our Strategy · User Flow" title="Students">
      <svg width="100%" viewBox="0 0 980 700" className="diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="var(--arr)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
        <text className="chdr" x="164" y="18" textAnchor="middle">Onboarding</text>
        <text className="chdr" x="490" y="18" textAnchor="middle">Daily Report</text>
        <text className="chdr" x="816" y="18" textAnchor="middle">Check-In (GPS)</text>

        {/* ONBOARDING */}
        <g className="ng"><rect x="102" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="164" y="44" textAnchor="middle" dominantBaseline="central">START</text>
        </g>
        <line x1="164" y1="60" x2="164" y2="84" className="conn"/>
        <g className="nb"><rect x="86" y="84" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="102" textAnchor="middle" dominantBaseline="central">Enter School ID &amp; Email</text>
        </g>
        <line x1="164" y1="120" x2="164" y2="148" className="conn"/>

        {/* Decision: School ID Valid? */}
        <polygon points="164,148 206,172 164,196 122,172" className="dmnd"/>
        <text className="nt-sub" x="164" y="172" textAnchor="middle" dominantBaseline="central" fill="var(--text)">School ID Valid?</text>

        {/* No → Invalid ID Error */}
        <path d="M122 172 L60 172" className="conn"/>
        <text className="clbl" x="88" y="166">No</text>
        <g className="nr"><rect x="14" y="154" width="46" height="36" rx="7"/>
          <text className="nt-sub" x="37" y="172" textAnchor="middle" dominantBaseline="central" fill="var(--red-800)">Invalid ID Error</text>
        </g>
        <line x1="37" y1="190" x2="37" y2="214" className="conn"/>
        <g className="nz"><rect x="14" y="214" width="46" height="26" rx="13"/>
          <text className="nt-sub" x="37" y="227" textAnchor="middle" dominantBaseline="central" fill="var(--gray-800)">END</text>
        </g>

        {/* Yes path */}
        <line x1="164" y1="196" x2="164" y2="222" className="conn"/>
        <text className="clbl" x="176" y="214">Yes</text>
        <g className="nb"><rect x="86" y="222" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="240" textAnchor="middle" dominantBaseline="central">Send Verification Email</text>
        </g>
        <line x1="164" y1="258" x2="164" y2="282" className="conn"/>
        <g className="nb"><rect x="86" y="282" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="300" textAnchor="middle" dominantBaseline="central">Student Clicks Link</text>
        </g>
        <line x1="164" y1="318" x2="164" y2="342" className="conn"/>
        <g className="nb"><rect x="86" y="342" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="360" textAnchor="middle" dominantBaseline="central">Set Password &amp; Profile</text>
        </g>
        <line x1="164" y1="378" x2="164" y2="402" className="conn"/>
        <g className="na"><rect x="86" y="402" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="420" textAnchor="middle" dominantBaseline="central">Auto-Populate Faculty/Dept</text>
        </g>
        <line x1="164" y1="438" x2="164" y2="462" className="conn"/>
        <g className="nb"><rect x="86" y="462" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="480" textAnchor="middle" dominantBaseline="central">Enter Internship Details</text>
        </g>
        <line x1="164" y1="498" x2="164" y2="522" className="conn"/>
        <g className="np"><rect x="86" y="522" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="540" textAnchor="middle" dominantBaseline="central">Send Invite to Supervisor</text>
        </g>
        <line x1="164" y1="558" x2="164" y2="582" className="conn"/>
        <g className="nb"><rect x="86" y="582" width="156" height="36" rx="7"/>
          <text className="nt-title" x="164" y="600" textAnchor="middle" dominantBaseline="central">Display Dashboard</text>
        </g>
        <line x1="164" y1="618" x2="164" y2="642" className="conn"/>
        <g className="ng"><rect x="102" y="642" width="124" height="32" rx="16"/>
          <text className="nt-title" x="164" y="658" textAnchor="middle" dominantBaseline="central">END Onboarding</text>
        </g>

        {/* DAILY REPORT */}
        <g className="ng"><rect x="428" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="490" y="44" textAnchor="middle" dominantBaseline="central">START Daily Report</text>
        </g>
        <line x1="490" y1="60" x2="490" y2="92" className="conn"/>

        {/* New Day? */}
        <polygon points="490,92 532,116 490,140 448,116" className="dmnd"/>
        <text className="nt-sub" x="490" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--text)">New Day?</text>

        {/* No → Show Existing Tasks */}
        <path d="M448 116 L390 116" className="conn"/>
        <text className="clbl" x="418" y="110">No</text>
        <g className="nz"><rect x="328" y="98" width="62" height="36" rx="7"/>
          <text className="nt-sub" x="359" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--gray-800)">Show Existing Tasks</text>
        </g>
        <line x1="359" y1="134" x2="359" y2="158" className="conn"/>
        <g className="nz"><rect x="328" y="158" width="62" height="36" rx="7"/>
          <text className="nt-sub" x="359" y="176" textAnchor="middle" dominantBaseline="central" fill="var(--gray-800)">Edit/View Feedback</text>
        </g>

        {/* Yes → Declare Tasks */}
        <path d="M532 116 L594 116" className="conn"/>
        <text className="clbl" x="562" y="110">Yes</text>
        <g className="nb"><rect x="594" y="98" width="62" height="36" rx="7"/>
          <text className="nt-sub" x="625" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Declare Tasks</text>
        </g>

        {/* Continue down main path */}
        <line x1="490" y1="140" x2="490" y2="172" className="conn"/>
        <g className="nb"><rect x="392" y="172" width="196" height="42" rx="7"/>
          <text className="nt-sub" x="490" y="187" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Input: Description, Outcome,</text>
          <text className="nt-sub" x="490" y="203" textAnchor="middle" dominantBaseline="central" fill="var(--blue-800)">Learning Objective</text>
        </g>
        <line x1="490" y1="214" x2="490" y2="240" className="conn"/>
        <g className="nb"><rect x="392" y="240" width="196" height="36" rx="7"/>
          <text className="nt-title" x="490" y="258" textAnchor="middle" dominantBaseline="central">Save Tasks</text>
        </g>
        <line x1="490" y1="276" x2="490" y2="300" className="conn"/>
        <g className="nb"><rect x="392" y="300" width="196" height="36" rx="7"/>
          <text className="nt-title" x="490" y="318" textAnchor="middle" dominantBaseline="central">Prompt Report Submission</text>
        </g>
        <line x1="490" y1="336" x2="490" y2="360" className="conn"/>
        <g className="nb"><rect x="392" y="360" width="196" height="36" rx="7"/>
          <text className="nt-title" x="490" y="378" textAnchor="middle" dominantBaseline="central">Fill Report + Attachments</text>
        </g>
        <line x1="490" y1="396" x2="490" y2="426" className="conn"/>

        {/* All Fields Valid? */}
        <polygon points="490,426 532,450 490,474 448,450" className="dmnd"/>
        <text className="nt-sub" x="490" y="450" textAnchor="middle" dominantBaseline="central" fill="var(--text)">All Fields Valid?</text>

        {/* No → Show Errors */}
        <path d="M448 450 L398 450" className="conn"/>
        <text className="clbl" x="422" y="444">No</text>
        <g className="nr"><rect x="348" y="432" width="50" height="36" rx="7"/>
          <text className="nt-sub" x="373" y="450" textAnchor="middle" dominantBaseline="central" fill="var(--red-800)">Show Errors</text>
        </g>

        {/* Yes → Mark Pending Review */}
        <path d="M532 450 L586" className="conn"/>
        <text className="clbl" x="558" y="444">Yes</text>
        <g className="na"><rect x="586" y="432" width="100" height="36" rx="7"/>
          <text className="nt-sub" x="636" y="450" textAnchor="middle" dominantBaseline="central" fill="var(--amber-800)">Mark 'Pending Review'</text>
        </g>

        {/* Continue from diamond bottom */}
        <line x1="490" y1="474" x2="490" y2="500" className="conn"/>
        <g className="np"><rect x="392" y="500" width="196" height="36" rx="7"/>
          <text className="nt-title" x="490" y="518" textAnchor="middle" dominantBaseline="central">Notify Supervisor</text>
        </g>
        <line x1="490" y1="536" x2="490" y2="560" className="conn"/>
        <g className="ng"><rect x="428" y="560" width="124" height="32" rx="16"/>
          <text className="nt-title" x="490" y="576" textAnchor="middle" dominantBaseline="central">END Report</text>
        </g>

        {/* CHECK-IN */}
        <g className="ng"><rect x="754" y="28" width="124" height="32" rx="16"/>
          <text className="nt-title" x="816" y="44" textAnchor="middle" dominantBaseline="central">START Check-In</text>
        </g>
        <line x1="816" y1="60" x2="816" y2="92" className="conn"/>

        {/* Opted-in? */}
        <polygon points="816,92 858,116 816,140 774,116" className="dmnd"/>
        <text className="nt-sub" x="816" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--text)">Opted-in?</text>

        {/* No → Skip Check-in */}
        <path d="M774 116 L716 116" className="conn"/>
        <text className="clbl" x="743" y="110">No</text>
        <g className="nz"><rect x="668" y="98" width="48" height="36" rx="7"/>
          <text className="nt-sub" x="692" y="116" textAnchor="middle" dominantBaseline="central" fill="var(--gray-800)">Skip Check-in</text>
        </g>

        {/* Yes → Request GPS Access */}
        <line x1="816" y1="140" x2="816" y2="166" className="conn"/>
        <text className="clbl" x="828" y="156">Yes</text>
        <g className="nb"><rect x="730" y="166" width="172" height="36" rx="7"/>
          <text className="nt-title" x="816" y="184" textAnchor="middle" dominantBaseline="central">Request GPS Access</text>
        </g>
        <line x1="816" y1="202" x2="816" y2="232" className="conn"/>

        {/* GPS Granted? */}
        <polygon points="816,232 858,256 816,280 774,256" className="dmnd"/>
        <text className="nt-sub" x="816" y="256" textAnchor="middle" dominantBaseline="central" fill="var(--text)">GPS Granted?</text>

        {/* No → Show Error + Manual Option */}
        <path d="M774 256 L716 256" className="conn"/>
        <text className="clbl" x="742" y="250">No</text>
        <g className="nr"><rect x="668" y="238" width="48" height="36" rx="7"/>
          <text className="nt-sub" x="692" y="256" textAnchor="middle" dominantBaseline="central" fill="var(--red-800)">Show Error</text>
        </g>
        <line x1="692" y1="274" x2="692" y2="298" className="conn"/>
        <g className="nz"><rect x="668" y="298" width="48" height="36" rx="7"/>
          <text className="nt-sub" x="692" y="316" textAnchor="middle" dominantBaseline="central" fill="var(--gray-800)">Manual Option</text>
        </g>

        {/* Yes → Capture Location */}
        <line x1="816" y1="280" x2="816" y2="308" className="conn"/>
        <text className="clbl" x="828" y="298">Yes</text>
        <g className="nb"><rect x="730" y="308" width="172" height="36" rx="7"/>
          <text className="nt-title" x="816" y="326" textAnchor="middle" dominantBaseline="central">Capture Location</text>
        </g>
        <line x1="816" y1="344" x2="816" y2="374" className="conn"/>

        {/* Within Geofence? */}
        <polygon points="816,374 858,398 816,422 774,398" className="dmnd"/>
        <text className="nt-sub" x="816" y="398" textAnchor="middle" dominantBaseline="central" fill="var(--text)">Within Geofence?</text>

        {/* No → Fail Check-In */}
        <path d="M774 398 L716 398" className="conn"/>
        <text className="clbl" x="742" y="392">No</text>
        <g className="nr"><rect x="668" y="380" width="48" height="36" rx="7"/>
          <text className="nt-sub" x="692" y="398" textAnchor="middle" dominantBaseline="central" fill="var(--red-800)">Fail Check-In</text>
        </g>

        {/* Yes → Record Check-In */}
        <line x1="816" y1="422" x2="816" y2="450" className="conn"/>
        <text className="clbl" x="828" y="440">Yes</text>
        <g className="nt"><rect x="730" y="450" width="172" height="36" rx="7"/>
          <text className="nt-title" x="816" y="468" textAnchor="middle" dominantBaseline="central">Record Check-In</text>
        </g>
        <line x1="816" y1="486" x2="816" y2="512" className="conn"/>
        <g className="nt"><rect x="730" y="512" width="172" height="36" rx="7"/>
          <text className="nt-title" x="816" y="530" textAnchor="middle" dominantBaseline="central">Update Dashboard</text>
        </g>
        <line x1="816" y1="548" x2="816" y2="574" className="conn"/>
        <g className="ng"><rect x="754" y="574" width="124" height="32" rx="16"/>
          <text className="nt-title" x="816" y="590" textAnchor="middle" dominantBaseline="central">END Check-in</text>
        </g>
      </svg>
    </DiagramLayout>
  );
}
