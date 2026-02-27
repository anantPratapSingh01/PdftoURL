"use client";

import { useState } from "react";
import { Client, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const storage = new Storage(client);


export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [pdFUrl, setPdFUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    try {
      setUploading(true);


      const uploadedFile = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET,
        ID.unique(),
        file
      );


      const pdfUrl =
        client.config.endpoint +
        "/storage/buckets/" +
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET +
        "/files/" +
        uploadedFile.$id +
        "/view?project=" +
        client.config.project;


      
      setPdFUrl(pdfUrl);
      


      setFile(null);
    } catch (error) {
      console.error(error);
      alert("❌ Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white/20 backdrop-blur-lg shadow-2xl border border-white/30 p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Upload PDF
        </h1>

        <p className="text-white/80 text-center mb-6">
          Upload a PDF to URL
        </p>

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-700
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:bg-white file:text-indigo-600
            hover:file:bg-indigo-100 cursor-pointer mb-4"
        />

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload PDF"}
        </button>
        {pdFUrl && (
          <div className="mt-4 p-4 bg-white/30 rounded-lg">
            <p
              className="text-white break-all cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(pdFUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            > 
              {pdFUrl}
            </p>

            {copied && (
              <span className="text-green-300 text-sm">Copied!</span>
            )}
          </div>
        )}


        <p className="text-xs text-white/60 text-center mt-4">
          Powered by Anant
        </p>
      </div>
    </div>
  );
}
