"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Creating account... ⏳");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      toast.dismiss(loadingToast);

      if (res.ok) {
        toast.success("Account created successfully ✅");

        setFormData({
          name: "",
          email: "",
          password: "",
        });

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        toast.error(data.message || "Registration failed ❌");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong 🚫");
      console.error(error);
    }
  };

  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      style={{
        background:
          "radial-gradient(circle at top left, #18001f 0%, #40135e 35%, #5a2391 65%, #2e3db5 100%)",
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      {/* Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl w-[420px] transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Create Your Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:scale-105 transition duration-300"
          >
            Register 🚀
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-200">
          Already have an account?{" "}
          <span
            className="text-cyan-300 hover:underline cursor-pointer font-medium"
            onClick={goToLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;