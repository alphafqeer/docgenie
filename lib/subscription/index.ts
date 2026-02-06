import { Preferences } from "@/lib/storage/preferences";
import { SubscriptionTier, UserSubscription, UsageStats, SUBSCRIPTION_PLANS } from "./types";

const STORAGE_KEYS = {
  SUBSCRIPTION: "docgenie_subscription",
  USAGE_STATS: "docgenie_usage_stats",
  DOCUMENTS: "docgenie_documents",
};

function getDefaultSubscription(): UserSubscription {
  const now = new Date();
  const periodStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
  return {
    tier: "free",
    documentsUsed: 0,
    documentsLimit: 5,
    periodStart: periodStart.toISOString(),
    periodEnd: periodEnd.toISOString(),
    isActive: true,
  };
}

function getDefaultUsageStats(): UsageStats {
  return {
    documentsCreated: 0,
    documentsThisMonth: 0,
    lastDocumentDate: null,
    favoriteTemplates: [],
    totalTimeSpent: 0,
  };
}

export async function getSubscription(): Promise<UserSubscription> {
  try {
    const { value } = await Preferences.get({ key: STORAGE_KEYS.SUBSCRIPTION });
    if (value) {
      const sub = JSON.parse(value) as UserSubscription;
      if (isNewMonth(sub.periodStart)) {
        sub.documentsUsed = 0;
        sub.periodStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString();
        sub.periodEnd = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toISOString();
        await saveSubscription(sub);
      }
      return sub;
    }
    const defaultSub = getDefaultSubscription();
    await saveSubscription(defaultSub);
    return defaultSub;
  } catch {
    return getDefaultSubscription();
  }
}

export async function saveSubscription(subscription: UserSubscription): Promise<void> {
  await Preferences.set({
    key: STORAGE_KEYS.SUBSCRIPTION,
    value: JSON.stringify(subscription),
  });
}

export async function getUsageStats(): Promise<UsageStats> {
  try {
    const { value } = await Preferences.get({ key: STORAGE_KEYS.USAGE_STATS });
    if (value) {
      return JSON.parse(value) as UsageStats;
    }
    return getDefaultUsageStats();
  } catch {
    return getDefaultUsageStats();
  }
}

export async function saveUsageStats(stats: UsageStats): Promise<void> {
  await Preferences.set({
    key: STORAGE_KEYS.USAGE_STATS,
    value: JSON.stringify(stats),
  });
}

export async function checkSubscription(): Promise<{
  isActive: boolean;
  canCreateDocument: boolean;
  documentsRemaining: number;
  tier: SubscriptionTier;
}> {
  const subscription = await getSubscription();
  const plan = SUBSCRIPTION_PLANS[subscription.tier];
  const isUnlimited = plan.documentsPerMonth === -1;
  const documentsRemaining = isUnlimited ? -1 : plan.documentsPerMonth - subscription.documentsUsed;
  
  return {
    isActive: subscription.isActive,
    canCreateDocument: isUnlimited || documentsRemaining > 0,
    documentsRemaining,
    tier: subscription.tier,
  };
}

export async function incrementDocumentCount(): Promise<{
  success: boolean;
  documentsUsed: number;
  documentsLimit: number;
  showUpgrade: boolean;
}> {
  const subscription = await getSubscription();
  const stats = await getUsageStats();
  const plan = SUBSCRIPTION_PLANS[subscription.tier];
  const isUnlimited = plan.documentsPerMonth === -1;
  
  if (!isUnlimited && subscription.documentsUsed >= plan.documentsPerMonth) {
    return {
      success: false,
      documentsUsed: subscription.documentsUsed,
      documentsLimit: plan.documentsPerMonth,
      showUpgrade: true,
    };
  }
  
  subscription.documentsUsed += 1;
  stats.documentsCreated += 1;
  stats.documentsThisMonth += 1;
  stats.lastDocumentDate = new Date().toISOString();
  
  await saveSubscription(subscription);
  await saveUsageStats(stats);
  
  const showUpgrade = !isUnlimited && subscription.documentsUsed >= plan.documentsPerMonth - 1;
  
  return {
    success: true,
    documentsUsed: subscription.documentsUsed,
    documentsLimit: plan.documentsPerMonth,
    showUpgrade,
  };
}

export function canAccessPremiumTemplate(tier: SubscriptionTier, isPremium: boolean): boolean {
  if (!isPremium) return true;
  return tier === "pro" || tier === "team";
}

export async function unlockPremiumTemplates<T extends { isPremium?: boolean }>(
  templates: T[]
): Promise<{ accessible: T[]; locked: T[] }> {
  const subscription = await getSubscription();
  
  const accessible = templates.filter(t => canAccessPremiumTemplate(subscription.tier, t.isPremium ?? false));
  const locked = templates.filter(t => !canAccessPremiumTemplate(subscription.tier, t.isPremium ?? false));
  
  return { accessible, locked };
}

export async function upgradeSubscription(tier: SubscriptionTier): Promise<boolean> {
  const subscription = await getSubscription();
  const plan = SUBSCRIPTION_PLANS[tier];
  
  subscription.tier = tier;
  subscription.documentsLimit = plan.documentsPerMonth;
  subscription.isActive = true;
  
  await saveSubscription(subscription);
  return true;
}

export function showUpgradePrompt(): { 
  title: string; 
  message: string; 
  ctaText: string;
  benefits: string[];
} {
  return {
    title: "Upgrade to Pro",
    message: "You've reached your monthly document limit. Upgrade to Pro for unlimited documents and premium templates.",
    ctaText: "Upgrade Now - $9.99/mo",
    benefits: [
      "Unlimited documents",
      "Access all 150+ premium templates",
      "No watermarks on exports",
      "Priority customer support",
    ],
  };
}

function isNewMonth(periodStart: string): boolean {
  const start = new Date(periodStart);
  const now = new Date();
  return start.getMonth() !== now.getMonth() || start.getFullYear() !== now.getFullYear();
}

export { SUBSCRIPTION_PLANS };
export type { SubscriptionTier, UserSubscription, UsageStats };
export type { SubscriptionPlan } from "./types";
