import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { getFirestoreDb } from "./config";
import type { Entitlement, EntitlementStatus, PurchaseType } from "@/lib/entitlement/types";

const COLLECTION_NAME = "entitlements";

export async function getEntitlementFromFirestore(installId: string): Promise<Entitlement | null> {
  try {
    const db = getFirestoreDb();
    const docRef = doc(db, COLLECTION_NAME, installId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return {
      installId: data.installId || installId,
      platform: data.platform || "web",
      status: data.status || "none",
      productId: data.productId || null,
      purchaseType: data.purchaseType || null,
      verifiedAt: data.verifiedAt || null,
      expiresAt: data.expiresAt || null,
    };
  } catch (error) {
    console.error("Error fetching entitlement from Firestore:", error);
    return null;
  }
}

export async function setEntitlementInFirestore(
  installId: string,
  data: {
    platform?: "android" | "ios" | "web";
    status?: EntitlementStatus;
    productId?: string | null;
    purchaseType?: PurchaseType | null;
    expiresAt?: string | null;
  }
): Promise<boolean> {
  try {
    const db = getFirestoreDb();
    const docRef = doc(db, COLLECTION_NAME, installId);
    
    const existing = await getDoc(docRef);
    const existingData = existing.exists() ? existing.data() : {};

    await setDoc(docRef, {
      ...existingData,
      installId,
      platform: data.platform || existingData.platform || "web",
      status: data.status || existingData.status || "none",
      productId: data.productId !== undefined ? data.productId : existingData.productId || null,
      purchaseType: data.purchaseType !== undefined ? data.purchaseType : existingData.purchaseType || null,
      expiresAt: data.expiresAt !== undefined ? data.expiresAt : existingData.expiresAt || null,
      verifiedAt: new Date().toISOString(),
      updatedAt: serverTimestamp(),
    }, { merge: true });

    return true;
  } catch (error) {
    console.error("Error setting entitlement in Firestore:", error);
    return false;
  }
}
