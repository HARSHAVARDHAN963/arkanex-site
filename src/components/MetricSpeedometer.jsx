import React from "react";

const METRICS = [
  {
    key: "weight",
    label: "10× lighter",
    sublabel: "System Weight (relative)",
    // display + dial mapping
    valueLabel: "10× lighter (target)",
    // needle percent along dial 0..100
    needle: 85,
    note: "Lower load, easier transport, simpler structures.",
  },
  {
    key: "install",
    label: "2× faster to install",
    sublabel: "Installation Time (relative)",
    valueLabel: "2× faster (target)",
    needle: 70,
    note: "Fewer steps, faster deployment cycles.",
  },
  {
    key: "efficiency",
    label: "30% more efficient",
    sublabel: "Power Density / Yield (relative)",
    valueLabel: "+30% (target)",
    needle: 90,
    note: "Higher output per area (define baseline when publishing).",
  },
];

// Maps 0..100 to a dial angle (-120deg to +120deg)
function needleAngle(pct) {
  const clamped = Math.max(0, Math.min(100, pct));
  return -120 + (240 * clamped) / 100;
}

export default function MetricSpeedometer() {
  const [idx, setIdx] = React.useState(0);
  const active = METRICS[idx];

  const wrap = (n) => (n + METRICS.length) % METRICS.length;

  // Wheel handling with cooldown to make “one scroll = one step”
  const cooldownRef = React.useRef(false);

  const onWheel = (e) => {
    // Capture wheel only when user is intentionally interacting
    e.preventDefault();

    if (cooldownRef.current) return;

    const dir = e.deltaY > 0 ? 1 : -1;
    setIdx((i) => wrap(i + dir));

    cooldownRef.current = true;
    window.setTimeout(() => {
      cooldownRef.current = false;
    }, 420); // tune: higher = fewer accidental changes
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") setIdx((i) => wrap(i + 1));
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") setIdx((i) => wrap(i - 1));
  };

  const angle = needleAngle(active.needle);

  return (
    <section className="py-16 bg-[#0A1020] border-y border-cyan-900/40">
      <div className="w-full px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left copy */}
          <div className="lg:w-[40%]">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
              Performance at a glance
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Scroll on the dial to cycle through key metrics. One scroll step changes the metric category.
            </p>

            <div className="mt-6 rounded-lg bg-slate-900/40 border border-cyan-900/40 p-4">
              <div className="text-sm text-slate-200 font-semibold">{active.label}</div>
              <div className="text-sm text-slate-400 mt-1">{active.note}</div>
              <div className="text-xs text-slate-500 mt-3">
                Values shown as targets unless backed by certified data.
              </div>
            </div>

            {/* Controls (optional, for users who don’t scroll) */}
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setIdx((i) => wrap(i - 1))}
                className="px-3 py-2 text-sm rounded-md border border-cyan-900/60 text-slate-200 hover:bg-cyan-500/10"
              >
                Prev
              </button>
              <button
                onClick={() => setIdx((i) => wrap(i + 1))}
                className="px-3 py-2 text-sm rounded-md border border-cyan-900/60 text-slate-200 hover:bg-cyan-500/10"
              >
                Next
              </button>
            </div>
          </div>

          {/* Dial */}
          <div className="lg:w-[60%] w-full">
            <div
              className="rounded-xl bg-slate-900/40 border border-cyan-900/40 p-6"
              onWheel={onWheel}
              onKeyDown={onKeyDown}
              tabIndex={0}
              role="group"
              aria-label="Metric speedometer. Use scroll or arrow keys to change metric."
              style={{ outline: "none" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-300">{active.sublabel}</div>
                <div className="text-sm text-cyan-300">{active.valueLabel}</div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="relative w-[320px] h-[200px] sm:w-[380px] sm:h-[240px]">
                  {/* Dial background */}
                  <div className="absolute inset-0 rounded-[999px] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_80%,rgba(34,211,238,0.18),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[conic-gradient(from_210deg,rgba(34,211,238,0.0),rgba(34,211,238,0.25),rgba(59,130,246,0.20),rgba(34,211,238,0.0))]" />
                    <div className="absolute inset-0 border border-cyan-900/60 rounded-[999px]" />
                  </div>

                  {/* Tick labels */}
                  <div className="absolute left-6 bottom-6 text-xs text-slate-500">Low</div>
                  <div className="absolute right-6 bottom-6 text-xs text-slate-500">High</div>

                  {/* Needle pivot */}
                  <div className="absolute left-1/2 bottom-[34px] -translate-x-1/2">
                    {/* Needle */}
                    <div
                      className="origin-bottom w-[3px] h-[120px] bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.45)] rounded-full transition-transform duration-500 ease-out"
                      style={{ transform: `rotate(${angle}deg)` }}
                    />
                    {/* Hub */}
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-slate-200/90 border border-cyan-900/70" />
                  </div>

                  {/* Metric name (center) */}
                  <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-center">
                    <div className="text-base font-semibold text-slate-100">{active.key.toUpperCase()}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      Scroll to change metric
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="mt-6 flex justify-center gap-2">
                {METRICS.map((m, i) => (
                  <button
                    key={m.key}
                    onClick={() => setIdx(i)}
                    className={`h-2 w-8 rounded-full ${
                      i === idx ? "bg-cyan-400" : "bg-cyan-900/70"
                    }`}
                    aria-label={`Show ${m.key} metric`}
                  />
                ))}
              </div>

              <div className="mt-4 text-xs text-slate-500 text-center">
                Tip: Arrow keys also work when the dial is focused.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
