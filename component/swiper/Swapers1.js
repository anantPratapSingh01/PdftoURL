"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const testimonials = [
  {
    name: "Sunil Bral",
    city: "Noida, Uttar Pradesh",
    text: "I love the holistic approach they take towards yoga. It's not just about poses; it's about overall well-being."
  },
  {
    name: "Luv ",
    city: "Delhi, India",
    text: "Amazing experience! The PDF converter is fast and easy to use."
  },
  {
    name: "Rahul Sharma",
    city: "Mumbai, India",
    text: "Very clean UI and smooth animations. Loved it."
  },
];

export default function Swapers1() {
  return (
    <div className="testimonial-section">
      <h1 className="heading">STUDENT VIEW</h1>

      <div className="circle-bg"></div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <h2>"{item.text}"</h2>

              <div className="user">
                <div className="avatar">👤</div>

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.city}</p>
                </div>
              </div>

              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}