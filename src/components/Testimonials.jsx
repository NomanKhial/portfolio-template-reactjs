import React, { useState } from "react";
import pic from "../assets/woman-8852668_1920.jpg";
import { FaQuoteLeft, FaStar } from "react-icons/fa"; // ✅ correct package
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import Blogs from "./Blogs";

const testimonials = [
  {
    id: 1,
    name: "Sami Ullah",
    role: "Founder of BlueSeoTools",
    feedback:
      "When you've liked the song for years but understood it when you went through the same pain. The same sad story...",
    rating: 5,
    img: pic,
  },
  {
    id: 2,
    name: "Nouman",
    role: "Full Stack Developer",
    feedback:
      "I blend creativity with logic to build apps, websites, and digital experiences...",
    rating: 5,
    img: pic,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="min-h-screen bg-slate-300/50">
      <section className="md:max-w-[70%] max-w-[90%] m-auto py-20 flex flex-col gap-40 relative">
        <h2 className="text-6xl -left-10 font-bold text-black/5 absolute -z-10">
          Testimonials
        </h2>

        <article className="flex flex-col gap-8">
          {/* Heading */}
          <header className="text-center">
            <span className="text-slate-600 text-xl font-bold">
              - Client Testimonials
            </span>
            <h2 className="leading-12 text-slate-600 text-4xl md:text-6xl font-bold">
              Testimonials that{" "}
              <span className="text-primary">
                speaks to <br /> My results
              </span>
            </h2>
          </header>

          {/* Slider Section */}
          <section className="relative w-full overflow-hidden">
            {/* Arrows */}
            <HiArrowLeftCircle
              size={40}
              onClick={prevSlide}
              className="absolute left-2 md:left-4 z-50 bottom-0 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-primary transition"
            />
            <HiArrowRightCircle
              size={40}
              onClick={nextSlide}
              className="absolute right-2 md:right-4 z-50 bottom-0 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-primary transition"
            />

            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
                width: `${100 * testimonials.length}%`,
              }}
            >
              {testimonials.map((t) => (
                <section
                  key={t.id}
  className="w-full flex-shrink-0 flex flex-col md:flex-row md:items-center gap-10 bg-black/5 rounded-lg p-6 min-h-[400px]"
                >
                  {/* Image */}
                  <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                    <img
                      src={t.img}
                      alt="testimonial"
                      className="rounded-full w-full h-full object-cover"
                    />
                    <div className="absolute top-0 grid place-content-center bg-secondary w-16 h-16 rounded-full">
                      <FaQuoteLeft size={32} />
                    </div>
                  </div>

                 {/* Text */}
<article className="flex-1 flex flex-col gap-6 text-left">
  <div className="font-bold text-xl flex gap-1 items-center">
    {Array.from({ length: t.rating }).map((_, i) => (
      <FaStar key={i} size={30} color="#ffc30b" />
    ))}
    {t.rating}.0
  </div>
  <p className="text-[16px] max-w-[280px] line-clamp-3 text-slate-600 md:max-w-[800px]">
    {t.feedback}
  </p>
  <div className="flex flex-col gap-2">
    <span className="font-bold">{t.name}</span>
    <span>{t.role}</span>
  </div>
</article>

                </section>
              ))}
            </div>
          </section>
        </article>

        <Blogs />
      </section>
    </section>
  );
}

export default Testimonials;
