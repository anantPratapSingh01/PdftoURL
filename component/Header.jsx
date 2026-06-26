"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { toast } from "react-hot-toast";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(()=>{
      const storedUser = localStorage.getItem("user");
      const storeToken = localStorage.getItem("urltoken");
      if(storedUser){
        setUser(JSON.parse(storedUser));
        setToken(storeToken);
      }

  },[]);

  const handleLogout = () => {
    localStorage.removeItem("urltoken");
    localStorage.removeItem("user");
    setUser(null);

    // toast.success("Logged out!");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          :"bg-transparent"
          // : "bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-white text-2xl font-bold">
            Pdf App
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>

          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>

          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Link
            href="/upload"
            className="bg-white text-purple-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100"
          >
            Upload
          </Link> */}

          {!user ? (
            <>
              {/* <Link
                href="/auth/login"
                className="text-white hover:text-gray-200"
              >
                Login
              </Link> */}

              <Link
                href="/registration"
                className="bg-purple-700 px-5 py-2 rounded-full text-white hover:bg-purple-800"
              >
                Join
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-400"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-5 space-y-4">
          <Link
            href="/"
            className="block text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="block text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="block text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* <Link
            href="/upload"
            className="block bg-white text-purple-600 text-center py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Upload
          </Link> */}

          {!user ? (
            <>
              {/* <Link
                href="/login"
                className="block text-white"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link> */}

              <Link
                href="/registration"
                className="block bg-purple-700 text-center py-2 rounded-full text-white"
                onClick={() => setMenuOpen(false)}
              >
                Join
              </Link>
            </>
          ) : (
            <button
              className="text-red-400"
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}