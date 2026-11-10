import React from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Business & Institutional Loans | The Finance Suite",
  description: "Business loans, working capital, agriculture, and institutional funding for growing enterprises.",
};

export default function BusinessInstitutionalLoansPage() {
  const points = [
    {
      title: "Business Loan",
      desc: "Capital to start, run, or grow your business.",
    },
    {
      title: "Overdraft / GST Overdraft (GST OD)",
      desc: "Flexible working capital secured against your GST turnover.",
    },
    {
      title: "Hospital Start-up & Expansion Funding",
      desc: "Capital for launching or growing a healthcare facility.",
    },
    {
      title: "Agriculture Loan",
      desc: "Loans designed for farming and allied agricultural needs.",
    },
  ];

  return (
    <ServiceLayout
      title="Business & Institutional Loans"
      subtitle="Loan options to fund and grow your business."
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
