"use client";

import { useMemo, useState } from "react";

interface DatasetItem {
  id: number;
  value: number;
}

const defaultValues = [8, 12, 5, 14, 9, 7];

function computeMean(values: number[]) {
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

function computeMedian(values: number[]) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

function computeRange(values: number[]) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
}

export function InteractiveStatsTool() {
  const [items, setItems] = useState<DatasetItem[]>(
    defaultValues.map((value, index) => ({ id: index, value }))
  );
  const [nextId, setNextId] = useState(defaultValues.length);
  const [newValue, setNewValue] = useState(10);

  const dataset = useMemo(() => items.map((item) => item.value), [items]);

  const mean = useMemo(() => computeMean(dataset), [dataset]);
  const median = useMemo(() => computeMedian(dataset), [dataset]);
  const range = useMemo(() => computeRange(dataset), [dataset]);

  const sortedValues = useMemo(() => [...dataset].sort((a, b) => a - b), [dataset]);

  const handleUpdate = (id: number, value: number) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const handleRemove = (id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    if (Number.isNaN(newValue)) return;
    setItems((current) => [...current, { id: nextId, value: newValue }]);
    setNextId((id) => id + 1);
  };

  return (
    <section className="rounded-3xl border border-primary-100 bg-white/80 p-6 shadow-md">
      <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
        Manipule le jeu de données
      </h3>
      <p className="mt-1 text-sm text-slate-600 sm:text-base">
        Ajoute, modifie ou supprime des valeurs pour observer l’effet immédiat sur la
        moyenne, la médiane et l’étendue.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-[2fr_1fr]">
        <div className="space-y-3">
          <ul className="grid gap-3">
            {items.map((item, index) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm"
              >
                <span className="text-sm font-medium text-slate-600 sm:text-base">
                  Valeur {index + 1}
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={item.value}
                    onChange={(event) => handleUpdate(item.id, Number(event.target.value))}
                    className="w-20 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1 text-right text-sm font-semibold text-slate-800 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 sm:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="rounded-xl border border-red-200 px-3 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                    aria-label={`Supprimer la valeur ${item.value}`}
                  >
                    Retirer
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-dashed border-primary-200 bg-primary-50/60 px-3 py-3">
            <input
              type="number"
              value={newValue}
              onChange={(event) => setNewValue(Number(event.target.value))}
              className="h-10 w-24 rounded-xl border border-primary-200 bg-white px-3 text-right text-base font-semibold text-primary-700 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
            >
              Ajouter
            </button>
            <span className="text-xs text-slate-500 sm:text-sm">
              Conseil : essaie des valeurs très grandes ou très petites pour voir comment
              réagissent les indicateurs.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-primary-600/90 p-4 text-white shadow-lg">
            <h4 className="text-sm uppercase tracking-wide text-primary-100">Résultats</h4>
            <dl className="mt-2 space-y-2 text-base font-semibold">
              <div className="flex items-center justify-between">
                <dt>Moyenne</dt>
                <dd>{Math.round(mean * 100) / 100}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Médiane</dt>
                <dd>{Math.round(median * 100) / 100}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Étendue</dt>
                <dd>{Math.round(range * 100) / 100}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-700">Tri croissant</h4>
            <p className="mt-1 text-sm text-slate-600">
              {sortedValues.length > 0 ? sortedValues.join(" · ") : "Aucune valeur"}
            </p>
            <p className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600">
              Astuce : la médiane se lit directement sur cette ligne. Pour une médiane,
              repère la valeur centrale (ou la moyenne des deux centrales si la série est
              paire).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
