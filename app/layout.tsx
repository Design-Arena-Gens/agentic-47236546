import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Maîtriser les statistiques : moyenne, médiane, étendue",
  description:
    "Révise tes notions de moyenne, médiane et étendue avec des explications claires, des exemples interactifs et des exercices auto-corrigés conçus pour la classe de quatrième.",
  keywords: [
    "statistiques",
    "moyenne",
    "médiane",
    "étendue",
    "collège",
    "mathématiques",
    "révisions"
  ],
  authors: [{ name: "Assistant IA" }]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
