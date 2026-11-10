import React from "react";
import Link from "next/link";
import {
  WalletCards,
  Building2,
  TrendingUp,
  ShieldCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Financial & Lending Services | The Finance Suite",
  description: "Full-service investment, insurance, and lending solutions to drive your financial success.",
};

export default function ServicesOverviewPage() {
  const services = [
    {
      title: "Investment Solutions",
      slug: "investment-solutions",
      icon: TrendingUp,
      desc: "Demat accounts, equity, mutual funds, ETFs, fixed income, NCDs, corporate FDs, and PMS — build a portfolio suited to your goals.",
      points: [
        "Demat Account Opening",
        "Equity, Derivatives, Mutual Funds & ETFs",
        "Fixed Income, NCDs & Corporate Fixed Deposits",
        "Portfolio Management Services (PMS)",
      ],
    },
    {
      title: "Insurance Solutions",
      slug: "insurance-solutions",
      icon: ShieldCheck,
      desc: "Life, health, and general insurance to protect what matters most.",
      points: [
        "Life Insurance",
        "Health Insurance",
        "General Insurance",
      ],
    },
    {
      title: "Personal & Retail Loans",
      slug: "personal-retail-loans",
      icon: WalletCards,
      desc: "Home loans, vehicle loans, and education funding — structured for faster approval.",
      points: [
        "Home Loan / Loan Against Property (LAP) / Balance Transfer",
        "Car, Bike & Commercial Vehicle Loan",
        "School Funding",
      ],
    },
    {
      title: "Business & Institutional Loans",
      slug: "business-institutional-loans",
      icon: Building2,
      desc: "Business loans, working capital, agriculture, and institutional funding for growing enterprises.",
      points: [
        "Business Loan",
        "Overdraft / GST Overdraft (GST OD)",
        "Hospital Start-up & Expansion Funding",
        "Agriculture Loan",
      ],
    },
    {
      title: "Banking Solutions",
      slug: "banking-solutions",
      icon: Landmark,
      desc: "Assistance opening savings, current, fixed deposit, NRE, NRO, and FCNR accounts.",
      points: [
        "Savings (SB) & Current (CA) Accounts",
        "Fixed Deposit Booking",
        "NRI (NRE, NRO & FCNR) Accounts",
      ],
    },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <nav className="text-xs text-gray-400 mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d487d]">Home</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Services</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0b1f44] font-heading">
          Financial & Lending Services
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Full-service investment, insurance, and lending solutions to drive your financial success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2d487d]/10 text-[#2d487d] flex items-center justify-center group-hover:bg-[#2d487d] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1f44] font-heading group-hover:text-[#2d487d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed min-h-[4rem]">
                    {item.desc}
                  </p>
                  <div className="pt-2 border-t border-gray-50 space-y-1.5">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a24a]" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-50 mt-4">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2d487d] hover:text-[#0b1f44] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
