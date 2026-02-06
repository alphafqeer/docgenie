export type SubscriptionTier = "free" | "pro" | "team";

export interface SubscriptionPlan {
  tier: SubscriptionTier;
  name: string;
  price: number;
  period: "month" | "year";
  documentsPerMonth: number;
  features: string[];
}

export interface UserSubscription {
  tier: SubscriptionTier;
  documentsUsed: number;
  documentsLimit: number;
  periodStart: string;
  periodEnd: string;
  isActive: boolean;
}

export interface UsageStats {
  documentsCreated: number;
  documentsThisMonth: number;
  lastDocumentDate: string | null;
  favoriteTemplates: string[];
  totalTimeSpent: number;
}

export const SUBSCRIPTION_PLANS: Record<SubscriptionTier, SubscriptionPlan> = {
  free: {
    tier: "free",
    name: "Free",
    price: 0,
    period: "month",
    documentsPerMonth: 5,
    features: [
      "5 documents per month",
      "28 basic templates",
      "Watermarked exports",
      "PDF export only",
      "Community support",
    ],
  },
  pro: {
    tier: "pro",
    name: "Pro",
    price: 9.99,
    period: "month",
    documentsPerMonth: -1,
    features: [
      "Unlimited documents",
      "150+ premium templates",
      "No watermarks",
      "All export formats",
      "Custom branding",
      "100GB cloud storage",
      "Priority support",
    ],
  },
  team: {
    tier: "team",
    name: "Team",
    price: 24.99,
    period: "month",
    documentsPerMonth: -1,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Template sharing",
      "Admin dashboard",
      "API access",
      "SSO integration",
      "Dedicated support",
    ],
  },
};
