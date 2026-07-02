"use client";

import { useState } from "react";

import Header from "@/component/Header.jsx";
import Swipers from "@/component/slider/Swipers.jsx";
import Converter from "@/component/Converter";
import Swapers1 from "@/component/swiper/Swapers1";
import Footer from "@/component/Footer.jsx";



export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [pdFUrl, setPdFUrl] = useState("");
  const [copied, setCopied] = useState(false);

  

  return (
   
    <>
    <Header/>
    
    <Swipers/>
    <Converter/>
    <Swapers1/>
    <Footer/>
   
      
    </>
  );
}
