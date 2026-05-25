"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const faqs = [
  {
    q: "How does RealDom verify landlords and properties?",
    a: "Every landlord submits government-issued ID, proof of property ownership, and goes through our identity verification checks before they can publish a listing. Our team also reviews property details and cross-references locations to confirm authenticity. Listings that don't pass our checks are rejected immediately.",
  },
  {
    q: "Are there really zero agency fees on RealDom?",
    a: "Yes — absolutely zero. RealDom connects renters directly with landlords, which means there's no agent in the chain to charge you a fee. Renters pay the rent agreed with the landlord, nothing more.",
  },
  {
    q: "How do I know a listing isn't fake or a scam?",
    a: "Every listing on RealDom carries our Verified badge only after passing our multi-point authenticity check. We use image detection technology to flag stolen photos, verify addresses against real locations, and continuously monitor for suspicious patterns. If a listing looks wrong, our team investigates and removes it. You can also report suspicious listings directly from the app.",
  },
  {
    q: "How do landlords get started on RealDom?",
    a: "Landlords sign up, go through our quick identity verification, and then can create property listings with photos, pricing, and all relevant details. Once reviewed and approved by our team, your listing goes live and becomes searchable to renters in your area. The whole onboarding process typically takes less than 24 hours.",
  },
  
  {
    q: "What happens if there's a dispute between a landlord and renter?",
    a: "RealDom provides a structured dispute resolution process. Because all communication happens within the platform, there's always a clear record. Our support team mediates disputes and helps reach fair outcomes. This is a major improvement over traditional rentals where there's typically zero recourse for renters.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-primary-300 shadow-sm" : "border-gray-200"}`}
      style={open ? { boxShadow: "0 4px 16px rgba(22,101,52,.08)" } : {}}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/80 transition-colors">
        <span className="font-semibold text-[15px] text-gray-900 leading-snug pr-4">{faq.q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] transition-all duration-300 ${open ? "bg-primary-100 text-primary-800 rotate-180" : "bg-gray-100 text-gray-600"}`}>▼</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
            <div className="px-6 pb-5 pt-0 border-t border-gray-100">
              <p className="text-[14px] text-gray-600 leading-[1.7] pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label justify-center">FAQ</span>
          <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-gray-900 mb-4 tracking-[-1px]" style={{ fontFamily: "var(--font-display)" }}>
            Got questions? <em style={{ fontStyle: "normal", color: "#15803d" }}>We have answers.</em>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-[580px] mx-auto leading-[1.7]">
            Everything you need to know about RealDom, our verification process, and how we're changing Nigerian real estate.
          </p>
        </div>
        <div className="max-w-[720px] mx-auto flex flex-col gap-2">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </SectionWrapper>
  );
}
