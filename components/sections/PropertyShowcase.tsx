"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const listings = [
  { city: "lagos", emoji: "🏠", bg: "linear-gradient(135deg,#d4edda,#a8d5b5)", name: "Spacious 3-Bed Flat", location: "Lekki Phase 1, Lagos", price: "₦1.2M", period: "/year", beds: 3, baths: 2, sqm: "120 m²" },
  { city: "lagos", emoji: "🏢", bg: "linear-gradient(135deg,#e8f4e8,#c8e6c9)", name: "Modern 2-Bed Apartment", location: "Ikeja GRA, Lagos", price: "₦900k", period: "/year", beds: 2, baths: 2, sqm: "90 m²" },
  { city: "abuja", emoji: "🏛️", bg: "linear-gradient(135deg,#dde8f0,#b0cce0)", name: "Executive 3-Bed Apartment", location: "Maitama, Abuja", price: "₦2.4M", period: "/year", beds: 3, baths: 3, sqm: "150 m²" },
  { city: "abuja", emoji: "🏡", bg: "linear-gradient(135deg,#e8e0f0,#c8b0e0)", name: "Cozy 1-Bed Studio", location: "Wuse 2, Abuja", price: "₦700k", period: "/year", beds: 1, baths: 1, sqm: "55 m²" },
  { city: "ph", emoji: "⚓", bg: "linear-gradient(135deg,#f0e8d4,#e0c8a8)", name: "Self-Contain Apartment", location: "GRA Phase 2, PH", price: "₦600k", period: "/year", beds: 1, baths: 1, sqm: "45 m²" },
  { city: "ibadan", emoji: "🌿", bg: "linear-gradient(135deg,#d8f0d4,#b0e0a8)", name: "Family Home 4-Bedroom", location: "Bodija, Ibadan", price: "₦850k", period: "/year", beds: 4, baths: 2, sqm: "180 m²" },
  { city: "lagos", emoji: "🌊", bg: "linear-gradient(135deg,#e0f0f8,#b0d8f0)", name: "Victoria Island Mini Flat", location: "Victoria Island, Lagos", price: "₦1.5M", period: "/year", beds: 1, baths: 1, sqm: "65 m²" },
  { city: "ph", emoji: "🛢️", bg: "linear-gradient(135deg,#f8e8e0,#f0c8b0)", name: "2-Bed Flat with BQ", location: "Trans Amadi, PH", price: "₦800k", period: "/year", beds: 2, baths: 2, sqm: "100 m²" },
];

const cityFilters = [
  { key: "all", label: "All Cities" },
  { key: "lagos", label: "🌊 Lagos" },
  { key: "abuja", label: "🏛️ Abuja" },
  { key: "ph", label: "⚓ Port Harcourt" },
  { key: "ibadan", label: "🌿 Ibadan" },
];

function ListingCard({ listing, index }: { listing: typeof listings[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [saved, setSaved] = useState(false);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="h-[180px] relative overflow-hidden" style={{ background: listing.bg }}>
        <div className="absolute inset-0 flex items-center justify-center text-[48px] transition-transform duration-300 hover:scale-105">{listing.emoji}</div>
        <span className="absolute top-3 left-3 bg-primary-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <svg width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Verified
        </span>
        <button onClick={() => setSaved(!saved)} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-all">
          <span style={{ color: saved ? "#ef4444" : "#9ca3af" }}>{saved ? "♥" : "♡"}</span>
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-[12px] text-gray-500 mb-1.5">📍 {listing.location}</div>
        <h3 className="text-[17px] font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>{listing.name}</h3>
        <div className="flex items-center gap-4 mb-4 text-[13px] text-gray-600">
          <span>🛏️ {listing.beds} bed{listing.beds > 1 ? "s" : ""}</span>
          <span>🚿 {listing.baths} bath{listing.baths > 1 ? "s" : ""}</span>
          <span>📐 {listing.sqm}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-[18px] font-extrabold text-primary-800" style={{ fontFamily: "var(--font-display)" }}>{listing.price}</span>
            <span className="text-[12px] text-gray-400 ml-1">{listing.period}</span>
          </div>
          <button className="bg-primary-50 text-primary-800 text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-primary-800 hover:text-white transition-colors">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PropertyShowcase() {
  const [activeCity, setActiveCity] = useState("all");
  const filtered = activeCity === "all" ? listings : listings.filter((l) => l.city === activeCity);
  return (
    <SectionWrapper id="properties" className="bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-10">
          <span className="section-label">Featured Listings</span>
          <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-gray-900 mb-4 tracking-[-1px]" style={{ fontFamily: "var(--font-display)" }}>
            Homes across <em style={{ fontStyle: "normal", color: "#15803d" }}>Nigeria</em>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-[580px] leading-[1.7]">
            Verified properties in Nigeria&apos;s biggest cities, priced transparently and ready to rent.
          </p>
        </div>

        {/* City filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cityFilters.map((f) => (
            <button key={f.key} onClick={() => setActiveCity(f.key)}
              className={`px-[18px] py-2 rounded-full text-[14px] font-medium border transition-all duration-200 ${activeCity === f.key ? "bg-primary-800 text-white border-primary-800" : "bg-white text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-700"}`}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((l, i) => <ListingCard key={l.name + l.city} listing={l} index={i} />)}
        </div>
      </div>
    </SectionWrapper>
  );
}
