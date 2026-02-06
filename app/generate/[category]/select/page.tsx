import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryTemplates, getCategory } from "@/lib/templates";

export const dynamic = "force-dynamic";

export default async function SelectPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const cat = getCategory(category);
  if (!cat) notFound();

  const templates = getCategoryTemplates(category);
  const freeTemplates = templates.filter(t => !t.isPremium);
  const premiumTemplates = templates.filter(t => t.isPremium);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      <div className="page-container py-6 md:py-10">
        <nav className="text-sm text-[#64748b] mb-4">
          <Link href="/dashboard" className="hover:text-[#2563eb] transition-colors">Dashboard</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1e293b]">{cat.title}</span>
        </nav>
        
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1e293b]">{cat.title}</h1>
          {cat.description && <p className="text-[#64748b] mt-2">{cat.description}</p>}
          <p className="text-sm text-[#94a3b8] mt-2">
            {templates.length} templates available ({freeTemplates.length} free, {premiumTemplates.length} premium)
          </p>
        </div>

        {freeTemplates.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-[#1e293b] mb-4">Free Templates</h2>
            <div className="grid gap-3">
              {freeTemplates.map((t) => (
                <Link
                  key={t.id}
                  href={`/generate/${category}/${t.id}`}
                  className="group block"
                >
                  <div className="glass-card glass-card-hover rounded-xl px-5 py-4 transition-all">
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="font-medium text-[#1e293b] group-hover:text-[#2563eb] transition-colors">
                          {t.title}
                        </div>
                        {t.description && (
                          <p className="text-sm text-[#64748b] mt-1 line-clamp-1">{t.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-xs font-medium text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                          Free
                        </span>
                        <span className="text-sm font-medium text-[#2563eb] group-hover:translate-x-1 transition-transform">
                          Use →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {premiumTemplates.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold text-[#1e293b]">Premium Templates</h2>
              <span className="premium-badge">PRO</span>
            </div>
            <div className="grid gap-3">
              {premiumTemplates.map((t) => (
                <Link
                  key={t.id}
                  href={`/generate/${category}/${t.id}`}
                  className="group block"
                >
                  <div className="glass-card glass-card-hover rounded-xl px-5 py-4 transition-all border-l-4 border-l-[#7c3aed]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#1e293b] group-hover:text-[#7c3aed] transition-colors">
                            {t.title}
                          </span>
                          <span className="premium-badge text-[10px]">PRO</span>
                        </div>
                        {t.description && (
                          <p className="text-sm text-[#64748b] mt-1 line-clamp-1">{t.description}</p>
                        )}
                      </div>
                      <span className="text-sm font-medium text-[#7c3aed] group-hover:translate-x-1 transition-transform flex-shrink-0">
                        Use →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
