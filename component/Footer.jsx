"use client"
import React from 'react'

function Footer() {
  const hendleSlide = () => {
    const element = document.getElementById("converter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


 
  const XIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )

  const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )

  const YouTubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )

  const LightningIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  )

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Section - Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              PDFtoURL
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Empowering students with free, high-quality academic resources — one PDF url at a time.
            </p>
            <div className="flex items-center gap-2 pt-2 border-l-2 border-gray-600 pl-4">
              <LightningIcon />
              <span className="font-semibold"> Anant Pratap Singh</span>
              <span className="text-gray-500">- the Working MAN</span>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a onClick={hendleSlide} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Converter
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Connect & Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            <div className="flex gap-3">
              {/* X/Twitter */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <XIcon />
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              
              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Join <span className="font-bold text-white">10,000+</span> students learning smarter every day.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section - Copyright */}
        <div className="text-center space-y-2">
          <p className="text-gray-400">
            © 2026 <span className="font-semibold text-white">PDFtoURL</span>. 
            Crafted with <span className="text-red-500">❤️</span> by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent font-semibold">
               Anant Pratap Singh
            </span>. 
            All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made in India • For Students, By a Student
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer