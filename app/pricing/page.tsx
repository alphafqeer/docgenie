"use client";

import Link from "next/link";
import { useState } from "react";
import { getTotalTemplateCount, getPremiumTemplateCount, getFreeTemplateCount } from "@/lib/templates";
import { useEntitlement } from "@/components/EntitlementContext";
import { getInstallId, type PlanTier } from "@/lib/entitlement";

function isTestingMode(): boolean {
  if (typeof window === "undefined") return true;
  return process.env.NEXT_PUBLIC_TESTING_MODE !== "false";
}

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with essential templates",
    features: [
      "48 basic templates",
      "TXT export",
      "PDF export (with watermark)",
      "Basic support",
    ],
    notIncluded: [
      "Premium templates",
      "Watermark-free exports",
      "Ad-free experience",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: false,
  },
  {
    name: "Lite",
    price: "$4.99",
    period: "/month",
    description: "Unlock 3 categories of your choice",
    features: [
      "Choose any 3 categories",
      "Premium templates in chosen categories",
      "TXT export",
      "PDF export (no watermark)",
      "No ads",
      "Basic support",
    ],
    notIncluded: [
      "All categories",
    ],
    cta: "Upgrade to Lite",
    popular: false,
    gradient: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    yearlyPrice: "or $89/year (save 26%)",
    description: "Full access for professionals",
    features: [
      "All 6 categories unlocked",
      "101 templates (free + premium)",
      "TXT export",
      "PDF export (no watermark)",
      "No ads",
      "Priority email support",
    ],
    notIncluded: [],
    cta: "Upgrade to Pro",
    popular: true,
    gradient: true,
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "HR Director",
    initials: "SC",
    content: "DocGenie has saved our HR team countless hours. What used to take days now takes minutes!",
  },
  {
    name: "Michael Rodriguez",
    role: "Freelance Consultant",
    initials: "MR",
    content: "The Pro plan pays for itself every month. My clients are always impressed.",
  },
  {
    name: "Emily Thompson",
    role: "Legal Operations",
    initials: "ET",
    content: "The legal templates are comprehensive. Essential for our preliminary drafts.",
  },
  {
    name: "David Park",
    role: "Property Manager",
    initials: "DP",
    content: "Managing 50+ properties is easier with DocGenie's real estate templates.",
  },
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We support payments through Google Play Store and Apple App Store for mobile purchases.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee on all paid plans.",
  },
  {
    question: "What's the difference between Lite and Pro?",
    answer: "Lite unlocks 3 categories of your choice, while Pro gives you access to all 6 categories and 101 templates.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No long-term contracts. Cancel anytime through your app store settings.",
  },
  {
    question: "Do free PDFs have watermarks?",
    answer: "Yes, free exports include a small 'Generated with DocGenie' footer. Lite and Pro plans have watermark-free exports.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPinModal, setShowPinModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanTier | null>(null);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  
  const { refresh, isPro, status } = useEntitlement();
  const totalTemplates = getTotalTemplateCount();
  const premiumCount = getPremiumTemplateCount();
  const freeCount = getFreeTemplateCount();
  
  const handleUpgradeClick = (planName: string) => {
    if (planName === "Free") return;
    
    const tier = planName.toLowerCase() as PlanTier;
    
    if (isTestingMode()) {
      setSelectedPlan(tier);
      setPin("");
      setPinError("");
      setShowPinModal(true);
    } else {
      setToast("Payments coming soon");
      setTimeout(() => setToast(null), 3000);
    }
  };

  const [showResetModal, setShowResetModal] = useState(false);
  const [resetPin, setResetPin] = useState("");
  const [resetError, setResetError] = useState("");
  const [isResetting, setIsResetting] = useState(false);

  const handleResetEntitlement = async () => {
    if (!resetPin.trim()) {
      setResetError("Please enter the testing PIN");
      return;
    }

    setIsResetting(true);
    setResetError("");

    try {
      const installId = getInstallId();
      const res = await fetch("/api/testing/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ installId, pin: resetPin.trim() }),
      });

      if (res.status === 401) {
        setResetError("Incorrect PIN");
        setIsResetting(false);
        return;
      }

      if (!res.ok) {
        setResetError("Failed to reset");
        setIsResetting(false);
        return;
      }

      localStorage.removeItem("docgenie_testing_entitlement");
      setShowResetModal(false);
      setResetPin("");
      await refresh();
      setToast("Reset to Free plan");
      setTimeout(() => setToast(null), 3000);
    } catch {
      setResetError("Network error");
    } finally {
      setIsResetting(false);
    }
  };

  const handleUnlock = async () => {
    if (!selectedPlan || !pin.trim()) {
      setPinError("Please enter the testing PIN");
      return;
    }

    setIsUnlocking(true);
    setPinError("");

    try {
      const installId = getInstallId();
      const res = await fetch("/api/entitlement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          installId,
          planTier: selectedPlan,
          pin: pin.trim(),
        }),
      });

      if (res.status === 401) {
        setPinError("Incorrect PIN. Please try again.");
        setIsUnlocking(false);
        return;
      }

      if (!res.ok) {
        setPinError("Failed to unlock. Please try again.");
        setIsUnlocking(false);
        return;
      }

      const data = await res.json();
      
      if (data.useLocalFallback && data.entitlement) {
        localStorage.setItem("docgenie_testing_entitlement", JSON.stringify({
          isPro: true,
          planTier: data.planTier,
          status: "active",
          unlockedAt: new Date().toISOString(),
        }));
      }

      setShowPinModal(false);
      setPin("");
      await refresh();
      
      const tierName = selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1);
      setToast(`Unlocked ${tierName} (Testing)`);
      setTimeout(() => setToast(null), 4000);
    } catch (error) {
      setPinError("Network error. Please try again.");
    } finally {
      setIsUnlocking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Pricing Plans
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free, upgrade when you're ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 text-sm">
            <span className="text-[#64748b]">{freeCount} free templates</span>
            <span className="text-[#64748b]">{premiumCount} premium templates</span>
            <span className="text-[#64748b]">{totalTemplates} total templates</span>
          </div>
          {isTestingMode() && isPro && (
            <button
              onClick={() => {
                import("@/lib/entitlement").then(({ resetEntitlement }) => {
                  resetEntitlement();
                  window.location.reload();
                });
              }}
              className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline"
            >
              [Testing] Reset to Free
            </button>
          )}
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px' }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{ 
                background: plan.gradient ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : '#ffffff',
                borderRadius: '16px',
                padding: '32px',
                border: plan.gradient ? 'none' : '1px solid #e2e8f0',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                color: plan.gradient ? '#ffffff' : '#1e293b',
                position: 'relative',
              }}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#f59e0b] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    ⭐ MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6 pt-2">
                <h3 className={`text-xl font-bold ${plan.gradient ? "text-white" : "text-[#1e293b]"}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className={`text-4xl lg:text-5xl font-bold ${plan.gradient ? "text-white" : "text-[#1e293b]"}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-1 text-lg ${plan.gradient ? "text-white/80" : "text-[#64748b]"}`}>
                    {plan.period}
                  </span>
                </div>
                {plan.yearlyPrice && (
                  <p className={`text-sm mt-2 ${plan.gradient ? "text-white/80" : "text-[#10b981]"}`}>
                    {plan.yearlyPrice}
                  </p>
                )}
                <p className={`text-sm mt-3 ${plan.gradient ? "text-white/80" : "text-[#64748b]"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '24px' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '14px' }}>
                    <svg 
                      style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '2px' }}
                      fill="none" 
                      stroke={plan.gradient ? "#ffffff" : "#10b981"}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: plan.gradient ? '#ffffff' : '#1e293b' }}>{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <li key={`not-${idx}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontSize: '14px' }}>
                    <svg 
                      style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '2px' }}
                      fill="none" 
                      stroke={plan.gradient ? "rgba(255,255,255,0.4)" : "#cbd5e1"}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span style={{ color: plan.gradient ? 'rgba(255,255,255,0.5)' : '#94a3b8' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {isPro && plan.name === "Pro" ? (
                <div className="w-full py-3.5 rounded-xl font-semibold text-base text-center bg-green-500 text-white flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Current Plan
                </div>
              ) : isPro && plan.name === "Lite" ? (
                <div className="w-full py-3.5 rounded-xl font-semibold text-base text-center bg-gray-300 text-gray-600">
                  Included in Pro
                </div>
              ) : (
                <button
                  onClick={() => handleUpgradeClick(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-200 ${
                    plan.gradient
                      ? "bg-white text-[#2563eb] hover:bg-gray-100 shadow-lg"
                      : plan.name === "Lite"
                      ? "bg-[#7c3aed] hover:bg-[#6d28d9] text-white"
                      : plan.name === "Free"
                      ? "bg-[#1e293b] hover:bg-[#0f172a] text-white"
                      : "bg-[#1e293b] hover:bg-[#0f172a] text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
              Loved by professionals everywhere
            </h2>
            <p className="text-[#64748b]">
              Join thousands of users creating documents faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }} fill="#f59e0b" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#475569] text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e293b] text-sm">{testimonial.name}</p>
                    <p className="text-[#64748b] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#64748b]">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#f8fafc] transition-colors"
                >
                  <span className="font-semibold text-[#1e293b] pr-4">{faq.question}</span>
                  <svg
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }}
                    fill="none"
                    stroke="#64748b"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#64748b] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
            Ready to create documents faster?
          </h2>
          <p className="text-[#64748b] mb-6 max-w-xl mx-auto">
            Join thousands of professionals who save hours every week with DocGenie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-block bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Start Free Today
            </Link>
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 rounded-xl font-semibold border-2 border-[#e2e8f0] text-[#1e293b] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            >
              View All Templates
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/dashboard" className="text-[#2563eb] hover:underline font-medium">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      {/* PIN Modal for Testing */}
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 99999,
          opacity: showPinModal ? 1 : 0,
          pointerEvents: showPinModal ? 'auto' : 'none',
        }}
      >
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
          <h3 className="text-xl font-bold text-[#1e293b] mb-2">
            Testing Unlock
          </h3>
          <p className="text-[#64748b] text-sm mb-4">
            Enter the testing PIN to unlock {selectedPlan?.charAt(0).toUpperCase()}{selectedPlan?.slice(1)} plan.
          </p>
          
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            placeholder="Enter PIN"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent mb-3"
          />
          
          {pinError && (
            <p className="text-red-500 text-sm mb-3">{pinError}</p>
          )}
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowPinModal(false)}
              className="flex-1 py-3 rounded-xl font-semibold text-[#64748b] border border-gray-200 hover:bg-gray-50 transition-colors"
              disabled={isUnlocking}
            >
              Cancel
            </button>
            <button
              onClick={handleUnlock}
              disabled={isUnlocking}
              className="flex-1 py-3 rounded-xl font-semibold bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition-colors disabled:opacity-50"
            >
              {isUnlocking ? "Unlocking..." : "Unlock"}
            </button>
          </div>
        </div>
      </div>

      {/* Reset Modal */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          opacity: showResetModal ? 1 : 0,
          pointerEvents: showResetModal ? 'auto' : 'none',
        }}
      >
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
          <h3 className="text-xl font-bold text-[#1e293b] mb-2">
            Reset to Free
          </h3>
          <p className="text-[#64748b] text-sm mb-4">
            Enter the testing PIN to reset your plan to Free.
          </p>
          
          <input
            type="password"
            value={resetPin}
            onChange={(e) => setResetPin(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleResetEntitlement()}
            placeholder="Enter PIN"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent mb-3"
          />
          
          {resetError && (
            <p className="text-red-500 text-sm mb-3">{resetError}</p>
          )}
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowResetModal(false)}
              className="flex-1 py-3 rounded-xl font-semibold text-[#64748b] border border-gray-200 hover:bg-gray-50 transition-colors"
              disabled={isResetting}
            >
              Cancel
            </button>
            <button
              onClick={handleResetEntitlement}
              disabled={isResetting}
              className="flex-1 py-3 rounded-xl font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              {isResetting ? "Resetting..." : "Reset"}
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1e293b] text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
}
