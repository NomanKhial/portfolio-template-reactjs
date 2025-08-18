import React from "react";
import brandImage from "../../assets/woman-8852668_1920.jpg";
import Button from "../Button";
import Strip from "../Strip";
export default function Hero() {
  return (
    <section>
      <section className="max-w-[92%] flex flex-col gap-4 items-center mx-auto md:h-screen mt-10 relative my-10">
        
        <div className=" text-slate-900 font-bold text-center">
          <span>- Hello</span>
          <h2 className=" text-2xl md:text-6xl lg:text-9xl font-bold">
            I'm{" "}
            <span className=" underline underline-primary inline-block">
              NomanKhial
            </span>{" "}
            <br /> MERN DEVELOPER
          </h2>
        </div>

          <div className="overflow-hidden rounded-xl max-w-[600px]">
            <img src={brandImage} className=" w-full" alt="brand Image" fetchPriority="high" />
          </div>

        <div className="flex items-center justify-center p-2 gap-2 bg-white  border border-black rounded-full">
          <Button label="Portfolio" />
          <Button label="Hire Me" />
        </div>

         <div className='md:text-2xl w-20 h-20 md:w-40 md:h-40 bg-[#f9bc02] flex items-center justify-center rounded-full text-black font-bold   absolute right-2 top-40 md:right-16 md:top-16 border-8 border-white border-dashed'>
       Hire Me
         </div>
      </section>
<div className="relative"> 
  <Strip/>
</div>
    </section>
    
  );
}
