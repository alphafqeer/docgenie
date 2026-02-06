export type EntitlementStatus = "active" | "expired" | "refunded" | "none";
export type PurchaseType = "lifetime" | "subscription";

export interface Entitlement {
  installId: string;
  platform: "android" | "ios" | "web";
  status: EntitlementStatus;
  productId: string | null;
  purchaseType: PurchaseType | null;
  verifiedAt: string | null;
  expiresAt: string | null;
}

export interface EntitlementResponse {
  isPro: boolean;
  status: EntitlementStatus;
  expiresAt: string | null;
}

export type PlanTier = "free" | "lite" | "pro";

export interface SetEntitlementRequest {
  installId: string;
  platform?: "android" | "ios" | "web";
  status?: EntitlementStatus;
  productId?: string;
  purchaseType?: PurchaseType;
  expiresAt?: string | null;
  planTier?: PlanTier;
  pin?: string;
}
