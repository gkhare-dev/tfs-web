import React from "react";
import Link from "next/link";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import EmiCalculator from "@/components/calculators/EmiCalculator";
import SipCalculator from "@/components/calculators/SipCalculator";

export const metadata = {
  title: "Financial Calculators | The Finance Suite",
  description: "Plan your loans and investments with our interactive EMI calculator and SIP wealth projector.",
};

export default function CalculatorsHubPage() {
  return (
    <div className="py-12 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
            Free Financial Tools
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b1f44] font-heading">
            Interactive Calculators
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Make informed decisions before borrowing or investing. Plan monthly installments and project long-term compounding growth.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Loan EMI Calculator Card */}
        <div id="emi" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#0b1f44] font-heading flex items-center gap-2">
              <Calculator className="w-6 h-6 text-[#2d487d]" />
              <span>Loan EMI Calculator</span>
            </h2>
            <Link href="/calculators/emi" className="text-xs font-semibold text-[#2d487d] hover:underline flex items-center gap-1">
              <span>Dedicated Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <EmiCalculator />
        </div>

        {/* SIP Calculator Card */}
        <div id="sip" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#0b1f44] font-heading flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#c9a24a]" />
              <span>SIP Wealth Growth Calculator</span>
            </h2>
            <Link href="/calculators/sip" className="text-xs font-semibold text-[#2d487d] hover:underline flex items-center gap-1">
              <span>Dedicated Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <SipCalculator />
        </div>
      </div>
    </div>
  );
}
