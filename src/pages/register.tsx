"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 sm:px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl border border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Create an Account
        </h2>

        <form className="space-y-5 text-sm sm:text-base text-white">
          {/* First Name */}
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              required
              placeholder="Enter first name"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60"
            />
          </div>

          {/* Surname */}
          <div>
            <label className="block mb-1 font-medium">Surname</label>
            <input
              type="text"
              required
              placeholder="Enter surname"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="Enter email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60"
            />
            <button
              type="button"
              className="absolute top-10 right-3 text-white/70 hover:text-white transition"
              onClick={togglePassword}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              required
              placeholder="e.g. 0803xxxxxxx"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-white/60"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 rounded-lg shadow-lg transition hover:shadow-xl"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-white/70 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
}
