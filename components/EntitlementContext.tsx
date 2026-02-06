"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { checkEntitlement, getInstallId, clearEntitlementCache, getPlatform } from "@/lib/entitlement";
import type { EntitlementResponse } from "@/lib/entitlement/types";

interface EntitlementContextType {
  isPro: boolean;
  isLoading: boolean;
  installId: string;
  status: string;
  expiresAt: string | null;
  refresh: () => Promise<void>;
}

const EntitlementContext = createContext<EntitlementContextType | null>(null);

export function EntitlementProvider({ children }: { children: React.ReactNode }) {
  const [entitlement, setEntitlement] = useState<EntitlementResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [installId, setInstallId] = useState("");

  const loadEntitlement = useCallback(async () => {
    setIsLoading(true);
    try {
      const id = getInstallId();
      setInstallId(id);
      
      const result = await checkEntitlement();
      setEntitlement(result);
    } catch (error) {
      console.error("Failed to load entitlement:", error);
      setEntitlement({ isPro: false, status: "none", expiresAt: null });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEntitlement();
  }, [loadEntitlement]);

  const refresh = useCallback(async () => {
    clearEntitlementCache();
    await loadEntitlement();
  }, [loadEntitlement]);

  const value: EntitlementContextType = {
    isPro: entitlement?.isPro ?? false,
    isLoading,
    installId,
    status: entitlement?.status ?? "none",
    expiresAt: entitlement?.expiresAt ?? null,
    refresh,
  };

  return (
    <EntitlementContext.Provider value={value}>
      {children}
    </EntitlementContext.Provider>
  );
}

export function useEntitlement() {
  const context = useContext(EntitlementContext);
  if (!context) {
    throw new Error("useEntitlement must be used within an EntitlementProvider");
  }
  return context;
}
