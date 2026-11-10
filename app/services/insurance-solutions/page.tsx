import React from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Insurance Solutions | The Finance Suite",
  description: "Life, health, and general insurance to protect what matters most.",
};

export default function InsuranceSolutionsPage() {
  const points = [
    {
      title: "Life Insurance",
      desc: "Secure your family’s financial future against life’s uncertainties.",
    },
    {
      title: "Health Insurance",
      desc: "Comprehensive coverage for medical expenses, for you and your family.",
    },
    {
      title: "General Insurance",
      desc: "Protection for your vehicle, home, and other valuable assets.",
    },
  ];

  return (
    <ServiceLayout
      title="Insurance Solutions"
      subtitle="Insurance options to protect what matters most."
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
