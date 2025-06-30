import { useEffect, useState } from "react";
import { parseJwt } from "../utils/jwt";

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 sm:px-6">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome, {firstName}!
        </h1>
        <p className="text-white/80 text-lg">
          This is your dashboard. Explore your SmartyVest journey here.
        </p>
      </div>
    </section>
  );
}
