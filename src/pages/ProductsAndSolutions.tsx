import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const productCards = [
  {
    title: "Real Estate",
    description: "Invest in fractional properties and earn passive income.",
    extra:
      "With access to high-yield rental income and long-term property appreciation, our real estate product is designed for steady, secure growth.",
    image: "https://i.ibb.co/RTSn2gtC/Image-fx-74.png",
  },
  {
    title: "Loan",
    description: "Access low-interest loans secured by your savings or assets.",
    extra:
      "We offer transparent repayment plans, fast approval, and a system designed to ensure financial discipline while supporting your goals.",
    image: "https://i.ibb.co/xqNC81xp/Gemini-Generated-Image-oaj6kpoaj6kpoaj6.png",
  },
  {
    title: "Savings",
    description: "Smart saving options tailored for long-term goals.",
    extra:
      "Whether you're saving for education, travel, or retirement, our saving plans adapt to your lifestyle and keep your goals in sight.",
    image: "https://i.ibb.co/S716RpQg/Image-fx-72.png",
  },
];

export default function ProductsAndSolutions() {
  return (
    <section className="w-full bg-[#f4fbfd] py-24 px-6 text-gray-800 font-poppins">
      {/* Hero */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4faee4]">
          Products and Solutions
        </p>
        <h2 className="text-[48px] md:text-[48px] font-normal leading-tight">
          Providing transformational solutions for Africa's unique challenges
        </h2>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-[#4faee4] hover:underline text-base font-semibold"
        >
          Explore our products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Cards */}
      <div className="mt-20 space-y-10 flex flex-col items-center">
        {productCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-[80%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Left: Text */}
            <div className="flex-1 p-6 space-y-3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
              <p className="text-gray-700 text-base font-medium">{card.description}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{card.extra}</p>
              <Link
                to="/coming-soon"
                className="mt-3 inline-flex items-center gap-1 text-[#4faee4] text-sm font-medium hover:underline"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Image */}
            <div className="md:w-1/2 w-full h-38 md:h-[340px] ">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
