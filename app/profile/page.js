"use client";

import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Profile() {
    const [user, setUser] = useState(null);
    const router=useRouter()    

    useEffect(() => {
        const storeUser = JSON.parse(localStorage.getItem("user"));
        

        const handleFetchUser = async () => {
            try {
                const res = await fetch("/api/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: storeUser.email,
                    })
                })

                const data = await res.json();
                

                if (res.ok) {
                    setUser(data.findOneUser);
                    toast.success("User fetched successfully");
                } else {
                    toast.error(data.msg);
                   setTimeout(()=>{
                    router.replace('/login')
                   },3000)
                }
            } catch (error) {
                console.log(error);
                toast.error("Error fetching user");
            }
        };

        if (storeUser?.email) {
            handleFetchUser();
        }
        
    }, [router]);

    if (!user) {
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
                    Loading Profile...
                </p>
            </div>
        );
    }

    return (
        <>
        <Header/>
        <div
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-10 "
            style={{
                background:
                    "radial-gradient(circle at top left, #18001f 0%, #40135e 35%, #5a2391 65%, #2e3db5 100%)",
            }}
        >
            {/* Blur circles */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Profile Card */}
            <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-white animate-[fadeIn_0.7s_ease] mt-8">
                <div className="flex items-center gap-5 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">{user.name}</h1>
                        <p className="text-gray-300">{user.email}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                        <p className="text-gray-300">Name</p>
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                        <p className="text-gray-300">Role</p>
                        <h2 className="text-xl font-semibold">{user.role}</h2>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-5 border border-white/10 md:col-span-2">
                        <p className="text-gray-300 mb-3">Uploaded Files</p>

                        {user.url?.length > 0 ? (
                            <div className="space-y-3">
                                {user.url.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block p-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 transition duration-300"
                                    >
                                        📄 File {index + 1}
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400">No files uploaded.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       </>
    );
}

export default Profile;