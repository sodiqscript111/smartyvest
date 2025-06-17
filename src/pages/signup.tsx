"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function SignUpForm() {
  const [dob, setDob] = useState<Date | undefined>(undefined);

  return (
    <section className="min-h-screen bg-[#f4fbfd] flex flex-col lg:flex-row">
      {/* Left Content Section with Background Image and Gradient Overlay */}
      <div
        className="relative flex-1 bg-cover bg-center min-h-[320px] lg:min-h-auto"
        style={{
          backgroundImage: `url('https://i.ibb.co/848N3pnz/Gemini-Generated-Image-clzl49clzl49clzl.png')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-md mx-auto px-6 py-16 lg:py-20 text-white flex flex-col space-y-6 h-full flex justify-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Invest in Your Future
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Take the first step toward financial independence. Join a community
            of future-forward investors across Africa.
          </p>
        </motion.div>
      </div>

      {/* Right Form Section */}
      <div className="flex flex-1 justify-center items-center px-6 py-12 lg:py-16">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-xl p-8 sm:p-10 space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Create Your Account</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Let’s get started with a few personal details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="e.g. Sodiq" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="e.g. Tobiloba" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="e.g. sodiq@email.com" />
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  {dob ? format(dob, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dob}
                  onSelect={setDob}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="e.g. +234 812 345 6789" />
          </div>

          <div>
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" placeholder="e.g. Product Manager" />
          </div>

          <div>
            <Label htmlFor="income">Annual Income</Label>
            <Input id="income" type="number" placeholder="e.g. 7,500,000" />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#4faee4] hover:bg-[#3b9fcf] transition-colors"
          >
            Sign Up
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
