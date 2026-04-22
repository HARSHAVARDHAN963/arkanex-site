import React from "react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/landing/FadeIn";

export default function PartnersPanel() {
  return (
    <div className="bg-[#0B0F17] text-slate-100">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                  Breaking the Solar Ceiling.
                </h1>
                <p className="text-lg text-slate-300">
                  Next-generation perovskite tandem solar, designed for flexible applications, cost leadership, and long-term sustainability.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900">Watch How It Works</Button>
                  <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">
                    Investor Overview
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-72 sm:h-80 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/40 to-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.45)]" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Silicon Is Near Its Limits. Energy Demand Isn’t.
              </h2>
              <p className="text-slate-300">
                Traditional silicon solar has done the heavy lifting for the energy transition, but it is approaching a practical ceiling in performance.
              </p>
              <p className="text-slate-300">
                Roofs and land are finite, and simply adding more of the same panels is not always possible or economical.
              </p>
              <p className="text-slate-300">
                Perovskite tandems unlock more power from the same footprint, opening the door to higher-value projects and more efficient use of existing surfaces.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">The Solar Sandwich</h2>
                <p className="text-slate-300">
                  Perovskite is a new class of solar material that complements silicon instead of replacing it.
                </p>
                <p className="text-slate-300">
                  Silicon is good at capturing part of the sunlight spectrum; perovskite is tuned to catch the parts silicon leaves on the table.
                </p>
                <p className="text-slate-300">
                  When a thin perovskite layer is stacked on top of a silicon cell, the result is a “solar sandwich” that converts more of each ray of sunlight into electricity.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-center text-sm text-cyan-200">
                  Perovskite layer
                </div>
                <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-6 text-center text-sm text-slate-200">
                  Silicon
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Animation-ready: spectrum → layer drop → increased capture.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                From Lab Curiosity to Bankable Technology
              </h2>
            </div>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Momentum",
                text: "Perovskite solar has progressed from promising lab results to early commercial deployments.",
              },
              {
                title: "Durability",
                text: "Independent research groups and testing centers are focused on durability, pushing devices through heat, humidity, and outdoor exposure.",
              },
              {
                title: "Manufacturing",
                text: "Perovskites can be processed using coating and printing techniques that can be less capital‑intensive than traditional silicon lines.",
              },
            ].map((card) => (
              <FadeIn key={card.title} delay={0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:border-cyan-500/40 hover:bg-white/10">
                  <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Flexible. Cost-First. Partnership-Ready.
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Our focus is on perovskite tandem architectures designed for both rigid modules and flexible, lightweight formats.",
              "We design processes around scalable, solution-based coating and printing approaches.",
              "We are open by design: meant to integrate with silicon manufacturers and building-material partners.",
            ].map((item) => (
              <FadeIn key={item} delay={0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  {item}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
