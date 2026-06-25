import Image from "next/image";
import image from "@/public/about.jpg";
import Header from "@/component/Header";

export default function About() {
  return (
    <>
      <Header />

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
        <div className=" relative max-w-6xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              PDF to URL Converter
            </h1>

            <p className="text-gray-200 text-lg leading-8 mb-5">
              PDF to URL Converter helps users share documents quickly and
              securely. Convert and access your files anytime with ease.
            </p>

            <p className="text-gray-300 text-lg leading-8">
              Built for students, professionals, and businesses, our platform
              focuses on simplicity, speed, and reliability.
            </p>

            <div className="flex gap-10 mt-10">
              <div className="text-center bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-cyan-300">10K+</h2>
                <p className="text-white mt-1">Users</p>
              </div>

              <div className="text-center bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-cyan-300">50K+</h2>
                <p className="text-white mt-1">Files Shared</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <Image
              src={image}
              alt="About"
              width={450}
              height={450}
              className="rounded-3xl shadow-2xl border border-white/20 hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}