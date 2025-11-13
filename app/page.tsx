import { ConceptCard } from "../components/ConceptCard";
import { ConceptSteps } from "../components/ConceptSteps";
import { InteractiveStatsTool } from "../components/InteractiveStatsTool";
import { PracticeExercises } from "../components/PracticeExercises";

const conceptData = [
  {
    title: "Moyenne",
    subtitle: "Valeur qui représente l’équilibre de toutes les données",
    icon: "Σ",
    description: [
      "Additionne toutes les valeurs avec attention, puis divise par le nombre total de données.",
      "La moyenne est très sensible aux valeurs extrêmes : une seule valeur très grande ou très petite peut tout changer.",
      "Utilise la moyenne quand tu veux résumer un ensemble homogène (par exemple les notes d’un contrôle)."
    ],
    steps: [
      {
        title: "Additionne",
        description: "Fais la somme de toutes les valeurs, même si elles se répètent.",
        tip: "Utilise une couleur différente pour cocher chaque valeur déjà ajoutée.",
        icon: "➕"
      },
      {
        title: "Compte",
        description: "Compte le nombre total de valeurs pour savoir par combien diviser.",
        tip: "Si la série est longue, regroupe les données par paquets de 2 ou 5.",
        icon: "🔢"
      },
      {
        title: "Divise",
        description: "Divise la somme par le nombre de valeurs pour obtenir la moyenne.",
        tip: "Note le résultat avec deux décimales si nécessaire.",
        icon: "➗"
      }
    ]
  },
  {
    title: "Médiane",
    subtitle: "Valeur centrale quand la série est triée",
    icon: "⋀",
    description: [
      "Commence par ranger les valeurs dans l’ordre croissant.",
      "Pour un nombre impair de valeurs, la médiane est la valeur du milieu.",
      "Pour un nombre pair, la médiane est la moyenne des deux valeurs centrales."
    ],
    steps: [
      {
        title: "Trie",
        description: "Range les valeurs du plus petit au plus grand sans en oublier.",
        tip: "Recopie la série triée sur une nouvelle ligne pour y voir plus clair.",
        icon: "↕️"
      },
      {
        title: "Encadre",
        description: "Barre les valeurs depuis l’extérieur jusqu’à atteindre le centre.",
        tip: "Procède par paires en partant des extrêmes : gauche/droite.",
        icon: "📏"
      },
      {
        title: "Conclue",
        description:
          "Si tu obtiens deux valeurs centrales, calcule leur moyenne pour trouver la médiane.",
        tip: "La médiane n’est pas influencée par les valeurs extrêmes.",
        icon: "🎯"
      }
    ]
  },
  {
    title: "Étendue",
    subtitle: "Différence entre la plus grande et la plus petite valeur",
    icon: "↔",
    description: [
      "L’étendue mesure la dispersion : plus elle est grande, plus les données sont éparpillées.",
      "Tu n’as besoin que de deux valeurs : le minimum et le maximum.",
      "Utilise l’étendue pour détecter des résultats étonnants ou des écarts importants."
    ],
    steps: [
      {
        title: "Repère",
        description: "Identifie la plus petite et la plus grande valeur de la série.",
        tip: "Le tri croissant facilite cette étape.",
        icon: "🔍"
      },
      {
        title: "Soustrais",
        description: "Calcule maximum − minimum pour obtenir l’étendue.",
        tip: "Pense à vérifier tes signes pour éviter les erreurs.",
        icon: "➖"
      },
      {
        title: "Interprète",
        description: "Plus l’étendue est grande, plus les données sont dispersées.",
        tip: "Compare plusieurs séries pour voir laquelle est la plus stable.",
        icon: "📊"
      }
    ]
  }
];

export default function Page() {
  return (
    <main className="flex flex-col gap-12 pb-16">
      <section className="rounded-3xl border border-primary-200 bg-white/90 p-8 shadow-xl shadow-primary-200/40">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
          Spécial 4ᵉ — Évaluation de statistiques
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Comprendre et maîtriser la moyenne, la médiane et l’étendue
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
          Révise efficacement avant ton contrôle : définitions claires, méthodes pas à pas,
          outils interactifs et exercices corrigés pour devenir imbattable sur les notions
          de statistique au collège.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-primary-50 px-3 py-1">➕ Moyenne</span>
          <span className="rounded-full bg-primary-50 px-3 py-1">🎯 Médiane</span>
          <span className="rounded-full bg-primary-50 px-3 py-1">↔ Étendue</span>
          <span className="rounded-full bg-primary-50 px-3 py-1">🧠 Astuces</span>
          <span className="rounded-full bg-primary-50 px-3 py-1">📝 Exercices</span>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        {conceptData.map((concept) => (
          <div key={concept.title} className="space-y-5">
            <ConceptCard title={concept.title} subtitle={concept.subtitle} icon={concept.icon}>
              {concept.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </ConceptCard>
            <ConceptSteps steps={concept.steps} />
          </div>
        ))}
      </section>

      <section className="grid gap-8">
        <InteractiveStatsTool />
        <div className="rounded-3xl border border-primary-100 bg-white/90 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Mémo rapide</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-base font-semibold text-primary-700">Moyenne</h4>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-mono">moyenne = somme des valeurs ÷ nombre de valeurs</span>
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Idéal pour comparer des performances globales (notes, scores, temps...).
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-base font-semibold text-primary-700">Médiane</h4>
              <p className="mt-2 text-sm text-slate-600">
                Valeur du milieu quand la série est triée. Pour une série paire : moyenne des
                deux centrales.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Protège contre les valeurs extrêmes : parfait pour analyser des salaires ou des
                temps de trajet.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-base font-semibold text-primary-700">Étendue</h4>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-mono">étendue = valeur maximale − valeur minimale</span>
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Mesure la dispersion : utile pour repérer des écarts importants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PracticeExercises />

      <section className="rounded-3xl border border-primary-100 bg-gradient-to-r from-primary-50 to-slate-50 p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">Checklist avant ton évaluation</h3>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:text-base">
          <li>✅ Je sais expliquer la différence entre moyenne, médiane et étendue.</li>
          <li>✅ Je peux calculer la moyenne même avec des nombres décimaux.</li>
          <li>✅ Je sais trier une série et repérer sa médiane.</li>
          <li>✅ Je calcule rapidement l’étendue avec un simple maximum − minimum.</li>
          <li>✅ J’ai fait les exercices en vérifiant mes réponses.</li>
        </ul>
      </section>
    </main>
  );
}
