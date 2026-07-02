"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Admin() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();

  const [isDashboard, setIsDashboard] = useState(true);
  const [isAddAdmin, setIsAddAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Creating Admin...");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.dismiss(loadingToast);
        toast.success("Admin added successfully ✅");

        setFormData({
          name: "",
          email: "",
          password: "",
          role: "admin",
        });
      } else {
        toast.dismiss(loadingToast);
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/register");

        if (res.ok) {
          const data = await res.json();
          setAllUsers(data.AllUser);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchUsers();
  }, [isUser]);

  if (loading) {
    return (
      <div
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at top left, #18001f 0%, #40135e 35%, #5a2391 65%, #2e3db5 100%)",
        }}
      >
        <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>

        <p className="text-white mt-5 text-lg">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">
          PDF<span className="text-blue-500">ToUrl</span>
        </h1>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-slate-900 text-white p-6 z-40 transition-all duration-300
        ${openMenu ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <h1 className="text-3xl font-bold mt-10 md:mt-0">
          PDF<span className="text-blue-500">ToUrl</span>
        </h1>

        <div className="mt-12 space-y-3">
          <button
            className={`w-full text-left px-5 py-4 rounded-xl ${
              isDashboard ? "bg-blue-600" : "hover:bg-slate-800"
            }`}
            onClick={() => {
              setIsDashboard(true);
              setIsAddAdmin(false);
              setIsUser(false);
              setOpenMenu(false);
            }}
          >
            Dashboard
          </button>

          <button
            className={`w-full text-left px-5 py-4 rounded-xl ${
              isAddAdmin ? "bg-blue-600" : "hover:bg-slate-800"
            }`}
            onClick={() => {
              setIsDashboard(false);
              setIsAddAdmin(true);
              setIsUser(false);
              setOpenMenu(false);
            }}
          >
            Add Admin
          </button>

          <button
            className={`w-full text-left px-5 py-4 rounded-xl ${
              isUser ? "bg-blue-600" : "hover:bg-slate-800"
            }`}
            onClick={() => {
              setIsDashboard(false);
              setIsAddAdmin(false);
              setIsUser(true);
              setOpenMenu(false);
            }}
          >
            Users
          </button>

          <button
            className="w-full text-left px-5 py-4 rounded-xl hover:bg-slate-800"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>

        <p className="absolute bottom-5 text-gray-400 text-sm">
          PDFToUrl © 2026
        </p>
      </aside>

      {/* Overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpenMenu(false)}
        />
      )}

      {/* Main */}
      <main className="flex-1 md:ml-72 mt-16 md:mt-0">
        {/* Header */}
        <header className="bg-white border-b flex flex-col md:flex-row items-start md:items-center justify-between px-5 md:px-10 py-5 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            ADMIN DASHBOARD
          </h1>

          <div className="bg-slate-100 px-5 py-3 rounded-2xl shadow text-gray-500">
            Admin
          </div>
        </header>

        <div className="p-5 md:p-10">
          {/* Dashboard */}
          {isDashboard && (
            <>
              <div className="mb-10">
                <p className="text-blue-600 font-semibold">
                  OVERVIEW
                </p>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-3">
                  Welcome Back 👋
                </h1>

                <p className="text-slate-500 mt-3">
                  Here&s what&s happening on PDFToUrl today.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-white rounded-3xl p-8 shadow">
                  <h2 className="text-5xl font-bold text-slate-800">
                    90
                  </h2>
                  <p className="text-slate-500 mt-3">
                    Total PDFs
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow">
                  <h2 className="text-5xl font-bold text-slate-800">
                    90
                  </h2>
                  <p className="text-slate-500 mt-3">
                    Generated URLs
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow">
                  <h2 className="text-5xl font-bold text-slate-800">
                    {allUsers.length}
                  </h2>
                  <p className="text-slate-500 mt-3">
                    Total Users
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow">
                  <h2 className="text-5xl font-bold text-slate-800">
                    2.5K
                  </h2>
                  <p className="text-slate-500 mt-3">
                    Total Clicks
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Add Admin */}
          {isAddAdmin && (
            <div className="bg-white rounded-3xl shadow p-6 md:p-8 max-w-xl text-black">
              <h2 className="text-2xl font-bold mb-6">
                Add New Admin
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3 outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 w-full md:w-auto"
                >
                  Create Admin
                </button>
              </form>
            </div>
          )}

          {/* Users */}
          {isUser && (
            <div className="bg-white rounded-3xl shadow p-6 md:p-8 text-black">
              <h2 className="text-2xl font-bold mb-6">
                Users List
              </h2>

              <div className="space-y-4">
                {allUsers.length === 0 ? (
                  <p className="text-gray-500">
                    No users found.
                  </p>
                ) : (
                  allUsers.map((user) => (
                    <div
                      key={user._id}
                      className="border p-4 rounded-xl break-all"
                    >
                      <h3 className="font-semibold text-lg">
                        {user.name}
                      </h3>

                      <p className="text-gray-500">
                        {user.email}
                      </p>

                      <p className="text-sm text-blue-600 mt-2">
                        {user.role}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Admin;