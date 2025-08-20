import React from "react";
import { BsArrowRight } from "react-icons/bs";
import articleimage from "../assets/woman-8852668_1920.jpg"
import { RxDotFilled } from "react-icons/rx";
import Button from "./Button";
function Blogs() {
  return (
    <section id="blogs" className="flex flex-col gap-10">
      <section className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-col gap-2 font-bold">
          <span className="text-xl text-slate-600">- Blogs</span>
          <h2 className=" text-4xl md:text-6xl">
            From My <br /> <span className=" text-primary">Blog Post</span>{" "}
          </h2>
        </div>
        <Button label='View All Blogs' themeButton={true}/>
      </section>

      {/* blogs */}
      <section className="flex flex-wrap gap-10 items-center justify-center max-w-[98%]">



        <article className="max-w-[360px] flex flex-col gap-4 ">
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

         <article className="max-w-[360px] flex flex-col gap-4 ">
            <div className="relative w-full h-[260px]  rounded-2xl overflow-hidden">
                <img src={articleimage} className="  w-full h-full object-cover object-left" alt="article pic" loading="lazy"/>
                <div className="grid place-content-center absolute inset-0 hover:bg-transparent duration-200  cursor-pointer bg-black/50">
                    <BsArrowRight color="black" size={10} className=" w-10 h-10 p-2 rounded-full bg-secondary -rotate-45" />
                </div>
            </div>

            <article className="flex flex-col gap-2">
                <span className=" bg-secondary px-3 py-1 font-bold text-slate-600 rounded-full self-start">RaectJs</span>
                <p className=" font-bold text-xl leading-6 line-clamp-2">ReactJs Developer Noman Khiial share his secret tips. eactJs Developer Noman Khiial share his secret tips.  eactJs Developer Noman Khiial share his secret tips. eactJs Developer Noman Khiial share his secret tips. see whats unvailing</p>
                <div className="flex justify-between items-center">
                    <span  className="flex items-center text-slate-600 ">
                    {/* <RxDotFilled size={30} color="#5840ba"/> */}
                     Noman Khial</span>
                    <span className="flex items-center text-slate-600 "><RxDotFilled size={30} color="#5840ba"/>18 Aug 2025</span>
                </div>
            </article>
        </article>


         <article className="max-w-[360px] flex flex-col gap-4 ">
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


         <article className="max-w-[360px] flex flex-col gap-4 ">
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



         <article className="max-w-[360px] flex flex-col gap-4 ">
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


         <article className="max-w-[360px] flex flex-col gap-4 ">
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


        
      </section>
    </section>
  );
}

export default Blogs;
