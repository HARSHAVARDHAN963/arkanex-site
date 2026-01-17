import React, { useMemo, useState } from "react";

const METRICS = [
  {
    key: "weight",
    label: "System Weight (relative)",
    unit: "%",
    better: "lower",
    start: 100,
    end: 10,
    accent: "from-cyan-400 via-sky-400 to-emerald-300",
  },
  {
    key: "install",
    label: "Install Time (relative)",
    unit: "%",
    better: "lower",
    start: 100,
    end: 50,
    accent: "from-cyan-400 via-sky-400 to-teal-300",
  },
  {
    key: "yield",
    label: "Power Density / Yield (relative)",
    unit: "index",
    better: "higher",
    start: 100,
    end: 130,
    accent: "from-cyan-400 via-sky-300 to-lime-300",
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const lerp = (start, end, t) => start + (end - start) * t;

export default function MetricSlider() {
  const [value, setValue] = useState(60);

  const metrics = useMemo(() => {
    const t = clamp(value, 0, 100) / 100;
    return METRICS.map((metric) => {
      const raw = lerp(metric.start, metric.end, t);
      const display = Math.round(raw * 10) / 10;
      const improvement =
        metric.better === "lower"
          ? (metric.start - raw) / (metric.start - metric.end)
          : (raw - metric.start) / (metric.end - metric.start);
      return {
        ...metric,
        display,
        improvement: clamp(improvement, 0, 1),
      };
    });
  }, [value]);

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0B1220] px-6 py-10 text-slate-100 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
      aria-labelledby="metric-slider-title"
    >
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Performance comparison</p>
            <h2 id="metric-slider-title" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Lighter systems. Faster installs. Higher yield.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Drag the slider to compare relative improvements against conventional systems.
            </p>
          </div>
          <div className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
            Scenario: {value}% optimized
          </div>
        </div>

        <div className="mt-8">
          <label className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
            <span>Baseline</span>
            <span>Optimized</span>
          </label>
          <div className="mt-3 flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
              aria-label="Optimization level"
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800/80 outline-none ring-1 ring-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <span className="w-12 text-right text-sm text-cyan-200" aria-live="polite">
              {value}%
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {metrics.map((metric) => (
            <div key={metric.key} className="rounded-2xl border border-cyan-500/20 bg-slate-950/40 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-200">{metric.label}</p>
                  <p className="mt-1 text-xs text-slate-400">{metric.better === "lower" ? "Lower is better" : "Higher is better"}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current</p>
                  <p className="text-lg font-semibold text-cyan-200">
                    {metric.display}
                    <span className="text-xs text-slate-400"> {metric.unit}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{metric.start}{metric.unit === "%" ? "%" : ""}</span>
                  <span>{metric.end}{metric.unit === "%" ? "%" : ""}</span>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-slate-800/80">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${metric.accent} shadow-[0_0_20px_rgba(34,211,238,0.4)]`}
                    style={{ width: `${Math.round(metric.improvement * 100)}%` }}
                    role="progressbar"
                    aria-valuenow={Math.round(metric.improvement * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${metric.label} improvement`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
