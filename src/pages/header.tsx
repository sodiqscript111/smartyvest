"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu as MenuIcon, X as CloseIcon, TrendingUp, Shield, Sparkles } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const dynamicPoints = [
  "earn effortlessly.",
  "invest with purpose.",
  "grow without limits.",
  "own your journey.",
  "retire on your terms."
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPoint, setCurrentPoint] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoint((prev) => (prev + 1) % dynamicPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-900 overflow-hidden font-poppins">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-cyan-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-50/60 to-indigo-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-50/30 to-blue-50/30 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 container mx-auto flex justify-between items-center p-4 border-b border-gray-200/60 backdrop-blur-sm">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <img src="https://i.ibb.co/PvqWGDSX/Smartyvest1.png" alt="Smartyvest Logo" className="w-12 h-12 object-contain" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#4faee4] to-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#4faee4] to-cyan-600 bg-clip-text text-transparent select-none">
            Smartyvest
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {["About", "Product & Services", "Insights", "Contact Us"].map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/register"
                      className="px-3 py-2 text-base text-gray-700 hover:text-[#4faee4] hover:bg-white/60 rounded-lg transition-all duration-200 backdrop-blur-sm"
                    >
                      {item}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/register">
            <Button className="bg-gradient-to-r from-[#4faee4] to-cyan-500 hover:from-[#3da4d4] hover:to-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-xl transition-transform hover:scale-105">
              Join Us
            </Button>
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <Link to="/register">
            <Button className="bg-gradient-to-r from-[#4faee4] to-cyan-500 text-white px-4 py-2 rounded-md">
              Join Us
            </Button>
          </Link>
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6 text-gray-700" /> : <MenuIcon className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-md">
          <ul className="flex flex-col space-y-1 px-6 py-4">
            {["About", "Product & Services", "Insights", "Contact Us"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-lg text-gray-700 hover:text-[#4faee4] hover:bg-white/60 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20 px-6">
        <div className="max-w-2xl space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#4faee4]/20 rounded-full text-sm font-medium text-[#4faee4] shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Smart Investing</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1] tracking-tight text-gray-900">
            <span className="block">Build your</span>
            <span className="block bg-gradient-to-r from-[#4faee4] via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              future
            </span>
            <span className="block text-4xl font-bold text-gray-700 mt-2">
              with smart money moves
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            You deserve to{" "}
            <span className="italic font-extrabold bg-gradient-to-r from-[#4faee4] to-cyan-600 bg-clip-text text-transparent transition-opacity duration-500">
              {dynamicPoints[currentPoint]}
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            We're building the future of finance — designed for{" "}
            <span className="text-[#4faee4] font-semibold">Gen Z & Millennials</span>. Automate your savings, co-invest in projects, and join a
            community that's rewriting the rules.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200/60">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>Smart Growth</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200/60">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Secure Platform</span>
            </div>
          </div>

          <Link to="/register">
            <Button className="mt-4 bg-gradient-to-r from-[#4faee4] to-cyan-500 hover:from-[#3da4d4] hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Illustration */}
        <div className="w-full lg:w-1/2 max-w-lg mx-auto relative">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4faee4]/30 to-cyan-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>

            <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl">
              <img
                src="https://i.ibb.co/BFcLmKw/globe-large-1x.webp"
                alt="Hero Illustration"
                className="rounded-xl w-full object-cover shadow-lg"
              />

              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                💰
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
