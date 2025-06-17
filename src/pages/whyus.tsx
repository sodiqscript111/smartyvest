"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, ShieldCheck, BarChart3, Users, TrendingUp, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Robust Security",
    description:
      "Your investments are protected with bank-grade encryption and multi-layer security protocols.",
  },
  {
    icon: BarChart3,
    title: "Expert Insights",
    description:
      "Gain access to data-driven research and market insights tailored for Africa’s unique economic landscape.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Growth",
    description:
      "Our investment strategies are designed to deliver sustainable and long-term wealth accumulation.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our experienced advisors are ready to guide you through every step of your investment journey.",
  },
  {
    icon: Lock,
    title: "Transparency & Trust",
    description:
      "Full visibility on your portfolio performance with clear, easy-to-understand reporting.",
  },
  {
    icon: CheckCircle,
    title: "Tailored Solutions",
    description: "Customized investment options that align with your goals and risk appetite.",
  },
];

export default function WhyInvestWithUs() {
  // State to detect small screen to enable slider only on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Setup a media query listener to toggle slider based on screen width
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Initialize keen-slider only if mobile
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: { perView: 1.1, spacing: 16 },
      loop: false,
      mode: "snap",
    },
    []
  );

  return (
    <section className="bg-white py-20 px-6 sm:px-12 text-gray-900 max-w-[1100px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16 px-4"
      >
        <p className="text-xs uppercase font-semibold text-[#4faee4] tracking-wide mb-3">
          Why Invest With Us
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-2xl mx-auto mb-5">
          Empowering Your Financial Future with Confidence
        </h2>
        <p className="text-base max-w-xl mx-auto text-gray-700 leading-relaxed">
          Discover why thousands of Africans trust us to guide their investment journey with integrity
          and innovation.
        </p>
      </motion.div>

      {isMobile ? (
        // Mobile slider version
        <div ref={sliderRef} className="keen-slider">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#4faee4] to-[#3b9fcf] text-white mb-5">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-700 text-base leading-relaxed flex-grow">{description}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        // Desktop grid version
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-4xl mx-auto px-4"
        >
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 flex flex-col"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#4faee4] to-[#3b9fcf] text-white mb-6">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:underline">{title}</h3>
              <p className="text-gray-700 text-base leading-relaxed flex-grow">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
