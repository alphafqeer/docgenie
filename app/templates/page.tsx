import Link from "next/link";
import { CATEGORIES } from "@/lib/templates";

export default function TemplatesPage() {
  const categories = Object.entries(CATEGORIES);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">All Templates</h1>
        <p className="text-gray-600 mb-6">Browse templates by category</p>
        
        <div className="grid gap-4">
          {categories.map(([id, cat]) => (
            <Link
              key={id}
              href={`/generate/${id}/select`}
              className="bg-white rounded-xl border border-violet-100 p-4 hover:border-violet-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
                </div>
                <svg style={{ width: '20px', height: '20px', flexShrink: 0 }} className="text-gray-400 group-hover:text-violet-600 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
