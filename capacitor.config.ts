import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.docgenie.app',
  appName: 'DocGenie',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
