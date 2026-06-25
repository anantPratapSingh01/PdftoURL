"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { UploadCloud, Copy, CheckCircle } from "lucide-react";
import { toast } from "react-hot-toast";



import { motion } from "framer-motion";


function Converter() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [pdFUrl, setPdFUrl] = useState("");
    const [copied, setCopied] = useState(false);
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    useEffect(() => {

        const storeUser = localStorage.getItem("user");
        const StoreToken = localStorage.getItem("urltoken")
        if (storeUser) {
            setUser(JSON.parse(storeUser))
            setToken(StoreToken)
        }
    }, [])

    const handleUploade = async (e) => {
        e.preventDefault();
        setUploading(true)
        console.log("file ha ", file)
        if (!file) {
            toast.error("Please select a PDF file");
            setUploading(false)
            return;
        }
        try {

            const formData = new FormData();
            formData.append("email", user.email);
            formData.append("pdf", file);

            const res = await fetch("api/upload", {

                method: "POST",
                body: formData

            })

            if (res.ok) {
                const data = await res.json()
                console.log("data ha ", data)
                toast.success("Upload successful! ✅");
                setPdFUrl(data.pdfUrl)
                console.log("pdf url ha ", data.pdfUrl)
                setFile(null)

            }

        }
        catch (error) {
            toast.error("Upload failed. Please try again later.");
        }
        setUploading(false)

    }

    return (


        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-6">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-lg bg-white rounded-[35px] shadow-2xl border border-gray-200 p-8 mt-6"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-center text-gray-800 mb-2"
                >
                    PDF Converter
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-gray-500 mb-8"
                >
                    Upload your PDF and get a shareable URL instantly.
                </motion.p>

                {/* Upload Box */}
                <div className="relative">
                    <motion.label
                        className={`flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-gray-300 rounded-3xl transition
      ${!token ? "blur-sm pointer-events-none opacity-60" : "cursor-pointer hover:border-indigo-500 hover:bg-indigo-50"}
    `}
                    >
                        <UploadCloud size={50} className="text-indigo-600 mb-3" />

                        <p className="text-gray-700 font-semibold">
                            {file ? file.name : "Choose PDF File"}
                        </p>

                        <span className="text-gray-500 text-sm mt-2">
                            Click or Drag & Drop your PDF here
                        </span>

                        <input
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </motion.label>

                    {!token && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="bg-white px-4 py-2 rounded-lg text-red-500 font-semibold">
                                Please login to upload a PDF
                            </p>
                        </div>
                    )}
                </div>

                
                <motion.button
                    whileHover={{
                        scale: 1.03,
                        boxShadow: "0px 10px 25px rgba(79,70,229,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    disabled={uploading}
                    onClick={handleUploade}
                    className="w-full mt-6 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition duration-300 disabled:opacity-50"
                >
                    {uploading ? (
                        <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                            }}
                        >
                            Uploading...
                        </motion.span>
                    ) : (
                        "Upload PDF"
                    )}
                </motion.button>

               
                {pdFUrl && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-4"
                    >
                        <div className="flex items-center justify-between gap-3">
                            <p
                                className="text-gray-700 break-all cursor-pointer flex-1"
                                onClick={() => {
                                    navigator.clipboard.writeText(pdFUrl);
                                    setCopied(true);
                                    setTimeout(() => setCopied(false), 1500);
                                }}
                            >
                                {pdFUrl}
                            </p>

                            {copied ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                >
                                    <CheckCircle
                                        className="text-green-500"
                                        size={22}
                                    />
                                </motion.div>
                            ) : (
                                <Copy className="text-gray-500" size={22} />
                            )}
                        </div>

                        {copied && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-500 text-sm mt-2"
                            >
                                URL copied successfully!
                            </motion.p>
                        )}
                    </motion.div>
                )}

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-gray-400 text-sm mt-8"
                >
                    Powered by{" "}
                    <span className="text-indigo-600 font-semibold">
                        Anant
                    </span>
                </motion.p>
            </motion.div>
        </div>
    );
}

export default Converter;