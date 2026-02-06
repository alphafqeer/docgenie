import { SubscriptionTier } from "@/lib/subscription";

const WATERMARK_TEXT = "Created with DocGenie - Upgrade to Pro to remove watermark";
const WATERMARK_URL = "docgenie.app/upgrade";

export interface ExportOptions {
  format: "txt" | "pdf" | "docx";
  filename: string;
  content: string;
  tier: SubscriptionTier;
  addWatermark?: boolean;
}

export function shouldAddWatermark(tier: SubscriptionTier): boolean {
  return tier === "free";
}

export function addWatermarkToContent(content: string): string {
  const divider = "\n" + "─".repeat(60) + "\n";
  const watermark = `${divider}${WATERMARK_TEXT}\n${WATERMARK_URL}${divider}`;
  return watermark + "\n" + content + "\n" + watermark;
}

export function addHeaderWatermark(content: string): string {
  return `[DocGenie Free - ${WATERMARK_URL}]\n\n${content}`;
}

export function addFooterWatermark(content: string): string {
  return `${content}\n\n---\nGenerated with DocGenie Free | Upgrade to Pro: ${WATERMARK_URL}`;
}

export async function exportDocument(options: ExportOptions): Promise<Blob> {
  const { format, content, tier, filename } = options;
  const needsWatermark = shouldAddWatermark(tier);
  
  let finalContent = content;
  
  if (needsWatermark) {
    finalContent = addFooterWatermark(addHeaderWatermark(content));
  }
  
  switch (format) {
    case "txt":
      return exportAsTxt(finalContent);
    case "pdf":
      return exportAsPdf(finalContent, filename, needsWatermark);
    case "docx":
      return exportAsDocx(finalContent, filename, needsWatermark);
    default:
      return exportAsTxt(finalContent);
  }
}

function exportAsTxt(content: string): Blob {
  return new Blob([content], { type: "text/plain;charset=utf-8" });
}

async function exportAsPdf(content: string, filename: string, addWatermark: boolean): Promise<Blob> {
  const response = await fetch("/api/pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: filename,
      contentText: content,
      planTier: addWatermark ? "free" : "pro",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate PDF");
  }

  return await response.blob();
}

async function exportAsDocx(content: string, filename: string, addWatermark: boolean): Promise<Blob> {
  return new Blob([content], { type: "text/plain;charset=utf-8" });
}

function contentToHtml(content: string, addWatermark: boolean): string {
  const escapedContent = content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
  
  const watermarkStyle = addWatermark ? `
    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); 
                font-size: 60px; color: rgba(124, 58, 237, 0.1); white-space: nowrap; z-index: -1;
                pointer-events: none;">
      DocGenie Free
    </div>
  ` : "";
  
  const watermarkHeader = addWatermark ? `
    <div style="text-align: center; padding: 10px; background: linear-gradient(135deg, #2563eb, #7c3aed); 
                color: white; margin-bottom: 20px; border-radius: 8px;">
      Created with DocGenie Free | 
      <a href="https://docgenie.app/upgrade" style="color: white;">Upgrade to Pro to remove watermark</a>
    </div>
  ` : "";
  
  const watermarkFooter = addWatermark ? `
    <div style="text-align: center; padding: 15px; margin-top: 30px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
      📄 Generated with <strong>DocGenie</strong> | 
      <a href="https://docgenie.app/upgrade" style="color: #7c3aed;">Upgrade to Pro</a> for watermark-free exports
    </div>
  ` : "";
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Document</title>
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
          line-height: 1.6;
          color: #1e293b;
          position: relative;
        }
        @media print {
          body { padding: 20px; }
        }
      </style>
    </head>
    <body>
      ${watermarkStyle}
      ${watermarkHeader}
      <div style="white-space: pre-wrap; font-size: 14px;">
        ${escapedContent}
      </div>
      ${watermarkFooter}
    </body>
    </html>
  `;
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function downloadDocument(options: ExportOptions): Promise<void> {
  const blob = await exportDocument(options);
  const extension = options.format;
  downloadBlob(blob, `${options.filename}.${extension}`);
}

export function getAvailableFormats(tier: SubscriptionTier): { format: string; label: string; available: boolean }[] {
  const isPro = tier === "pro" || tier === "team";
  
  return [
    { format: "txt", label: "Plain Text (.txt)", available: true },
    { format: "pdf", label: "PDF Document (.pdf)", available: true },
    { format: "docx", label: "Word Document (.docx)", available: isPro },
  ];
}
