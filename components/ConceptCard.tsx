import { ReactNode } from "react";

interface ConceptCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  children: ReactNode;
}

export function ConceptCard({ title, subtitle, icon, children }: ConceptCardProps) {
  return (
    <section className="rounded-3xl bg-white/80 p-6 shadow-lg shadow-primary-100/40 ring-1 ring-primary-100 transition hover:-translate-y-1 hover:shadow-xl">
      <header className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">{title}</h2>
          <p className="text-sm text-slate-600 sm:text-base">{subtitle}</p>
        </div>
      </header>
      <div className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
        {children}
      </div>
    </section>
  );
}
