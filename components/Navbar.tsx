"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);

  const services = [
    { name: "Overview", href: "/services" },
    { name: "Investment Solutions", href: "/services/investment-solutions" },
    { name: "Insurance Solutions", href: "/services/insurance-solutions" },
    { name: "Personal & Retail Loans", href: "/services/personal-retail-loans" },
    { name: "Business & Institutional Loans", href: "/services/business-institutional-loans" },
    { name: "Banking Solutions", href: "/services/banking-solutions" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.webp"
            alt="The Finance Suite"
            width={210}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-gray-700">
          <Link href="/about-us" className="hover:text-[#2d487d] transition-colors">
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-[#2d487d] transition-colors"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#2d487d] transition-transform group-hover:rotate-180" />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                {services.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f7f0e7] hover:text-[#2d487d] font-medium transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/how-we-work" className="hover:text-[#2d487d] transition-colors">
            How We Work
          </Link>

          {/* Calculators Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setCalculatorsOpen(true)}
            onMouseLeave={() => setCalculatorsOpen(false)}
          >
            <Link
              href="/calculators"
              className="flex items-center gap-1 hover:text-[#2d487d] transition-colors"
            >
              <span>Calculators</span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#2d487d] transition-transform group-hover:rotate-180" />
            </Link>

            {calculatorsOpen && (
              <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <Link
                  href="/calculators/emi"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f7f0e7] hover:text-[#2d487d] font-medium transition-colors"
                >
                  Loan EMI Calculator
                </Link>
                <Link
                  href="/calculators/sip"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f7f0e7] hover:text-[#2d487d] font-medium transition-colors"
                >
                  SIP Wealth Calculator
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact-us" className="hover:text-[#2d487d] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right CTA & Phone Callout */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:9354105561"
            className="flex items-center gap-2.5 text-[#0b1f44] hover:text-[#2d487d] font-semibold text-sm transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-[#f7f0e7] flex items-center justify-center text-[#2d487d]">
              <Phone className="w-4 h-4" />
            </div>
            <span>935 410 5561</span>
          </a>

          <Link
            href="/contact-us"
            className="bg-[#2d487d] hover:bg-[#0b1f44] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#2d487d]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 shadow-xl">
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-800"
          >
            About
          </Link>

          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Services</div>
            <div className="space-y-2 pl-3">
              {services.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-gray-700 hover:text-[#2d487d]"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/how-we-work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-800"
          >
            How We Work
          </Link>

          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Calculators</div>
            <div className="space-y-2 pl-3">
              <Link
                href="/calculators/emi"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-700 hover:text-[#2d487d]"
              >
                Loan EMI Calculator
              </Link>
              <Link
                href="/calculators/sip"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-700 hover:text-[#2d487d]"
              >
                SIP Wealth Calculator
              </Link>
            </div>
          </div>

          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-800"
          >
            Contact
          </Link>

          <div className="pt-2 border-t border-gray-100 space-y-3">
            <a
              href="tel:9354105561"
              className="flex items-center gap-2 text-sm font-semibold text-[#0b1f44]"
            >
              <Phone className="w-4 h-4 text-[#2d487d]" />
              <span>935 410 5561</span>
            </a>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#2d487d] text-white py-3 rounded-xl font-semibold text-sm"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
