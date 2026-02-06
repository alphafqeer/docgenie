const isCapacitorAvailable = typeof window !== "undefined" && 
  "Capacitor" in window && 
  (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.();

async function getCapacitorPreferences() {
  if (isCapacitorAvailable) {
    try {
      const { Preferences } = await import("@capacitor/preferences");
      return Preferences;
    } catch {
      return null;
    }
  }
  return null;
}

export const Preferences = {
  async get({ key }: { key: string }): Promise<{ value: string | null }> {
    const cap = await getCapacitorPreferences();
    if (cap) {
      return cap.get({ key });
    }
    
    if (typeof window !== "undefined" && window.localStorage) {
      const value = localStorage.getItem(key);
      return { value };
    }
    return { value: null };
  },

  async set({ key, value }: { key: string; value: string }): Promise<void> {
    const cap = await getCapacitorPreferences();
    if (cap) {
      return cap.set({ key, value });
    }
    
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, value);
    }
  },

  async remove({ key }: { key: string }): Promise<void> {
    const cap = await getCapacitorPreferences();
    if (cap) {
      return cap.remove({ key });
    }
    
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  },

  async clear(): Promise<void> {
    const cap = await getCapacitorPreferences();
    if (cap) {
      return cap.clear();
    }
  },

  async keys(): Promise<{ keys: string[] }> {
    const cap = await getCapacitorPreferences();
    if (cap) {
      return cap.keys();
    }
    
    if (typeof window !== "undefined" && window.localStorage) {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) keys.push(key);
      }
      return { keys };
    }
    return { keys: [] };
  },
};

export const Toast = {
  async show(options: { text: string; duration?: "short" | "long"; position?: "top" | "center" | "bottom" }): Promise<void> {
    const isCapacitor = typeof window !== "undefined" && 
      "Capacitor" in window && 
      (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.();
    
    if (isCapacitor) {
      try {
        const { Toast } = await import("@capacitor/toast");
        return Toast.show(options);
      } catch {
        console.log("Toast:", options.text);
      }
    } else {
      console.log("Toast:", options.text);
    }
  },
};
