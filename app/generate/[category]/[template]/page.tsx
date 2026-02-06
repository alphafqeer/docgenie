"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getTemplateById, getCategory } from "@/lib/templates";
import SmartEditor from "@/components/SmartEditor";
import { useEntitlement } from "@/components/EntitlementContext";
import type { Template, Category } from "@/lib/templates/types";

export default function TemplatePage() {
  const params = useParams();
  const router = useRouter();
  const { isPro, isLoading } = useEntitlement();
  const [template, setTemplate] = useState<Template | null>(null);
  const [category, setCategory] = useState<Category | null>(null);

  const categoryId = params.category as string;
  const templateId = params.template as string;

  useEffect(() => {
    const cat = getCategory(categoryId);
    const tpl = getTemplateById(categoryId, templateId);
    
    if (!cat || !tpl) {
      router.push("/dashboard");
      return;
    }
    
    setCategory(cat);
    setTemplate(tpl);
  }, [categoryId, templateId, router]);

  if (isLoading || !template || !category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50 flex items-center justify-center">
        <div className="animate-pulse text-violet-600">Loading...</div>
      </div>
    );
  }

  if (template.isPremium && !isPro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50">
        <div className="max-w-md mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl border border-violet-200 shadow-lg p-8 text-center">
            <div style={{ width: '64px', height: '64px' }} className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg style={{ width: '32px', height: '32px' }} className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Premium Template</h1>
            <p className="text-gray-600 mb-2">{template.title}</p>
            <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-violet-500 to-violet-600 px-3 py-1 rounded-full mb-6">
              PRO
            </span>
            <p className="text-gray-500 mb-6">
              This template requires a Pro subscription. Upgrade to unlock all 101 templates and premium features.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                href={`/generate/${categoryId}/select`}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Go Back
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium hover:from-violet-600 hover:to-purple-700 transition-colors"
              >
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/dashboard" className="hover:text-violet-600 transition-colors">Dashboard</Link>
          <span className="mx-2">/</span>
          <Link href={`/generate/${categoryId}/select`} className="hover:text-violet-600 transition-colors">{category.title}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{template.title}</span>
        </nav>

        <div className="bg-white rounded-2xl border border-violet-100 shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{template.title}</h1>
          {template.description && <p className="text-gray-600">{template.description}</p>}
          {template.isPremium && (
            <span className="inline-block mt-2 text-xs font-bold text-white bg-gradient-to-r from-violet-500 to-violet-600 px-2 py-1 rounded-full">
              PRO
            </span>
          )}
        </div>

        <SmartEditor baseTemplate={template.content} fileName={`${template.id}.txt`} />
      </div>
    </div>
  );
}
