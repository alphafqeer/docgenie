const INSTALL_ID_KEY = "docgenie_install_id";

function generateInstallId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const timestamp = Date.now().toString(36);
  let random = "";
  for (let i = 0; i < 12; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${timestamp}_${random}`;
}

export function getInstallId(): string {
  if (typeof window === "undefined") {
    return "";
  }
  
  let installId = localStorage.getItem(INSTALL_ID_KEY);
  
  if (!installId) {
    installId = generateInstallId();
    localStorage.setItem(INSTALL_ID_KEY, installId);
  }
  
  return installId;
}

export function hasInstallId(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return !!localStorage.getItem(INSTALL_ID_KEY);
}
