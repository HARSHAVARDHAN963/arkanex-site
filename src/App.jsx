import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, ChevronRight, CheckCircle2, Globe, Sun, Factory, Leaf, Newspaper, Search } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
  { label: "News", href: "#news" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SLIDES = [
  { title: "High‑Efficiency PV for Every Application", subtitle: "Bankable modules and turnkey solutions for utility, commercial and residential." },
  { title: "Smart Manufacturing at Scale", subtitle: "From wafers to modules — quality controlled, globally certified." },
  { title: "Partner for the Energy Transition", subtitle: "Reliable EPC, O&M and financing support for faster delivery." },
];

const PRODUCTS = {
  utility: [
    { name: "Utility Module U7", tag: "n‑type TOPCon", bullets: ["210mm cells", ">22% efficiency", "1500V system"] },
    { name: "Utility Module U6", tag: "PERC mono", bullets: ["182mm cells", "High string power", "BOS savings"] },
  ],
  commercial: [
    { name: "Commercial C5", tag: "Glass‑glass", bullets: ["Enhanced reliability", "Bifacial gain", "Low LCOE"] },
    { name: "Commercial C4", tag: "Half‑cut", bullets: ["Shade tolerance", "High yield", "Robust frame"] },
  ],
  residential: [
    { name: "Residential R4", tag: "All‑black", bullets: ["Elegant aesthetics", "High module efficiency", "25‑yr warranty"] },
    { name: "Residential R3", tag: "PERC", bullets: ["Excellent low‑light", "Lightweight", "Quick install"] },
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
    <div id="home" className="min-h-screen bg-[#0B0F17] text-slate-100">
      <div className="w-full bg-black text-cyan-300 text-xs sm:text-sm py-2">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <span>Arkanex • Flexible PV</span>
          <div className="flex items-center gap-4">
            <a href="#" className="underline underline-offset-4">EN</a>
            <span className="opacity-60">|</span>
            <a href="#" className="underline underline-offset-4">中文</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#0B1220]/80 backdrop-blur border-b border-cyan-900">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-[0_0_20px_#06b6d4]"/>
            <span className="font-semibold tracking-tight">Arkanex</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-slate-300 hover:text-cyan-300">{l.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Input placeholder="Search" className="pl-8 w-44 bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
              <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-slate-400"/>
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_20px_#22d3ee]">Get a Quote</Button>
          </div>
          <Button className="md:hidden bg-cyan-500 hover:bg-cyan-400 text-slate-900" size="sm">Menu</Button>
        </div>
      </header>

      <section className="relative">
        <div className="relative h-[60vh] sm:h-[72vh] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,#172554,transparent_60%)]"/>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/60 to-[#0B0F17]"/>
          <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
            <div>
              <FadeIn>
                <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/40">PV • Modules • EPC</Badge>
              </FadeIn>
              <FadeIn delay={0.06}>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
                  {SLIDES[slide].title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl">{SLIDES[slide].subtitle}</p>
              </FadeIn>
              <FadeIn delay={0.18}>
                <div className="mt-6 flex gap-3">
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_20px_#22d3ee]">Our Products <ArrowRight className="ml-2 h-4 w-4"/></Button>
                  <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Become a Partner</Button>
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

      <section id="technology" className="py-20 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Technology & Quality</h2>
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

      <section id="about" className="py-20 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-start">
          <FadeIn>
            <Card className="bg-slate-900/60 border border-cyan-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-100">About Us</h3>
                <p className="mt-3 text-slate-300">We are a photovoltaic company providing high‑efficiency modules, EPC services, and energy solutions.</p>
                <ul className="mt-4 space-y-2 text-slate-200">
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> Vertically integrated value chain</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> Global service network</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> Bankable track record</li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card id="contact" className="bg-slate-900/60 border border-cyan-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-100">Contact</h3>
                <p className="mt-3 text-slate-300">Send us a note and our team will respond shortly.</p>
                <form className="mt-4 space-y-3" action="mailto:hello@arkanex.example" method="POST" encType="text/plain">
                  <Input name="name" placeholder="Your name" required className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <Input type="email" name="email" placeholder="Email" required className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <Input name="company" placeholder="Company" className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <Input name="country" placeholder="Country" className="bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-400"/>
                  <textarea name="message" placeholder="Project details / questions" className="w-full min-h-[120px] rounded-md bg-slate-900 border border-slate-700 p-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600"></textarea>
                  <div className="flex gap-3">
                    <Button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_20px_#22d3ee]">Send</Button>
                    <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Download Brochure</Button>
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
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-[0_0_18px_#06b6d4]"/>
                <span className="font-semibold text-slate-100">Arkanex</span>
              </div>
              <p className="mt-4 text-sm text-slate-400 max-w-sm">High‑efficiency photovoltaic products and solutions for a net‑zero future.</p>
            </div>
            <div>
              <div className="font-medium text-slate-200">Products</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#products" className="hover:text-cyan-300">Utility</a></li>
                <li><a href="#products" className="hover:text-cyan-300">Commercial</a></li>
                <li><a href="#products" className="hover:text-cyan-300">Residential</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-slate-200">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-cyan-300">About</a></li>
                <li><a href="#news" className="hover:text-cyan-300">News</a></li>
                <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-slate-200">Resources</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#technology" className="hover:text-cyan-300">Datasheets</a></li>
                <li><a href="#technology" className="hover:text-cyan-300">Certificates</a></li>
                <li><a href="#solutions" className="hover:text-cyan-300">EPC Services</a></li>
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
  )
}
