import { jsPDF } from "jspdf";
import { toJpeg } from "html-to-image";

/**
 * Generates a full landscape PDF of all presentation slides.
 * Each slide is rendered at 1920×1080 in an off-screen fixed container,
 * captured via html-to-image, then assembled into a jsPDF document.
 */
export async function generatePDF(
  slideComponents: React.ComponentType[],
  onProgress?: (current: number, total: number) => void
) {
  const { createRoot } = await import("react-dom/client");
  const React = await import("react");

  // 16:9 landscape PDF (in mm)
  const SLIDE_W = 1920;
  const SLIDE_H = 1080;
  const PDF_W_MM = 297;   // A4 landscape width in mm
  const PDF_H_MM = 167.1; // 297 × (9/16) = exact 16:9

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [PDF_W_MM, PDF_H_MM],
  });

  // CSS custom properties from :root — injected so off-screen container
  // inherits the correct design tokens even when detached from document flow
  const CSS_VARS = `
    --primary:#0B5ED7; --primary-fg:#ffffff; --accent:#E3F3FF;
    --accent-fg:#0B5ED7; --bg:#ffffff; --fg:#1a1a2e;
    --card:#f9fafb; --muted:#f3f4f6; --muted-fg:#6b7280;
    --border:#e5e7eb;
  `;

  // Fixed container just above the viewport
  const offscreen = document.createElement("div");
  offscreen.style.cssText = `
    position: fixed;
    top: -${SLIDE_H + 50}px;
    left: 0;
    width: ${SLIDE_W}px;
    height: ${SLIDE_H}px;
    overflow: hidden;
    background: #ffffff;
    ${CSS_VARS}
    font-family: 'Poppins', system-ui, sans-serif;
    z-index: -1;
  `;
  document.body.appendChild(offscreen);

  try {
    for (let i = 0; i < slideComponents.length; i++) {
      onProgress?.(i + 1, slideComponents.length);

      const SlideComp = slideComponents[i];

      // Fresh wrapper for each slide
      const wrapper = document.createElement("div");
      wrapper.style.cssText = `
        width: ${SLIDE_W}px;
        height: ${SLIDE_H}px;
        overflow: hidden;
        position: relative;
        background: #ffffff;
      `;
      offscreen.innerHTML = "";
      offscreen.appendChild(wrapper);

      // Mount the slide component
      const root = createRoot(wrapper);
      root.render(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(SlideComp)
        )
      );

      // Wait for render, images, and spring animations to settle
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));

      // Capture
      const imgData = await toJpeg(wrapper, {
        quality: 0.95,
        width: SLIDE_W,
        height: SLIDE_H,
        backgroundColor: '#ffffff',
        pixelRatio: 2 // Higher resolution for crisp text
      });

      if (i > 0) pdf.addPage([PDF_W_MM, PDF_H_MM], "landscape");
      pdf.addImage(imgData, "JPEG", 0, 0, PDF_W_MM, PDF_H_MM);

      root.unmount();
    }
  } finally {
    // Always clean up even if export fails mid-way
    if (document.body.contains(offscreen)) {
      document.body.removeChild(offscreen);
    }
  }

  pdf.save("IAMS_Presentation.pdf");
}
