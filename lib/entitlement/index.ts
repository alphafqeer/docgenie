import { getInstallId } from "./installId";
import type { EntitlementResponse, Entitlement, SetEntitlementRequest } from "./types";

export * from "./types";
export { getInstallId } from "./installId";

const ENTITLEMENT_CACHE_KEY = "docgenie_entitlement_cache";
const CACHE_TTL_MS = 5 * 60 * 1000;

interface CachedEntitlement {
  data: EntitlementResponse;
  timestamp: number;
}

function getCachedEntitlement(): EntitlementResponse | null {
  if (typeof window === "undefined") return null;
  
  try {
    const cached = localStorage.getItem(ENTITLEMENT_CACHE_KEY);
    if (!cached) return null;
    
    const parsed: CachedEntitlement = JSON.parse(cached);
    const now = Date.now();
    
    if (now - parsed.timestamp > CACHE_TTL_MS) {
      localStorage.removeItem(ENTITLEMENT_CACHE_KEY);
      return null;
    }
    
    return parsed.data;
  } catch {
    return null;
  }
}

function setCachedEntitlement(data: EntitlementResponse): void {
  if (typeof window === "undefined") return;
  
  const cached: CachedEntitlement = {
    data,
    timestamp: Date.now(),
  };
  
  localStorage.setItem(ENTITLEMENT_CACHE_KEY, JSON.stringify(cached));
}

export async function checkEntitlement(): Promise<EntitlementResponse> {
  const cached = getCachedEntitlement();
  if (cached) return cached;

  const installId = getInstallId();
  if (!installId) {
    return { isPro: false, status: "none", expiresAt: null };
  }

  try {
    const res = await fetch(`/api/entitlement?installId=${encodeURIComponent(installId)}`);
    if (!res.ok) {
      throw new Error("Failed to check entitlement");
    }
    
    const data: EntitlementResponse = await res.json();
    
    if (!data.isPro && typeof window !== "undefined") {
      const localEntitlement = localStorage.getItem("docgenie_testing_entitlement");
      if (localEntitlement) {
        try {
          const parsed = JSON.parse(localEntitlement);
          if (parsed.isPro && parsed.status === "active") {
            const result = { isPro: true, status: "active" as const, expiresAt: null };
            setCachedEntitlement(result);
            return result;
          }
        } catch {}
      }
    }
    
    setCachedEntitlement(data);
    return data;
  } catch (error) {
    console.error("Entitlement check failed:", error);
    
    if (typeof window !== "undefined") {
      const localEntitlement = localStorage.getItem("docgenie_testing_entitlement");
      if (localEntitlement) {
        try {
          const parsed = JSON.parse(localEntitlement);
          if (parsed.isPro && parsed.status === "active") {
            return { isPro: true, status: "active", expiresAt: null };
          }
        } catch {}
      }
    }
    
    return { isPro: false, status: "none", expiresAt: null };
  }
}

export async function setEntitlement(request: SetEntitlementRequest): Promise<boolean> {
  try {
    const res = await fetch("/api/entitlement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    
    if (!res.ok) {
      throw new Error("Failed to set entitlement");
    }
    
    localStorage.removeItem(ENTITLEMENT_CACHE_KEY);
    return true;
  } catch (error) {
    console.error("Set entitlement failed:", error);
    return false;
  }
}

export function clearEntitlementCache(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ENTITLEMENT_CACHE_KEY);
}

export function resetEntitlement(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ENTITLEMENT_CACHE_KEY);
  localStorage.removeItem("docgenie_testing_entitlement");
}

export function isPlatformAndroid(): boolean {
  if (typeof window === "undefined") return false;
  return /Android/i.test(navigator.userAgent);
}

export function isPlatformIOS(): boolean {
  if (typeof window === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function getPlatform(): "android" | "ios" | "web" {
  if (isPlatformAndroid()) return "android";
  if (isPlatformIOS()) return "ios";
  return "web";
}
