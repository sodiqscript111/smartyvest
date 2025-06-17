"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FullPageFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="min-h-screen bg-white flex flex-col justify-center items-center px-10 md:px-40 py-24 text-gray-800">
      {/* Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-24">
        {/* Branding & Description */}
        <div className="flex flex-col max-w-md space-y-8">
          <h2 className="text-4xl font-extrabold text-[#4faee4] tracking-tight">
            InvestSmart
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Empowering you to build wealth with confidence through innovative and tailored investment solutions crafted just for you.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-10 text-[#4faee4]">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-[#3b9fcf] transition-colors"
                aria-label="Social media link"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="grid grid-cols-1 sm:grid-cols-3 gap-20 md:gap-28 text-gray-600">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Company</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="/about" className="hover:text-[#4faee4] transition">About Us</a></li>
              <li><a href="/careers" className="hover:text-[#4faee4] transition">Careers</a></li>
              <li><a href="/contact-us" className="hover:text-[#4faee4] transition">Contact</a></li>
              <li><a href="/blog" className="hover:text-[#4faee4] transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Solutions</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="/products-services" className="hover:text-[#4faee4] transition">Products & Services</a></li>
              <li><a href="/wealth-management" className="hover:text-[#4faee4] transition">Wealth Management</a></li>
              <li><a href="/private-banking" className="hover:text-[#4faee4] transition">Private Banking</a></li>
              <li><a href="/trustee-registrar" className="hover:text-[#4faee4] transition">Trustee & Registrar Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Support</h3>
            <ul className="space-y-4 text-lg">
              <li><a href="/help-center" className="hover:text-[#4faee4] transition">Help Center</a></li>
              <li><a href="/faq" className="hover:text-[#4faee4] transition">FAQ</a></li>
              <li><a href="/terms" className="hover:text-[#4faee4] transition">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-[#4faee4] transition">Privacy Policy</a></li>
            </ul>
          </div>
        </nav>

        {/* Newsletter Signup */}
        <div className="max-w-md flex flex-col space-y-8">
          <h3 className="text-xl font-semibold text-gray-800">Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-6">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow text-lg py-4"
            />
            <Button
              type="submit"
              className="bg-[#4faee4] hover:bg-[#3b9fcf] text-white text-lg py-4"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-gray-500 text-base leading-relaxed max-w-sm">
            Get the latest insights, investment tips, and company updates delivered straight to your inbox.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-28 text-gray-400 text-base tracking-wide">
        &copy; {new Date().getFullYear()} InvestSmart. All rights reserved.
      </div>
    </footer>
  );
}
