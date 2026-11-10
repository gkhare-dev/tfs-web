import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  TrendingUp,
  Landmark,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  Award,
  WalletCards,
  Mail,
  UserCheck,
  Briefcase,
} from "lucide-react";
import EmiCalculator from "@/components/calculators/EmiCalculator";
import SipCalculator from "@/components/calculators/SipCalculator";
import InquiryForm from "@/components/forms/InquiryForm";

export default function HomePage() {
  const trustCards = [
    {
      title: "AMFI Registered",
      subtitle: "Mutual Fund Distributor, ARN-365088",
      icon: Award,
    },
    {
      title: "IRDAI Licensed",
      subtitle: "Life & Health Insurance Advisor",
      icon: ShieldCheck,
    },
    {
      title: "CAIIB",
      subtitle: "Certified Associate, Indian Institute of Bankers",
      icon: Landmark,
    },
    {
      title: "37+ Years",
      subtitle: "Banking-side credit experience",
      icon: Clock,
    },
  ];

  const services = [
    {
      title: "Investment Solutions",
      desc: "Demat accounts, equity, mutual funds, ETFs, fixed income, NCDs, corporate FDs, and PMS — build a portfolio suited to your goals.",
      href: "/services/investment-solutions",
      icon: TrendingUp,
    },
    {
      title: "Insurance Solutions",
      desc: "Life, health, and general insurance to protect what matters most.",
      href: "/services/insurance-solutions",
      icon: ShieldCheck,
    },
    {
      title: "Personal & Retail Loans",
      desc: "Home loans, vehicle loans, and education funding — structured for faster approval.",
      href: "/services/personal-retail-loans",
      icon: WalletCards,
    },
    {
      title: "Business & Institutional Loans",
      desc: "Business loans, working capital, agriculture, and institutional funding for growing enterprises.",
      href: "/services/business-institutional-loans",
      icon: Building2,
    },
    {
      title: "Banking Solutions",
      desc: "Assistance opening savings, current, fixed deposit, NRE, NRO, and FCNR accounts.",
      href: "/services/banking-solutions",
      icon: Landmark,
    },
  ];

  const whyChooseUs = [
    {
      title: "Decades of Banking Insight",
      desc: "Over 37 years of credit evaluation experience ensures files are structured correctly to clear bank underwriting committees smoothly.",
      icon: Briefcase,
    },
    {
      title: "One Window for Everything",
      desc: "From initial Demat onboarding and mutual fund investments to complex business debt limits, manage all your needs under a single roof.",
      icon: HeartHandshake,
    },
    {
      title: "Personalized, Not Generic",
      desc: "Unbiased recommendations tailored strictly to your cash flows, life goals, and tax considerations — never quota-driven advice.",
      icon: UserCheck,
    },
    {
      title: "End-to-End Support",
      desc: "Direct handholding from initial document compilation to sanction letter review, account disbursement, and ongoing portfolio health audits.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Container (1:1 with Porto Theme Hero) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-12 w-full">
        <div
          className="relative bg-[#2d487d] rounded-2xl overflow-hidden px-8 py-14 sm:px-12 sm:py-20 text-white shadow-xl"
          style={{
            backgroundImage: "url('/images/bg-line-1.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "cover",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Rupee pill badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/20">
                <Image
                  src="/images/rupee.svg"
                  alt="Rupee"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain brightness-0 invert"
                />
                <span>Streamline Your Finances</span>
              </div>

              {/* Subheading */}
              <p className="text-sm sm:text-base font-medium tracking-wide text-white/90">
                Investment | Insurance | Loans & Credits
              </p>

              {/* Main H1 Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-heading text-white">
                One Partner. Every Financial Decision.
              </h1>

              {/* Lead paragraph */}
              <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
                From your first Demat account to your next business loan — <strong>37+ years of banking expertise</strong>, working for you.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-[#c9a24a] hover:bg-[#b89139] text-[#0b1f44] font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg text-base group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Founder Card with Portrait Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-2xl max-w-sm w-full border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="relative w-48 h-56 rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src="/images/prabhakar-khare.webp"
                    alt="Mr. Prabhakar Khare"
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#0b1f44] font-heading">
                    Mr. Prabhakar Khare
                  </h3>
                  <div className="text-xs font-semibold text-[#c9a24a] uppercase tracking-wider">
                    Founder
                  </div>
                </div>

                {/* Founder quick profile links */}
                <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-600 pt-1 border-t border-gray-100 w-full">
                  <a
                    href="mailto:info@thefinancesuite.com"
                    className="flex items-center gap-1 hover:text-[#2d487d] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2d487d]" />
                    <span>Email</span>
                  </a>
                  <span>•</span>
                  <Link
                    href="/about-us"
                    className="flex items-center gap-1 hover:text-[#2d487d] transition-colors"
                  >
                    <Award className="w-3.5 h-3.5 text-[#c9a24a]" />
                    <span>About</span>
                  </Link>
                  <span>•</span>
                  <a
                    href="tel:9354105561"
                    className="flex items-center gap-1 hover:text-[#2d487d] transition-colors"
                  >
                    <Clock className="w-3.5 h-3.5 text-[#2d487d]" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Credibility Cards Directly Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {trustCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2d487d]/10 text-[#2d487d] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#0b1f44] font-heading">{c.title}</h4>
                  <p className="text-xs text-gray-500 leading-snug">{c.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#f7f0e7]/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f44] font-heading">
              Financial & Lending Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Full-service investment, insurance, and lending solutions to drive your financial success.
            </p>
          </div>

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
                  </div>

                  <div className="pt-6 border-t border-gray-50 mt-4">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2d487d] hover:text-[#0b1f44] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Sixth Card: Book Consultation CTA Card */}
            <div className="bg-gradient-to-br from-[#0b1f44] to-[#2d487d] text-white rounded-2xl p-7 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a24a]/20 text-[#c9a24a] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  We respond within 24 hours.
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Have a specific question on mutual funds, life policies, or retail loans? Talk directly with our senior credit specialists.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center w-full bg-[#c9a24a] hover:bg-[#b89139] text-[#0b1f44] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-colors shadow"
                >
                  <span>Book Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
              Our Distinct Edge
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f44] font-heading">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-sm">
              Independent, expert-backed advisory built upon 37+ years of institutional banking integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gray-50/70 border border-gray-100 space-y-3 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2d487d]/10 text-[#2d487d] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0b1f44] font-heading">
                    {w.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stat Counters Banner */}
      <section className="bg-[#0b1f44] text-white py-14 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c9a24a]">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Delivering Excellence Through Expertise and Dedication
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#c9a24a] font-heading">
                37+
              </div>
              <div className="text-sm font-semibold text-white">
                Years of Banking Experience
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#c9a24a] font-heading">
                16
              </div>
              <div className="text-sm font-semibold text-white">
                Financial & Lending Solutions, One Window
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#c9a24a] font-heading">
                100%
              </div>
              <div className="text-sm font-semibold text-white">
                Personalized, End-to-End Guidance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Associated Partners Showcase */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-10">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
              Our Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1f44] font-heading">
              Associated with Leading Mutual Fund AMCs & Insurers
            </h2>
            <p className="text-xs text-gray-500">
              Partnered with India’s leading asset management companies and insurance providers
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto pt-2">
            {[
              { src: "/images/partners/sbi-mf.svg", alt: "SBI Mutual Fund" },
              { src: "/images/partners/hdfc-mf.svg", alt: "HDFC Mutual Fund" },
              { src: "/images/partners/icici-pru.jpg", alt: "ICICI Prudential Mutual Fund" },
              { src: "/images/partners/kotak-mf.webp", alt: "Kotak Mutual Fund" },
              { src: "/images/partners/motilal-oswal.webp", alt: "Motilal Oswal" },
              { src: "/images/partners/axis.svg", alt: "Axis Mutual Fund" },
              { src: "/images/partners/bandhan-mf.webp", alt: "Bandhan Mutual Fund" },
              { src: "/images/partners/niva-bupa.svg", alt: "Niva Bupa Health Insurance" },
              { src: "/images/partners/max-life.svg", alt: "Axis Max Life Insurance" },
            ].map((p, pIdx) => (
              <div
                key={pIdx}
                className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center w-36 h-14 hover:shadow-md transition-shadow"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={120}
                  height={36}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Financial Planning Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
              Interactive Calculators
            </span>
            <h2 className="text-3xl font-bold text-[#0b1f44] font-heading">
              Plan Your Loans & Investments
            </h2>
            <p className="text-gray-600 text-sm">
              Use our interactive calculators to project monthly loan EMIs and long-term mutual fund wealth growth.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            <EmiCalculator />
            <SipCalculator />
          </div>
        </div>
      </section>

      {/* Let’s Work Together Consultation Form */}
      <section id="consultation" className="py-20 bg-[#f7f0e7] border-t border-[#c9a24a]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#2d487d]">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1f44] font-heading">
                Let’s Work Together
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Whether you need assistance with securing a business loan, transferring your home loan to a lower interest rate, or initiating mutual fund SIPs, our advisory team is ready to assist you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#0b1f44]">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a24a]" />
                  <span>Prompt response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#0b1f44]">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a24a]" />
                  <span>Strict data privacy and bank-grade confidentiality</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#0b1f44]">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a24a]" />
                  <span>Zero hidden commissions or upfront consultation fees</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
