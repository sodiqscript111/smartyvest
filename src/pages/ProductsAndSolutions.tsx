import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Briefcase,
  Banknote,
  UserCircle2,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Individual Insurance",
    icon: ShieldCheck,
    description:
      "Offers comprehensive insurance for your car, home, business, and life — with only one telephone call. Find out more & get a quote.",
  },
  {
    title: "Securities Trading",
    icon: BarChart3,
    description:
      "Make share trading decisions backed by the insights of Coronation’s research team.",
  },
  {
    title: "Asset B. Management",
    icon: Briefcase,
    description:
      "At Coronation Asset, we offer investment capabilities across traditional and alternative asset classes in line with our customers.",
  },
  {
    title: "Wealth Management",
    icon: UserCircle2,
    description:
      "Coronation Wealth Management offers a personal, proactive approach to managing your wealth. We take the time to get to know you.",
  },
  {
    title: "Private Banking",
    icon: Banknote,
    description:
      "With a deep understanding of the world you live in, our Private Banking team provides you with a range of bespoke and dedicated services to help.",
  },
  {
    title: "Trustee and Registrar Services",
    icon: FileCheck,
    description:
      "Coronation is a leading player in technology-enabled securities administration services. We are expert fiduciaries and providers of trust.",
  },
];

const cardVariants = {
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
              <p className="text-base leading-relaxed text-gray-600">
                {card.description}
              </p>

              {/* React Router Link replacing button */}
              <Link
                to="/coming-soon"
                className="mt-auto text-[#4faee4] hover:underline flex items-center gap-1 text-sm font-medium"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
