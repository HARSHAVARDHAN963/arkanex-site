import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, ChevronRight, CheckCircle2, Globe, Sun, Factory, Leaf, Newspaper, Search } from "lucide-react";
import MetricSpeedometer from "./components/MetricSpeedometer";
import { img } from "framer-motion/client";

const NAV = [
  { label: "Home", href: "#home" },
  //{ label: "Products", href: "#products" },
//  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
//  { label: "News", href: "#news" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SLIDES = [
  { title: "Solar isn't affordable - Yet!", subtitle: <em>Modules aren't the problem, Balance-of-System is.</em> },
  { title: "Re-imagine Solar", subtitle: <em>From Manufacturing to Deployment.</em> },
  { title: "Low-cost, Lightweight Solar", subtitle: <em>With Flexible All-Perovskite Tandem Technology.</em> },
];
  
const PRODUCTS = {
  utility: [
    { name: "Transport", image: "/Products/Utility.png", bullets: [""], },
    { name: "Utility", image: "/Products/Transport.png", bullets: [""], },
  ],
  commercial: [
    { name: "Commercial Rooftops", image: "/Products/Airport.png", bullets: [""] },
    { name: "Commercial Rooftops", image: "/Products/Curved parking.png", bullets: [""] },
  ],
  residential: [
    { name: "Agrivoltaics R4", image: "/Products/Agrivoltaics.png", bullets: [""] },
    { name: "BIPV R3", image: "/Products/PSM BIPV 2.png", bullets: [""] },
  ],
};


const SOLUTIONS = [
  { icon: <Factory className="h-6 w-6"/>, title: "Utility‑Scale", desc: "GW‑class projects with EPC & O&M." },
  { icon: <Sun className="h-6 w-6"/>, title: "C&I Rooftops", desc: "Rooftop + carport packages for savings." },
  { icon: <Leaf className="h-6 w-6"/>, title: "BIPV", desc: "Façade and skylight integrations." },
  { icon: <Globe className="h-6 w-6"/>, title: "Off‑Grid", desc: "Hybrid PV + storage for remote sites." },
];


const NEWS = [
  { title: "Company Achieves New Efficiency Record", date: "2025‑06‑15" },
  { title: "New Factory Phase‑II Commissioned", date: "2025‑05‑30" },
  { title: "1GW Utility Project Successfully Connected", date: "2025‑05‑08" },
];

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);

