import React from "react";
import FadeIn from "@/components/landing/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export default function ContactPanel() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-start">
        <FadeIn>
          <Card className="bg-slate-900/60 border border-cyan-900">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-slate-100">About Us</h3>
              <p className="mt-3 text-slate-300">
                Arkanex is led by a team that blends deep-tech expertise with strategic execution. We have over a decade of experience in the field working in EU-funded research projects, and similar startups to M&amp;A strategy, weƒ?Tve built a company that understands both the science and the scale.
              </p>
              <div className="mt-6 space-y-4 text-slate-200">
                <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500 font-normal !h-9 !px-5 text-sm">
                  <a href="https://scholar.google.com/citations?user=7NesiPYAAAAJ&hl=en" target="_blank" rel="noreferrer">
                    Our Publications
                  </a>
                </Button>
              </div>
              <ul className="mt-4 space-y-2 text-slate-200">
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/> Read More</li>
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn delay={0.08}>
          <Card className="bg-slate-900/60 border border-cyan-900">
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
                </div>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
