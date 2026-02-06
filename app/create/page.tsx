import Link from "next/link";
import { CATEGORIES } from "@/lib/templates";

export default function CreatePage() {
  const categories = Object.entries(CATEGORIES);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Document</h1>
        <p className="text-gray-600 mb-6">Choose a category to get started</p>
        
        <div className="grid grid-cols-2 gap-4">
          {categories.map(([id, cat]) => (
            <Link
              key={id}
              href={`/generate/${id}/select`}
              className="bg-white rounded-xl border border-violet-100 p-5 hover:border-violet-300 hover:shadow-md transition-all group text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors text-sm">
                {cat.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
