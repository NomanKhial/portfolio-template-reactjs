import React from "react";
import { BsArrowRight } from "react-icons/bs";
import articleimage from "../assets/woman-8852668_1920.jpg"
import { RxDotFilled } from "react-icons/rx";
function Blogs() {
  return (
    <section id="blogs" className="flex flex-col gap-20">
      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-2 font-bold">
          <span className=" text-xl text-slate-600">- Blogs</span>
          <h2 className=" text-5xl">
            From My <br /> <span className=" text-primary">Blog Post</span>{" "}
          </h2>
        </div>
        <div className="flex gap-3 items-center justify-between overflow-hidden  bg-black rounded-full w-60 h-14">
          <BsArrowRight
            size={40}
            color="black"
            className=" ml-2 bg-white rounded-full w-10 p-2 h-10"
          />
          <button className="flex-1 bg-secondary h-full text-gray-800 font-bold  rounded-full">
            View All Blogs
          </button>
        </div>
      </section>

      {/* blogs */}
      <section className="flex flex-wrap gap-10 items-center">
        <article className="flex-1 min-w-[360px] flex flex-col gap-4 ">
            <div className="relative w-full h-[260px]  rounded-2xl overflow-hidden">
                <img src={articleimage} className="  w-full h-full object-cover object-left" alt="article pic" loading="lazy"/>
                <div className="grid place-content-center absolute inset-0 hover:bg-transparent duration-200  cursor-pointer bg-black/50">
                    <BsArrowRight color="black" size={10} className=" w-10 h-10 p-2 rounded-full bg-secondary -rotate-45" />
                </div>
            </div>

            <article className="flex flex-col gap-2">
                <span className=" bg-secondary px-3 py-1 font-bold text-slate-600 rounded-full self-start">RaectJs</span>
                <p className=" font-bold text-xl leading-6">ReactJs Developer Noman Khiial share his secret tips. see whats unvailing</p>
                <div className="flex justify-between items-center">
                    <span  className="flex items-center text-slate-600 ">
                    {/* <RxDotFilled size={30} color="#5840ba"/> */}
                     Noman Khial</span>
                    <span className="flex items-center text-slate-600 "><RxDotFilled size={30} color="#5840ba"/>18 Aug 2025</span>
                </div>
            </article>
        </article>


        {/* rest */}

           <article className="flex-1 min-w-[360px] flex flex-col gap-4 ">
            <div className="relative w-full h-[260px]  rounded-2xl overflow-hidden">
                <img src={articleimage} className="  w-full h-full object-cover object-left" alt="article pic" loading="lazy"/>
                <div className="grid place-content-center absolute inset-0 hover:bg-transparent duration-200  cursor-pointer bg-black/50">
                    <BsArrowRight color="black" size={10} className=" w-10 h-10 p-2 rounded-full bg-secondary -rotate-45" />
                </div>
            </div>

            <article className="flex flex-col gap-2">
                <span className=" bg-secondary px-3 py-1 font-bold text-slate-600 rounded-full self-start">RaectJs</span>
                <p className=" font-bold text-xl leading-6">ReactJs Developer Noman Khiial share his secret tips. see whats unvailing</p>
                <div className="flex justify-between items-center">
                    <span  className="flex items-center text-slate-600 ">
                    {/* <RxDotFilled size={30} color="#5840ba"/> */}
                     Noman Khial</span>
                    <span className="flex items-center text-slate-600 "><RxDotFilled size={30} color="#5840ba"/>18 Aug 2025</span>
                </div>
            </article>
        </article>


            <article className="flex-1 min-w-[360px] flex flex-col gap-4 ">
            <div className="relative w-full h-[260px]  rounded-2xl overflow-hidden">
                <img src={articleimage} className="  w-full h-full object-cover object-left" alt="article pic" loading="lazy"/>
                <div className="grid place-content-center absolute inset-0 hover:bg-transparent duration-200  cursor-pointer bg-black/50">
                    <BsArrowRight color="black" size={10} className=" w-10 h-10 p-2 rounded-full bg-secondary -rotate-45" />
                </div>
            </div>

            <article className="flex flex-col gap-2">
                <span className=" bg-secondary px-3 py-1 font-bold text-slate-600 rounded-full self-start">RaectJs</span>
                <p className=" font-bold text-xl leading-6">ReactJs Developer Noman Khiial share his secret tips. see whats unvailing</p>
                <div className="flex justify-between items-center">
                    <span  className="flex items-center text-slate-600 ">
                    {/* <RxDotFilled size={30} color="#5840ba"/> */}
                     Noman Khial</span>
                    <span className="flex items-center text-slate-600 "><RxDotFilled size={30} color="#5840ba"/>18 Aug 2025</span>
                </div>
            </article>
        </article>



            <article className="flex-1 min-w-[360px] flex flex-col gap-4 ">
            <div className="relative w-full h-[260px]  rounded-2xl overflow-hidden">
                <img src={articleimage} className="  w-full h-full object-cover object-left" alt="article pic" loading="lazy"/>
                <div className="grid place-content-center absolute inset-0 hover:bg-transparent duration-200  cursor-pointer bg-black/50">
                    <BsArrowRight color="black" size={10} className=" w-10 h-10 p-2 rounded-full bg-secondary -rotate-45" />
                </div>
            </div>

            <article className="flex flex-col gap-2">
                <span className=" bg-secondary px-3 py-1 font-bold text-slate-600 rounded-full self-start">RaectJs</span>
                <p className=" font-bold text-xl leading-6">ReactJs Developer Noman Khiial share his secret tips. see whats unvailing</p>
                <div className="flex justify-between items-center">
                    <span  className="flex items-center text-slate-600 ">
                    {/* <RxDotFilled size={30} color="#5840ba"/> */}
                     Noman Khial</span>
                    <span className="flex items-center text-slate-600 "><RxDotFilled size={30} color="#5840ba"/>18 Aug 2025</span>
                </div>
            </article>
        </article>


            <article className="flex-1 min-w-[360px] flex flex-col gap-4 ">
            <div className="relative w-full h-[260px]  rounded-2xl overflow-hidden">
                <img src={articleimage} className="  w-full h-full object-cover object-left" alt="article pic" loading="lazy"/>
                <div className="grid place-content-center absolute inset-0 hover:bg-transparent duration-200  cursor-pointer bg-black/50">
                    <BsArrowRight color="black" size={10} className=" w-10 h-10 p-2 rounded-full bg-secondary -rotate-45" />
                </div>
            </div>

            <article className="flex flex-col gap-2">
                <span className=" bg-secondary px-3 py-1 font-bold text-slate-600 rounded-full self-start">RaectJs</span>
                <p className=" font-bold text-xl leading-6">ReactJs Developer Noman Khiial share his secret tips. see whats unvailing</p>
                <div className="flex justify-between items-center">
                    <span  className="flex items-center text-slate-600 ">
                    {/* <RxDotFilled size={30} color="#5840ba"/> */}
                     Noman Khial</span>
                    <span className="flex items-center text-slate-600 "><RxDotFilled size={30} color="#5840ba"/>18 Aug 2025</span>
                </div>
            </article>
        </article>
        
      </section>
    </section>
  );
}

export default Blogs;
