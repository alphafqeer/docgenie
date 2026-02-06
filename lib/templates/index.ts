import type { Category, DocTemplate } from "./types";
export * from "./types";
export { hrTemplates } from "./hr";
export { legalTemplates } from "./legal";
export { businessTemplates } from "./business";
export { invoicingTemplates } from "./invoicing";
export { realestateTemplates } from "./realestate";
export { medicalTemplates } from "./medical";

import { hrTemplates } from "./hr";
import { legalTemplates } from "./legal";
import { businessTemplates } from "./business";
import { invoicingTemplates } from "./invoicing";
import { realestateTemplates } from "./realestate";
import { medicalTemplates } from "./medical";

export const CATEGORIES: Record<string, { title: string; description: string }> = {
  hr: { title: "HR & Employment", description: "Letters, contracts, and certificates for HR needs" },
  legal: { title: "Legal Documents", description: "Agreements, notices, and legal templates" },
  business: { title: "Business Documents", description: "Proposals, agreements, and business planning" },
  invoicing: { title: "Invoicing & Finance", description: "Invoices, budgets, and financial documents" },
  realestate: { title: "Real Estate", description: "Leases, agreements, and property documents" },
  medical: { title: "Medical & Healthcare", description: "Patient forms, consents, and medical letters" },
};

const all: Record<string, DocTemplate[]> = {
  hr: hrTemplates,
  legal: legalTemplates,
  business: businessTemplates,
  invoicing: invoicingTemplates,
  realestate: realestateTemplates,
  medical: medicalTemplates,
};

export function getCategoryTemplates(category: string): DocTemplate[] {
  return all[category] ?? [];
}

export function getTemplateById(category: string, id: string): DocTemplate | null {
  return (all[category] ?? []).find((t) => t.id === id) ?? null;
}

export function getCategory(categoryId: string) {
  const c = CATEGORIES[categoryId];
  if (!c) return null;
  return { id: categoryId as keyof typeof CATEGORIES, title: c.title, description: c.description } as Category;
}

export function getAllCategoryIds(): string[] {
  return Object.keys(CATEGORIES);
}

export function getAllTemplateParams(): { category: string; template: string }[] {
  const params: { category: string; template: string }[] = [];
  for (const category of Object.keys(all)) {
    for (const tpl of all[category]) {
      params.push({ category, template: tpl.id });
    }
  }
  return params;
}

export function getPremiumTemplateCount(): number {
  return Object.values(all).flat().filter(t => t.isPremium).length;
}

export function getFreeTemplateCount(): number {
  return Object.values(all).flat().filter(t => !t.isPremium).length;
}

export function getTotalTemplateCount(): number {
  return Object.values(all).flat().length;
}
