"use client";

import {
  DollarSign,
  Coins,
  Briefcase,
  ShieldCheck,
  LogOut,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: DollarSign,
    title: "Low Minimum Investment",
    description:
      "With a minimum investment of just $100, Smartyvest makes fractional real estate accessible to everyone. Investors can own up to 9.8% of a property, giving flexibility to invest according to their budget.",
  },
  {
    icon: Coins,
    title: "Passive Income",
    description:
      "Receive quarterly dividends from rental income, and gain exposure to property appreciation—offering a consistent, long-term wealth-building stream.",
  },
  {
    icon: Briefcase,
    title: "No-Hassle Investments",
    description:
      "No tenants, no headaches. The Smartyvest team manages everything for you, backed by 100+ years of collective property management experience.",
  },
  {
    icon: ShieldCheck,
    title: "Highly Vetted Properties",
    description:
      "Every property undergoes a rigorous vetting process, including checks on rental demand, vacancy rates, and economic viability to maximize investor returns.",
  },
  {
    icon: LogOut,
    title: "Exit Strategy",
    description:
      "Smartyvest introduces the first-ever secondary market for fractional real estate—allowing investors to buy and sell shares easily, with real liquidity.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Manage your portfolio anytime, anywhere through our mobile apps on iOS and Android—featuring full platform capabilities in your pocket.",
  },
];

export default function WhyChooseUsRedesign() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex items-center py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h1
            className="text-5xl md:text-6xl font-normal tracking-tight leading-tight text-gray-900"
            style={{ fontFamily: '"Wise Sans", Inter, sans-serif' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why Choose Us
          </motion.h1>
          <motion.div
            className="w-28 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#4faee4] to-[#3b9fcf] shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="mt-6 max-w-xl mx-auto text-gray-700 text-lg font-medium leading-relaxed">
            At Smartyvest, we empower you to invest smarter, with low barriers to entry, expert management, and innovative liquidity solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-[8px]"
              >
                {/* Soft glowing background circle */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#4faee4]/30 to-[#3b9fcf]/30 rounded-full blur-3xl -translate-y-8 translate-x-6 pointer-events-none" />

                <div className="relative z-10 flex flex-col space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#4faee4] to-[#3b9fcf] text-white shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                    {benefit.title}
                  </h3>

                  {benefit.description && (
                    <p className="text-base text-gray-700 font-normal leading-relaxed">
                      {benefit.description}
                    </p>
                  )}

                  <div className="h-1 w-20 bg-gradient-to-r from-[#4faee4] to-[#3b9fcf] rounded-full self-start mt-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
