"use client";

import Link from "next/link";
import { useSubscription } from "@/components/SubscriptionContext";

export default function AccountPage() {
  const { tier, documentsUsed, documentsLimit } = useSubscription();
  const isPro = tier === "pro" || tier === "team";

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-50">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Account</h1>
        
        <div className="bg-white rounded-2xl border border-violet-100 shadow-sm p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Subscription</h2>
            {isPro ? (
              <span className="text-xs font-bold text-white bg-gradient-to-r from-violet-500 to-violet-600 px-3 py-1 rounded-full">
                PRO
              </span>
            ) : (
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                FREE
              </span>
            )}
          </div>
          
          {!isPro && (
            <>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Documents this month</span>
                  <span className="font-medium text-gray-900">{documentsUsed} / {documentsLimit === Infinity ? '∞' : documentsLimit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-violet-500 to-violet-600 h-2 rounded-full transition-all"
                    style={{ width: `${documentsLimit === Infinity ? 0 : Math.min((documentsUsed / documentsLimit) * 100, 100)}%` }}
                  />
                </div>
              </div>
              <Link
                href="/pricing"
                className="block w-full text-center bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-medium py-3 rounded-xl transition-all"
              >
                Upgrade to Pro
              </Link>
            </>
          )}
          
          {isPro && (
            <p className="text-gray-600 text-sm">
              You have unlimited document creation and access to all premium templates.
            </p>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-violet-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Quick Links</h2>
          <div className="space-y-3">
            <Link
              href="/pricing"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-violet-50 transition-colors"
            >
              <span className="text-gray-700">View Plans</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-violet-50 transition-colors"
            >
              <span className="text-gray-700">Dashboard</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
