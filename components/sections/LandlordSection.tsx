"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const benefits = [
  { icon: "🎯", title: "Direct Renter Exposure", desc: "Your property is seen directly by renters searching in your area — no filters, no agent markups hiding your price." },
  { icon: "📱", title: "Smarter Property Management", desc: "Manage inquiries, schedule visits, and communicate with tenants from one simple dashboard on your phone." },
  { icon: "🔐", title: "Verified Tenant Profiles", desc: "Know who's interested in your property before you meet them. Reduce wasted inspection time dramatically." },
];

const inquiries = [
  { initials: "AO", color: "#166534", name: "Adaeze Okonkwo", prop: "3-Bed, Lekki Phase 1", time: "2m ago" },
  { initials: "BT", color: "#0f6e56", name: "Babatunde Taiwo", prop: "2-Bed, Ikeja GRA", time: "1h ago" },
  { initials: "NN", color: "#15803d", name: "Ngozi Nwachukwu", prop: "Self-contain, VI", time: "3h ago" },
];

const barHeights = ["40%", "60%", "45%", "90%", "70%", "55%", "35%"];

export default function LandlordSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="landlords" style={{ background: "linear-gradient(160deg, #f0fdf4 0%, white 60%)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="section-label">For Landlords</span>
            <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-gray-900 mb-5 tracking-[-1px]" style={{ fontFamily: "var(--font-display)" }}>
              Reach verified renters <em style={{ fontStyle: "normal", color: "#15803d" }}>without agents.</em>
            </h2>
            <p className="text-[18px] text-gray-600 leading-[1.7] mb-8">
              List your property directly on RealDom and connect with serious, verified renters. Fewer middlemen means better margins and faster rentals for you.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-md hover:translate-x-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center text-[22px] flex-shrink-0">{b.icon}</div>
                  <div>
                    <div className="text-[15px] font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>{b.title}</div>
                    <div className="text-[13px] text-gray-600 leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary px-8 py-3.5 text-[15px] gap-2 inline-flex">
              List Your Property <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* RIGHT — Dashboard card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="card-base p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[16px] font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>My Properties</span>
                <span className="text-[12px] text-gray-400 bg-gray-100 px-3 py-1 rounded-full">This month</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[{ num: "3", label: "Listings" }, { num: "47", label: "Views" }, { num: "12", label: "Inquiries" }].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-[22px] font-extrabold text-primary-800" style={{ fontFamily: "var(--font-display)" }}>{s.num}</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="text-[12px] text-gray-500 font-medium mb-2">Weekly views</div>
              <div className="flex items-end gap-2 h-[80px]">
                {barHeights.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-[4px] transition-all duration-300 hover:bg-primary-400 cursor-pointer"
                    style={{ height: h, background: i === 3 ? "#16a34a" : "#bbf7d0" }} />
                ))}
              </div>

              {/* Inquiry list */}
              <div className="text-[12px] text-gray-500 font-medium mt-4 mb-3">Recent inquiries</div>
              <div className="flex flex-col gap-2.5">
                {inquiries.map((inq) => (
                  <div key={inq.name} className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-xl">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold text-white flex-shrink-0" style={{ background: inq.color }}>{inq.initials}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold text-gray-900">{inq.name}</div>
                      <div className="text-[12px] text-gray-500">{inq.prop}</div>
                    </div>
                    <div className="text-[11px] text-gray-400">{inq.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
