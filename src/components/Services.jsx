import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress } from "react-icons/si";


const skills = [
  { icon: FaReact, name: "React", color: "#61DBFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#3C873A" },
  { icon: SiExpress, name: "Express", color: "#0075" },
  { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
  { icon: SiJavascript, name: "JavaScript", color: "#F0DB4F" },
];

export default function SkillCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % skills.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden  text-white border-b bg-primary">
      
      {/* Animated Heading */}
      <h2
        className="text-5xl md:text-6xl font-extrabold  mb-16"
      >
        My Skill Set
      </h2>

      {/* Carousel */}
      <div className="relative flex w-full h-[320px] items-center justify-center">
        {skills.map((skill, i) => {
          const offset = (i - index + skills.length) % skills.length;
          let translateX = 0;
          let scale = 1;
          let opacity = 1;

          if (offset === 0) {
            translateX = 0;
            scale = 1.4; // 🌟 Bigger center
            opacity = 1;
          } else if (offset === 1) {
            translateX = 300;
            scale = 0.9;
            opacity = 0.5;
          } else if (offset === skills.length - 1) {
            translateX = -300;
            scale = 0.9;
            opacity = 0.5;
          } else {
            translateX = offset > 1 ? 600 : -600;
            scale = 0.5;
            opacity = 0;
          }

          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center"
              animate={{ x: translateX, scale, opacity }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{ zIndex: offset === 0 ? 20 : 10 }}
            >
              <div
                className={`rounded-3xl shadow-2xl p-10 ${
                  offset === 0 ? "bg-white/90 backdrop-blur-xl" : "bg-white/40"
                }`}
              >
                <skill.icon
                  size={offset === 0 ? 120 : 90}
                  color={skill.color}
                  className={`${offset === 0 ? "drop-shadow-glow" : ""}`}
                />
              </div>
              {offset === 0 && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 text-2xl font-bold text-white drop-shadow-lg"
                >
                  {skill.name}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </div>


    </div>
  );
}
