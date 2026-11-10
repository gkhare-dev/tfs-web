"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

export default function EmiCalculator() {
  const [amount, setAmount] = useState<number>(2500000); // 25 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(15); // 15 years

  // Calculate Monthly EMI: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi = Math.round(
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - amount;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const principalPercent = Math.round((amount / totalPayment) * 100);
  const interestPercent = 100 - principalPercent;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl bg-[#2d487d]/10 flex items-center justify-center text-[#2d487d]">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#0b1f44] font-heading">Loan EMI Calculator</h3>
          <p className="text-xs text-gray-500">Plan your Home, Car, or Personal Loan repayments</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
              <span className="text-base font-bold text-[#2d487d] bg-[#f0f7ff] px-3 py-1 rounded-md">
                {formatCurrency(amount)}
              </span>
            </div>
            <input
              type="range"
              min="100000"
              max="20000000"
              step="50000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2d487d]"
            />
            <div className="flex justify-between text-[11px] text-gray-600 mt-1">
              <span>₹1 Lakh</span>
              <span>₹2 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Interest Rate (p.a.)</label>
              <span className="text-base font-bold text-[#2d487d] bg-[#f0f7ff] px-3 py-1 rounded-md">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min="6"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2d487d]"
            />
            <div className="flex justify-between text-[11px] text-gray-600 mt-1">
              <span>6%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Loan Tenure</label>
              <span className="text-base font-bold text-[#2d487d] bg-[#f0f7ff] px-3 py-1 rounded-md">
                {tenureYears} Years ({tenureYears * 12} Months)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2d487d]"
            />
            <div className="flex justify-between text-[11px] text-gray-600 mt-1">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0b1f44] to-[#2d487d] rounded-2xl p-6 text-white shadow-lg space-y-5">
          <div className="text-center pb-4 border-b border-white/10">
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              Estimated Monthly EMI
            </span>
            <div className="text-3xl font-extrabold text-[#c9a24a] mt-1 font-heading">
              {formatCurrency(emi)}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-slate-200">
              <span>Principal Amount</span>
              <span className="font-semibold text-white">{formatCurrency(amount)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-200">
              <span>Total Interest Payable</span>
              <span className="font-semibold text-white">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-200 pt-2 border-t border-white/10">
              <span className="font-semibold">Total Amount (P + I)</span>
              <span className="font-bold text-[#c9a24a]">{formatCurrency(totalPayment)}</span>
            </div>
          </div>

          {/* Visual Ratio Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden flex">
              <div style={{ width: `${principalPercent}%` }} className="bg-white h-full" />
              <div style={{ width: `${interestPercent}%` }} className="bg-[#c9a24a] h-full" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-300">
              <span>Principal ({principalPercent}%)</span>
              <span>Interest ({interestPercent}%)</span>
            </div>
          </div>

          <Link
            href={`/contact-us?loanAmount=${amount}&tenure=${tenureYears}&type=Loan`}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-[#c9a24a] hover:bg-[#b89139] text-[#0b1f44] font-bold py-3 px-4 rounded-xl transition-all shadow"
          >
            <span>Apply For This Loan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
