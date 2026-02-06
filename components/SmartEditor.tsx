"use client";
import React from "react";
import EditorClient from "./EditorClient";
import { extractPlaceholders, applyFields } from "@/lib/templates/fields";

export default function SmartEditor({ baseTemplate, fileName }: { baseTemplate: string; fileName: string }) {
  const placeholders = React.useMemo(() => extractPlaceholders(baseTemplate), [baseTemplate]);

  const initialFields = React.useMemo(() => {
    const map: Record<string, string> = {};
    placeholders.forEach((p) => (map[p] = ""));
    return map;
  }, [placeholders]);

  const [fields, setFields] = React.useState<Record<string, string>>(initialFields);
  const [appliedText, setAppliedText] = React.useState<string>(() => applyFields(baseTemplate, initialFields));
  const [editorContent, setEditorContent] = React.useState<string>(appliedText);
  const [applySignal, setApplySignal] = React.useState<number>(0);

  React.useEffect(() => {
    const gen = applyFields(baseTemplate, fields);
    setAppliedText(gen);
    setEditorContent(gen);
    setApplySignal((s) => s + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseTemplate]);

  const updateField = (key: string, value: string) => {
    setFields((s) => {
      const next = { ...s, [key]: value };
      setAppliedText(applyFields(baseTemplate, next));
      return next;
    });
  };

  const resetFields = () => {
    const empty: Record<string, string> = {};
    placeholders.forEach((p) => (empty[p] = ""));
    setFields(empty);
    setAppliedText(applyFields(baseTemplate, empty));
  };

  const reapplyFieldsToEditor = () => {
    const gen = applyFields(baseTemplate, fields);
    setAppliedText(gen);
    setEditorContent(gen);
    setApplySignal((s) => s + 1);
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex-1 bg-white rounded-2xl border border-violet-100 shadow-sm p-4">
        <EditorClient
          initialContent={editorContent}
          fileName={fileName}
          applyText={editorContent}
          applySignal={applySignal}
          onContentChange={(c) => setEditorContent(c)}
        />
      </div>

      <aside className="w-full lg:w-80 flex-shrink-0">
        <div className="bg-white rounded-2xl border border-violet-100 shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-gray-900">Smart Fields</div>
            <div className="text-xs text-gray-400">Auto-detect</div>
          </div>

          {placeholders.length === 0 ? (
            <div className="text-sm text-gray-500">No smart fields detected in this template.</div>
          ) : (
            <div className="flex flex-col gap-3">
              {placeholders.map((ph) => (
                <div key={ph} className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1 font-medium">{ph.replace(/^[\[]|[\]]$/g, "")}</label>
                  <input
                    className="w-full rounded-lg border border-violet-200 bg-violet-50/50 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 text-sm"
                    value={fields[ph] ?? ""}
                    placeholder={`Enter ${ph.replace(/^[\[]|[\]]$/g, "")}`}
                    onChange={(e) => updateField(ph, e.target.value)}
                  />
                </div>
              ))}

              <div className="flex gap-2 mt-4">
                <button onClick={resetFields} className="flex-1 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 px-3 py-2 text-sm font-medium transition-colors">Reset</button>
                <button onClick={reapplyFieldsToEditor} className="flex-1 rounded-lg bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 text-sm font-medium transition-colors">Apply</button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 bg-white rounded-2xl border border-violet-100 shadow-sm p-4">
          <div className="text-sm text-gray-500 font-medium mb-2">Preview</div>
          <div className="text-gray-800 leading-7 whitespace-pre-wrap text-sm max-h-64 overflow-y-auto">{appliedText}</div>
        </div>
      </aside>
    </div>
  );
}
