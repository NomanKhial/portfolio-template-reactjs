import React from "react";
import brandImage from "../../assets/woman-8852668_1920.jpg";
import Button from "../Button";
import Strip from "../Strip";
export default function Hero() {
  return (
    <section>
      <section className="max-w-[92%] flex flex-col gap-4 items-center mx-auto md:h-screen mt-10 relative my-10">
        
        <div className=" text-slate-600 font-bold text-center">
          <span>- Hello</span>
          <h2 className=" text-2xl font-bold">
            I'm{" "}
            <span className=" underline underline-primary/50 inline-block">
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
    </section>
    // <div className='relative min-h-[100vh] py-10'>
    //     <div className='text-center'>
    //       <p className='text-xl'>- Hello</p>
    //       <h2 className=' text-3xl md:text-6xl font-bold mb-8 md:leading-[60px]'>I'm <span className='text-primary underline'>Noman Khial,</span> <br/> ReactJs Developer</h2>

    //       <div className='overflow-hidden  max-w-[600px] mx-auto absolute bottom-30 left-1/2 translate-x-[-50%]'>
    //         <img src={brandImage } className='rounded-lg w-full' alt='brand image' fetchPriority='high'/>
    //       </div>
    //       <div className='flex items-center p-4 gap-2 flex-wrap md:max-w-[500px] mx-auto bg-white md:rounded-full border absolute bottom-64 left-1/2 translate-x-[-50%]'>
    //         <Button label='Portfolio'/>
    //         <Button label='Hire Me'/>
    //       </div>

    //         <div className='absolute left-16 bottom-40 text-start flex flex-col gap-1 text-slate-900'>
    //         <h3 className='text-2xl font-bold'>450+</h3>
    //         <p className='text-xl'>Happy Clients</p>
    //         <div className='flex'>
    //           <img className='w-16 h-16 rounded-full' src={brandImage} />
    //         </div>
    //     </div>

    //     {/* circle */}

    //     <div className='md:text-2xl w-20 h-20 md:w-40 md:h-40 bg-[#f9bc02] flex items-center justify-center rounded-full text-black font-bold   absolute right-2 top-40 md:right-16 md:top-16 border-8 border-white border-dashed'>
    //      Hire Me
    //     </div>

    //     {/* bottom strip */}

    //     <Strip/>
    //     </div>

    // </div>
  );
}
