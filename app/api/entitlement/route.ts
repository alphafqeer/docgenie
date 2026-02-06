import { NextRequest, NextResponse } from "next/server";
import type { EntitlementResponse, SetEntitlementRequest } from "@/lib/entitlement/types";
import { getEntitlementFromFirestore, setEntitlementInFirestore } from "@/lib/firebase/entitlements";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const installId = searchParams.get("installId");

  if (!installId) {
    return NextResponse.json(
      { error: "Missing installId parameter" },
      { status: 400 }
    );
  }

  try {
    const entitlement = await getEntitlementFromFirestore(installId);

    if (!entitlement) {
      const response: EntitlementResponse = {
        isPro: false,
        status: "none",
        expiresAt: null,
      };
      return NextResponse.json(response);
    }

    let status = entitlement.status;
    
    if (entitlement.expiresAt) {
      const expiresAt = new Date(entitlement.expiresAt);
      if (expiresAt < new Date()) {
        status = "expired";
      }
    }

    const isPro = status === "active";

    const response: EntitlementResponse = {
      isPro,
      status,
      expiresAt: entitlement.expiresAt,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error checking entitlement:", error);
    return NextResponse.json(
      { error: "Failed to check entitlement" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: SetEntitlementRequest = await request.json();
    const { installId, platform, status, productId, purchaseType, expiresAt, planTier, pin } = body;

    if (!installId) {
      return NextResponse.json(
        { error: "Missing installId" },
        { status: 400 }
      );
    }

    const isTestingMode = process.env.NEXT_PUBLIC_TESTING_MODE === "true";
    const testingPin = process.env.TESTING_UNLOCK_PIN;

    if (isTestingMode) {
      if (!pin) {
        return NextResponse.json(
          { error: "Incorrect PIN" },
          { status: 401 }
        );
      }
      if (pin !== testingPin) {
        return NextResponse.json(
          { error: "Incorrect PIN" },
          { status: 401 }
        );
      }
    }

    const effectiveProductId = planTier 
      ? `docgenie_${planTier}_testing` 
      : productId;

    const entitlementData = {
      platform: platform || "web",
      status: status || "active",
      productId: effectiveProductId,
      purchaseType: purchaseType || "subscription",
      expiresAt: expiresAt || null,
    };

    let success = false;
    
    try {
      success = await setEntitlementInFirestore(installId, entitlementData);
    } catch (firestoreError) {
      console.error("Firestore error:", firestoreError);
    }

    if (!success && isTestingMode) {
      console.log("Firestore unavailable, using client-side fallback for testing mode");
      return NextResponse.json({ 
        success: true, 
        planTier: planTier || "pro",
        useLocalFallback: true,
        entitlement: {
          ...entitlementData,
          installId,
        }
      });
    }

    if (!success) {
      return NextResponse.json(
        { error: "Failed to set entitlement" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, planTier: planTier || "pro" });
  } catch (error) {
    console.error("Error setting entitlement:", error);
    return NextResponse.json(
      { error: "Failed to set entitlement" },
      { status: 500 }
    );
  }
}
