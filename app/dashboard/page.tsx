"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { CATEGORIES, getCategoryTemplates, getTotalTemplateCount, getPremiumTemplateCount, getFreeTemplateCount } from "@/lib/templates";
import DocumentCounter from "@/components/DocumentCounter";
import { useSubscription } from "@/components/SubscriptionContext";
import { useEntitlement } from "@/components/EntitlementContext";

const categoryIcons: Record<string, { icon: string; gradient: string }> = {
  hr: { icon: "👥", gradient: "from-violet-500 to-violet-600" },
  legal: { icon: "⚖️", gradient: "from-purple-500 to-purple-600" },
  business: { icon: "💼", gradient: "from-violet-400 to-violet-500" },
  invoicing: { icon: "📊", gradient: "from-violet-600 to-purple-600" },
  realestate: { icon: "🏠", gradient: "from-purple-400 to-violet-500" },
  medical: { icon: "🏥", gradient: "from-violet-500 to-purple-500" },
};

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { documentsUsed } = useSubscription();
  const { isPro } = useEntitlement();
  const [mounted, setMounted] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setPullDistance(0);
    }, 1000);
  }, []);

  const cats = Object.keys(CATEGORIES).map((k) => ({
    id: k,
    ...CATEGORIES[k],
  }));

  const filteredCats = cats.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalTemplates = getTotalTemplateCount();
  const premiumTemplates = getPremiumTemplateCount();
  const freeTemplates = getFreeTemplateCount();

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      {/* Pull to Refresh Indicator */}
      {(pullDistance > 0 || isRefreshing) && (
        <div className="pull-indicator" style={{ height: Math.min(pullDistance, 60) }}>
          <svg 
            className={`w-6 h-6 ${isRefreshing ? "animate-spin" : ""}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
      )}

      <div className="page-container py-4 md:py-8 mobile-pb">
        {/* Welcome Section - Thumb Friendly at top on mobile */}
        <section className="mb-6">
          <div className="violet-card p-5 md:p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                    Welcome back!
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">
                    Create professional documents in seconds
                  </p>
                </div>
                {mounted && !isPro && (
                  <Link
                    href="/pricing"
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Upgrade
                  </Link>
                )}
              </div>
              
              <DocumentCounter />
            </div>
          </div>
        </section>

        {/* Search - Easy reach on mobile */}
        <section className="mb-6">
          <div className="relative">
            <svg 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400 pointer-events-none" 
              style={{ width: '20px', height: '20px' }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search templates, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </section>

        {/* Quick Stats - Compact 2x2 Grid */}
        <section className="mb-5">
          <h2 className="text-base font-semibold text-gray-900 mb-2.5">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-2.5">
            <div style={{ background: 'white', border: '1px solid #EDE9FE', borderRadius: '8px', padding: '12px' }}>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#7C3AED' }}>{totalTemplates}</p>
              <p style={{ fontSize: '12px', color: '#6b7280' }}>Total Templates</p>
            </div>
            <div style={{ background: 'white', border: '1px solid #EDE9FE', borderRadius: '8px', padding: '12px' }}>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#7C3AED' }}>{cats.length}</p>
              <p style={{ fontSize: '12px', color: '#6b7280' }}>Categories</p>
            </div>
            <div style={{ background: 'white', border: '1px solid #EDE9FE', borderRadius: '8px', padding: '12px' }}>
              <p style={{ fontSize: '18px', fontWeight: 700, color: '#10b981' }}>{mounted ? documentsUsed : 0}</p>
              <p style={{ fontSize: '12px', color: '#6b7280' }}>Docs Created</p>
            </div>
            <Link href="/pricing" style={{ background: 'white', border: '1px solid #EDE9FE', borderRadius: '8px', padding: '12px', display: 'block', textDecoration: 'none' }}>
              <p style={{ fontSize: '18px', fontWeight: 700, color: isPro ? '#7C3AED' : '#f59e0b' }}>
                {mounted ? (isPro ? 'Pro' : 'Free') : 'Free'}
              </p>
              <p style={{ fontSize: '12px', color: '#6b7280' }}>Current Plan</p>
            </Link>
          </div>
        </section>

        {/* Template Library Banner */}
        <section className="mb-6">
          <div className="violet-card p-4 bg-gradient-to-r from-violet-50 to-purple-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Template Library</p>
                <p className="text-base font-semibold text-gray-900">
                  {freeTemplates} free, {premiumTemplates} premium
                </p>
              </div>
              {mounted && !isPro && (
                <Link href="/pricing" className="text-sm font-medium text-violet-600 hover:text-violet-700">
                  Unlock all →
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-900">Categories</h2>
            <span className="text-xs text-gray-500">{filteredCats.length} available</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {filteredCats.map((cat) => {
              const templates = getCategoryTemplates(cat.id);
              const premiumCount = templates.filter(t => t.isPremium).length;
              const iconData = categoryIcons[cat.id] || { icon: "📄", gradient: "from-violet-500 to-violet-600" };

              return (
                <Link
                  key={cat.id}
                  href={`/generate/${cat.id}/select`}
                  className="group block"
                >
                  <div 
                    style={{ 
                      background: 'white', 
                      border: '1px solid #EDE9FE', 
                      borderRadius: '12px', 
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.15s ease'
                    }}
                    className="hover:shadow-sm active:bg-violet-50"
                  >
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '8px', 
                        background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        flexShrink: 0
                      }}
                    >
                      {iconData.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>
                          {cat.title}
                        </h3>
                        {premiumCount > 0 && (
                          <span style={{ 
                            background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', 
                            color: 'white', 
                            fontSize: '9px', 
                            fontWeight: 700, 
                            padding: '2px 6px', 
                            borderRadius: '4px' 
                          }}>PRO</span>
                        )}
                      </div>
                      <p style={{ fontSize: '12px', color: '#6b7280' }}>
                        {templates.length} templates
                      </p>
                    </div>
                    <svg 
                      style={{ width: '16px', height: '16px', color: '#9ca3af', flexShrink: 0 }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16 md:mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <h2 className="text-base font-semibold text-gray-900">Quick Start</h2>
            <Link href="/templates" className="text-xs font-medium text-violet-600">
              View all →
            </Link>
          </div>
          
          <div className="flex flex-row overflow-x-auto gap-3 pb-1 -mx-1 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
            {[
              { name: "Employment Contract", icon: "📝", category: "hr" },
              { name: "Invoice", icon: "💰", category: "invoicing" },
              { name: "NDA", icon: "🔒", category: "legal" },
              { name: "Proposal", icon: "📋", category: "business" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={`/generate/${item.category}/select`}
                className="block flex-shrink-0 min-w-[100px] sm:min-w-0 sm:flex-shrink"
              >
                <div className="bg-white border border-violet-100 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-violet-300 active:bg-violet-50 transition-all min-h-[80px]">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs font-medium text-gray-900 leading-tight">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
