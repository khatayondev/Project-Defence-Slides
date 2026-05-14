"use client";
import DiagramLayout from "../DiagramLayout";

export default function SlideArch() {
  return (
    <DiagramLayout label="Our Strategy" title="High-Level Architecture Overview">
      <svg width="100%" viewBox="0 0 1000 520" className="diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="var(--arr)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="arrb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 2L8 5L2 8" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>

        {/* LEFT BOX: User Interfaces */}
        <rect x="10" y="30" width="250" height="450" rx="10" className="box-frame"/>
        <text className="chdr" x="135" y="54" textAnchor="middle">User Interfaces (Web / Mobile)</text>

        <g className="nb"><rect x="76" y="68" width="118" height="36" rx="7"/>
          <text className="nt-title" x="135" y="86" textAnchor="middle" dominantBaseline="central">Student</text>
        </g>
        <line x1="115" y1="104" x2="90" y2="148" className="conn"/>
        <line x1="155" y1="104" x2="180" y2="148" className="conn"/>

        <g className="np"><rect x="20" y="148" width="118" height="36" rx="7"/>
          <text className="nt-title" x="79" y="166" textAnchor="middle" dominantBaseline="central">Lecturer</text>
        </g>
        <g className="nt"><rect x="122" y="148" width="124" height="36" rx="7"/>
          <text className="nt-title" x="184" y="166" textAnchor="middle" dominantBaseline="central">Company Supervisor</text>
        </g>

        <line x1="79" y1="184" x2="79" y2="268" className="conn"/>
        <line x1="184" y1="184" x2="184" y2="268" className="conn"/>

        <g className="nz"><rect x="20" y="268" width="118" height="36" rx="7"/>
          <text className="nt-title" x="79" y="286" textAnchor="middle" dominantBaseline="central">Admin</text>
        </g>
        <g className="nc"><rect x="122" y="268" width="124" height="36" rx="7"/>
          <text className="nt-title" x="184" y="286" textAnchor="middle" dominantBaseline="central">HoD</text>
        </g>

        {/* REST API horizontal arrow */}
        <line x1="262" y1="248" x2="330" y2="248" className="conn-b"/>
        <text className="clbl" x="296" y="242" textAnchor="middle" style={{fill:"#2563EB", fontWeight:600}}>REST API</text>

        {/* MIDDLE BOX: Backend Services */}
        <rect x="334" y="30" width="220" height="450" rx="10" className="box-frame"/>
        <text className="chdr" x="444" y="54" textAnchor="middle">Backend Services</text>

        <g className="nb"><rect x="364" y="70" width="160" height="36" rx="7"/>
          <text className="nt-title" x="444" y="88" textAnchor="middle" dominantBaseline="central">API Gateway</text>
        </g>
        <line x1="444" y1="106" x2="444" y2="130" className="conn"/>

        <g className="np"><rect x="364" y="130" width="160" height="36" rx="7"/>
          <text className="nt-title" x="444" y="148" textAnchor="middle" dominantBaseline="central">User Mgmt</text>
        </g>
        <line x1="444" y1="166" x2="444" y2="190" className="conn"/>

        <g className="nt"><rect x="364" y="190" width="160" height="36" rx="7"/>
          <text className="nt-title" x="444" y="208" textAnchor="middle" dominantBaseline="central">Internship Mgmt</text>
        </g>
        <line x1="444" y1="226" x2="444" y2="250" className="conn"/>

        <g className="na"><rect x="364" y="250" width="160" height="36" rx="7"/>
          <text className="nt-title" x="444" y="268" textAnchor="middle" dominantBaseline="central">Reporting</text>
        </g>
        <line x1="444" y1="286" x2="444" y2="310" className="conn"/>

        <g className="nc"><rect x="364" y="310" width="160" height="36" rx="7"/>
          <text className="nt-title" x="444" y="328" textAnchor="middle" dominantBaseline="central">Notification</text>
        </g>
        <line x1="444" y1="346" x2="444" y2="370" className="conn"/>

        <g className="ng"><rect x="364" y="370" width="160" height="36" rx="7"/>
          <text className="nt-title" x="444" y="388" textAnchor="middle" dominantBaseline="central">Location Tracking</text>
        </g>

        {/* Internal APIs horizontal arrow */}
        <line x1="556" y1="248" x2="624" y2="248" className="conn-b"/>
        <text className="clbl" x="590" y="242" textAnchor="middle" style={{fill:"#2563EB", fontWeight:600}}>Internal APIs</text>

        {/* RIGHT BOX: Data & External Systems */}
        <rect x="628" y="30" width="358" height="450" rx="10" className="box-frame"/>
        <text className="chdr" x="807" y="54" textAnchor="middle">Data &amp; External Systems</text>

        <g className="nb"><rect x="648" y="80" width="154" height="36" rx="7"/>
          <text className="nt-title" x="725" y="98" textAnchor="middle" dominantBaseline="central">PostgreSQL / MySQL</text>
        </g>
        <g className="nz"><rect x="816" y="80" width="150" height="36" rx="7"/>
          <text className="nt-title" x="891" y="98" textAnchor="middle" dominantBaseline="central">S3 Storage</text>
        </g>

        <line x1="725" y1="116" x2="725" y2="148" stroke="var(--bdr)" strokeWidth=".7" fill="none"/>
        <line x1="891" y1="116" x2="891" y2="148" stroke="var(--bdr)" strokeWidth=".7" fill="none"/>

        <g className="nt"><rect x="648" y="148" width="154" height="36" rx="7"/>
          <text className="nt-title" x="725" y="166" textAnchor="middle" dominantBaseline="central">University Student API</text>
        </g>
        <g className="ng"><rect x="816" y="148" width="150" height="36" rx="7"/>
          <text className="nt-title" x="891" y="166" textAnchor="middle" dominantBaseline="central">Geolocation API</text>
        </g>
      </svg>
    </DiagramLayout>
  );
}
