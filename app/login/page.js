"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Logging in... ⏳");

    try {
      console.log(formData);

      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      toast.dismiss(loadingToast);

      if (res.ok) {
        toast.success("Login successful! ✅");

        localStorage.removeItem("urltoken");
        localStorage.removeItem("user");

        localStorage.setItem("urltoken", data.token);
        localStorage.setItem("user",JSON.stringify(data.user));
        console.log( localStorage.setItem("urltoken", data.token))

        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        toast.error(data.message || "Login failed ❌");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong 🚫");
      console.error(error);
    }
  };

  const handleSign = () => {
    window.location.href = "/registration";
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
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl w-[340px] transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Login 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />


          <input
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />

          <div className="flex items-center justify-between text-sm text-white">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <span className="text-cyan-300 cursor-pointer hover:underline">
              Forgot?
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:scale-105 transition duration-300"
          >
            Login 🚀
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-200">
          Don’t have an account?{" "}
          <span
            className="text-cyan-300 hover:underline cursor-pointer font-medium"
            onClick={handleSign}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;