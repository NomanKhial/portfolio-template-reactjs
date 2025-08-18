import React from "react";
import { BsArrowRight } from "react-icons/bs";
import projectImage from "../../src/assets/woman-8852668_1920.jpg";

function Projects() {
  return (
    <section id="projects" className="w-full bg-primary min-h-screen m-auto  -z-10 relative">
      {/* big background title */}
      <h2 className="text-[160px]  font-bold tracking-tight text-white/10 m-32 absolute">
        Latest Projects
      </h2>

      {/* content wrapper */}
      <section className="max-w-[80%] py-40 m-auto mt-32 relative z-10">
        {/* top heading row */}
        <div className="flex items-center justify-between text-white">
          <div>
            <span className=" text-2xl font-bold inline-block mb-2">
              - Projects
            </span>
            <h2 className=" text-7xl font-bold ">
              My <span className=" text-secondary">Latest Projects</span>
            </h2>
          </div>

          <div className="flex justify-between mt-2">
            <div className="flex gap-3 items-center justify-between overflow-hidden  bg-white rounded-full w-60 h-14">
              <BsArrowRight
                size={40}
                color="white"
                className=" ml-2 bg-primary rounded-full w-10 p-2 h-10"
              />
              <button className="flex-1 bg-secondary h-full text-gray-800 font-bold  rounded-full">
                View All Projects
              </button>
            </div>
          </div>
        </div>

        {/* project cards */}
        <section className="w-[86%] mx-auto p-3 rounded-3xl mt-20 bg-primary border min-h-[460px]">
          <div className="flex gap-10 items-center h-full">
            <div className="basis-1/3 min-w-[320px] overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={projectImage}
                alt="project image"
              />
            </div>

            <div className="basis-1/2 text-white">
              <div className="flex gap-4 flex-wrap">
                <span className=" inline-block bg-secondary text-slate-700 font-bold px-4 py-[4px] rounded-full">
                  Web Development
                </span>
                <span className=" inline-block bg-secondary text-slate-700 font-bold px-4 py-[4px] rounded-full">
                  Mobile Development
                </span>
                <span className=" inline-block bg-secondary text-slate-700 font-bold px-4 py-[4px] rounded-full">
                  Cloud Services
                </span>
              </div>

              <div className="flex flex-col gap-6 mt-5">
                <h2 className=" max-w-[400px] text-4xl font-bold">
                  Doctor Appointment - Web App
                </h2>

                <p className="max-w-[460px]">
                  Complete doctor appoint app. Lets you book appointments
                  online with ease. Doctor-Appointment: built using React,
                  Tailwind, and Material UI.
                </p>

                <div className="flex gap-3 items-center justify-between overflow-hidden  bg-white rounded-full w-60 h-14">
                  <BsArrowRight
                    size={40}
                    color="white"
                    className=" ml-2 bg-primary rounded-full w-10 p-2 h-10"
                  />
                  <button className="flex-1 bg-secondary h-full text-gray-800 font-bold rounded-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* duplicate card for demo */}
        <section className="w-[86%] mx-auto p-3 rounded-3xl mt-20 bg-primary border min-h-[460px]">
          <div className="flex gap-10 items-center h-full">
            <div className="basis-1/3 min-w-[320px] overflow-hidden">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={projectImage}
                alt="project image"
              />
            </div>

            <div className="basis-1/2 text-white">
              <div className="flex gap-4 flex-wrap">
                <span className=" inline-block bg-secondary text-slate-700 font-bold px-4 py-[4px] rounded-full">
                  Web Development
                </span>
                <span className=" inline-block bg-secondary text-slate-700 font-bold px-4 py-[4px] rounded-full">
                  Mobile Development
                </span>
                <span className=" inline-block bg-secondary text-slate-700 font-bold px-4 py-[4px] rounded-full">
                  Cloud Services
                </span>
              </div>

              <div className="flex flex-col gap-6 mt-5">
                <h2 className=" max-w-[400px] text-4xl font-bold">
                  Doctor Appointment - Web App
                </h2>

                <p className="max-w-[460px]">
                  Complete doctor appoint app. Lets you book appointments
                  online with ease. Doctor-Appointment: built using React,
                  Tailwind, and Material UI.
                </p>

                <div className="flex gap-3 items-center justify-between overflow-hidden  bg-white rounded-full w-60 h-14">
                  <BsArrowRight
                    size={40}
                    color="white"
                    className=" ml-2 bg-primary rounded-full w-10 p-2 h-10"
                  />
                  <button className="flex-1 bg-secondary h-full text-gray-800 font-bold rounded-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Projects;
