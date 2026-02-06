import type { Entitlement } from "./types";

declare global {
  // eslint-disable-next-line no-var
  var entitlementStore: Record<string, Entitlement> | undefined;
}

export function getEntitlementStore(): Record<string, Entitlement> {
  if (!globalThis.entitlementStore) {
    globalThis.entitlementStore = {};
  }
  return globalThis.entitlementStore;
}

export function setEntitlementInStore(installId: string, entitlement: Entitlement): void {
  const store = getEntitlementStore();
  store[installId] = entitlement;
}

export function getEntitlementFromStore(installId: string): Entitlement | null {
  const store = getEntitlementStore();
  return store[installId] ?? null;
}
