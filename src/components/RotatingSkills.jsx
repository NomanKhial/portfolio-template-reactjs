import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { useState, useEffect } from "react";

const skills = [
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Python", icon: FaPython, color: "#FFD43B" },
  { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
];

export default function Radar3D() {
  const radius = 200;
  const [active, setActive] = useState(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setActive(skills[i].name);
      i = (i + 1) % skills.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[550px] h-[550px] mx-auto perspective-1000">
      {/* Radar dotted circle */}
      <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400"></div>

      {/* Radar sweep line */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "conic-gradient(rgba(0,150,255,0.2), transparent 70%)",
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      {/* Icons orbiting in 3D */}
      {skills.map(({ name, icon: Icon, color }, i) => {
        const angle = (i / skills.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const isActive = name === active;

        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: "translate(-50%, -50%)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              rotateX: isActive ? 15 : 5,
              rotateY: isActive ? -15 : -5,
              scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.div
              className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg"
              animate={isActive ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.5 }}
              style={{
                rotateX: "20deg",
                backfaceVisibility: "hidden",
              }}
            >
              <Icon size={30} color={color} />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-3xl font-bold">Nouman</h1>
        {active && <p className="text-indigo-600 text-xl">{active}</p>}
      </div>
    </div>
  );
}
