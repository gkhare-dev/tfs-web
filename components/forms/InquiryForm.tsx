"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface InquiryFormProps {
  defaultService?: string;
}

export default function InquiryForm({ defaultService = "Home Loans" }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceCategory: defaultService,
    amountRequired: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission (ready to plug in Resend / API route)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#0b1f44] font-heading">
          Inquiry Received Successfully!
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Thank you, <strong>{formData.fullName}</strong>. Our senior credit advisory team will review your requirement for <strong>{formData.serviceCategory}</strong> and contact you within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              serviceCategory: defaultService,
              amountRequired: "",
              message: "",
            });
          }}
          className="text-sm text-[#2d487d] font-semibold underline hover:text-[#0b1f44]"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-5">
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-xl font-bold text-[#0b1f44] font-heading">
          Request a Consultation
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Direct advisory with 37+ years experienced banking professionals. No hidden charges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rajesh Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d487d] text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Mobile Number *
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d487d] text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d487d] text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Service Required *
          </label>
          <select
            value={formData.serviceCategory}
            onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d487d] text-sm bg-white"
          >
            <option value="Home Loans">Home Loans / Balance Transfer</option>
            <option value="Personal Loans">Personal / Education Loans</option>
            <option value="Business Loans">Business / Working Capital Loans</option>
            <option value="Mutual Funds">Mutual Funds & SIP Investment</option>
            <option value="Insurance">Life & Health Insurance</option>
            <option value="Banking Solutions">NRI / Corporate Banking</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
          Approx. Loan / Investment Amount (INR)
        </label>
        <input
          type="text"
          placeholder="e.g. ₹25,00,000"
          value={formData.amountRequired}
          onChange={(e) => setFormData({ ...formData, amountRequired: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d487d] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
          Additional Notes / Specific Requirements
        </label>
        <textarea
          rows={3}
          placeholder="Share any specific requirements or details..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2d487d] text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#2d487d] hover:bg-[#0b1f44] text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
      >
        {loading ? (
          <span>Submitting...</span>
        ) : (
          <>
            <span>Submit Confidential Inquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
        <AlertCircle className="w-3.5 h-3.5 text-gray-400" />
        <span>Your data is strictly confidential. No spam calls or shared data.</span>
      </div>
    </form>
  );
}
