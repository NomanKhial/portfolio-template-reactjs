import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiArrowFromTop } from "react-icons/bi";
import { BsArrowRight, BsArrowUpRightCircleFill } from "react-icons/bs";
import Strip from "./Strip";
import { CiLocationArrow1 } from "react-icons/ci";
import Button from "./Button";

function Pricing() {
  return (
    <section className="relative bg-slate-100 py-20">
      {/* main content */}
      <section className="m-auto max-w-[90%] relative">
        <h2 className="absolute font-bold tracking-wide -z-10 text-gray-600/10 text-[120px]">
          Model
        </h2>

        <section className="flex gap-10 flex-wrap md:justify-center items-center">
          {/* card 1 */}
          <div className="flex flex-col justify-between w-full md:basis-1/4 min-w-[290px] h-[600px]">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl">- Pricing Table</span>
              <h2 className="font-bold text-4xl text-slate-600">
                My{" "}
                <span className="text-primary">
                  Pricing Table <br /> Model
                </span>
              </h2>
            </div>

            {/* bottom card */}
            <article className="bg-white rounded-lg p-6 border text-slate-600 min-h-[300px] flex flex-col gap-8">
              <h2 className="font-bold text-3xl">Hey! Need a Custom Plan?</h2>
              <p>
                lorem ipsim helo lorem ipsim helo world i am nomakhial developer
                of this website lorem ipsim helo world i am nomakhial developer
                of this website lorem ipsim helo world i am nomakhial developer
                of this website world i am nomakhial developer of this website
              </p>
<Button label="Book Quote" themeButton={true} ThemeBtnIcon={BsArrowRight} />
            </article>
          </div>

          {/* card 2 */}
          <div className="text-white self-end md:basis-1/4 w-full  min-w-[290px] p-6 flex flex-col justify-around h-[500px] bg-primary rounded-xl">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-xl">Hourly</span>
                <h2 className="font-bold text-6xl">
                  $80 <sub className="text-xl">/ Hour</sub>
                </h2>
              </div>
              <BsArrowUpRightCircleFill
                size={60}
                color="white"
                className="bg-white/10 p-2 rounded-full text-xl"
              />
            </div>

            <ul className="p-3 flex flex-col gap-3 text-xl">
              {[
                "Lorem Ipsum 1",
                "Lorem Ipsum 2",
                "Lorem Ipsum 3",
                "Lorem Ipsum 4",
                "Lorem Ipsum 5",
                "Lorem Ipsum 6",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <AiOutlineCheck
                    size={20}
                    color="black"
                    className="p-[2px] bg-white rounded-full"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* card 3 */}
          <div className="text-black self-end w-full  md:basis-1/4 min-w-[290px] p-6 flex flex-col justify-around h-[600px] bg-white rounded-xl">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-xl">Monthly</span>
                <h2 className="text-primary font-bold text-6xl">
                  $9600 <sub className="text-slate-600 text-xl">/ Month</sub>
                </h2>
              </div>
              <BsArrowUpRightCircleFill
                size={60}
                color="black"
                className="bg-black/10 p-2 rounded-full text-xl"
              />
            </div>

            <ul className="p-3 flex flex-col gap-3 text-xl">
              {[
                "Lorem Ipsum 1",
                "Lorem Ipsum 2",
                "Lorem Ipsum 3",
                "Lorem Ipsum 4",
                "Lorem Ipsum 5",
                "Lorem Ipsum 6",
                "Lorem Ipsum 4",
                "Lorem Ipsum 5",
                "Lorem Ipsum 6",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CiLocationArrow1
                    size={20}
                    color="white"
                    className="p-[2px] bg-primary rounded-full"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      {/* Strip spans full width */}
      <div className="mt-16 w-full">
        <Strip />
      </div>
    </section>
  );
}

export default Pricing;
