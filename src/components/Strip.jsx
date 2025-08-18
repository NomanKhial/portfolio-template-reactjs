import React, { useEffect, useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";

function Strip() {
  const skills = [
    "ReactJs",
    "React Native",
    "Tailwind",
    "JavaScript",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // speed: increase for faster scroll
        // When we reach the end of the first half, reset to start
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-scroll remove-scrollbar absolute bottom-0 px-4 bg-[#a4db74] w-full h-10 md:h-24 items-center gap-10 whitespace-nowrap"
    >
      {/* Duplicate the skills list so the scroll loops seamlessly */}
      {[...skills, ...skills].map((skill, index) => (
        <p
          className="flex items-center gap-2 text-3xl md:text-6xl font-bold"
          key={index}
        >
          {skill} <PiStarFourFill className=" text-2xl md:text-4xl" />
        </p>
      ))}
    </div>
  );
}

export default Strip;
