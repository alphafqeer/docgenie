import Link from "next/link";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50">
      <div className="max-w-2xl mx-auto px-4 py-12 pb-24 text-center">
        <div className="bg-white rounded-2xl border border-violet-100 shadow-sm p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Documents</h1>
          <p className="text-gray-600 mb-6">Your saved documents will appear here.</p>
          <div className="inline-block bg-violet-100 text-violet-700 text-sm font-medium px-4 py-2 rounded-full">
            Coming Soon
          </div>
          <div className="mt-8">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
