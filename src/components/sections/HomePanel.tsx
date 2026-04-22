import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader } from "@/components/ui/card";
import FadeIn from "@/components/landing/FadeIn";

const TAB_ORDER = ["residential", "utility", "commercial"];

const PRODUCTS = {
  utility: [
    { name: "Transport", image: "/Products/Utility.png" },
    { name: "Utility", image: "/Products/Transport.png" },
  ],
  commercial: [
    { name: "Commercial Rooftops", image: "/Products/Airport.png" },
    { name: "Commercial Rooftops", image: "/Products/Curved parking.png" },
  ],
  residential: [
    { name: "Agrivoltaics R4", image: "/Products/Agrivoltaics.png" },
    { name: "BIPV R3", image: "/Products/PSM BIPV 2.png" },
  ],
};

export default function HomePanel() {
  const [tab, setTab] = React.useState(TAB_ORDER[0]);
  const activeTabIndex = Math.max(0, TAB_ORDER.indexOf(tab));

  React.useEffect(() => {
    const id = setInterval(() => {
      setTab((current) => {
        const idx = TAB_ORDER.indexOf(current);
        const nextIndex = idx === -1 ? 0 : (idx + 1) % TAB_ORDER.length;
        return TAB_ORDER[nextIndex];
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-10 bg-[#0B1220]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-semibold">Products</h2>
              <p className="mt-3 text-slate-300 max-w-2xl">
                Our Technology unlocks solar solutions for Roof-tops, Facades, Transport and Terrains including areas where Silicon simply canƒ?Tt go.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Tabs value={tab} onValueChange={setTab} className="mt-8">
            <TabsList className="bg-slate-900 border border-cyan-900 text-slate-200 ">
              <TabsTrigger value="residential" className="hover:text-cyan-400 hover:bg-cyan-900/10 transition-colors">
                AgriVoltaics & BIPV
              </TabsTrigger>
              <TabsTrigger value="utility" className="hover:text-cyan-400 hover:bg-cyan-900/10 transition-colors">
                Utility
              </TabsTrigger>
              <TabsTrigger value="commercial" className="hover:text-cyan-400 hover:bg-cyan-900/10 transition-colors">
                Commercial RoofTops
              </TabsTrigger>
            </TabsList>
            <div className="mt-8 overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeTabIndex * 100}%)` }}
              >
                {TAB_ORDER.map((key) => (
                  <div key={key} className="min-w-full">
                    <div className="grid gap-2 md:grid-cols-2">
                      {PRODUCTS[key].map((p) => (
                        <Card key={p.name} className="bg-slate-900/60 border border-cyan-900 hover:shadow-[0_0_24px_#0ea5e9] transition overflow-hidden">
                          <div className="h-30 bg-slate-900 object-cover flex items-center justify-center">
                            <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                          </div>
                          <CardHeader>
                            <div className="flex items-center justify-between" />
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
