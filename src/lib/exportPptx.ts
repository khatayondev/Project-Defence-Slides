import PptxGenJS from "pptxgenjs";

const DONEZO_BLUE = "0B5ED7";
const FG_DARK = "1A1A2E";
const FG_LIGHT = "FFFFFF";
const MUTED = "6B7280";
const ACCENT = "E3F3FF";

export async function generateEditablePPTX() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.theme = { bodyFontFace: "Arial" }; // Default font

  // Helper for slide titles
  const addHeader = (slide: PptxGenJS.Slide, num: string, title: string, subtitle?: string) => {
    slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 0.5, w: 1, h: 1, fill: { color: DONEZO_BLUE } });
    slide.addText(num, { x: 0.5, y: 0.5, w: 1, h: 1, color: FG_LIGHT, fontSize: 24, bold: true, align: "center", valign: "middle" });
    slide.addText(title, { x: 1.8, y: 0.5, w: 8, h: 0.6, color: FG_DARK, fontSize: 32, bold: true });
    if (subtitle) {
      slide.addText(subtitle, { x: 1.8, y: 1.1, w: 8, h: 0.4, color: MUTED, fontSize: 16 });
    }
    // Blue divider line
    slide.addShape(pptx.ShapeType.line, { x: 0.5, y: 1.8, w: 12.3, h: 0, line: { color: DONEZO_BLUE, width: 1 } });
  };

  // SLIDE 1: Cover
  const s1 = pptx.addSlide();
  s1.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.1, fill: { color: DONEZO_BLUE } });
  s1.addImage({ path: "/htu-logo.png", x: 6.16, y: 0.8, w: 1, h: 1 });
  s1.addText("HO TECHNICAL UNIVERSITY", { x: 1, y: 2.0, w: 11.33, h: 0.5, color: DONEZO_BLUE, fontSize: 20, bold: true, align: "center" });
  s1.addText("Faculty of Applied Sciences and Technology\nBachelor of Technology in Computer Science", { x: 1, y: 2.5, w: 11.33, h: 1, color: MUTED, fontSize: 16, align: "center" });
  s1.addText("Industrial Attachment Management System", { x: 1, y: 3.7, w: 11.33, h: 1.5, color: FG_DARK, fontSize: 56, bold: true, align: "center" });
  s1.addText("IAMS - for Ho Technical University", { x: 1, y: 5.0, w: 11.33, h: 0.5, color: MUTED, fontSize: 24, align: "center" });
  s1.addText("Project Defense | 14 - 15 May 2026", { x: 1, y: 6.2, w: 11.33, h: 0.5, color: DONEZO_BLUE, fontSize: 18, bold: true, align: "center" });

  // SLIDE 2: Team & Dashboard
  const s2 = pptx.addSlide();
  s2.addImage({ path: "/htu-logo.png", x: 0.5, y: 0.5, w: 0.8, h: 0.8 });
  s2.addText("Project Defense Team", { x: 1.5, y: 0.5, w: 8, h: 0.8, color: FG_DARK, fontSize: 32, bold: true, valign: "middle" });
  s2.addShape(pptx.ShapeType.line, { x: 0.5, y: 1.8, w: 12.3, h: 0, line: { color: DONEZO_BLUE, width: 1 } });
  s2.addText("Academic Supervisor", { x: 0.5, y: 2.2, w: 5.5, h: 0.4, color: DONEZO_BLUE, fontSize: 14, bold: true });
  s2.addText("[Supervisor Name]", { x: 0.5, y: 2.6, w: 5.5, h: 0.5, color: FG_DARK, fontSize: 24, bold: true });
  s2.addText("Presented By", { x: 0.5, y: 3.6, w: 5.5, h: 0.4, color: DONEZO_BLUE, fontSize: 14, bold: true });
  
  const team = [
    { name: "Daniel Gbegbeawu", id: "0322080457" },
    { name: "Gohoho Shanita Eyram", id: "0322080294" },
    { name: "Gabriel D. Asampana", id: "0322080295" },
    { name: "Emmanuel Adedoyin Ajao", id: "0322080236" },
    { name: "Edzia E. K. Korshie", id: "0322080275" },
    { name: "Sadick Issaka", id: "0322080383" }
  ];
  team.forEach((t, i) => {
    const y = 4 + (i * 0.5);
    s2.addShape(pptx.ShapeType.rect, { x: 0.5, y, w: 5.5, h: 0.45, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
    s2.addText(t.name, { x: 0.6, y, w: 3, h: 0.45, color: FG_DARK, fontSize: 12, bold: true, valign: "middle" });
    s2.addText(t.id, { x: 3.6, y, w: 2.3, h: 0.45, color: DONEZO_BLUE, fontSize: 12, bold: true, align: "right", valign: "middle" });
  });

  s2.addShape(pptx.ShapeType.rect, { x: 6.5, y: 2.2, w: 6.3, h: 4.8, fill: { color: DONEZO_BLUE } });
  s2.addText("[ CLO Dashboard Mockup Image is in Web View ]", { x: 6.5, y: 2.2, w: 6.3, h: 4.8, color: FG_LIGHT, fontSize: 16, align: "center", valign: "middle" });

  // SLIDE 3: Agenda
  const s3 = pptx.addSlide();
  addHeader(s3, "TOC", "Presentation Agenda", "Structure of today's defense");
  const agenda = [
    { num: "01", title: "Introduction", desc: "Background and Theoretical Framework" },
    { num: "02", title: "Problem Statement", desc: "Key Weaknesses in Current Process" },
    { num: "03", title: "Aim & Objectives", desc: "Project Goals and Core Scope" },
    { num: "04", title: "Methodology", desc: "Development Approach and Technology Stack" }
  ];
  agenda.forEach((a, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + (col * 6.3);
    const y = 2.5 + (row * 2);
    s3.addShape(pptx.ShapeType.rect, { x, y, w: 6, h: 1.5, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
    s3.addText(a.num, { x: x + 0.2, y: y + 0.2, w: 1, h: 1.1, color: DONEZO_BLUE, fontSize: 32, bold: true, align: "center", valign: "middle" });
    s3.addText(a.title, { x: x + 1.2, y: y + 0.2, w: 4.6, h: 0.5, color: FG_DARK, fontSize: 20, bold: true });
    s3.addText(a.desc, { x: x + 1.2, y: y + 0.7, w: 4.6, h: 0.6, color: MUTED, fontSize: 14, valign: "top" });
  });

  // SLIDE 4: Intro Background
  const s4 = pptx.addSlide();
  addHeader(s4, "01", "Introduction");
  s4.addText("Background", { x: 0.5, y: 2.2, w: 5.5, h: 0.4, fill: { color: ACCENT }, line: { color: DONEZO_BLUE }, color: DONEZO_BLUE, fontSize: 12, bold: true, align: "center", valign: "middle" });
  s4.addText("Every HTU undergraduate must complete a mandatory industrial attachment before graduating, a requirement governed by Ghana's TVET framework.\n\nThe attachment places students in real companies, exposing them to practical skills and professional environments that classroom instruction cannot fully replicate.", { x: 0.5, y: 3.0, w: 5.5, h: 3, color: FG_DARK, fontSize: 16, valign: "top" });
  
  s4.addShape(pptx.ShapeType.rect, { x: 6.5, y: 2.2, w: 6.3, h: 4.8, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
  s4.addText("Theoretical Grounding: Kolb (1984)", { x: 6.8, y: 2.5, w: 5.7, h: 0.4, fill: { color: DONEZO_BLUE }, color: FG_LIGHT, fontSize: 12, bold: true, align: "center", valign: "middle" });
  s4.addText("Kolb's Experiential Learning Theory underpins the requirement. Deep competence develops through a four-stage cycle:", { x: 6.8, y: 3.2, w: 5.7, h: 1, color: FG_DARK, fontSize: 14, valign: "top" });
  s4.addText("• Concrete experience\n• Reflective observation\n• Abstract conceptualisation\n• Active experimentation", { x: 7.2, y: 4.2, w: 5.3, h: 1.5, color: FG_DARK, fontSize: 14, bold: true, valign: "top" });
  s4.addText("A workplace placement sustains this full cycle over weeks or months.", { x: 6.8, y: 5.9, w: 5.7, h: 0.8, fill: { color: ACCENT }, color: FG_DARK, fontSize: 12, align: "center", valign: "middle" });

  // SLIDE 5: Evidence
  const s5 = pptx.addSlide();
  addHeader(s5, "01", "Introduction", "Evidence from the Literature");
  
  s5.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.5, w: 3.8, h: 4, fill: { color: DONEZO_BLUE } });
  s5.addText("Employment outcomes", { x: 0.8, y: 3.2, w: 3.2, h: 0.5, color: FG_LIGHT, fontSize: 20, bold: true });
  s5.addText("Ababio et al. (2024)", { x: 0.8, y: 3.8, w: 3.2, h: 0.3, color: FG_LIGHT, fontSize: 12, bold: true });
  s5.addText("Students who completed structured attachment had measurably higher employment rates within one year of graduation.", { x: 0.8, y: 4.2, w: 3.2, h: 2, color: FG_LIGHT, fontSize: 13, valign: "top" });

  s5.addShape(pptx.ShapeType.rect, { x: 4.7, y: 2.5, w: 3.8, h: 4, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
  s5.addText("Practical skills", { x: 5.0, y: 3.2, w: 3.2, h: 0.5, color: FG_DARK, fontSize: 20, bold: true });
  s5.addText("Aboagye & Puoza (2021)", { x: 5.0, y: 3.8, w: 3.2, h: 0.3, color: DONEZO_BLUE, fontSize: 12, bold: true });
  s5.addText("Quality of practical exposure was more predictive of graduate employment than academic grade.", { x: 5.0, y: 4.2, w: 3.2, h: 2, color: MUTED, fontSize: 13, valign: "top" });

  s5.addShape(pptx.ShapeType.rect, { x: 8.9, y: 2.5, w: 3.8, h: 4, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
  s5.addText("Soft competencies", { x: 9.2, y: 3.2, w: 3.2, h: 0.5, color: FG_DARK, fontSize: 20, bold: true });
  s5.addText("Adegbite & Hoole (2024)", { x: 9.2, y: 3.8, w: 3.2, h: 0.3, color: DONEZO_BLUE, fontSize: 12, bold: true });
  s5.addText("Work-integrated learning has a statistically significant positive effect on communication and teamwork.", { x: 9.2, y: 4.2, w: 3.2, h: 2, color: MUTED, fontSize: 13, valign: "top" });

  // SLIDE 6: Problems 1 & 2
  const s6 = pptx.addSlide();
  addHeader(s6, "02", "Problem Statement", "Five chronic weaknesses in HTU's current paper-based attachment process:");
  
  const addProbCard = (slide: PptxGenJS.Slide, x: number, num: string, title: string, desc: string) => {
    slide.addShape(pptx.ShapeType.ellipse, { x, y: 2.5, w: 0.6, h: 0.6, fill: { color: ACCENT } });
    slide.addText(num, { x, y: 2.5, w: 0.6, h: 0.6, color: DONEZO_BLUE, fontSize: 14, bold: true, align: "center", valign: "middle" });
    slide.addText(title, { x: x + 0.8, y: 2.5, w: 4.8, h: 0.6, color: FG_DARK, fontSize: 18, bold: true, valign: "middle" });
    slide.addShape(pptx.ShapeType.rect, { x, y: 3.3, w: 5.8, h: 3.5, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
    slide.addText(desc, { x: x + 0.2, y: 3.5, w: 5.4, h: 3.1, color: MUTED, fontSize: 14, valign: "top" });
  };
  addProbCard(s6, 0.5, "1", "Manual document production", "Placement letters are typed by hand, one at a time. Errors require the student to return to the liaison office and redo the process.");
  addProbCard(s6, 6.8, "2", "Paper logbook", "Students carry a paper notebook to the workplace and the industry supervisor signs it weekly. Real-time monitoring is impossible.");

  // SLIDE 7: Problems 3, 4, 5
  const s7 = pptx.addSlide();
  addHeader(s7, "02", "Problem Statement", "(Continued)");
  
  const addSmallProbCard = (slide: PptxGenJS.Slide, x: number, num: string, title: string, desc: string) => {
    slide.addShape(pptx.ShapeType.ellipse, { x, y: 2.2, w: 0.6, h: 0.6, fill: { color: ACCENT } });
    slide.addText(num, { x, y: 2.2, w: 0.6, h: 0.6, color: DONEZO_BLUE, fontSize: 14, bold: true, align: "center", valign: "middle" });
    slide.addText(title, { x: x + 0.8, y: 2.2, w: 3, h: 0.6, color: FG_DARK, fontSize: 16, bold: true, valign: "middle" });
    slide.addShape(pptx.ShapeType.rect, { x, y: 3.0, w: 3.8, h: 3.5, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
    slide.addText(desc, { x: x + 0.2, y: 3.2, w: 3.4, h: 3.1, color: MUTED, fontSize: 12, valign: "top" });
  };
  addSmallProbCard(s7, 0.5, "3", "Unverified attendance", "No independent mechanism exists to verify that a student was actually present at the host company.");
  addSmallProbCard(s7, 4.7, "4", "Back-loaded assessment", "Assessment relies almost entirely on a single industry supervisor's recall at term end.");
  addSmallProbCard(s7, 8.9, "5", "Reactive oversight", "The Central Liaison Office has no real-time view of how many students are on active placement.");

  // SLIDE 8: Aim & Obj 1-3
  const s8 = pptx.addSlide();
  addHeader(s8, "03", "Aim & Objectives");
  
  s8.addShape(pptx.ShapeType.rect, { x: 0.5, y: 2.2, w: 12.3, h: 1.5, fill: { color: ACCENT }, line: { color: DONEZO_BLUE } });
  s8.addText("Project Aim", { x: 0.8, y: 2.4, w: 1.5, h: 0.3, fill: { color: DONEZO_BLUE }, color: FG_LIGHT, fontSize: 10, bold: true, align: "center", valign: "middle" });
  s8.addText("To design, develop, and evaluate a web-based Industrial Attachment Management System (IAMS) for Ho Technical University.", { x: 0.8, y: 2.8, w: 11.7, h: 0.8, color: FG_DARK, fontSize: 16, bold: true, valign: "top" });

  const addObjCard = (slide: PptxGenJS.Slide, x: number, num: string, title: string, desc: string) => {
    slide.addShape(pptx.ShapeType.rect, { x, y: 4, w: 3.8, h: 3, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
    slide.addText(num, { x: x + 0.2, y: 4.2, w: 3.4, h: 0.6, color: DONEZO_BLUE, fontSize: 24, bold: true });
    slide.addText(title, { x: x + 0.2, y: 4.8, w: 3.4, h: 0.4, color: FG_DARK, fontSize: 16, bold: true });
    slide.addText(desc, { x: x + 0.2, y: 5.2, w: 3.4, h: 1.6, color: MUTED, fontSize: 12, valign: "top" });
  };
  addObjCard(s8, 0.5, "01", "Investigate", "Investigate the current paper-based attachment process at HTU.");
  addObjCard(s8, 4.7, "02", "Design architecture", "Design a role-based system architecture supporting six roles.");
  addObjCard(s8, 8.9, "03", "Implement core features", "Implement a digital logbook with GPS-verified daily attendance.");

  // SLIDE 9: Obj 4-5
  const s9 = pptx.addSlide();
  addHeader(s9, "03", "Objectives", "(Continued)");
  
  const addBigObjCard = (slide: PptxGenJS.Slide, x: number, num: string, title: string, desc: string) => {
    slide.addShape(pptx.ShapeType.rect, { x, y: 2.2, w: 6, h: 4.8, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
    slide.addText(num, { x: x + 0.5, y: 2.7, w: 5, h: 0.8, color: DONEZO_BLUE, fontSize: 36, bold: true });
    slide.addText(title, { x: x + 0.5, y: 3.7, w: 5, h: 0.5, color: FG_DARK, fontSize: 24, bold: true });
    slide.addText(desc, { x: x + 0.5, y: 4.4, w: 5, h: 2, color: MUTED, fontSize: 16, valign: "top" });
  };
  addBigObjCard(s9, 0.5, "04", "Test", "Test the system against a defined set of acceptance criteria.");
  addBigObjCard(s9, 6.8, "05", "Evaluate", "Evaluate the system's usability with a representative group.");

  // SLIDE 10: Meth Stack
  const s10 = pptx.addSlide();
  addHeader(s10, "04", "Methodology");
  
  s10.addText("Development Approach", { x: 0.5, y: 2.2, w: 5.5, h: 0.4, fill: { color: ACCENT }, line: { color: DONEZO_BLUE }, color: DONEZO_BLUE, fontSize: 12, bold: true, align: "center", valign: "middle" });
  s10.addText("Agile / Iterative Development", { x: 0.5, y: 2.8, w: 5.5, h: 0.6, color: FG_DARK, fontSize: 24, bold: true });
  s10.addText("Requirements were gathered through structured interviews. The system was designed and built in iterative sprints.", { x: 0.5, y: 3.5, w: 5.5, h: 3, color: MUTED, fontSize: 16, valign: "top" });

  s10.addShape(pptx.ShapeType.rect, { x: 6.5, y: 2.2, w: 6.3, h: 4.8, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
  s10.addText("Technology Stack", { x: 6.8, y: 2.5, w: 5.7, h: 0.4, fill: { color: DONEZO_BLUE }, color: FG_LIGHT, fontSize: 12, bold: true, align: "center", valign: "middle" });
  
  const addTechRow = (y: number, label: string, val: string) => {
    s10.addText(label, { x: 6.8, y, w: 5.7, h: 0.3, color: DONEZO_BLUE, fontSize: 10, bold: true });
    s10.addText(val, { x: 6.8, y: y + 0.3, w: 5.7, h: 0.4, color: FG_DARK, fontSize: 14, bold: true });
    s10.addShape(pptx.ShapeType.line, { x: 6.8, y: y + 0.8, w: 5.7, h: 0, line: { color: DONEZO_BLUE } });
  };
  addTechRow(3.2, "BACKEND", "Laravel 11  |  PHP 8.3");
  addTechRow(4.1, "FRONTEND", "Vue.js  +  Progressive Web App (PWA)");
  addTechRow(5.0, "DATABASE", "PostgreSQL  +  Redis (cache & sessions)");
  addTechRow(5.9, "AUTH", "Google SSO (@htu.edu.gh)  |  Magic-link URLs");

  // SLIDE 11: Meth Lifecycle
  const s11 = pptx.addSlide();
  addHeader(s11, "04", "Methodology", "(Continued)");
  
  s11.addText("System Lifecycle - 6 Phases", { x: 0.5, y: 2.2, w: 5.5, h: 0.4, fill: { color: ACCENT }, line: { color: DONEZO_BLUE }, color: DONEZO_BLUE, fontSize: 12, bold: true, align: "center", valign: "middle" });
  const phases = [
    "Application & company approval",
    "Document generation",
    "Academic supervisor assignment",
    "GPS-verified daily attendance",
    "Weekly logbook & evaluation",
    "Multi-source grading archive"
  ];
  s11.addShape(pptx.ShapeType.line, { x: 0.7, y: 3, w: 0, h: 3, line: { color: DONEZO_BLUE, width: 2 } });
  phases.forEach((p, i) => {
    const y = 3 + (i * 0.6);
    s11.addShape(pptx.ShapeType.ellipse, { x: 0.5, y, w: 0.4, h: 0.4, fill: { color: DONEZO_BLUE } });
    s11.addText((i + 1).toString(), { x: 0.5, y, w: 0.4, h: 0.4, color: FG_LIGHT, fontSize: 10, bold: true, align: "center", valign: "middle" });
    s11.addText(p, { x: 1.1, y, w: 4.9, h: 0.4, color: FG_DARK, fontSize: 14, bold: true, valign: "middle" });
  });

  s11.addShape(pptx.ShapeType.rect, { x: 6.5, y: 2.2, w: 6.3, h: 2, fill: { color: "F9FAFB" }, line: { color: DONEZO_BLUE } });
  s11.addText("Six User Roles", { x: 6.8, y: 2.4, w: 5.7, h: 0.3, fill: { color: DONEZO_BLUE }, color: FG_LIGHT, fontSize: 10, bold: true, align: "center", valign: "middle" });
  const roles = ["Central Liaison", "Dept. Liaison", "Student", "Academic Sup.", "Industry Sup.", "Head of Dept."];
  roles.forEach((r, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 6.8 + (col * 1.9);
    const y = 2.8 + (row * 0.6);
    s11.addShape(pptx.ShapeType.rect, { x, y, w: 1.8, h: 0.5, fill: { color: "FFFFFF" }, line: { color: DONEZO_BLUE } });
    s11.addText(r, { x, y, w: 1.8, h: 0.5, color: FG_DARK, fontSize: 9, bold: true, align: "center", valign: "middle" });
  });

  s11.addShape(pptx.ShapeType.rect, { x: 6.5, y: 4.4, w: 6.3, h: 2.6, fill: { color: DONEZO_BLUE } });
  s11.addText("[ Mobile Logbook Mockup Image is in Web View ]", { x: 6.5, y: 4.4, w: 6.3, h: 2.6, color: FG_LIGHT, fontSize: 14, align: "center", valign: "middle" });

  // SLIDE 12: Thank You
  const s12 = pptx.addSlide();
  s12.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: "100%", h: "100%", fill: { color: DONEZO_BLUE } });
  s12.addImage({ path: "/htu-logo.png", x: 6.16, y: 0.5, w: 1, h: 1 });
  s12.addText("Thank You", { x: 0.5, y: 1.5, w: 12.3, h: 1.5, color: FG_LIGHT, fontSize: 80, bold: true, align: "center" });
  s12.addText("We welcome your questions.", { x: 0.5, y: 3.0, w: 12.3, h: 0.5, color: "E3F3FF", fontSize: 24, align: "center" });
  
  const addStatCard = (x: number, num: string, label: string) => {
    s12.addShape(pptx.ShapeType.rect, { x, y: 4, w: 3.5, h: 2, fill: { color: "FFFFFF" } });
    s12.addText(num, { x, y: 4.2, w: 3.5, h: 0.8, color: DONEZO_BLUE, fontSize: 40, bold: true, align: "center" });
    s12.addText(label, { x: 0.2 + x, y: 5.0, w: 3.1, h: 0.6, color: MUTED, fontSize: 10, bold: true, align: "center" });
  };
  addStatCard(0.9, "153", "TOTAL FUNCTIONAL FEATURES IMPLEMENTED");
  addStatCard(4.9, "6", "USER ROLES SUPPORTED");
  addStatCard(8.9, "9", "SYSTEM MODULES");

  s12.addText("Ho Technical University | Faculty of Applied Sciences and Technology\nIAMS Project Defense | 14 - 15 May 2026", { x: 0.5, y: 6.5, w: 12.3, h: 0.8, color: FG_LIGHT, fontSize: 10, bold: true, align: "center" });

  await pptx.writeFile({ fileName: "IAMS_Presentation.pptx" });
}
