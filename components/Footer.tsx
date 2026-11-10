import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f44] text-gray-300 pt-16 pb-8 border-t-4 border-[#c9a24a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white px-3 py-2 rounded-lg">
              <Image
                src="/images/logo.webp"
                alt="The Finance Suite"
                width={190}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              From your first Demat account to your next business loan — 37+ years of senior banking credit expertise working directly for you.
            </p>
            <div className="space-y-2 pt-2 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a24a] flex-shrink-0" />
                <a href="tel:9354105561" className="hover:text-white font-medium transition-colors">
                  935 410 5561
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a24a] flex-shrink-0" />
                <a href="mailto:info@thefinancesuite.com" className="hover:text-white font-medium transition-colors">
                  info@thefinancesuite.com
                </a>
              </div>
            </div>
          </div>

          {/* Col: Services */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services/investment-solutions" className="hover:text-[#c9a24a] transition-colors">
                  Investment Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-solutions" className="hover:text-[#c9a24a] transition-colors">
                  Insurance Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/personal-retail-loans" className="hover:text-[#c9a24a] transition-colors">
                  Personal & Retail Loans
                </Link>
              </li>
              <li>
                <Link href="/services/business-institutional-loans" className="hover:text-[#c9a24a] transition-colors">
                  Business & Institutional Loans
                </Link>
              </li>
              <li>
                <Link href="/services/banking-solutions" className="hover:text-[#c9a24a] transition-colors">
                  Banking Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col: Company */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 font-heading">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about-us" className="hover:text-[#c9a24a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-[#c9a24a] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-[#c9a24a] transition-colors">
                  Calculators
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#c9a24a] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col: Regulatory License Codes */}
          <div className="space-y-3">
            <h4 className="text-white text-base font-semibold mb-4 font-heading">
              Accreditations
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <div className="text-[10px] text-gray-400 uppercase font-medium">AMFI Registration (ARN)</div>
                <div className="font-semibold text-white mt-0.5">ARN-365088</div>
                <div className="text-[10px] text-[#c9a24a]">Valid until 09-Feb-2029</div>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <div className="text-[10px] text-gray-400 uppercase font-medium">IRDAI Life Insurance</div>
                <div className="font-semibold text-white mt-0.5">MAX51485G</div>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                <div className="text-[10px] text-gray-400 uppercase font-medium">IRDAI Health Insurance</div>
                <div className="font-semibold text-white mt-0.5">MBHGUR03315359</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure Statement */}
        <div className="py-6 text-xs text-gray-400 space-y-2 border-b border-slate-800">
          <p>
            <strong className="text-gray-300">Statutory Disclosure:</strong> Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Insurance is the subject matter of solicitation.
          </p>
          <p>
            Loan sanctions and interest rate determinations are subject to the credit underwriting policies and sole discretion of respective partner banks / NBFCs.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} The Finance Suite. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#c9a24a] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#c9a24a] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
