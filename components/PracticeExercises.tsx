"use client";

import { useMemo, useState } from "react";

interface Exercise {
  id: number;
  data: number[];
}

function generateDataset(): number[] {
  const length = 5 + Math.floor(Math.random() * 3);
  const base = 4 + Math.floor(Math.random() * 6);
  return Array.from({ length }, () => base + Math.floor(Math.random() * 8));
}

function computeMean(values: number[]) {
  if (!values.length) return 0;
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

function computeMedian(values: number[]) {
  if (!values.length) return 0;
  const ordered = [...values].sort((a, b) => a - b);
  const mid = Math.floor(ordered.length / 2);
  return ordered.length % 2 === 0
    ? (ordered[mid - 1] + ordered[mid]) / 2
    : ordered[mid];
}

function computeRange(values: number[]) {
  if (!values.length) return 0;
  const ordered = [...values].sort((a, b) => a - b);
  return ordered[ordered.length - 1] - ordered[0];
}

export function PracticeExercises() {
  const [exercises, setExercises] = useState<Exercise[]>(
    Array.from({ length: 3 }, (_, id) => ({ id, data: generateDataset() }))
  );
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showCorrections, setShowCorrections] = useState(false);

  const corrections = useMemo(
    () =>
      exercises.reduce<Record<number, { mean: number; median: number; range: number }>>(
        (acc, exercise) => {
          acc[exercise.id] = {
            mean: Number(computeMean(exercise.data).toFixed(2)),
            median: Number(computeMedian(exercise.data).toFixed(2)),
            range: Number(computeRange(exercise.data).toFixed(2))
          };
          return acc;
        },
        {}
      ),
    [exercises]
  );

  const handleChange = (exerciseId: number, field: "mean" | "median" | "range", value: string) => {
    setResponses((current) => ({ ...current, [`${exerciseId}-${field}`]: value }));
  };

  const resetExercises = () => {
    setExercises(Array.from({ length: 3 }, (_, id) => ({ id, data: generateDataset() })));
    setResponses({});
    setShowCorrections(false);
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-primary-100/40">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Exercices auto-corrigés
          </h3>
          <p className="text-sm text-slate-600 sm:text-base">
            Calcule la moyenne, la médiane et l’étendue pour chaque série. Clique sur
            « Voir les corrections » pour vérifier tes réponses.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowCorrections(true)}
            className="rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Voir les corrections
          </button>
          <button
            type="button"
            onClick={resetExercises}
            className="rounded-xl border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-600 transition hover:bg-primary-50"
          >
            Nouveaux exercices
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {exercises.map((exercise, index) => (
          <article key={exercise.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Série {index + 1}
            </h4>
            <p className="mt-1 text-sm text-slate-700 sm:text-base">
              Valeurs : {exercise.data.join(" · ")}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {(["mean", "median", "range"] as const).map((field) => {
                const correction = corrections[exercise.id];
                return (
                  <label key={field} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {field === "mean" && "Moyenne"}
                      {field === "median" && "Médiane"}
                      {field === "range" && "Étendue"}
                    </span>
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="?"
                      value={responses[`${exercise.id}-${field}`] ?? ""}
                      onChange={(event) => handleChange(exercise.id, field, event.target.value)}
                      className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-base font-medium text-slate-800 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    />
                    {showCorrections && correction && (
                      <span className="text-xs text-slate-500">
                        Correction :
                        <span className="ml-2 font-semibold text-primary-700">
                          {correction[field].toString().replace(".", ",")}
                        </span>
                      </span>
                    )}
                  </label>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
