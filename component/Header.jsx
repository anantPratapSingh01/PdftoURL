"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [isOpenside, setIsOpenside] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storeToken = localStorage.getItem("urltoken");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setToken(storeToken);
      
      if (userData.role === "admin") {
        setIsAdmin(true);
      } else if (userData.role === "user") {
        setIsAdmin(false);
      }
    }
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenside(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("urltoken");
    localStorage.removeItem("user");
    setUser(null);
    setIsOpenside(false);
    toast.success("Logged out!");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  // Get user initials
  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-white text-2xl font-bold">Pdf App</h1>
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
          {!user ? (
            <Link
              href="/registration"
              className="bg-purple-700 px-5 py-2 rounded-full text-white hover:bg-purple-800 transition-colors"
            >
              Join
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOpenside(!isOpenside)}
                className="flex items-center gap-3 bg-gray-800/80 hover:bg-gray-700/80 rounded-full px-4 py-2 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  {getInitials(user.name)}
                </div>
                <span className="text-white text-sm font-medium">Hi,</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isOpenside ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpenside && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden">
                  {/* Menu Items */}
                  <div className="py-2">
                    <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">
                      ACCOUNT
                    </p>

                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
                      onClick={() => setIsOpenside(false)}
                    >
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="text-white">Profile</span>
                    </Link>

                   

                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800/50 transition-colors"
                        onClick={() => setIsOpenside(false)}
                      >
                        <svg
                          className="w-5 h-5 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-white">Admin</span>
                      </Link>
                    )}
                  </div>

                  {/* Logout */}
                  <div className="border-t border-gray-800 py-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-800/50 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
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

          {!user ? (
            <Link
              href="/registration"
              className="block bg-purple-700 text-center py-2 rounded-full text-white"
              onClick={() => setMenuOpen(false)}
            >
              Join
            </Link>
          ) : (
            <>
              <Link
                href="/profile"
                className="block text-white"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
             
              {isAdmin && (
                <Link
                  href="/admin"
                  className="block text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </Link>
              )}
              <button
                className="text-red-400"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}