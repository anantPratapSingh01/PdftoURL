  "use client";

  import { Swiper, SwiperSlide } from "swiper/react";
  import { Autoplay, Pagination, Navigation } from "swiper/modules";
  import Image from "next/image";

  import Image1 from "@/public/homeImage/Image1.png";
  import Image2 from "@/public/homeImage/Image2.png";
  import Image3 from "@/public/homeImage/Image3.png";

  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "./styles.css";

  const slides = [
    {
      image: Image1,
      title: "Welcome To PDF Converter",
      desc: "Discover amazing yoga courses and transform your life.",
    },
    {
      image: Image2,
      title: "Safe & secure",
      desc: "Find inner peace with guided meditation sessions.",
    },
    {
      image: Image3,
      title: "Provide Cloud Storage",
      desc: "Build healthy habits and stay fit every day.",
    },
  ];

  export default function Swipers() {
    return (
      <div className="slider-wrapper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-card">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="slide-image"
                />

                <div className="overlay" />

                <div className="slide-content">
                  <h4>WELCOME TO</h4>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>

                  <button className="explore-btn">
                    Explore Now →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }