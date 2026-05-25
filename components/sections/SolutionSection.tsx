"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  { num: "1", icon: "🔍", title: "Search Verified Homes", desc: "Browse listings across Lagos, Abuja, Port Harcourt and more — all verified, all real, all transparently priced." },
  { num: "2", icon: "📞", title: "Connect with Landlords", desc: "Message verified landlords directly on the platform. No agents, no middlemen, no unnecessary delays." },
  { num: "3", icon: "🏠", title: "Rent Transparently", desc: "Complete your rental safely with documented terms, transparent pricing, and full peace of mind." },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="text-center relative z-10 group">
      <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-primary-200 flex items-center justify-center mx-auto mb-5 shadow-md transition-all duration-300 group-hover:bg-primary-800 group-hover:border-primary-800 group-hover:scale-110 group-hover:shadow-green"
        style={{ fontFamily: "var(--font-display)" }}>
        <span className="text-[24px] font-extrabold text-primary-800 group-hover:text-white transition-colors duration-300">{step.num}</span>
      </div>
      <div className="text-[28px] mb-1">{step.icon}</div>
      <h3 className="text-[18px] font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
      <p className="text-[14px] text-gray-600 leading-relaxed">{step.desc}</p>
    </motion.div>
  );
}

export default function SolutionSection() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label justify-center">How It Works</span>
          <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-gray-900 mb-4 tracking-[-1px]" style={{ fontFamily: "var(--font-display)" }}>
            Find your home in <em style={{ fontStyle: "normal", color: "#15803d" }}>3 simple steps</em>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-[580px] mx-auto leading-[1.7]">
            We&apos;ve removed all the unnecessary friction from the Nigerian rental process. It&apos;s finally this simple.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-9 z-0"
            style={{ left: "calc(16.67% + 20px)", right: "calc(16.67% + 20px)", height: "2px", background: "linear-gradient(90deg, #bbf7d0, #4ade80, #bbf7d0)" }} />
          {steps.map((step, i) => <StepCard key={step.num} step={step} index={i} />)}
        </div>
      </div>
    </SectionWrapper>
  );
}
