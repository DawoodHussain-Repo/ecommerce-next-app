"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    desc: "Description 1",
    img: "https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://www.google.com",
    bg: "bg-orange-200",
  },
  {
    id: 2,
    title: "Slide 2",
    desc: "Description 2",
    img: "https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://www.google.com",
    bg: "bg-orange-200",
  },
  {
    id: 3,
    title: "Slide 3",
    desc: "Description 3",
    img: "https://images.pexels.com/photos/6864554/pexels-photo-6864554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://www.google.com",
    bg: "bg-orange-200",
  },
];

const Slider = () => {
  const [current, setCurrent] = React.useState(0);

  const handleSlideChange = (index) => {
    setCurrent(index);
  };

useEffect(() => {
    const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000)
    return () => clearInterval(interval)
});

  return (
    <div className="h-[calc(100vh-80px)]  overflow-hidden relative">
      {/* Slides */}
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-screen h-full flex flex-col xl:flex-row ${slide.bg} gap-16`}
          >
            {/* Left Content */}
            <div className="h-full xl:w-1/2 flex flex-col justify-center items-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl font-bold mb-4">{slide.desc}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                  SHOP NOW
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="h-full xl:w-1/2 relative">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Rings (Indicators) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 flex items-center justify-center cursor-pointer ${
              current === index ? "scale-125 ring-2 ring-gray-700" : "ring-1 ring-gray-500"
            } rounded-full transition-transform duration-300`}
            onClick={() => handleSlideChange(index)}
          >
            <div
              className={`w-2 h-2 ${
                current === index ? "bg-gray-700" : "bg-gray-500"
              } rounded-full`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
