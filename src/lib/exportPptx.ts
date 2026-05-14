import PptxGenJS from "pptxgenjs";

const BLUE = "0B5ED7";
const DARK = "1A1A2E";
const WHITE = "FFFFFF";
const GRAY = "6B7280";
const LIGHT = "E3F3FF";
const CARD = "F9FAFB";

async function imgToBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext("2d");
      if (!ctx) { reject("No ctx"); return; }
      ctx.drawImage(img, 0, 0);
      resolve(c.toDataURL("image/png"));
    };
    img.onerror = () => reject("Failed: " + url);
    img.src = url;
  });
}

export async function generateEditablePPTX() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.theme = { bodyFontFace: "Arial" };

  // Pre-load images
  let logo: string | null = null;
  let dashImg: string | null = null;
  let mobileImg: string | null = null;
  try { logo = await imgToBase64("/htu-logo.png"); } catch(e) { console.warn(e); }
  try { dashImg = await imgToBase64("/clo_dashboard_mockup.png"); } catch(e) { console.warn(e); }
  try { mobileImg = await imgToBase64("/student_logbook_mobile.png"); } catch(e) { console.warn(e); }

  const header = (s: PptxGenJS.Slide, num: string, title: string, sub?: string) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 0.3, w: 0.7, h: 0.7, fill: { color: BLUE } });
    s.addText(num, { x: 0.4, y: 0.3, w: 0.7, h: 0.7, color: WHITE, fontSize: 16, bold: true, align: "center", valign: "middle" });
    s.addText(title, { x: 1.3, y: 0.3, w: 8, h: 0.5, color: DARK, fontSize: 22, bold: true });
    if (sub) s.addText(sub, { x: 1.3, y: 0.8, w: 8, h: 0.3, color: GRAY, fontSize: 11 });
    s.addShape(pptx.ShapeType.line, { x: 0.4, y: 1.2, w: 12.5, h: 0, line: { color: BLUE, width: 1 } });
  };

  // ── S1: Cover ──
  const s1 = pptx.addSlide();
  s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.08, fill: { color: BLUE } });
  if (logo) s1.addImage({ data: logo, x: 5.9, y: 0.4, w: 1.5, h: 1.5 });
  s1.addText("HO TECHNICAL UNIVERSITY", { x: 1, y: 2.0, w: 11.33, h: 0.4, color: BLUE, fontSize: 16, bold: true, align: "center" });
  s1.addText("Faculty of Applied Sciences and Technology\nBachelor of Technology in Computer Science", { x: 1, y: 2.4, w: 11.33, h: 0.7, color: GRAY, fontSize: 11, align: "center" });
  s1.addText("Industrial Attachment\nManagement System", { x: 1, y: 3.3, w: 11.33, h: 1.4, color: DARK, fontSize: 36, bold: true, align: "center" });
  s1.addText("IAMS — for Ho Technical University", { x: 1, y: 4.8, w: 11.33, h: 0.4, color: GRAY, fontSize: 16, align: "center" });
  s1.addText("Project Defense | 14 – 15 May 2026", { x: 1, y: 5.8, w: 11.33, h: 0.4, color: BLUE, fontSize: 14, bold: true, align: "center" });

  // ── S2: Team ──
  const s2 = pptx.addSlide();
  if (logo) s2.addImage({ data: logo, x: 0.4, y: 0.3, w: 0.6, h: 0.6 });
  s2.addText("Project Defense Team", { x: 1.2, y: 0.3, w: 6, h: 0.6, color: DARK, fontSize: 22, bold: true, valign: "middle" });
  s2.addShape(pptx.ShapeType.line, { x: 0.4, y: 1.2, w: 12.5, h: 0, line: { color: BLUE, width: 1 } });
  s2.addText("Academic Supervisor", { x: 0.4, y: 1.5, w: 5, h: 0.3, color: BLUE, fontSize: 10, bold: true });
  s2.addText("Carlos Ankora & Anthony Kingsley Sackey", { x: 0.4, y: 1.8, w: 5, h: 0.4, color: DARK, fontSize: 16, bold: true });
  s2.addText("Presented By", { x: 0.4, y: 2.5, w: 5, h: 0.3, color: BLUE, fontSize: 10, bold: true });
  const team = [
    { n: "Sadick Issaka", id: "0322080383" },
    { n: "Daniel Gbegbeawo", id: "0322080457" },
    { n: "Emmanuel Ajao", id: "0322080236" },
    { n: "Gabriel Asampana Demordzie", id: "0322080295" },
    { n: "Emmanuel Edzia", id: "0322080275" },
    { n: "Shanita Gohoho", id: "0322080294" }
  ];
  team.forEach((t, i) => {
    const y = 2.9 + i * 0.42;
    s2.addShape(pptx.ShapeType.rect, { x: 0.4, y, w: 5, h: 0.38, fill: { color: CARD }, line: { color: "E5E7EB" } });
    s2.addText(t.n, { x: 0.5, y, w: 2.8, h: 0.38, color: DARK, fontSize: 10, bold: true, valign: "middle" });
    s2.addText(t.id, { x: 3.3, y, w: 2, h: 0.38, color: BLUE, fontSize: 10, bold: true, align: "right", valign: "middle" });
  });
  if (dashImg) {
    s2.addImage({ data: dashImg, x: 5.8, y: 1.5, w: 7, h: 5.2, rounding: true });
  }

  // ── S3: Agenda ──
  const s3 = pptx.addSlide();
  header(s3, "TOC", "Presentation Agenda", "Structure of today's defense");
  const agenda = [
    { n: "01", t: "Overview", d: "Background and Project Motivation" },
    { n: "02", t: "Problem Statement", d: "Key Weaknesses in Current Process" },
    { n: "03", t: "Aim & Objectives", d: "Project Goals and Core Scope" },
    { n: "04", t: "System Design", d: "Architecture, ERD, and User Flows" }
  ];
  agenda.forEach((a, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.4 + col * 6.3, y = 1.8 + row * 2.2;
    s3.addShape(pptx.ShapeType.rect, { x, y, w: 6, h: 1.8, fill: { color: CARD }, line: { color: "E5E7EB" } });
    s3.addText(a.n, { x: x + 0.2, y: y + 0.2, w: 1, h: 1.4, color: BLUE, fontSize: 28, bold: true, align: "center", valign: "middle" });
    s3.addText(a.t, { x: x + 1.2, y: y + 0.3, w: 4.5, h: 0.5, color: DARK, fontSize: 16, bold: true });
    s3.addText(a.d, { x: x + 1.2, y: y + 0.9, w: 4.5, h: 0.5, color: GRAY, fontSize: 11 });
  });

  // ── S4: Overview ──
  const s4 = pptx.addSlide();
  header(s4, "01", "Project Overview");
  s4.addText("Transforming the University Attachment Lifecycle", { x: 0.4, y: 1.5, w: 8, h: 0.4, color: DARK, fontSize: 18, bold: true });
  s4.addText("HTU IAMS is a central hub for CLOs, DLOs, students, lecturers, and company supervisors to connect and monitor internship progress in real-time.", { x: 0.4, y: 2.0, w: 7, h: 1, color: GRAY, fontSize: 12 });
  
  const feats = [
    { t: "Digital Logbooks", d: "Daily task reporting & digital approvals" },
    { t: "Presence Verification", d: "GPS geofencing for on-site monitoring" },
    { t: "Accreditation Tools", d: "Comprehensive analytics & PDF/CSV exports" }
  ];
  feats.forEach((f, i) => {
    const y = 3.2 + i * 1.1;
    s4.addShape(pptx.ShapeType.rect, { x: 0.4, y, w: 5, h: 0.9, fill: { color: CARD }, line: { color: "E5E7EB" } });
    s4.addText(f.t, { x: 0.6, y: y + 0.1, w: 4.5, h: 0.3, color: BLUE, fontSize: 12, bold: true });
    s4.addText(f.d, { x: 0.6, y: y + 0.4, w: 4.5, h: 0.4, color: GRAY, fontSize: 10 });
  });

  s4.addShape(pptx.ShapeType.rect, { x: 6, y: 1.5, w: 6.8, h: 5.2, fill: { color: LIGHT }, line: { color: BLUE } });
  s4.addText("Key Stakeholders", { x: 6.3, y: 1.8, w: 6.2, h: 0.4, color: DARK, fontSize: 14, bold: true });
  const roles_list = ["Students", "Lecturers", "Companies", "Administrators"];
  roles_list.forEach((r, i) => {
    s4.addShape(pptx.ShapeType.ellipse, { x: 6.3, y: 2.4 + i * 0.8, w: 0.2, h: 0.2, fill: { color: BLUE } });
    s4.addText(r, { x: 6.7, y: 2.4 + i * 0.8, w: 5, h: 0.3, color: DARK, fontSize: 12, bold: true });
  });

  // ── S5: Problem Statement ──
  const s5 = pptx.addSlide();
  header(s5, "02", "Problem Statement");
  const probs = [
    { t: "Systemic Gaps", d: "Digital framework is functionally insufficient, acting as a static database." },
    { t: "Manual Dependencies", d: "Key processes like rubric-based grading remain manual, relying on paper." },
    { t: "Operational Silos", d: "Lack of real-time GPS monitoring compromises data integrity." }
  ];
  probs.forEach((p, i) => {
    const x = 0.4 + i * 4.2;
    s5.addShape(pptx.ShapeType.rect, { x, y: 1.5, w: 4, h: 3, fill: { color: CARD }, line: { color: "E5E7EB" } });
    s5.addText(p.t, { x: x + 0.2, y: 1.7, w: 3.6, h: 0.4, color: DARK, fontSize: 14, bold: true });
    s5.addText(p.d, { x: x + 0.2, y: 2.2, w: 3.6, h: 2, color: GRAY, fontSize: 11, valign: "top" });
  });

  s5.addShape(pptx.ShapeType.rect, { x: 0.4, y: 4.8, w: 6, h: 1.8, fill: { color: "FEE2E2" }, line: { color: "EF4444" } });
  s5.addText("Impact on Students", { x: 0.6, y: 4.9, w: 5.6, h: 0.3, color: "B91C1C", fontSize: 10, bold: true });
  s5.addText("• No structured reporting tool\n• Paper logbooks easily lost", { x: 0.6, y: 5.3, w: 5.6, h: 1, color: DARK, fontSize: 10 });

  s5.addShape(pptx.ShapeType.rect, { x: 6.8, y: 4.8, w: 6, h: 1.8, fill: { color: "FEE2E2" }, line: { color: "EF4444" } });
  s5.addText("Impact on Admin", { x: 7.0, y: 4.9, w: 5.6, h: 0.3, color: "B91C1C", fontSize: 10, bold: true });
  s5.addText("• Difficult to track placements\n• No real-time attendance", { x: 7.0, y: 5.3, w: 5.6, h: 1, color: DARK, fontSize: 10 });

  // ── S6: Aim & Objectives ──
  const s6 = pptx.addSlide();
  header(s6, "03", "Aim & Objectives");
  s6.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.5, w: 12.5, h: 1.2, fill: { color: LIGHT }, line: { color: BLUE } });
  s6.addText("Project Aim", { x: 0.6, y: 1.6, w: 1.2, h: 0.25, fill: { color: BLUE }, color: WHITE, fontSize: 8, bold: true, align: "center", valign: "middle" });
  s6.addText("To design, develop, and evaluate a web-based Industrial Attachment Management System (IAMS) for Ho Technical University.", { x: 0.6, y: 1.9, w: 12, h: 0.6, color: DARK, fontSize: 12, bold: true, valign: "top" });
  
  const objs = [
    { n: "01", t: "Digitize Process", d: "Eliminate paper logbooks and physical signatures." },
    { n: "02", t: "Centralize Data", d: "Consolidate data for easy access and reporting." },
    { n: "03", t: "Real-Time Monitoring", d: "Provide GPS-based presence verification." },
    { n: "04", t: "Analytics & Exports", d: "Generate PDF/CSV reports for accreditation." }
  ];
  objs.forEach((o, i) => {
    const x = 0.4 + i * 3.15;
    s6.addShape(pptx.ShapeType.rect, { x, y: 3.0, w: 3, h: 3.5, fill: { color: CARD }, line: { color: "E5E7EB" } });
    s6.addText(o.n, { x: x + 0.2, y: 3.2, w: 2.6, h: 0.5, color: BLUE, fontSize: 18, bold: true });
    s6.addText(o.t, { x: x + 0.2, y: 3.7, w: 2.6, h: 0.4, color: DARK, fontSize: 12, bold: true });
    s6.addText(o.d, { x: x + 0.2, y: 4.2, w: 2.6, h: 2, color: GRAY, fontSize: 10, valign: "top" });
  });

  // ── S7: Core Features ──
  const s7 = pptx.addSlide();
  header(s7, "04", "Core System Features");
  const core_feats = [
    { t: "PWA Digital Logbook", d: "Mobile-ready interface for daily tasks." },
    { t: "GPS-Verified Presence", d: "Geofencing technology for verification." },
    { t: "Automated Placements", d: "One-click generation of placement letters." },
    { t: "Rubric-Based Grading", d: "Standardized grading engine for feedback." }
  ];
  core_feats.forEach((f, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = 0.4 + col * 6.3, y = 1.8 + row * 2.2;
    s7.addShape(pptx.ShapeType.rect, { x, y, w: 6, h: 1.8, fill: { color: CARD }, line: { color: "E5E7EB" } });
    s7.addText(f.t, { x: x + 0.3, y: y + 0.3, w: 5.4, h: 0.4, color: DARK, fontSize: 16, bold: true });
    s7.addText(f.d, { x: x + 0.3, y: y + 0.8, w: 5.4, h: 0.7, color: GRAY, fontSize: 11 });
  });

  // ── S8: Tech Stack ──
  const s8 = pptx.addSlide();
  header(s8, "05", "Technology Stack");
  const stack = [
    { l: "Backend", v: "Laravel (PHP) + REST API" },
    { l: "Frontend", v: "Next.js (React) + PWA" },
    { l: "Database", v: "PostgreSQL / MySQL" },
    { l: "Mapping", v: "Google Location API" },
    { l: "Infrastructure", v: "Docker Containerization" }
  ];
  stack.forEach((t, i) => {
    const y = 1.5 + i * 1.0;
    s8.addText(t.l, { x: 0.4, y, w: 4, h: 0.3, color: BLUE, fontSize: 10, bold: true });
    s8.addText(t.v, { x: 0.4, y: y + 0.3, w: 6, h: 0.4, color: DARK, fontSize: 16, bold: true });
    s8.addShape(pptx.ShapeType.line, { x: 0.4, y: y + 0.8, w: 6, h: 0, line: { color: "E5E7EB" } });
  });

  // ── S9: Methodology ──
  const s9 = pptx.addSlide();
  header(s9, "06", "System Lifecycle");
  const lifecycle = ["Company Approval", "Document Gen", "Supervisor Assign", "GPS Attendance", "Weekly Logs", "Final Grading"];
  lifecycle.forEach((p, i) => {
    const x = 0.4 + i * 2.1;
    s9.addShape(pptx.ShapeType.rect, { x, y: 1.8, w: 1.8, h: 1.8, fill: { color: BLUE } });
    s9.addText((i + 1).toString(), { x, y: 1.9, w: 1.8, h: 0.5, color: WHITE, fontSize: 16, bold: true, align: "center" });
    s9.addText(p, { x, y: 2.5, w: 1.8, h: 0.8, color: WHITE, fontSize: 9, bold: true, align: "center" });
  });
  if (mobileImg) s9.addImage({ data: mobileImg, x: 0.4, y: 4.2, w: 12.5, h: 2.5, rounding: true });

  // ── S10-S16: Diagrams (Simplified) ──
  const diag_slides = [
    { t: "High-Level Architecture", d: "Web/Mobile PWA -> REST API Gateway -> PostgreSQL/S3 Storage" },
    { t: "Entity Relational Diagram", d: "Users -> Internships -> Daily Reports -> Check-ins/Feedbacks" },
    { t: "User Flow: Students", d: "ID Verification -> Setup Profile -> Daily Reporting -> GPS Check-in" },
    { t: "User Flow: Lecturers", d: "Dashboard -> Review Reports -> Add Feedback" },
    { t: "User Flow: Company Supervisor", d: "Registration -> View Reports -> Approvals/Rejections" },
    { t: "User Flow: Head of Department", d: "Dept Dashboard -> Browse Students -> Export Reports" },
    { t: "User Flow: CLO / DLO", d: "Faculty Structure -> Assign Lecturers -> User Management" }
  ];
  diag_slides.forEach((ds, i) => {
    const s = pptx.addSlide();
    let nNum = 7 + i;
    header(s, nNum < 10 ? "0" + nNum : nNum.toString(), ds.t, "System Design Visual");
    s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.5, w: 12.5, h: 5.2, fill: { color: CARD }, line: { color: BLUE } });
    s.addText(ds.d, { x: 0.8, y: 3.5, w: 11.7, h: 1, color: DARK, fontSize: 24, bold: true, align: "center" });
    s.addText("(Please refer to the interactive presentation or PDF for detailed SVG diagram)", { x: 0.8, y: 4.8, w: 11.7, h: 0.5, color: GRAY, fontSize: 11, italic: true, align: "center" });
  });

  // ── S17: Thank You ──
  const s17 = pptx.addSlide();
  s17.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: "100%", h: "100%", fill: { color: BLUE } });
  if (logo) s17.addImage({ data: logo, x: 5.9, y: 0.2, w: 1.5, h: 1.5 });
  s17.addText("Thank You", { x: 0.4, y: 1.5, w: 12.5, h: 1.2, color: WHITE, fontSize: 56, bold: true, align: "center" });
  s17.addText("We welcome your questions.", { x: 0.4, y: 2.7, w: 12.5, h: 0.4, color: LIGHT, fontSize: 18, align: "center" });
  stat(s17, 0.8, "153", "TOTAL FUNCTIONAL FEATURES IMPLEMENTED");
  stat(s17, 4.9, "6", "USER ROLES SUPPORTED");
  stat(s17, 9.0, "9", "SYSTEM MODULES");
  s17.addText("Ho Technical University | Faculty of Applied Sciences and Technology\nIAMS Project Defense | 14 – 15 May 2026", { x: 0.4, y: 5.8, w: 12.5, h: 0.6, color: WHITE, fontSize: 8, bold: true, align: "center" });

  function stat(s: any, x: number, n: string, l: string) {
    s.addShape(pptx.ShapeType.rect, { x, y: 3.6, w: 3.5, h: 1.8, fill: { color: WHITE } });
    s.addText(n, { x, y: 3.7, w: 3.5, h: 0.8, color: BLUE, fontSize: 32, bold: true, align: "center" });
    s.addText(l, { x: x + 0.2, y: 4.5, w: 3.1, h: 0.6, color: GRAY, fontSize: 8, bold: true, align: "center" });
  };

  await pptx.writeFile({ fileName: "IAMS_Presentation.pptx" });
}
