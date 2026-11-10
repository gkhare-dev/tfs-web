import React from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Banking Solutions | The Finance Suite",
  description: "Account options for your personal, business, or NRI banking needs.",
};

export default function BankingSolutionsPage() {
  const points = [
    {
      title: "Bank Account Opening",
      desc: "Savings (SB), Current (CA), Fixed Deposit, NRE, NRO, and FCNR accounts.",
    },
  ];

  return (
    <ServiceLayout
      title="Banking Solutions"
      subtitle="Account options for your personal, business, or NRI banking needs."
    >
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
    </ServiceLayout>
  );
}
