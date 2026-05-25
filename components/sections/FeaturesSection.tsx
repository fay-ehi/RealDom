"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const tenantFeatures = [
  { icon: "🔍", title: "Smart Search", desc: "Filter by location, budget, bedroom count, amenities, and verification status. Find exactly what you need, fast." },
  { icon: "✅", title: "Verified Listings Only", desc: "Every property on RealDom has been verified. What you see is exactly what you'll get — no surprises." },
  { icon: "💬", title: "Direct Landlord Messaging", desc: "Message landlords in real-time through our platform. Ask questions, schedule tours, negotiate terms — directly." },
  { icon: "❤️", title: "Save Favourites", desc: "Shortlist properties you love and compare them side by side. Share your shortlist with your family or housemates." },
  { icon: "📅", title: "Schedule Inspections", desc: "Book inspection visits directly in the app. No phone-tag, no mismatched schedules, no wasted trips." },
  { icon: "⭐", title: "Ratings & Reviews", desc: "Read honest reviews from previous tenants before you commit. Make informed decisions with real social proof." },
];

const landlordFeatures = [
  { icon: "🏘️", title: "Property Management", desc: "Manage all your listings from one clean dashboard. Track inquiries, schedule visits, and monitor your properties effortlessly." },
  { icon: "📷", title: "Rich Media Uploads", desc: "Upload high-quality photos, virtual tours, and videos to make your listing stand out and attract serious renters." },
  { icon: "🏅", title: "Verification Badge", desc: "Earn a trusted landlord badge that boosts renter confidence and increases your listing's conversion rate significantly." },
  { icon: "🚀", title: "Boost Listings", desc: "Get more eyes on your property with paid placement boosts. Reach more qualified renters in your target area." },
  { icon: "📊", title: "Listing Analytics", desc: "See how many people viewed your listing, saved it, or requested a tour. Make data-driven decisions about your property." },
  { icon: "💌", title: "Lead Management", desc: "All tenant inquiries organised in one inbox. Reply faster, schedule smarter, and close rentals without the chaos." },
];

function FeatureCard({ icon, title, desc, index }: typeof tenantFeatures[0] & { index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group flex gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center text-[22px] transition-transform duration-200 group-hover:scale-110">{icon}</div>
      <div>
        <h4 className="text-[15px] font-bold text-gray-900 mb-1.5" style={{ fontFamily: "var(--font-display)" }}>{title}</h4>
        <p className="text-[13px] text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

type Tab = "renters" | "landlords";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("renters");
  const features = activeTab === "renters" ? tenantFeatures : landlordFeatures;

  return (
    <SectionWrapper id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-14">
          <span className="section-label">Features</span>
          <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-gray-900 mb-4 tracking-[-1px]" style={{ fontFamily: "var(--font-display)" }}>
            Everything you need, <em style={{ fontStyle: "normal", color: "#15803d" }}>nothing you don't</em>
          </h2>
          <p className="text-[18px] text-gray-600 max-w-[580px] leading-[1.7]">
A complete platform designed for both sides of the rental journey. Powerful tools, simple experience.

          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-10 w-fit">
          {(["renters", "landlords"] as Tab[]).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200 ${activeTab === tab ? "bg-white text-primary-800 shadow-sm" : "text-gray-600 hover:text-gray-800"}`}>
              {tab === "renters" ? "🏠 For Renters" : "🏢 For Landlords"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => <FeatureCard key={f.title} {...f} index={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
