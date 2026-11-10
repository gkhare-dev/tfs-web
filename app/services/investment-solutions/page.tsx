import React from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import SipCalculator from "@/components/calculators/SipCalculator";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Investment Solutions | The Finance Suite",
  description: "Demat accounts, equity, mutual funds, ETFs, fixed income, NCDs, corporate FDs, and PMS.",
};

export default function InvestmentSolutionsPage() {
  const points = [
    {
      title: "Demat Account Opening",
      desc: "Get started with a Demat account for seamless online trading and investment.",
    },
    {
      title: "Equity, Derivatives, Mutual Funds & ETFs",
      desc: "Access a wide range of market-linked investment options suited to your risk profile.",
    },
    {
      title: "Fixed Income, NCDs & Corporate Fixed Deposits",
      desc: "Stable, income-generating investment options for capital preservation and steady returns.",
    },
    {
      title: "Portfolio Management Services (PMS)",
      desc: "Professionally managed portfolios tailored to high-net-worth individuals and long-term goals.",
    },
  ];

  return (
    <ServiceLayout
      title="Investment Solutions"
      subtitle="Investment options to grow and diversify your wealth."
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
            SIP Wealth Projector
          </h3>
          <SipCalculator />
        </div>
      </div>
    </ServiceLayout>
  );
}
