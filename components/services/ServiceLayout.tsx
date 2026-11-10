import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import InquiryForm from "@/components/forms/InquiryForm";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function ServiceLayout({
  title,
  subtitle,
  children,
}: ServiceLayoutProps) {
  const allServices = [
    { name: "Investment Solutions", href: "/services/investment-solutions" },
    { name: "Insurance Solutions", href: "/services/insurance-solutions" },
    { name: "Personal & Retail Loans", href: "/services/personal-retail-loans" },
    { name: "Business & Institutional Loans", href: "/services/business-institutional-loans" },
    { name: "Banking Solutions", href: "/services/banking-solutions" },
  ];

  return (
    <div className="py-10 bg-white min-h-screen">
      {/* Top Banner / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 pb-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <nav className="text-xs text-gray-400 mb-2 flex items-center gap-2">
            <Link href="/" className="hover:text-[#2d487d]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#2d487d]">Services</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1f44] font-heading">
            {title}
          </h1>
          <p className="text-base text-gray-600 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="hidden md:block relative w-48 h-32 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0">
          <Image
            src="/images/service-page.webp"
            alt={title}
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Area (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-[#0b1f44] font-heading pb-3 border-b border-gray-100">
                What We Do
              </h2>
              {children}
            </div>
          </div>

          {/* Authentic Sidebar (4 cols) matching live site */}
          <div className="lg:col-span-4 space-y-6">
            {/* Services navigation menu */}
            <div className="bg-[#f7f0e7] rounded-2xl p-6 border border-[#c9a24a]/20">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b1f44] mb-3 font-heading">
                All Services
              </h3>
              <div className="space-y-1 text-sm">
                {allServices.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className={`block py-2 px-3 rounded-lg transition-colors font-medium ${
                      s.name === title
                        ? "bg-[#2d487d] text-white"
                        : "text-gray-700 hover:bg-white hover:text-[#2d487d]"
                    }`}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Enquiry Form Box */}
            <InquiryForm defaultService={title} />

            {/* Direct Contact Card matching live site */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5 text-sm">
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Call Us
                </span>
                <a
                  href="tel:9354105561"
                  className="text-lg font-bold text-[#2d487d] hover:underline flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c9a24a]" />
                  <span>935 410 5561</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/919354105561"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#25D366] hover:underline flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>935 410 5561</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Email
                </span>
                <a
                  href="mailto:contact@thefinancesuite.com"
                  className="font-semibold text-gray-800 hover:text-[#2d487d] flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#c9a24a]" />
                  <span>contact@thefinancesuite.com</span>
                </a>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Office
                </span>
                <div className="text-gray-600 text-xs leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c9a24a] flex-shrink-0 mt-0.5" />
                  <span>Spring Meadows Business Park, Sector 63, Noida (UP) – 201301</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
