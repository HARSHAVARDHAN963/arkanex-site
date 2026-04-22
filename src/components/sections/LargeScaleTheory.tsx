import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cable, LandPlot, PlugZap, TrendingUp } from "lucide-react";

const STAT_CHIPS = [
  { label: "More kWh / m²", icon: TrendingUp },
  { label: "Less Land", icon: LandPlot },
  { label: "Lower BOS", icon: Cable },
  { label: "Lower LCOE", icon: PlugZap },
];

export default function LargeScaleTheory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0F17] via-[#0B1220] to-[#080B12] py-20">
      <div
        className="absolute inset-0 bg-[url('/stock/placeholder-utility-solar.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100">Why Scale Changes the Math</h2>
          <p className="mt-3 text-slate-300">
            At one panel, the gain looks modest. At industrial scale, it becomes land, BOS, grid, and LCOE advantage.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                aria-hidden="true"
              />
              <CardHeader>
                <CardTitle className="text-slate-100">Panel-Level (Same Area)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li>Silicon PV: ~21% efficiency</li>
                  <li>Tandem PV: ~25% efficiency</li>
                  <li>~18–20% more energy per m²</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                aria-hidden="true"
              />
              <CardHeader>
                <CardTitle className="text-slate-100">Industrial-Scale Effects (100 MW Example)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-300">
                  <li>Land: 15–20% less land → ~60–90 acres saved</li>
                  <li>BOS: 8–12% lower total project CAPEX (fewer mounts, cables, civil works)</li>
                  <li>Energy: +30 GWh/year from the same site</li>
                  <li>Grid: more kWh through the same interconnection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                aria-hidden="true"
              />
              <CardHeader>
                <CardTitle className="text-slate-100">Why This Matters</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Tandem PV wins by compressing land, infrastructure, and grid constraints—lowering LCOE at scale.
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                aria-hidden="true"
              />
              <CardContent>
                <img
                  src="/infographics/placeholder-large-scale.png"
                  alt="Large-scale infographic placeholder"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </CardContent>
            </Card>

            <div className="space-y-3">
              {STAT_CHIPS.map((chip) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={chip.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    {chip.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900">
              Download Investor Brief
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">
              Talk to Partnerships
            </Button>
          </div>
          <p className="text-xs text-slate-400">
            Illustrative example; site-specific yield depends on location, design, and operating conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
