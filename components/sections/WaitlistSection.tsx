"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgzedra";

const cities = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Benin City", "Other"];
type UserType = "Renter" | "Landlord" | "Both" | "";
type FormStatus = "idle" | "loading" | "success" | "error";

export default function WaitlistSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "", userType: "" as UserType });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid = formData.name.trim() && formData.email.trim() && formData.city && formData.userType;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, _subject: `New RealDom Waitlist Signup — ${formData.userType} from ${formData.city}` }),
      });
      if (res.ok) setStatus("success");
      else { const d = await res.json(); throw new Error(d?.error || "Submission failed"); }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <SectionWrapper id="waitlist" className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #14532d 0%, #166534 100%)" }}>
      {/* Decorative */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,.04) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary-300 uppercase tracking-widest mb-5">
              <span style={{ width: "20px", height: "2px", background: "#86efac", borderRadius: "2px" }} />
              Early Access
            </span>
            <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold text-white mb-5 tracking-[-1px] leading-[1.1]" style={{ fontFamily: "var(--font-display)" }}>
              Be first to experience <em style={{ fontStyle: "normal", color: "#86efac" }}>the future</em> of renting.
            </h2>
            <p className="text-[18px] leading-[1.7] mb-8" style={{ color: "rgba(255,255,255,.65)" }}>
Join thousands of Nigerians who are done with the old broken system. Get early access to RealDom and experience renting done right.            </p>
            <div className="flex flex-col gap-3">
              {[
            
                "Shape the platform with your feedback and ideas",
                "Early landlord listings featured prominently",
                "Direct input into features that matter to you",
                "Exclusive launch-day benefits",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-3 text-[14px]" style={{ color: "rgba(255,255,255,.8)" }}>
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] flex-shrink-0 font-bold"
                    style={{ background: "rgba(34,197,94,.25)", color: "#4ade80" }}>✓</span>
                  {perk}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div>
            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 shadow-2xl text-center">
                <div className="text-[48px] mb-4">🎉</div>
                <h3 className="text-[20px] font-bold text-primary-800 mb-2" style={{ fontFamily: "var(--font-display)" }}>You&apos;re on the list!</h3>
                <p className="text-[14px] text-gray-600">Welcome to RealDom. We&apos;ll be in touch soon with your early access details. Tell a friend!</p>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-[20px] font-bold text-gray-900 mb-1.5" style={{ fontFamily: "var(--font-display)" }}>Join the Waitlist</div>
                <div className="text-[14px] text-gray-500 mb-6">It takes 30 seconds. Be part of the movement.</div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Emeka Okafor" required
                        className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder-gray-400" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 801 234 5678"
                        className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="emeka@gmail.com" required
                      className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all placeholder-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">City</label>
                      <select name="city" value={formData.city} onChange={handleChange} required
                        className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white transition-all text-gray-700 appearance-none">
                        <option value="" disabled>Select city</option>
                        {cities.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">I am a...</label>
                      <select name="userType" value={formData.userType} onChange={handleChange} required
                        className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white transition-all text-gray-700 appearance-none">
                        <option value="" disabled>User type</option>
                        <option>Renter</option>
                        <option>Landlord</option>
                        <option>Both</option>
                      </select>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-xs bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
                  )}

                  <button type="submit" disabled={!isValid || status === "loading"}
                    className="w-full py-3.5 bg-primary-800 text-white rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-primary-700 hover:translate-y-[-1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                    style={{ boxShadow: "0 8px 32px rgba(22,101,52,.25)", fontFamily: "var(--font-display)" }}>
                    {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Joining waitlist...</> : <>Join Waitlist — It&apos;s Free 🚀</>}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[12px] text-gray-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                    🔒 We never spam. Your data is safe with us.
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
