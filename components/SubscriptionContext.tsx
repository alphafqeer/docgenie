"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  getSubscription,
  checkSubscription,
  incrementDocumentCount,
  canAccessPremiumTemplate,
  showUpgradePrompt,
  SUBSCRIPTION_PLANS,
  type SubscriptionTier,
  type UserSubscription,
} from "@/lib/subscription";
import { trackUpgradePromptShown } from "@/lib/analytics";

interface SubscriptionContextType {
  subscription: UserSubscription | null;
  isLoading: boolean;
  tier: SubscriptionTier;
  canCreateDocument: boolean;
  documentsRemaining: number;
  documentsUsed: number;
  documentsLimit: number;
  isPro: boolean;
  isTeam: boolean;
  canAccessPremium: (isPremium: boolean) => boolean;
  createDocument: () => Promise<{ success: boolean; showUpgrade: boolean }>;
  showUpgradeModal: boolean;
  setShowUpgradeModal: (show: boolean) => void;
  upgradePrompt: ReturnType<typeof showUpgradePrompt>;
  refresh: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [canCreate, setCanCreate] = useState(true);
  const [remaining, setRemaining] = useState(-1);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const loadSubscription = useCallback(async () => {
    setIsLoading(true);
    try {
      const sub = await getSubscription();
      const status = await checkSubscription();
      setSubscription(sub);
      setCanCreate(status.canCreateDocument);
      setRemaining(status.documentsRemaining);
    } catch (error) {
      console.error("Failed to load subscription:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSubscription();
  }, [loadSubscription]);

  const tier = subscription?.tier ?? "free";
  const isPro = tier === "pro" || tier === "team";
  const isTeam = tier === "team";
  const plan = SUBSCRIPTION_PLANS[tier];
  const documentsUsed = subscription?.documentsUsed ?? 0;
  const documentsLimit = plan.documentsPerMonth === -1 ? Infinity : plan.documentsPerMonth;

  const canAccessPremium = useCallback(
    (isPremium: boolean) => canAccessPremiumTemplate(tier, isPremium),
    [tier]
  );

  const createDocument = useCallback(async () => {
    const result = await incrementDocumentCount();
    if (result.showUpgrade) {
      await trackUpgradePromptShown();
      setShowUpgradeModal(true);
    }
    await loadSubscription();
    return { success: result.success, showUpgrade: result.showUpgrade };
  }, [loadSubscription]);

  const upgradePrompt = showUpgradePrompt();

  const value: SubscriptionContextType = {
    subscription,
    isLoading,
    tier,
    canCreateDocument: canCreate,
    documentsRemaining: remaining,
    documentsUsed,
    documentsLimit,
    isPro,
    isTeam,
    canAccessPremium,
    createDocument,
    showUpgradeModal,
    setShowUpgradeModal,
    upgradePrompt,
    refresh: loadSubscription,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscription must be used within a SubscriptionProvider");
  }
  return context;
}
