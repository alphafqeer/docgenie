import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";

interface PdfRequest {
  title: string;
  contentText: string;
  planTier: "free" | "pro" | "team";
  branding?: {
    companyName?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: PdfRequest = await request.json();
    const { title, contentText, planTier, branding } = body;

    if (!title || !contentText) {
      return NextResponse.json(
        { error: "Missing required fields: title and contentText" },
        { status: 400 }
      );
    }

    const pdfBuffer = await generatePdf({
      title,
      contentText,
      planTier: planTier || "free",
      branding,
    });

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf"`,
        "Content-Length": pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

async function generatePdf(options: PdfRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 50, bottom: 50, left: 50, right: 50 },
      bufferPages: true,
    });

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const pageWidth = doc.page.width - 100;
    const isFree = options.planTier === "free";

    if (options.branding?.companyName && !isFree) {
      doc.fontSize(10).fillColor("#666666").text(options.branding.companyName, {
        align: "right",
      });
      doc.moveDown(0.5);
    }

    doc.fontSize(24).fillColor("#1e293b").text(options.title, {
      align: "center",
    });
    doc.moveDown(1);

    doc.moveTo(50, doc.y).lineTo(50 + pageWidth, doc.y).stroke("#e2e8f0");
    doc.moveDown(1);

    doc.fontSize(11).fillColor("#374151");
    
    const lines = options.contentText.split("\n");
    for (const line of lines) {
      if (line.trim() === "") {
        doc.moveDown(0.5);
      } else {
        doc.text(line, {
          align: "left",
          width: pageWidth,
          lineGap: 4,
        });
      }
    }

    if (isFree) {
      doc.moveDown(2);
      doc.moveTo(50, doc.y).lineTo(50 + pageWidth, doc.y).stroke("#e2e8f0");
      doc.moveDown(0.5);
      
      doc.fontSize(9).fillColor("#8B5CF6").text("Generated with DocGenie", {
        align: "center",
      });
    }

    doc.end();
  });
}
