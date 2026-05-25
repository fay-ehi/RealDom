"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen pt-[68px] flex items-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fdf4 0%, #ffffff 50%, #f9fafb 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(22,101,52,.06) 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Content */}
        <div>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-3.5 py-[6px] mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 pulse-dot" />
            <span className="text-[13px] font-medium text-primary-800">Now accepting early access signups</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[clamp(36px,5vw,58px)] font-extrabold text-gray-900 mb-5 leading-[1.1] tracking-[-1.5px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Rent homes directly<br />from <em style={{ fontStyle: "normal", color: "#15803d" }}>verified</em><br />landlords.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[18px] text-gray-500 max-w-[480px] mb-9 leading-[1.7]">
            No agent fees. No rental scams. No fake listings. RealDom connects you directly with verified landlords for a safer, more transparent apartment search in Nigeria.
          </motion.p>

          {/* Pills */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-9">
            {[
              { icon: "✓", text: "Zero agency fees" },
              { icon: "✓", text: "Verified listings" },
              { icon: "✓", text: "Safe transactions" },
            ].map((p) => (
              <span key={p.text} className="inline-flex items-center gap-1.5 px-3.5 py-[6px] rounded-full text-[13px] font-medium bg-white border border-gray-200 text-gray-700">
                <span className="text-primary-600 font-bold">{p.icon}</span>
                {p.text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-10">
            <button onClick={() => scrollTo("waitlist")} className="btn-primary px-7 py-3.5 text-[15px] gap-2">
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => scrollTo("landlords")} className="btn-secondary px-7 py-3.5 text-[15px]">
              List Your Property
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
            className="flex gap-8 pt-8 border-t border-gray-200">
            {[
              { num: "0₦", label: "Agency fees" },
              { num: "100%", label: "Verified listings" },
              { num: "Direct", label: "Landlord contact" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-[28px] font-extrabold text-primary-800 leading-tight" style={{ fontFamily: "var(--font-display)" }}>{s.num}</span>
                <span className="text-[13px] text-gray-500">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Visual */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
          className="relative h-[520px] hidden lg:block">
          {/* Search Card */}
          <div className="card-base p-5 absolute top-0 left-0 right-0 z-10">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-3">
              <svg className="text-gray-400 flex-shrink-0" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/></svg>
              <input type="text" placeholder="Search by area, city or estate..." readOnly className="flex-1 bg-transparent text-[15px] text-gray-700 placeholder-gray-400 outline-none" />
              <button className="bg-primary-800 text-white px-5 py-2 rounded-lg text-[14px] font-semibold hover:bg-primary-700 transition whitespace-nowrap">Search</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["🏙️ Lagos", "🏛️ Abuja", "🛏️ 2 Beds", "💰 Under ₦1.5M/yr", "✅ Verified only"].map((chip, i) => (
                <span key={chip} className={`px-3 py-1.5 rounded-full text-[13px] border cursor-pointer transition-all ${i === 0 ? "border-primary-600 bg-primary-50 text-primary-800" : "border-gray-200 bg-white text-gray-600 hover:border-primary-400"}`}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Property Cards */}
          <div className="absolute top-[220px] left-0 right-0 bottom-0 grid grid-cols-2 gap-3">
            {[
              { bg: "linear-gradient(135deg,#d4edda,#a8d5b5)", emoji: "🏠", city: "Lekki, Lagos", name: "3-Bed Flat, Phase 1", price: "₦1.2M", period: "/year", details: ["🛏️ 3 beds", "🚿 2 baths", "🅿️ Parking"] },
              { bg: "linear-gradient(135deg,#dde8f0,#b0cce0)", emoji: "🏢", city: "Maitama, Abuja", name: "Modern 2-Bed Apartment", price: "₦1.8M", period: "/year", details: ["🛏️ 2 beds", "🚿 2 baths", "💡 24/7 Power"] },
            ].map((p) => (
              <div key={p.name} className="card-base overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className="h-[110px] relative overflow-hidden" style={{ background: p.bg }}>
                  <div className="absolute inset-0 flex items-center justify-center text-[32px]">{p.emoji}</div>
                  <span className="absolute top-2 right-2 bg-primary-800 text-white text-[11px] font-semibold px-2 py-[3px] rounded-full flex items-center gap-1">
                    <svg width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Verified
                  </span>
                </div>
                <div className="p-3">
                  <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-1">📍 {p.city}</div>
                  <div className="text-[14px] font-semibold text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>{p.name}</div>
                  <div className="text-[15px] font-bold text-primary-800" style={{ fontFamily: "var(--font-display)" }}>{p.price} <span className="text-[12px] font-normal text-gray-400">{p.period}</span></div>
                  <div className="flex gap-2 mt-1.5 flex-wrap">
                    {p.details.map((d) => <span key={d} className="text-[11px] text-gray-500">{d}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating badges */}
          <div className="absolute top-[200px] right-[-20px] z-10 card-base px-4 py-3 flex items-center gap-2.5 float-anim" style={{ animationDelay: "0.5s" }}>
            <div className="w-9 h-9 rounded-[10px] bg-primary-50 flex items-center justify-center text-[18px]">✅</div>
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-500">Landlord verified</span>
              <span className="text-[14px] font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>ID confirmed</span>
            </div>
          </div>
          <div className="absolute bottom-[120px] left-[-20px] z-10 card-base px-4 py-3 flex items-center gap-2.5 float-anim" style={{ animationDelay: "1.5s" }}>
            <div className="w-9 h-9 rounded-[10px] bg-yellow-50 flex items-center justify-center text-[18px]">🔒</div>
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-500">No hidden fees</span>
              <span className="text-[14px] font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>Transparent pricing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
