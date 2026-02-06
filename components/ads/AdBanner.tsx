"use client";

import React, { useEffect, useState, useCallback } from "react";

const TEST_BANNER_AD_UNIT_ID = "ca-app-pub-3940256099942544/6300978111";

interface AdBannerProps {
  isPro?: boolean;
  position?: "top" | "bottom";
}

export default function AdBanner({ isPro = false, position = "bottom" }: AdBannerProps) {
  const [adLoaded, setAdLoaded] = useState(false);
  const [isCapacitor, setIsCapacitor] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("[AdBanner] Component render - isPro:", isPro, "position:", position);

  const initializeAdMob = useCallback(async () => {
    console.log("[AdBanner] Initializing AdMob...");
    try {
      const { AdMob, BannerAdSize, BannerAdPosition } = await import("@capacitor-community/admob");

      await AdMob.initialize({
        testingDevices: [],
        initializeForTesting: true,
      });
      console.log("[AdBanner] AdMob initialized");

      const options = {
        adId: TEST_BANNER_AD_UNIT_ID,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: position === "top" ? BannerAdPosition.TOP_CENTER : BannerAdPosition.BOTTOM_CENTER,
        margin: position === "bottom" ? 106 : 0,
        isTesting: true,
      };

      console.log("[AdBanner] Showing banner with options:", options);
      await AdMob.showBanner(options);
      setAdLoaded(true);
      console.log("[AdBanner] Banner ad displayed successfully");
    } catch (err) {
      console.error("[AdBanner] Error initializing ads:", err);
      setError(err instanceof Error ? err.message : "Failed to load ad");
    }
  }, [position]);

  useEffect(() => {
    console.log("[AdBanner] useEffect triggered - isPro:", isPro);
    
    const checkCapacitor = async () => {
      if (typeof window === "undefined") return;

      const hasCapacitor = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.();
      console.log("[AdBanner] isCapacitor:", hasCapacitor);
      setIsCapacitor(!!hasCapacitor);

      if (hasCapacitor && !isPro) {
        console.log("[AdBanner] Capacitor detected and user is not Pro, loading ads...");
        await initializeAdMob();
      } else if (!hasCapacitor) {
        console.log("[AdBanner] Not in Capacitor environment, skipping ad initialization");
      } else if (isPro) {
        console.log("[AdBanner] User is Pro, skipping ad initialization");
      }
    };

    checkCapacitor();

    return () => {
      if (isCapacitor) {
        console.log("[AdBanner] Cleanup - removing banner");
        import("@capacitor-community/admob").then(({ AdMob }) => {
          AdMob.removeBanner().catch(console.error);
        });
      }
    };
  }, [isPro, initializeAdMob, isCapacitor]);

  if (isPro) {
    console.log("[AdBanner] Not rendering - user is Pro");
    return null;
  }

  if (!isCapacitor) {
    console.log("[AdBanner] Not rendering - not in Capacitor environment");
    return null;
  }

  console.log("[AdBanner] Rendering banner placeholder");
  return (
    <div
      className={`fixed left-0 right-0 z-50 ${
        position === "top" ? "top-0" : "bottom-[116px] md:bottom-[50px]"
      }`}
      style={{ height: 50 }}
    >
      {!adLoaded && !error && (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center border-t border-gray-200">
          <span className="text-xs text-gray-400">Loading ad...</span>
        </div>
      )}
      {error && (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center border-t border-gray-200">
          <span className="text-xs text-gray-400">Ad unavailable</span>
        </div>
      )}
    </div>
  );
}

export function useAdMob() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAdMob = async () => {
      if (typeof window === "undefined") return;

      const hasCapacitor = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.();
      setIsReady(!!hasCapacitor);
    };

    checkAdMob();
  }, []);

  const showInterstitial = async () => {
    if (!isReady) {
      console.log("[AdMob] Not ready or not in Capacitor environment");
      return false;
    }

    try {
      const { AdMob } = await import("@capacitor-community/admob");
      
      await AdMob.prepareInterstitial({
        adId: "ca-app-pub-3940256099942544/1033173712",
        isTesting: true,
      });
      
      await AdMob.showInterstitial();
      return true;
    } catch (err) {
      console.error("[AdMob] Error showing interstitial:", err);
      return false;
    }
  };

  return {
    isReady,
    showInterstitial,
  };
}
