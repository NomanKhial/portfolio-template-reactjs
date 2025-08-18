import React from "react";
import pic from "../assets/woman-8852668_1920.jpg";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import Blogs from "./Blogs";
function Testimonials() {
  return (
    <section id="testamonals" className="min-h-screen bg-slate-300/50">
      <section className="md:max-w-[70%] max-w-[90%] m-auto py-20 flex flex-col gap-40 relative">
        <h2 className=" text-6xl  -left-10 font-bold text-black/5 absolute -z-10">
          Testimonials
        </h2>
        <article className="flex flex-col gap-8">
          <header className="text-center">
            <span className=" text-slate-600 text-xl font-bold">
              - Client Testimonials
            </span>
            <h2 className="leading-12 text-slate-600 text-4xl md:text-6xl font-bold">
              Testimonials that{" "}
              <span className=" text-primary">
                speaks to <br /> My results
              </span>
            </h2>
          </header>

          <section className="p-5 md:p-10 bg-black/5 w-full rounded-lg min-h-[400px] flex items-center flex-wrap justify-center gap-10 relative">
            <HiArrowLeftCircle
              size={30}
              color="black"
              className=" absolute hidden md:-left-6"
            />
            <HiArrowRightCircle
              size={40}
              color="#5840ba"
              className=" absolute md:-right-6 bottom-6 right-4 cursor-pointer hover:text-primary transition-all duration-300"
            />

            <div className="relative md:w-[300px] md:h-[300px]  ">
              <img
                src={pic}
                alt="testimonals pic"
                className="rounded-full w-full h-full"
              />
              <div className="absolute top-0 grid place-content-center bg-secondary w-16 h-16 rounded-full">
                <FaQuoteLeft size={32} />
              </div>
            </div>
            <article className="flex-1 flex flex-col gap-6">
              <div className=" font-bold text-xl flex gap-1 items-center">
                {[0, 0, 0, 0, 0].map((_, index) => (
                  <FaStar size={30} color="#ffc30b" key={index} />
                ))}
                5.0
              </div>

              <p className="text-[16px] text-slate-600 max-w-[800px]">
                When you've liked the song for years but understood it when you
                went through the same pain. The same sad story. When u always
                blame yourself for his faults. When have to beg for his
                attention. When u want to move on but can't coz he keeps coming
                back. When u hate yourself for being so weak and addicted. When
                u really want to move on but don't know how.
              </p>

              <div className="flex flex-col gap-2">
                <span className="font-bold">Sami Ullah</span>
                <span>Founder of BlueSeoTools</span>
              </div>
            </article>
          </section>
        </article>
        <Blogs />
      </section>
    </section>
  );
}

export default Testimonials;
