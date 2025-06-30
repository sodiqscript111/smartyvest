import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Eye, EyeOff, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

interface Message {
  type: "success" | "error" | "";
  text: string;
}

export default function Login() {
  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<Message>({ type: "", text: "" });

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (message.text) setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch(
        "https://smartyvest-fzdscdgegme8h5hk.canadacentral-01.azurewebsites.net/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Login successful! Redirecting..." });
        setForm({ email: "", password: "" });

        if (data.token) {
          localStorage.setItem("authToken", data.token);
          // Navigate to dashboard after successful login
          navigate("/dashboard");
        }
      } else {
        setMessage({
          type: "error",
          text: data.message || "Login failed. Please check your credentials.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 sm:px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl border border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Log In
        </h2>

        {/* Message Display */}
        {message.text && (
          <div
            className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
              message.type === "success"
                ? "bg-green-500/20 border border-green-500/30 text-green-100"
                : "bg-red-500/20 border border-red-500/30 text-red-100"
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400" />
            )}
            <span className="text-sm">{message.text}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-sm sm:text-base text-white"
        >
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder-white/50"
            />
          </div>

          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-white placeholder-white/50"
            />
            <button
              type="button"
              className="absolute top-10 right-3 text-white/70 hover:text-white disabled:opacity-50"
              onClick={togglePassword}
              disabled={isLoading}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Logging in...
              </>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-white/70 text-sm">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-cyan-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </section>
  );
}
