import React from "react";
import EmiCalculator from "@/components/calculators/EmiCalculator";

export const metadata = {
  title: "Loan EMI Calculator | The Finance Suite",
  description: "Calculate your monthly home loan, car loan, or personal loan EMI with interactive sliders.",
};

export default function EmiCalculatorPage() {
  return (
    <div className="py-12 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
            Loan Planning Tool
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b1f44] font-heading">
            Loan EMI Calculator
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Quickly estimate your monthly repayment, total interest, and principal amortization across tenures.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <EmiCalculator />
      </div>
    </div>
  );
}