export default function App() {
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const [tab, setTab] = React.useState("utility");

  return (
    
   <div id="home" className="min-h-screen bg-[#0B0F17] text-slate-0">
        <div className="mx-auto max-w-7xl px-4 flex items-left justify-between">
        </div>
    

      <header className="sticky top-0 z-40 bg-[#0B0F17]/80 backdrop-blur border-b border-cyan-900">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          <a href="#home" className="flex items-center gap-20">
          <img 
          src="/Logo.png" 
          alt="Logo" 
          className="h-12 w-auto object-contain"
          />
          </a>

          <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {NAV.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-slate-300 hover:text-cyan-300">{l.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-7">
            <div className="relative">
              {/* <Input placeholder="Search" className="pl-8 w-44 bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
              <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-slate-400"/> */}
            </div>
            {/* <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_20px_#22d3ee]">Get a Quote</Button> */}
          </div>
          <Button className="md:hidden bg-cyan-500 hover:bg-cyan-400 text-slate-900" size="sm">Menu</Button>
        </div>
      </header>

      <section className="relative">
        <div className="relative h-screen overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/Re-imagine%20solar.mp4"
            poster="/Technology/tech1.png"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/45"/>
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,#0B0F17,transparent_60%)]"/>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/60 to-[#0B0F17]"/>
    <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
      <div>
        <FadeIn>
          <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/40">PV • Modules </Badge>
        </FadeIn>
        <FadeIn delay={0.12}>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
            {SLIDES[slide].title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{SLIDES[slide].subtitle}</p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="mt-6 flex gap-3">
            {/*
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_20px_#22d3ee]">Our Products <ArrowRight className="ml-2 h-4 w-4"/></Button>
            */}
            {/*
            <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Become a Partner</Button>
            */}
          </div>
        </FadeIn>
        <div className="mt-6 flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`h-2 w-8 rounded-full ${i===slide? 'bg-cyan-400':'bg-cyan-900'}`} />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>



{/*
      <section id="products" className="py-20 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Products</h2>
                <p className="mt-3 text-slate-300 max-w-2xl">High‑efficiency modules built for utility, commercial and residential deployments.</p>
              </div>
              <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Download Catalog</Button>
            </div>
          </FadeIn>

          
          <FadeIn delay={0.08}>
            <Tabs value={tab} onValueChange={setTab} className="mt-8">
              <TabsList className="bg-slate-900 border border-cyan-900 text-slate-200">
                <TabsTrigger value="utility">Utility</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
              </TabsList>
              {Object.entries(PRODUCTS).map(([key, arr]) => (
                <TabsContent key={key} value={key} className="mt-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    {arr.map((p) => (
                      <Card key={p.name} className="bg-slate-900/60 border border-cyan-900 hover:shadow-[0_0_24px_#0ea5e9] transition overflow-hidden">
                        <div className="h-40 bg-[radial-gradient(70%_60%_at_50%_25%,#1e3a8a,#0b1220)]"/>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-slate-100">{p.name}</CardTitle>
                            <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/40">{p.tag}</Badge>
                          </div>
                          <CardDescription className="text-slate-400">High reliability • Global certifications</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-slate-200">
                            {p.bullets.map((b) => (
                              <li key={b} className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> {b}</li>
                            ))}
                          </ul>
                          <div className="pt-6">
                            <Button variant="ghost" className="text-cyan-300 hover:bg-cyan-500/10 group">
                              Learn more <ChevronRight className="ml-1 h-4 w-4"/>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </section>
*/}
      {/*
      <section id="solutions" className="py-20 bg-[#0A1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight">Solutions</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">End‑to‑end solar packages tailored to your use case.</p>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <Card className="bg-slate-900/60 border border-cyan-900">
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 flex items-center justify-center mb-3">{s.icon}</div>
                    <div className="font-medium text-slate-100">{s.title}</div>
                    <div className="text-sm text-slate-400 mt-1">{s.desc}</div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      */}
    <section
        id="technology"
        className="relative overflow-hidden bg-[#0B1220] pb-16"
        style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.9)" }}
      >
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
            <div className="rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-8">
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
            {/* Image + text rows */}
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
                      All perovskite tandem architectures unlock efficiency levels that single-junction silicon simply can’t reach. By stacking two perovskite layers tuned to different parts of the solar spectrum, these tandem architectures deliver significantly more power per square meter.
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

{/*
      <section id="technology" className="py-20 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Technology </h2>
              <p className="mt-4 text-slate-300">From cell design to module packaging, we optimize for lifetime energy yield through advanced materials, automated manufacturing, and rigorous reliability testing.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> Multi‑busbar & half‑cut architectures</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> PID/LeTID‑resistant BOM</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> IEC/UL certifications and 3rd‑party test data</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_20px_#22d3ee]">Download Datasheets</Button>
                <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Quality Policy</Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="bg-slate-900/60 border border-cyan-900 overflow-hidden">
              <div className="h-72 bg-[radial-gradient(70%_80%_at_50%_30%,#1e3a8a,#0b1220)]"/>
              <CardHeader>
                <CardTitle className="text-slate-100">Smart Factory</CardTitle>
                <CardDescription className="text-slate-400">Inline metrology and traceability ensure consistent performance.</CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>
        </div>
      </section>
*/}
  <section id="products" className="py-10 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-3xl font-semibold ">Products</h2>
                <p className="mt-3 text-slate-300 max-w-2xl">Our Technology unlocks solar solutions for Roof-tops, Facades, Transport and Terrains including areas where Silicon simply can’t go.</p>
              </div>
            </div>
          </FadeIn>

          
          <FadeIn delay={0.08}>
            <Tabs value={tab} onValueChange={setTab} className="mt-8">
              <TabsList className="bg-slate-900 border border-cyan-900 text-slate-200 ">
                 <TabsTrigger value="residential" className="hover:text-cyan-400 hover:bg-cyan-900/10 transition-colors">AgriVoltaics & BIPV</TabsTrigger>
                <TabsTrigger value="utility" className="hover:text-cyan-400 hover:bg-cyan-900/10 transition-colors">Utility</TabsTrigger>
                <TabsTrigger value="commercial" className="hover:text-cyan-400 hover:bg-cyan-900/10 transition-colors">Commercial RoofTops</TabsTrigger>
              </TabsList>
              {Object.entries(PRODUCTS).map(([key, arr]) => (
                <TabsContent key={key} value={key} className="mt-8">
                  <div className="grid gap-2 md:grid-cols-2">
                    {arr.map((p) => (
                      <Card key={p.name} className="bg-slate-900/60 border border-cyan-900 hover:shadow-[0_0_24px_#0ea5e9] transition overflow-hidden">
                        <div className="h-30 bg-slate-900 object-cover flex items-center justify-center">
                          <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                        </div>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-slate-200">
                           

                          </ul>
                          <div className="pt-0">
                            
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
</section>

{/* News Section 
<section id="news" className="py-20 bg-[#0A1020]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Latest News</h2>
                <p className="mt-3 text-slate-300">Updates from our factories and projects.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">View all</Button>
            </FadeIn>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {NEWS.map((n, i) => (
              <FadeIn key={n.title} delay={i * 0.06}>
                <Card className="bg-slate-900/60 border border-cyan-900 group hover:shadow-[0_0_20px_#0ea5e9] transition">
                  <div className="h-40 bg-[radial-gradient(70%_80%_at_50%_30%,#1e3a8a,#0b1220)]"/>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit flex items-center gap-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/40"><Newspaper className="h-3.5 w-3.5"/> News</Badge>
                    <CardTitle className="mt-2 text-slate-100">{n.title}</CardTitle>
                    <CardDescription className="text-slate-400">{n.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="text-cyan-300 hover:bg-cyan-500/10 group">Read more <ChevronRight className="ml-1 h-4 w-4"/></Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
*/}    

    <section id="about" className="py-20 bg-[#0B1220]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-start">
          <FadeIn>
            <Card className="bg-slate-900/60 border border-cyan-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-100">About Us</h3>
                <p className="mt-3 text-slate-300">Arkanex is led by a team that blends deep-tech expertise with strategic execution. We have over a decade of experience in the field working in EU-funded research projects, and similar startups to M&A strategy, we’ve built a company that understands both the science and the scale.</p>
                <div className="mt-6 space-y-4 text-slate-200">
                  <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500 font-normal !h-9 !px-5 text-sm">
                    <a href="https://scholar.google.com/citations?user=7NesiPYAAAAJ&hl=en" target="_blank" rel="noreferrer">
                      Our Publications
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card id="contact" className="bg-slate-900/60 border border-cyan-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-100">Contact</h3>
                <p className="mt-3 text-slate-300">Send us a note and our team will respond shortly.</p>
                <form className="mt-4 space-y-3" action="mailto:harsha@arkanextech.com" method="POST" encType="text/plain">
                  <Input name="name" placeholder="Your name" required className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <Input type="email" name="email" placeholder="Email" required className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <Input name="company" placeholder="Company" className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <Input name="country" placeholder="Country" className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <textarea name="message" placeholder="Project details / questions" className="w-full min-h-[120px] rounded-md bg-slate-900 border border-slate-700 p-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600"></textarea>
                  <div className="flex gap-3">
                    <Button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_5px_#22d3ee] !h-9 !px-5 text-sm">Send</Button>
                    {/*<Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10" >Download Brochure</Button>*/}
                  </div>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-cyan-900 bg-[#090D15]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <a href="#home" className="flex items-center gap-20">
                  <img 
                    src="/Logo.png" 
                    alt="Logo" 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-400 max-w-sm">High‑efficiency photovoltaic products and solutions for a net‑zero future.</p>
            </div>

            <div>
              <div className="font-medium text-slate-200">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-cyan-300">About</a></li>
                {/*<li><a href="#news" className="hover:text-cyan-300">News</a></li>*/}
                <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-slate-200"></div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {/*
                <li><a href="#technology" className="hover:text-cyan-300">Datasheets</a></li>
                <li><a href="#technology" className="hover:text-cyan-300">Certificates</a></li>
                <li><a href="#solutions" className="hover:text-cyan-300">EPC Services</a></li>*/}
              </ul>
            </div>
           </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-xs text-slate-500">
            <div>© {new Date().getFullYear()} Arkanex. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-300">Privacy</a>
              <a href="#" className="hover:text-cyan-300">Terms</a>
              <a href="#" className="hover:text-cyan-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
