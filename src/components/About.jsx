import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaSignature } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { SiGooglescholar } from "react-icons/si";

function About() {
  return (
    <section id="about" className="max-w-[80%] py-10 m-auto flex flex-col gap-4 ">
      {/* top section start */}
      <section className="flex gap-24 items-start py-32 justify-center">
        {/* left side */}
        <div className="relative">
          <div className="bg-primary text-white relative w-[380px] h-[380px] rounded-lg">
            <h2 className=" absolute -rotate-90 -left-[170px] tracking-wide top-1/2 text-[60px] font-bold -translate-y-1/2">
              Noman Khial
            </h2>
            <h2 className="absolute tracking-[-50px] right-0 top-1/2 leading-none -translate-y-1/2 text-[350px] font-bold">
              12
            </h2>
            <p className=" text-xl absolute bottom-4 right-10 ">
              Year Of Experinces
            </p>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col gap-1 max-w-[40%] ">
          <div>
            <span className="text-xl font-bold mb-6">- About Me</span>
            <h2 className="text-6xl text-slate-600 font-bold">
              Who is{" "}
              <span className=" text-primary">
                Noman <br />
                Khial?
              </span>
            </h2>
          </div>
          <p className=" text-gray-700 leading-6 mt-4 text-[16px]">
            I am React Js Developer from kpk, pakistan with over 3 years of
            experience. I am working as self employed I am React Js Developer
          </p>
          <div className="flex flex-col gap-2 my-10">
            <div className="flex justify-between">
              <div>
                <span className=" text-4xl text-slate-800 font-bold">600+</span>{" "}
                <br />
                <span className="text-xl text-slate-600 inline-block mt-2">
                  Project completed
                </span>
              </div>
              <div>
                <span className=" text-4xl text-slate-800 font-bold">50+</span>{" "}
                <br />
                <span className="text-xl text-slate-600 inline-block mt-2">
                  Industry covered
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex gap-3 items-center justify-between overflow-hidden text-white bg-black rounded-full w-60 h-14">
                <BsArrowRight
                  size={40}
                  color="black"
                  className=" ml-2 bg-white rounded-full w-10 p-2 h-10"
                />
                <button className="flex-1 bg-secondary h-full text-gray-800 font-bold  rounded-full">
                  Download Cv
                </button>
              </div>

              <FaSignature size={60} color="#5840ba" />
            </div>
          </div>
        </div>
      </section>
      {/* top section end */}

      {/* bottom section start */}
      <section className="w-[90%] m-auto">
      <section className="text-center mb-2">
        <p className="text-xl font-bold mb-1">- Education & Work</p>
        <h2 className="text-6xl font-bold">My <span className="text-primary">Education</span> & <span className="text-primary"> Work Experience</span></h2>
      </section>

      <section className="flex gap-8 m-auto mt-10">
          <div className=" rounded-md shadow-ld p-6  bg-slate-100 basis-1/2">
            <div className="flex items-center border-b gap-4  pb-3 border-slate-300  text-[#5840ba]">
              <SiGooglescholar size={40}  />
              <p className="text-xl font-bold">Education</p>
            </div>
            <div className="flex justify-between mt-6">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-slate-700 max-w-[250px]">Alhuda Public School</p>
                <span>Matriculation</span>
              </div>
              <span className="font-bold">2019 - 2021</span>
            </div>
              <div className="flex justify-between mt-4">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-slate-700 max-w-[250px]">Alsyed Garden College</p>
                <span>FSC College</span>
              </div>
              <span className="font-bold">2021 - 2023</span>
            </div>
             <div className="flex justify-between mt-4">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-slate-700 max-w-[250px]">Hazara University Sub-Campus Battagram</p>
                <span>FSC College</span>
              </div>
              <span className="font-bold">2021 - 2023</span>
            </div>
          </div>
           <div className=" rounded-md shadow-ld p-6  bg-slate-100 basis-1/2">
            <div className="flex items-center border-b   pb-3 border-slate-300 gap-4  text-[#5840ba]">
              <ImBriefcase size={40} />
              <p className="text-xl font-bold">Work Experience</p>
            </div>
             <div className="flex justify-between mt-6">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-slate-700 max-w-[250px]">Self-Employed</p>
                <span>Web Developer</span>
              </div>
              <span className="font-bold w-32 h-8 rounded-full flex items-center justify-center bg-white">2020 - 2025</span>
            </div>
              <div className="flex justify-between mt-4">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-slate-700 max-w-[250px]">Academic Projects</p>
                <span>Projects</span>
              </div>
              <span className="font-bold">2022 - 2024</span>
            </div>
             <div className="flex justify-between mt-4">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-slate-700 max-w-[250px]">Freelancing</p>
                <span>Freelancing</span>
              </div>
              <span className="font-bold">2024 - 2025</span>
            </div>
          </div>
      </section>
      {/* bottom section end */}
    </section>
    </section>
  );
}

export default About;
