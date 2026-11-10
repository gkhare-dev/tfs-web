import React from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import EmiCalculator from "@/components/calculators/EmiCalculator";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Personal & Retail Loans | The Finance Suite",
  description: "Home loans, vehicle loans, and education funding — structured for faster approval.",
};

export default function PersonalRetailLoansPage() {
  const points = [
    {
      title: "Home Loan / Loan Against Property (LAP) / Balance Transfer",
      desc: "Finance a new home, unlock the value of existing property, or move to a better rate.",
    },
    {
      title: "Car, Bike & Commercial Vehicle Loan",
      desc: "Financing for personal and commercial vehicles.",
    },
    {
      title: "School Funding",
      desc: "Funding solutions for education-related needs, including setting up or expanding educational institutions.",
    },
  ];

  return (
    <ServiceLayout
      title="Personal & Retail Loans"
      subtitle="Loan options to finance your home, vehicle, or education."
    >
      <div className="space-y-6">
        <div className="space-y-4">
          {points.map((p, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 space-y-1">
              <h3 className="text-base font-bold text-[#0b1f44] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c9a24a] flex-shrink-0" />
                <span>{p.title}</span>
              </h3>
              <p className="text-sm text-gray-600 pl-6 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-bold text-[#0b1f44] font-heading mb-4">
            Loan EMI Calculator
          </h3>
          <EmiCalculator />
        </div>
      </div>
    </ServiceLayout>
  );
}
