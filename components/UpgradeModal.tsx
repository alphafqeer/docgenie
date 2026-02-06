"use client";

import { useSubscription } from "./SubscriptionContext";
import { trackUpgradeCompleted } from "@/lib/analytics";
import { upgradeSubscription } from "@/lib/subscription";
import Link from "next/link";

export default function UpgradeModal() {
  const { showUpgradeModal, setShowUpgradeModal, upgradePrompt, refresh } = useSubscription();

  if (!showUpgradeModal) return null;

  const handleUpgrade = async () => {
    await upgradeSubscription("pro");
    await trackUpgradeCompleted("pro");
    await refresh();
    setShowUpgradeModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowUpgradeModal(false)}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
        <button
          onClick={() => setShowUpgradeModal(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#1e293b] mb-2">{upgradePrompt.title}</h2>
          <p className="text-[#64748b]">{upgradePrompt.message}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {upgradePrompt.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#10b981]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#1e293b]">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          <button
            onClick={handleUpgrade}
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
          >
            {upgradePrompt.ctaText}
          </button>
          
          <Link
            href="/pricing"
            onClick={() => setShowUpgradeModal(false)}
            className="block w-full py-3 rounded-xl font-medium text-center text-[#64748b] hover:text-[#1e293b] hover:bg-gray-50 transition-all"
          >
            Compare all plans
          </Link>
        </div>

        <p className="text-xs text-center text-[#94a3b8] mt-4">
          7-day money-back guarantee. Cancel anytime.
        </p>
      </div>
    </div>
  );
}
