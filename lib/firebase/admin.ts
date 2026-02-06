import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let adminApp: App | undefined;
let adminDb: Firestore | undefined;

export function getAdminApp(): App {
  if (!adminApp) {
    const existingApps = getApps();
    if (existingApps.length > 0) {
      adminApp = existingApps[0];
    } else {
      adminApp = initializeApp({
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
    }
  }
  return adminApp;
}

export function getAdminFirestore(): Firestore {
  if (!adminDb) {
    adminDb = getFirestore(getAdminApp());
  }
  return adminDb;
}

export async function deleteEntitlementAdmin(installId: string): Promise<boolean> {
  try {
    const db = getAdminFirestore();
    await db.collection("entitlements").doc(installId).delete();
    return true;
  } catch (error) {
    console.error("Error deleting entitlement:", error);
    return false;
  }
}
