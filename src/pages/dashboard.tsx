import { useEffect, useState } from "react";
import { parseJwt } from "../utils/jwt";
import PropertySection from "../components/PropertySection";

export default function Dashboard() {
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const payload = parseJwt(token);
      if (payload && payload.first_name) {
        setFirstName(payload.first_name);
      } else {
        setFirstName("User");
      }
    } else {
      setFirstName("User");
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Greeting */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome, {firstName}!
          </h1>
          <p className="text-white/80 text-lg">
            Here's your SmartyVest dashboard overview.
          </p>
        </div>

        {/* Wallet Section */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md">
          <h2 className="text-xl font-semibold text-white mb-3">Your Wallet</h2>
          <p className="text-3xl font-bold text-green-400">₦0.00</p>
          <p className="text-white/60 text-sm mt-1">
            This will reflect your available balance for transactions.
          </p>
        </div>

        {/* Property Investments */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md">
          <h2 className="text-xl font-semibold text-white mb-4">
            Property Investments
          </h2>
          <PropertySection />
        </div>

        {/* Savings - Coming Soon */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md text-white">
          <h2 className="text-xl font-semibold mb-2">Savings</h2>
          <p className="text-white/70 text-base">Coming Soon...</p>
          <p className="text-sm text-white/50 mt-1">
            Stay tuned — we’re building powerful savings tools for you.
          </p>
        </div>
      </div>
    </section>
  );
}
