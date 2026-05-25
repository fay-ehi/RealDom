"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const trustFeatures = [
  { icon: "🪪", title: "Verified Landlord Identities", desc: "Every landlord goes through a multi-step identity verification process. We confirm who they are before they can list.", tag: "✓ ID Verified" },
  { icon: "📍", title: "Property Authenticity Checks", desc: "Listings are cross-checked for authenticity. Fake addresses and stolen photos are detected and removed automatically.", tag: "✓ Property Confirmed" },
  { icon: "💬", title: "Secure Direct Messaging", desc: "All landlord-tenant communication happens within RealDom's secure platform, creating a clear, documented trail.", tag: "✓ Encrypted Chat" },
  { icon: "💰", title: "Transparent Pricing", desc: "Every listing shows the full rental cost upfront — no hidden fees, no surprise charges, no negotiation games.", tag: "✓ Price Guaranteed" },
  { icon: "⭐", title: "Ratings & Review System", desc: "Tenants review landlords and properties after rentals. Accountability drives better behavior from all parties.", tag: "✓ Community Rated" },
  { icon: "🛡️", title: "Scam Detection Engine", desc: "Our platform actively monitors for fraudulent patterns — suspicious pricing, duplicate photos, anomalous listings.", tag: "✓ Fraud Protected" },
];

function TrustCard({ feature, index }: { feature: typeof trustFeatures[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.09, duration: 0.55 }}
      className="rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,.3)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.1)"; }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[24px] mb-5" style={{ background: "rgba(34,197,94,.15)" }}>{feature.icon}</div>
      <h3 className="text-[17px] font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>{feature.title}</h3>
      <p className="text-[14px] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,.55)" }}>{feature.desc}</p>
      <span className="inline-flex items-center gap-1 text-[12px] font-semibold px-2.5 py-1 rounded-full"
        style={{ background: "rgba(34,197,94,.15)", border: "1px solid rgba(34,197,94,.25)", color: "#4ade80" }}>
        {feature.tag}
      </span>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <SectionWrapper className="bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-14">
          <span className="section-label" style={{ color: "#4ade80" }}>
            <span style={{ background: "#4ade80", width: "20px", height: "2px", borderRadius: "2px", display: "inline-block", marginRight: "8px" }} />
            Trust & Verification
          </span>
          <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-white mb-4 tracking-[-1px]" style={{ fontFamily: "var(--font-display)" }}>
            Built on a foundation of <em style={{ fontStyle: "normal", color: "#4ade80" }}>trust</em>
          </h2>
          <p className="text-[18px] max-w-[580px] leading-[1.7]" style={{ color: "rgba(255,255,255,.6)" }}>
            In a market where scams are rampant, trust isn't a feature — it's our entire foundation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustFeatures.map((f, i) => <TrustCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </SectionWrapper>
  );
}
