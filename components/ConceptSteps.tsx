import { ReactNode } from "react";

interface Step {
  title: string;
  description: string;
  tip: string;
  icon: ReactNode;
}

interface ConceptStepsProps {
  steps: Step[];
}

export function ConceptSteps({ steps }: ConceptStepsProps) {
  return (
    <ol className="grid gap-4 sm:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-3xl border border-primary-100 bg-white/80 p-5 shadow-sm shadow-primary-100/40"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-100 text-sm font-semibold text-primary-700">
              {index + 1}
            </span>
            <div className="text-primary-700">{step.icon}</div>
          </div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
          <p className="mt-3 rounded-2xl bg-primary-50/80 px-3 py-2 text-xs text-primary-700">
            💡 {step.tip}
          </p>
        </li>
      ))}
    </ol>
  );
}
