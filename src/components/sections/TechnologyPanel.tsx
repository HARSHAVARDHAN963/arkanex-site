import React from "react";
import FadeIn from "@/components/landing/FadeIn";

export default function TechnologyPanel() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] pb-16">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/Technology/bg%20video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#0B1220]/70" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="group relative overflow-hidden rounded-2xl border border-white/20 ring-1 ring-cyan-400/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(34,211,238,0.10)] p-8">
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine-pass bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.22)_45%,transparent_70%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.18),transparent_55%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.16)_45%,transparent_70%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-[linear-gradient(to_top,rgba(255,255,255,0.10),transparent)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
              aria-hidden="true"
            />
            <FadeIn>
              <div className="flex flex-col">
                <h2 className="text-4xl font-semibold tracking-tight text-White-100 mb-6 text-center">
                  TECHNOLOGY
                </h2>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="lg:w-[100%]">
                    <p className="text-2xl font-semibold text-White-100 text-center">
                      Flexible All-Perovskite Tandem Technology
                    </p>

                    <p className="mt-3 text-lg font-semibold text-White-100 text-center">
                      Ultra low-cost, lightweight solar on any surface without mounts
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-White-100 text-center">
                      Flexible stick-on weighing &lt;3kg per/m2. Unlocking low-cost solar for traditional utility solar and additionally for new markets as well.
                    </p>

                    <p className="mt-4 text-base font-semibold text-White-100 text-center">
                      10x lighter <span className="px-6 text-White-100 text-center">|</span>
                      2x faster to install
                      <span className="px-6 text-White-100 text-center">|</span>
                      30% more efficient
                    </p>

                    <div className="mt-2 relative -ml-4 sm:-ml-8 lg:-ml-9">
                      <img
                        src="/Technology/Technology%20Features_V1.png"
                        alt="Technology features"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.1}>
            <div className="mt-20 space-y-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center py-10">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-slate-100">Perovskite</h3>
                  <p className="mt-3 text-slate-300 text-justify">
                    Perovskites are a new class of semiconductors made from abundant, low cost materials that exhibit remarkable light absorption properties. Their ABX3 crystal structure allows countless
                    cation-anion combinations that tune their optical and electronic properties. Unlike traditional silicon, their crystal structure can be engineered at the molecular level and deposited at low temperatures.
                     Because perovskites absorb light so efficiently and can be chemically tailored for optimal performance, they have already surpassed silicon in certified laboratory efficiencies  representing one of the most significant breakthroughs in solar materials in decades.

                  </p>
                </div>
                <video
                  className="w-full lg:w-1/2 h-auto object-contain rounded-lg border border-cyan-900 bg-slate-900/40"
                  src="/Technology/Perovskite%20video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-6 items-center py-10">
                <img
                  src="/Technology/tech1.png"
                  alt="Roll-to-Roll (R2R) Manufacturing"
                  className="w-full lg:w-1/2 h-auto object-contain rounded-lg border border-cyan-900 bg-slate-900/40"
                />
                <div className="lg:w-1/2 ">
                  <h3 className="text-2xl font-semibold text-slate-100 ">Roll-to-Roll (R2R) Manufacturing</h3>
                  <p className="mt-10 text-slate-300 text-justify">
                    Roll-to-roll manufacturing unlocks the true cost potential of perovskite solar. Unlike rigid silicon wafers, perovskite cells can be fabricated on flexible transparent plastic substrates using printable inks and ultrathin layers just hundreds of nanometers thick.
                    This enables a fully continuous production line, from layer depositions and scribing to lamination, with dramatically higher throughput and lower capex. The result: manufactured at lower cost and delivered as an ultrathin, flexible film that can be applied almost anywhere like a sticker.
                    By simplifying mounting hardware, it cuts labor, transportation, and balance-of-system expenses across the entire installation chain.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 items-center py-10">
                <div className="lg:w-[50%]">
                  <h3 className="text-2xl font-semibold text-slate-100">Tandem cell design</h3>
                  <p className="mt-10 text-slate-300 text-justify">
                    All perovskite tandem architectures unlock efficiency levels that single-junction silicon simply canƒ?Tt reach. By stacking two perovskite layers tuned to different parts of the solar spectrum, these tandem architectures deliver significantly more power per square meter.
                    The smaller land footprint translates directly into fewer modules, less land and lower project costs. And while our focus is on all-perovskite tandems, the same architecture can also be paired with silicon when required.
                    In a world where land is scarce and rising in value, tandem turns spectral efficiency into real economic advantage.

                  </p>
                </div>
                <img
                  src="/Technology/tech2.png"
                  alt="Tandem cell design"
                  className="ml-auto w-full lg:w-[38%] h-auto object-contain rounded-lg border border-cyan-900 bg-slate-900/40"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
