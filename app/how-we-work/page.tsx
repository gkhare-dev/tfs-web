import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export const metadata = {
  title: "How We Work | The Finance Suite",
  description: "From your first conversation to final disbursal or policy issuance, here's what working with The Finance Suite looks like.",
};

export default function HowWeWorkPage() {
  const steps = [
    {
      num: "01",
      title: "Free Consultation",
      desc: "We begin with a conversation to understand your current situation, requirements, and timeline.",
    },
    {
      num: "02",
      title: "Needs Assessment",
      desc: "We thoroughly evaluate your financial profile, eligibility metrics, and specific objectives.",
    },
    {
      num: "03",
      title: "Options & Structuring",
      desc: "We present suitable products across lenders or fund houses and structure the optimal application.",
    },
    {
      num: "04",
      title: "Documentation & Coordination",
      desc: "We coordinate all necessary documentation and liaise directly with bank managers and underwriters.",
    },
    {
      num: "05",
      title: "Approval & Disbursal",
      desc: "We manage queries through credit committees until sanction letter issuance and account credit.",
    },
    {
      num: "06",
      title: "Ongoing Support",
      desc: "Our relationship continues with regular portfolio reviews, balance transfer options, and ongoing guidance.",
    },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <nav className="text-xs text-gray-400 mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d487d]">Home</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">How We Work</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0b1f44] font-heading">
          How We Work
        </h1>
        <p className="text-base text-gray-600 mt-2 max-w-2xl">
          From your first conversation to final disbursal or policy issuance, here&apos;s what working with The Finance Suite looks like.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* The 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-4 relative overflow-hidden"
            >
              <div className="text-3xl font-extrabold text-[#c9a24a] font-heading">
                {st.num}
              </div>
              <h3 className="text-xl font-bold text-[#0b1f44] font-heading">
                {st.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer as on live site */}
        <div className="p-4 bg-[#f7f0e7] rounded-xl border border-[#c9a24a]/20 text-xs text-gray-600 text-center">
          Distribution and support options only; not investment advisory.
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0b1f44] text-white p-10 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold font-heading">Start with Step 1: Free Consultation</h3>
          <p className="text-sm text-slate-200 max-w-xl mx-auto">
            Speak directly with Prabhakar Khare about your financial or lending requirements.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-[#c9a24a] hover:bg-[#b89139] text-[#0b1f44] font-bold px-6 py-3 rounded-xl text-sm"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:9354105561"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm border border-white/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c9a24a]" />
              <span>Call 935 410 5561</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
