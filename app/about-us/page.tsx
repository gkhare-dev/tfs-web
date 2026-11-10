import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Meet The Founder — Prabhakar Khare | The Finance Suite",
  description: "Founded by Prabhakar Khare, a career banker with over 37 years of experience in Credit and Foreign Exchange in Noida and beyond.",
};

export default function AboutUsPage() {
  const credentials = [
    "MA in Economics",
    "CAIIB — Certified Associate of the Indian Institute of Bankers",
    "37+ years in the banking industry",
    "Specialist in Credit Appraisal and Foreign Exchange",
    "AMFI Registered Mutual Fund Distributor — ARN-365088",
    "IRDAI Licensed — Life Advisor (MAX51485G)",
    "IRDAI Licensed — Health Insurance Advisor (MBHGUR03315359)",
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <nav className="text-xs text-gray-400 mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d487d]">Home</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">About Us</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0b1f44] font-heading">
          Meet The Founder
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Who We Are & Founder Feature Banner */}
        <div className="bg-[#f7f0e7] rounded-3xl p-8 sm:p-12 border border-[#c9a24a]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-sm w-full text-center space-y-4">
                <div className="relative w-52 h-64 rounded-xl overflow-hidden mx-auto shadow-md border border-gray-200">
                  <Image
                    src="/images/prabhakar-khare.webp"
                    alt="Prabhakar Khare"
                    fill
                    sizes="(max-width: 768px) 208px, 256px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#0b1f44] font-heading">
                    Prabhakar Khare
                  </h3>
                  <p className="text-xs font-semibold text-[#c9a24a] uppercase tracking-wider">
                    Founder
                  </p>
                  <p className="text-[11px] text-gray-500">
                    MA (Econ) | CAIIB | Ex-Senior Banker
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="lg:col-span-7 space-y-5 text-gray-700">
              <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f44] font-heading">
                Meet the Founder — Prabhakar Khare
              </h2>

              <p className="text-base leading-relaxed font-medium text-gray-800">
                The Finance Suite was built around a simple belief: financial and lending decisions are better when they&apos;re guided by someone who has actually worked inside a bank.
              </p>

              <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                <p>
                  Founded by <strong>Prabhakar Khare</strong>, a career banker with over <strong>37 years of experience in Credit and Foreign Exchange</strong>, The Finance Suite brings insider banking knowledge directly to individuals and businesses in Noida and beyond.
                </p>
                <p>
                  Over more than three decades in banking, Prabhakar developed a deep, practical understanding of how credit decisions are really made — how banks assess risk, structure lending products, and manage foreign exchange transactions. That insider perspective is now at the heart of everything The Finance Suite does.
                </p>
                <p>
                  He holds a Master&apos;s degree (MA) in Economics and is CAIIB certified (Certified Associate of the Indian Institute of Bankers), reflecting a rigorous, professional standard carried through into every client engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials at a Glance */}
        <div className="space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-[#0b1f44] font-heading">
              Credentials at a Glance
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Professional certifications and verified regulatory licenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#c9a24a] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800">{cred}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
              Our Mission
            </span>
            <h3 className="text-xl font-bold text-[#0b1f44] font-heading">
              A Single Trusted Point of Contact
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To be the single, trusted point of contact for every financial and lending need — for individuals building wealth and businesses seeking capital — backed by real banking-industry expertise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
              Our Approach
            </span>
            <h3 className="text-xl font-bold text-[#0b1f44] font-heading">
              Complete Lifecycle Handholding
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We understand your goals, present your options, structure the right approach, handle the paperwork, and stay with you through approval, disbursal, and beyond.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0b1f44] text-white p-10 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold font-heading">Ready to talk with an insider?</h3>
          <p className="text-sm text-slate-200 max-w-xl mx-auto">
            Schedule a confidential consultation with Prabhakar Khare.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="bg-[#c9a24a] hover:bg-[#b89139] text-[#0b1f44] font-bold px-6 py-3 rounded-xl text-sm"
            >
              Book a Free Consultation
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
