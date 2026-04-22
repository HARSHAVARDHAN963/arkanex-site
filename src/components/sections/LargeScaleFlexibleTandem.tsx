import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Map, Zap, Clock } from "lucide-react";

const SCALE_TILES = [
  {
    icon: Layers,
    title: "Land / Footprint",
    desc: "XX% less land (placeholder)",
  },
  {
    icon: Map,
    title: "Balance of System",
    desc: "₹X saved (placeholder)",
  },
  {
    icon: Zap,
    title: "Grid / Interconnect",
    desc: "More kWh per connection (placeholder)",
  },
  {
    icon: Clock,
    title: "Deployment Speed",
    desc: "Fewer parts, faster install (placeholder)",
  },
];

export default function LargeScaleFlexibleTandem() {
  return (
    <section id="large-scale" className="relative overflow-hidden bg-gradient-to-b from-[#0B0F17] via-[#0B1220] to-[#090D15] py-20">
      <div className="absolute inset-0 bg-[url('/stock/placeholder-datacenter.jpg')] bg-cover bg-center opacity-10" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">LARGE-SCALE</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-100">
            Flexible Tandem PV for Industrial Facilities
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Built for high-demand sites like data centers, logistics hubs, and critical infrastructure.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Up to XX% more energy per m² (placeholder).
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
              aria-hidden="true"
            />
            <CardHeader className="pb-2">
              <CardTitle className="text-slate-100">Inputs</CardTitle>
              <p className="text-sm text-slate-400">Form UI only (placeholders).</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="facility-area" className="text-sm text-slate-300">
                  Facility / Roof Area (m²)
                </label>
                <Input id="facility-area" placeholder="(placeholder)" />
              </div>
              <div className="space-y-2">
                <label htmlFor="system-size" className="text-sm text-slate-300">
                  Target System Size (MW)
                </label>
                <Input id="system-size" placeholder="(placeholder)" />
              </div>
              <div className="space-y-2">
                <label htmlFor="sun-hours" className="text-sm text-slate-300">
                  Sun Hours (hrs/day)
                </label>
                <Input id="sun-hours" placeholder="(placeholder)" />
              </div>
              <div className="space-y-2">
                <label htmlFor="electricity-value" className="text-sm text-slate-300">
                  Electricity Value (₹/kWh)
                </label>
                <Input id="electricity-value" placeholder="₹X (placeholder)" />
              </div>

              <div className="space-y-2">
                <span className="text-sm text-slate-300">Compare</span>
                <div role="group" aria-label="Compare" className="flex gap-2">
                  <button
                    type="button"
                    aria-pressed="true"
                    className="flex-1 rounded-full border border-cyan-500/40 bg-cyan-500/15 px-4 py-2 text-sm text-cyan-200"
                  >
                    Silicon
                  </button>
                  <button
                    type="button"
                    aria-pressed="false"
                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-cyan-500/30"
                  >
                    Tandem
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Estimated Annual Output</span>
                  <span className="text-slate-100">XXX,XXX kWh (placeholder)</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span>Annual Gain</span>
                  <span className="text-cyan-300">+XX% (placeholder)</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span>Estimated Value Uplift</span>
                  <span className="text-slate-100">₹X,XX,XX,XXX / year (placeholder)</span>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                Values shown are placeholders. Configure later.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                aria-hidden="true"
              />
              <CardContent className="space-y-3">
                <CardTitle className="text-slate-100">Traditional Silicon PV</CardTitle>
                <ul className="list-disc pl-4 text-sm text-slate-300 space-y-2">
                  <li>Placeholder point (placeholder)</li>
                  <li>Placeholder point (placeholder)</li>
                  <li>Placeholder point (placeholder)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Badge className="bg-cyan-500/10 text-cyan-200 border border-cyan-500/30">+XX% energy density (placeholder)</Badge>
            </div>

            <Card className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]"
                aria-hidden="true"
              />
              <CardContent className="space-y-3">
                <CardTitle className="text-slate-100">Flexible Tandem PV</CardTitle>
                <ul className="list-disc pl-4 text-sm text-slate-300 space-y-2">
                  <li>Placeholder point (placeholder)</li>
                  <li>Placeholder point (placeholder)</li>
                  <li>Placeholder point (placeholder)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <img
                src="/infographics/placeholder-large-scale.png"
                alt="Large-scale infographic (placeholder)"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SCALE_TILES.map((tile) => {
            const Icon = tile.icon;
            return (
              <Card key={tile.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <div
                  className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.16)_45%,transparent_70%)]"
                  aria-hidden="true"
                />
                <CardContent className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">{tile.title}</div>
                    <div className="text-xs text-slate-400">{tile.desc}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900">Download Investor Brief</Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">
              Partner With Us
            </Button>
          </div>
          <p className="text-xs text-slate-400">All metrics shown are placeholders.</p>
        </div>
      </div>
    </section>
  );
}
