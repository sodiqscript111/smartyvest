"use client";

import {
  CheckCircle,
  BarChart3,
  Users,
  TrendingUp,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Users,
    title: "Join a growing community of like-minded investors.",
    description: "Share insights and opportunities.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Join a growing community of like-minded investors. Share insights and opportunities.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Diversification",
    description: "Hassle-Free Ownership",
  },
  {
    icon: TrendingUp,
    title: "High Potential Returns",
    description:
      "Benefit from rental income and property appreciation. Target double-digit annual returns.",
  },
  {
    icon: CheckCircle,
    title:
      "We handle property management, so you can enjoy passive income without the stress.",
    description:
      "All properties are vetted. Track your investments and earnings through our secure platform.",
  },
  {
    icon: Lock,
    title: "Secure & Transparent",
    description:
      "All properties are vetted. Track your investments and earnings through our secure platform.",
  },
  {
    icon: CheckCircle,
    title: "Low Minimum Investment",
    description: "",
  },
];

export default function WhyChooseUsRedesign() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 sm:px-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-black tracking-tight leading-tight"
            style={{
              fontFamily: '"Wise Sans", Inter, sans-serif',
              color: "#0E0F0C",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h1>
          <motion.div
            className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-[#4faee4] to-[#3b9fcf] rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white border border-white/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#4faee4]/20 to-[#3b9fcf]/20 rounded-full blur-2xl -translate-y-6 translate-x-6" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#4faee4] to-[#3b9fcf] text-white shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0E0F0C]">
                    {benefit.title}
                  </h3>

                  {benefit.description && (
                    <p className="text-base text-gray-700 font-medium leading-relaxed">
                      {benefit.description}
                    </p>
                  )}

                  <div className="h-0.5 bg-gradient-to-r from-[#4faee4] to-transparent rounded-full mt-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
