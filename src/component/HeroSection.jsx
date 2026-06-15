"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { heroSlides } from "@/data/data";

const slides = [
  {
    image: "/hero/spa1.jpg",
    title: "No 1 spa in chembur ",
    subtitle:
      "Relax, rejuvenate, and restore your mind and body with our premium spa treatments.",
  },
  {
    image: "/hero/spa2.jpg",
    title: "Expert Staff Available ",
    subtitle:
      "Experience world-class massage therapies designed to reduce stress and improve wellness.",
  },
  {
    image: "/hero/spa3.jpg",
    title: "Best Spa services ",
    subtitle:
      "Indulge in exclusive spa rituals and luxury wellness treatments tailored for you.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Images */}
      {heroSlides.map((heroSlides, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={heroSlides.image}
            alt={heroSlides.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl text-white">
            <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              Premium Wellness & Relaxation
            </span>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              {slides[current].title}
            </h1>

            <p className="mb-8 text-lg text-slate-200 md:text-xl">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Book Appointment
              </Link>

              <a
                href="tel:+91 8433608211"
                className="flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-blue-500 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}