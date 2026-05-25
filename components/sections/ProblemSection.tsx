"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const problems = [
  { icon: "💸", title: "Outrageous Agency Fees", desc: "Agents charge 20–25% of annual rent just to show you a house — often houses they don't even own or control."},
  { icon: "⚠️", title: "Fake & Fraudulent Listings", desc: "Listings with stolen photos, wrong prices, and non-existent apartments are rampant across popular Nigerian platforms." },
  { icon: "🔗", title: "Too Many Middlemen", desc: "Agent, sub-agent, property manager — by the time you reach a landlord, three people have taken cuts from your pocket." },
  { icon: "📋", title: "Legal & Caution Fees", desc: "Beyond rent and agency fees, renters are hit with legal fees, agreement fees, and caution deposits that can amount to months of rent." },
  { icon: "🗺️", title: "Wasted Inspection Trips", desc: "You travel across the city, pay transport, only to find the property looks nothing like the listing photos — or doesn't exist at all." },
  { icon: "😓", title: "Zero Renter Protection", desc: "When things go wrong — disputed deposits, landlord ghost-outs, property issues — renters have virtually no structured recourse." },
];

function ProblemCard({ icon, title, desc, index }: typeof problems[0] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="bg-white rounded-2xl p-6 border border-gray-200 relative overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg,#ef4444,#f97316)" }} />
      <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center text-[22px] mb-4">{icon}</div>
      <h3 className="text-[16px] font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      <p className="text-[14px] text-gray-600 leading-relaxed mb-3">{desc}</p>
      <div className="text-[20px] font-extrabold text-red-500" style={{ fontFamily: "var(--font-display)" }}>
        {} <span className="text-[12px] font-normal text-gray-400">{}</span>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <SectionWrapper id="problem" className="bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="mb-14">
          <span className="section-label">The Problem</span>
          <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-gray-900 mb-4 tracking-[-1px]" style={{ fontFamily: "var(--font-display)" }}>
            Renting in Nigeria is <em style={{ fontStyle: "normal", color: "#15803d" }}>broken.</em>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-[580px] leading-[1.7]">
If you've searched for an apartment in Nigeria, you've gone through at least one of these. And that's why we built RealDom.          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {problems.map((p, i) => <ProblemCard key={p.title} {...p} index={i} />)}
        </div>

        
      </div>
    </SectionWrapper>
  );
}
