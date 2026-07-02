"use client";
import React from "react";
import Header from "@/component/Header";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: ""
  })
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          msg: ""
        })
        setLoading(false);
      } else {
        const data = await res.json();
        toast.error(data.message || "Failed to send message. Please try again later.");
        setLoading(false);
      }
    }
    catch (err) {
      setLoading(false);
      console.error(err);
      toast.error("Failed to send message. Please try again later.");
    }
  }

  return (
    <>
      <Header />

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-indigo-900 px-6 py-16 mt-2">

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse mt-2.5"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative max-w-6xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

            <div className="grid md:grid-cols-2">

            {/* Left Side */}
            <div className="p-10 flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-white mb-5">
                Get In Touch ✨
              </h1>

              <p className="text-gray-300 text-lg leading-8 mb-10">
                We&d love to hear from you. Whether you have a question,
                feedback, or need support, feel free to contact us anytime.
              </p>

              <div className="space-y-6">

                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                  <h3 className="text-yellow-300 text-xl font-semibold">
                    📧 Email
                  </h3>
                  <p className="text-white mt-2">
                    support@pdftourl.com
                  </p>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                  <h3 className="text-yellow-300 text-xl font-semibold">
                    📞 Phone
                  </h3>
                  <p className="text-white mt-2">
                    +91 98765 43210
                  </p>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                  <h3 className="text-yellow-300 text-xl font-semibold">
                    📍 Location
                  </h3>
                  <p className="text-white mt-2">
                    New Delhi, India
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="bg-white/5 p-10">
              <h2 className="text-3xl font-bold text-white mb-8">
                Send a Message 🚀
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                />

                {/* <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                  /> */}
                <select className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-gray-400   placeholder-gray-400 outline-none focus:border-cyan-400"
                  value={formData.subject}
                  required
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>

                <textarea
                  rows="5"
                  value={formData.msg}
                  required
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none resize-none focus:border-cyan-400"
                ></textarea>

                {loading ? (<p className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition duration-300 text-center"
                >Sending message...</p>) :
                  (<button
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
                    type="submit"
                  >
                    Send Message ✈️
                  </button>)}


              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 