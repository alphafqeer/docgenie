import { Preferences } from "@/lib/storage/preferences";

const ANALYTICS_KEY = "docgenie_analytics";

export interface AnalyticsEvent {
  name: string;
  properties: Record<string, unknown>;
  timestamp: string;
}

export interface AnalyticsData {
  events: AnalyticsEvent[];
  documentCreationCount: number;
  upgradePromptShown: number;
  upgradeCompleted: number;
  templateUsage: Record<string, number>;
  sessionCount: number;
  lastSession: string | null;
}

function getDefaultAnalytics(): AnalyticsData {
  return {
    events: [],
    documentCreationCount: 0,
    upgradePromptShown: 0,
    upgradeCompleted: 0,
    templateUsage: {},
    sessionCount: 0,
    lastSession: null,
  };
}

async function getAnalytics(): Promise<AnalyticsData> {
  try {
    const { value } = await Preferences.get({ key: ANALYTICS_KEY });
    if (value) {
      return JSON.parse(value) as AnalyticsData;
    }
    return getDefaultAnalytics();
  } catch {
    return getDefaultAnalytics();
  }
}

async function saveAnalytics(data: AnalyticsData): Promise<void> {
  await Preferences.set({
    key: ANALYTICS_KEY,
    value: JSON.stringify(data),
  });
}

export async function trackEvent(name: string, properties: Record<string, unknown> = {}): Promise<void> {
  const analytics = await getAnalytics();
  
  analytics.events.push({
    name,
    properties,
    timestamp: new Date().toISOString(),
  });
  
  if (analytics.events.length > 1000) {
    analytics.events = analytics.events.slice(-500);
  }
  
  await saveAnalytics(analytics);
}

export async function trackDocumentCreation(templateId: string, category: string): Promise<void> {
  const analytics = await getAnalytics();
  
  analytics.documentCreationCount += 1;
  analytics.templateUsage[templateId] = (analytics.templateUsage[templateId] || 0) + 1;
  
  await saveAnalytics(analytics);
  await trackEvent("document_created", { templateId, category });
}

export async function trackUpgradePromptShown(): Promise<void> {
  const analytics = await getAnalytics();
  analytics.upgradePromptShown += 1;
  await saveAnalytics(analytics);
  await trackEvent("upgrade_prompt_shown");
}

export async function trackUpgradeCompleted(tier: string): Promise<void> {
  const analytics = await getAnalytics();
  analytics.upgradeCompleted += 1;
  await saveAnalytics(analytics);
  await trackEvent("upgrade_completed", { tier });
}

export async function trackSessionStart(): Promise<void> {
  const analytics = await getAnalytics();
  analytics.sessionCount += 1;
  analytics.lastSession = new Date().toISOString();
  await saveAnalytics(analytics);
  await trackEvent("session_start");
}

export async function trackTemplateView(templateId: string, category: string, isPremium: boolean): Promise<void> {
  await trackEvent("template_view", { templateId, category, isPremium });
}

export async function getPopularTemplates(limit: number = 10): Promise<{ templateId: string; count: number }[]> {
  const analytics = await getAnalytics();
  
  return Object.entries(analytics.templateUsage)
    .map(([templateId, count]) => ({ templateId, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export async function getAnalyticsSummary(): Promise<{
  totalDocuments: number;
  upgradeConversionRate: number;
  popularTemplates: { templateId: string; count: number }[];
  sessionCount: number;
}> {
  const analytics = await getAnalytics();
  
  const conversionRate = analytics.upgradePromptShown > 0 
    ? (analytics.upgradeCompleted / analytics.upgradePromptShown) * 100 
    : 0;
  
  return {
    totalDocuments: analytics.documentCreationCount,
    upgradeConversionRate: Math.round(conversionRate * 100) / 100,
    popularTemplates: await getPopularTemplates(5),
    sessionCount: analytics.sessionCount,
  };
}
