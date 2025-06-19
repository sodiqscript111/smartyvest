"use client";

import { useState } from "react";
import {
  CheckCircle,
  ShieldCheck,
  BarChart3,
  Users,
  TrendingUp,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      "Gain access to data-driven research and market insights tailored for Africa's unique economic landscape.",
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
    description:
      "Our experienced advisors are ready to guide you through every step of your investment journey.",
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
    description:
      "Customized investment options that align with your goals and risk appetite.",
  },
];

export default function WhyChooseUsRedesign() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const currentBenefit = benefits[currentIndex];
  const Icon = currentBenefit.icon;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 sm:px-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight"
                style={{
                  fontFamily: '"Wise Sans", Inter, sans-serif',
                  color: "#0E0F0C",
                  lineHeight: "0.85",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Why choose us
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-24 h-1 bg-gradient-to-r from-[#4faee4] to-[#3b9fcf] rounded-full"
              />
            </div>

            {/* Navigation Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={prevCard}
                className="group flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-200 rounded-full hover:border-[#4faee4] hover:bg-[#4faee4] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </button>

              <div className="flex-1 flex items-center gap-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#4faee4]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextCard}
                className="group flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-200 rounded-full hover:border-[#4faee4] hover:bg-[#4faee4] transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </button>
            </motion.div>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm text-gray-500 font-medium"
            >
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(benefits.length).padStart(2, "0")}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4faee4]/10 to-[#3b9fcf]/10 rounded-3xl blur-3xl" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-2xl max-w-md w-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4faee4]/20 to-[#3b9fcf]/20 rounded-full blur-2xl -translate-y-8 translate-x-8" />

                <div className="relative z-10 space-y-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4faee4] to-[#3b9fcf] text-white shadow-lg"
                  >
                    <Icon className="w-10 h-10" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold text-[#0E0F0C]"
                    style={{
                      fontFamily: "Inter, Helvetica, Arial, sans-serif",
                    }}
                  >
                    {currentBenefit.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "Inter, Helvetica, Arial, sans-serif",
                      fontSize: "18px",
                      lineHeight: "26px",
                      fontWeight: 600,
                      letterSpacing: "-0.48px",
                      color: "#454745",
                    }}
                  >
                    {currentBenefit.description}
                  </motion.p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="h-0.5 bg-gradient-to-r from-[#4faee4] to-transparent rounded-full"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
