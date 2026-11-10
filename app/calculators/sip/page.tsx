import React from "react";
import SipCalculator from "@/components/calculators/SipCalculator";

export const metadata = {
  title: "SIP Wealth Calculator | The Finance Suite",
  description: "Calculate expected maturity returns and wealth gained through Systematic Investment Plans (SIP).",
};

export default function SipCalculatorPage() {
  return (
    <div className="py-12 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
            Wealth Projector
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b1f44] font-heading">
            SIP Wealth Calculator
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            See the compounding power of disciplined monthly mutual fund investments over your chosen horizon.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <SipCalculator />
      </div>
    </div>
  );
}
