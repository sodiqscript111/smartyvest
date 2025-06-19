"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Users,
  Shield,
  TrendingUp,
  Globe,
  Star,
} from "lucide-react";

const floatingStats = [
  { icon: Users, value: "10K+", label: "Active Users", delay: 0 },
  { icon: TrendingUp, value: "₦2.5B+", label: "Invested", delay: 1000 },
  { icon: Shield, value: "100%", label: "Secure", delay: 2000 },
  { icon: Globe, value: "15+", label: "Countries", delay: 3000 },
];

const testimonialSnippets = [
  "Game-changing platform!",
  "Finally, investing made simple",
  "The future is here",
  "Smart money moves",
];

export default function EnhancedSignupIntro() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            top: "10%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-purple-400/15 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            bottom: "10%",
            right: "10%",
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
      </div>

      {/* Stats - Desktop */}
      {!isMobile &&
        floatingStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="absolute hidden lg:block animate-float"
              style={{
                top: `${20 + index * 15}%`,
                left: index % 2 === 0 ? "5%" : "90%",
                animationDelay: `${stat.delay}ms`,
                transform: index % 2 === 0 ? "translateX(0)" : "translateX(-100%)",
              }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{stat.value}</div>
                    <div className="text-xs opacity-80">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl space-y-6 px-4 sm:px-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium shadow-lg animate-fade-in">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span className="text-sm sm:text-base">Africa's Premier Investment Platform</span>
        </div>

        {/* Headline */}
        <h1 className="text-white font-black leading-tight tracking-tight animate-slide-up">
          <span className="block text-4xl sm:text-6xl">Your Financial</span>
          <span className="block text-4xl sm:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
            Future
          </span>
          <span className="block text-3xl sm:text-5xl text-white/90 mt-4">
            Starts Here.
          </span>
        </h1>

        {/* Testimonial */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2 text-white text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="italic">"{testimonialSnippets[currentTestimonial]}"</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/90 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
          Join a vibrant community of{" "}
          <span className="text-cyan-400 font-bold">forward-thinkers</span> shaping Africa's investment landscape.
        </p>

        {/* CTA */}
        <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
          <span className="flex items-center gap-3 relative z-10">
            Start Your Journey
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
        </button>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 pt-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="font-medium">Trusted by 10,000+ investors</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="font-medium">4.9/5 Rating</span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
