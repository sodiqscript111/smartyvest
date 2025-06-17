import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const textLine = "COMING SOON • COMING SOON • COMING SOON • ";

export default function ComingSoon() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white flex items-center justify-center px-4">

      {/* 🔁 Background Scrolling Text */}
      <div className="absolute inset-0 z-0 flex flex-col gap-6 pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className={`whitespace-nowrap text-[9vw] font-extrabold tracking-wider ${
              i % 2 === 0 ? "text-white/15" : "text-[#4faee4]/20"
            } drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]`}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 18 + i * 1.5, ease: "linear" }}
          >
            {textLine.repeat(10)}
          </motion.div>
        ))}
      </div>

      {/* 🍏 Apple-Style Liquid Glass Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-md w-full p-8 rounded-3xl border border-white/20 bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl text-center space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md">
          Coming Soon
        </h1>
        <p className="text-gray-300 text-sm sm:text-base">
          Smartyvest is almost ready to launch. Get notified when we go live!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Input
            placeholder="you@example.com"
            className="bg-white/90 text-black placeholder:text-gray-600"
          />
          <Button className="bg-[#4faee4] hover:bg-[#3da4d4] text-white transition-all">
            Notify Me
          </Button>
        </div>

        <Link to="/" className="inline-block mt-6">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            ← Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
