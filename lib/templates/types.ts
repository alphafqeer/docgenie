export type DocTemplate = {
  id: string;
  title: string;
  description?: string;
  content: string;
  isPremium?: boolean;
};

export type Template = DocTemplate;

export type CategoryId = "hr" | "legal" | "business" | "invoicing" | "realestate" | "medical";

export type Category = {
  id: CategoryId;
  title: string;
  description?: string;
};

export type SubscriptionTier = "free" | "pro" | "team";

export type UserSubscription = {
  tier: SubscriptionTier;
  documentsUsed: number;
  documentsLimit: number;
  expiresAt?: Date;
};
