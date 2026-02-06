"use client";
import React from "react";

type Props = {
  initialContent: string;
  fileName: string;
  applyText?: string | null;
  onContentChange?: (content: string) => void;
  applySignal?: number;
};

export default function EditorClient({ initialContent, fileName, applyText, onContentChange, applySignal }: Props) {
  const [value, setValue] = React.useState(initialContent || "");
  const [userEdited, setUserEdited] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const prevSignalRef = React.useRef<number | null>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      alert("Copy failed");
    }
  };

  const download = () => {
    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  React.useEffect(() => {
    if (typeof applySignal === "number") {
      if (prevSignalRef.current !== applySignal) {
        prevSignalRef.current = applySignal;
        setValue(applyText ?? "");
        setUserEdited(false);
        if (onContentChange) onContentChange(applyText ?? "");
      }
      return;
    }

    if (!userEdited && applyText != null && applyText !== value) {
      setValue(applyText);
      if (onContentChange) onContentChange(applyText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applySignal, applyText]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <button 
          onClick={copy} 
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            copied 
              ? "bg-emerald-500 text-white" 
              : "bg-violet-500 hover:bg-violet-600 text-white"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button 
          onClick={download} 
          className="rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 px-4 py-2 text-sm font-medium transition-colors"
        >
          Download
        </button>
      </div>
      <textarea
        className="w-full min-h-[400px] resize-y rounded-xl border border-violet-200 bg-violet-50/30 px-4 py-3 text-gray-900 placeholder:text-gray-400 leading-7 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setUserEdited(true);
          if (onContentChange) onContentChange(e.target.value);
        }}
      />
    </div>
  );
}
