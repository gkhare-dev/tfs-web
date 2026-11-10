"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000); // 10k/month
  const [expectedReturn, setExpectedReturn] = useState<number>(12); // 12%
  const [timePeriodYears, setTimePeriodYears] = useState<number>(10); // 10 years

  // Future Value of SIP formula: M * [ (1 + i)^n - 1 ] * (1 + i) / i
  const i = expectedReturn / 12 / 100;
  const n = timePeriodYears * 12;

  const totalInvested = monthlyInvestment * n;
  const futureValue = Math.round(
    monthlyInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
  );
  const estimatedReturns = futureValue - totalInvested;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const investedPercent = Math.round((totalInvested / futureValue) * 100);
  const returnsPercent = 100 - investedPercent;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl bg-[#c9a24a]/15 flex items-center justify-center text-[#c9a24a]">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#0b1f44] font-heading">SIP Wealth Calculator</h3>
          <p className="text-xs text-gray-500">Forecast your Mutual Fund systematic investment returns</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monthly Investment */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Monthly Investment</label>
              <span className="text-base font-bold text-[#2d487d] bg-[#f0f7ff] px-3 py-1 rounded-md">
                {formatCurrency(monthlyInvestment)}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="200000"
              step="500"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2d487d]"
            />
            <div className="flex justify-between text-[11px] text-gray-600 mt-1">
              <span>₹500</span>
              <span>₹2,00,000 / mo</span>
            </div>
          </div>

          {/* Expected Return Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Expected Annual Return</label>
              <span className="text-base font-bold text-[#2d487d] bg-[#f0f7ff] px-3 py-1 rounded-md">
                {expectedReturn}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="25"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2d487d]"
            />
            <div className="flex justify-between text-[11px] text-gray-600 mt-1">
              <span>5%</span>
              <span>25% p.a.</span>
            </div>
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">Investment Horizon</label>
              <span className="text-base font-bold text-[#2d487d] bg-[#f0f7ff] px-3 py-1 rounded-md">
                {timePeriodYears} Years ({timePeriodYears * 12} Installments)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="35"
              step="1"
              value={timePeriodYears}
              onChange={(e) => setTimePeriodYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2d487d]"
            />
            <div className="flex justify-between text-[11px] text-gray-600 mt-1">
              <span>1 Year</span>
              <span>35 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0b1f44] to-[#2d487d] rounded-2xl p-6 text-white shadow-lg space-y-5">
          <div className="text-center pb-4 border-b border-white/10">
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              Expected Corpus at Maturity
            </span>
            <div className="text-3xl font-extrabold text-[#c9a24a] mt-1 font-heading">
              {formatCurrency(futureValue)}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-slate-200">
              <span>Invested Amount</span>
              <span className="font-semibold text-white">{formatCurrency(totalInvested)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-200">
              <span>Est. Wealth Gain</span>
              <span className="font-semibold text-white">{formatCurrency(estimatedReturns)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-200 pt-2 border-t border-white/10">
              <span className="font-semibold">Total Value</span>
              <span className="font-bold text-[#c9a24a]">{formatCurrency(futureValue)}</span>
            </div>
          </div>

          {/* Visual Ratio Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden flex">
              <div style={{ width: `${investedPercent}%` }} className="bg-white h-full" />
              <div style={{ width: `${returnsPercent}%` }} className="bg-[#c9a24a] h-full" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-300">
              <span>Invested ({investedPercent}%)</span>
              <span>Returns ({returnsPercent}%)</span>
            </div>
          </div>

          <Link
            href={`/contact-us?sipAmount=${monthlyInvestment}&duration=${timePeriodYears}&type=Investment`}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-[#c9a24a] hover:bg-[#b89139] text-[#0b1f44] font-bold py-3 px-4 rounded-xl transition-all shadow"
          >
            <span>Start Your SIP Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
