import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { SubscriptionProvider } from "@/components/SubscriptionContext";
import { EntitlementProvider } from "@/components/EntitlementContext";
import UpgradeModal from "@/components/UpgradeModal";
import BottomNav from "@/components/BottomNav";
import FloatingActionButton from "@/components/FloatingActionButton";
import AdBannerWrapper from "@/components/AdBannerWrapper";

export const metadata: Metadata = {
  title: "DocGenie - Professional Document Generator",
  description: "Create professional HR, Legal, Business, and Financial documents in seconds",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#8B5CF6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F3FF] text-[#1e293b] flex flex-col pb-[166px] md:pb-[50px]">
        <SubscriptionProvider>
          <EntitlementProvider>
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-violet-100">
              <div className="page-container flex items-center justify-between py-3">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                    <span className="text-white font-bold text-sm">DG</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900 hidden sm:block">DocGenie</span>
                </Link>
                
                <div className="flex items-center gap-3">
                  <Link 
                    href="/pricing" 
                    className="hidden md:flex text-sm font-medium text-gray-600 hover:text-violet-600 transition-colors"
                  >
                    Pricing
                  </Link>
                  <Link 
                    href="/dashboard" 
                    className="hidden md:flex rounded-xl bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25"
                  >
                    Dashboard
                  </Link>
                  <button className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                    U
                  </button>
                </div>
              </div>
            </header>

            <main className="flex-1 w-full">
              {children}
            </main>

            <AdBannerWrapper />
            <BottomNav />
            <FloatingActionButton />
            <UpgradeModal />
          </EntitlementProvider>
        </SubscriptionProvider>
      </body>
    </html>
  );
}
