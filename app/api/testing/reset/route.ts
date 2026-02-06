import { NextRequest, NextResponse } from "next/server";
import { deleteEntitlementAdmin } from "@/lib/firebase/admin";

export async function POST(request: NextRequest) {
  const isTestingMode = process.env.NEXT_PUBLIC_TESTING_MODE === "true";
  
  if (!isTestingMode) {
    return NextResponse.json(
      { error: "Reset only available in testing mode" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { installId, pin } = body;

    if (!installId) {
      return NextResponse.json(
        { error: "Missing installId" },
        { status: 400 }
      );
    }

    const testingPin = process.env.TESTING_UNLOCK_PIN;
    if (!pin || pin !== testingPin) {
      return NextResponse.json(
        { error: "Incorrect PIN" },
        { status: 401 }
      );
    }

    const success = await deleteEntitlementAdmin(installId);

    if (!success) {
      return NextResponse.json(
        { error: "Failed to reset entitlement" },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: "Entitlement reset to Free",
      clearLocalStorage: true
    });
  } catch (error) {
    console.error("Error in reset endpoint:", error);
    return NextResponse.json(
      { error: "Failed to reset entitlement" },
      { status: 500 }
    );
  }
}
