"use client";

import { useState } from "react";
import { useSubscription } from "./SubscriptionContext";
import { downloadDocument, getAvailableFormats, ExportOptions } from "@/lib/export";
import { trackDocumentCreation } from "@/lib/analytics";
import Link from "next/link";

interface ExportButtonProps {
  content: string;
  filename: string;
  templateId: string;
  category: string;
}

export default function ExportButton({ content, filename, templateId, category }: ExportButtonProps) {
  const { tier, createDocument, isPro } = useSubscription();
  const [isOpen, setIsOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  
  const formats = getAvailableFormats(tier);
  
  const handleExport = async (format: "txt" | "pdf" | "docx") => {
    setIsExporting(true);
    
    try {
      const result = await createDocument();
      
      if (!result.success) {
        setIsExporting(false);
        return;
      }
      
      await trackDocumentCreation(templateId, category);
      
      const options: ExportOptions = {
        format,
        filename,
        content,
        tier,
        addWatermark: tier === "free",
      };
      
      await downloadDocument(options);
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
      setIsOpen(false);
    }
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isExporting}
        className="btn-primary flex items-center gap-2"
      >
        {isExporting ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Exporting...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </>
        )}
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#e2e8f0] z-20 overflow-hidden">
            <div className="p-3 border-b border-[#e2e8f0]">
              <p className="text-sm font-medium text-[#1e293b]">Export Document</p>
              {!isPro && (
                <p className="text-xs text-[#f59e0b] mt-1">Free exports include watermark</p>
              )}
            </div>
            
            <div className="py-2">
              {formats.map(({ format, label, available }) => (
                <button
                  key={format}
                  onClick={() => available && handleExport(format as "txt" | "pdf" | "docx")}
                  disabled={!available || isExporting}
                  className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between ${
                    available 
                      ? "hover:bg-[#f1f5f9] text-[#1e293b]" 
                      : "text-[#94a3b8] cursor-not-allowed"
                  }`}
                >
                  <span>{label}</span>
                  {!available && (
                    <span className="text-xs font-medium text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-0.5 rounded">
                      PRO
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {!isPro && (
              <div className="p-3 bg-[#f8fafc] border-t border-[#e2e8f0]">
                <Link 
                  href="/pricing"
                  className="block text-center text-sm font-medium text-[#7c3aed] hover:underline"
                >
                  Upgrade for more formats →
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
