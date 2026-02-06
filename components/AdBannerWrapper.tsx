"use client";

import { useEffect } from "react";
import { useEntitlement } from "./EntitlementContext";
import { AdBanner } from "./ads";

export default function AdBannerWrapper() {
  const { isPro, isLoading } = useEntitlement();

  useEffect(() => {
    console.log("[AdBannerWrapper] Mounted");
    console.log("[AdBannerWrapper] isPro:", isPro);
    console.log("[AdBannerWrapper] isLoading:", isLoading);
  }, [isPro, isLoading]);

  if (isLoading) {
    console.log("[AdBannerWrapper] Still loading entitlement, not rendering banner");
    return null;
  }

  console.log("[AdBannerWrapper] Rendering AdBanner with isPro:", isPro);
  return <AdBanner isPro={isPro} position="bottom" />;
}
