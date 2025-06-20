import {
  ArrowRight,
  BookOpen,
  Calendar,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Learn | Save | Invest",
    icon: BookOpen,
    description: "All our upcoming events for the month of October to December",
  },
  {
    title: "Smarty Central",
    icon: Calendar,
    description: "Recommended courses, curated just for you!",
  },
  {
    title: "All available lesson recordings",
    icon: Video,
    description: "",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ProductsAndSolutions() {
  return (
    <section className="bg-[#f4fbfd] py-24 px-6 text-gray-800">
      <div className="container mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4faee4]">
            Products and solutions
          </p>
          <h2 className="text-4xl md:text-3xl font-extrabold leading-tight">
            Providing transformational solutions for <br className="hidden md:block" />
            Africa's unique challenges
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <card.icon className="text-[#4faee4] w-7 h-7" />
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              {card.description && (
                <p className="text-base leading-relaxed text-gray-600">
                  {card.description}
                </p>
              )}

              <Link
                to="/coming-soon"
                className="mt-auto text-[#4faee4] hover:underline flex items-center gap-1 text-sm font-medium"
              >
                Coming Soon <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
