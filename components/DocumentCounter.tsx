"use client";

import { useSubscription } from "./SubscriptionContext";
import Link from "next/link";

export default function DocumentCounter() {
  const { documentsUsed, documentsLimit, tier, isLoading } = useSubscription();

  if (isLoading) {
    return (
      <div className="violet-card px-4 py-3 animate-pulse">
        <div className="h-3 w-24 bg-violet-100 rounded mb-2"></div>
        <div className="h-5 w-12 bg-violet-100 rounded"></div>
      </div>
    );
  }

  const isUnlimited = documentsLimit === Infinity;
  const percentage = isUnlimited ? 0 : (documentsUsed / documentsLimit) * 100;
  const isNearLimit = !isUnlimited && percentage >= 80;
  const isAtLimit = !isUnlimited && documentsUsed >= documentsLimit;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-500">Documents this month</p>
        {tier === "pro" && (
          <span className="text-xs font-semibold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">
            PRO
          </span>
        )}
        {tier === "team" && (
          <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
            TEAM
          </span>
        )}
      </div>
      
      <div className="flex items-baseline gap-1">
        <p className={`text-2xl font-bold ${
          isAtLimit ? "text-red-500" : isNearLimit ? "text-amber-500" : "text-gray-900"
        }`}>
          {documentsUsed}
        </p>
        <p className="text-sm text-gray-400">
          / {isUnlimited ? "∞" : documentsLimit}
        </p>
      </div>
      
      {!isUnlimited && (
        <div className="mt-3">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ 
                width: `${Math.min(percentage, 100)}%`,
                background: isAtLimit 
                  ? '#ef4444' 
                  : isNearLimit 
                    ? '#f59e0b' 
                    : 'linear-gradient(90deg, #A78BFA, #8B5CF6)'
              }}
            />
          </div>
          {isAtLimit && (
            <Link href="/pricing" className="text-xs text-red-500 hover:text-red-600 mt-2 block font-medium">
              Limit reached - Upgrade now →
            </Link>
          )}
          {isNearLimit && !isAtLimit && (
            <p className="text-xs text-amber-600 mt-2">
              {documentsLimit - documentsUsed} documents remaining
            </p>
          )}
        </div>
      )}
    </div>
  );
}
