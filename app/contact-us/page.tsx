import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import InquiryForm from "@/components/forms/InquiryForm";

export const metadata = {
  title: "Contact Us | The Finance Suite",
  description: "Get in touch with The Finance Suite. Office at Spring Meadows Business Park, Sector 63, Noida. Call 935 410 5561.",
};

export default function ContactUsPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <nav className="text-xs text-gray-400 mb-2 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d487d]">Home</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Contact Us</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0b1f44] font-heading">
          Contact Us
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Trusted by individuals and businesses across Noida and the NCR. We respond within 24 hours.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f7f0e7] p-8 rounded-3xl border border-[#c9a24a]/20 space-y-6">
              <h2 className="text-2xl font-bold text-[#0b1f44] font-heading">
                Reach out to us using the options below:
              </h2>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Phone Office
                  </span>
                  <a
                    href="tel:9354105561"
                    className="text-xl font-bold text-[#2d487d] hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5 text-[#c9a24a]" />
                    <span>935 410 5561</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/919354105561"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#25D366] hover:underline flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>935 410 5561</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    General Inquiries & E-mail
                  </span>
                  <a
                    href="mailto:contact@thefinancesuite.com"
                    className="text-base font-semibold text-gray-900 hover:text-[#2d487d] flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5 text-[#c9a24a]" />
                    <span>contact@thefinancesuite.com</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-[#c9a24a]/20">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Office Address
                  </span>
                  <div className="flex items-start gap-2.5 text-gray-800">
                    <MapPin className="w-5 h-5 text-[#c9a24a] flex-shrink-0 mt-0.5" />
                    <span>Spring Meadows Business Park, Sector 63, Noida (UP) – 201301</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#c9a24a]/20">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Business Hours
                  </span>
                  <div className="space-y-1 text-xs text-gray-700 pl-1">
                    <p><strong>Monday to Friday:</strong> 9:00 AM – 6:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM – 2:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 text-xs text-gray-500">
              <ShieldCheck className="w-5 h-5 text-[#c9a24a] flex-shrink-0" />
              <span>We value your privacy. All inquiries are kept strictly confidential.</span>
            </div>
          </div>

          {/* Right Column: Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
