import React, { useState } from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import Strip from "./Strip";

function Faqs() {
  const aboutMeAccordion = [
    {
      id: 1,
      question: "Who am I?",
      answer:
        "I'm Nouman, a Computer Science student and full-stack web developer. I blend creativity with logic to build apps, websites, and digital experiences.",
    },
    {
      id: 2,
      question: "What do I do?",
      answer:
        "I work with React, Node.js, Django, Tailwind, MongoDB, and more. I create responsive UIs, robust backends, and love experimenting with new tech.",
    },
    {
      id: 3,
      question: "What drives me?",
      answer:
        "Curiosity and growth. I believe every bug teaches me something, and every project is a chance to level up.",
    },
    {
      id: 4,
      question: "My hobbies?",
      answer:
        "Coding (of course), writing, experimenting with design, playing around with AI, and sharing knowledge with peers.",
    },
    {
      id: 5,
      question: "Future goals?",
      answer:
        "To master AI, become a top-tier full-stack developer, and eventually build products that make life easier for others.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
        <section className="bg-primary min-h-screen relative flex items-center justify-center">
      <section className="max-w-[60%] mx-auto flex flex-col items-center py-20 text-white">
        <article className="flex flex-col gap-6 w-full">
          <header className="text-center flex flex-col gap-6 mb-10">
            <span className="text-xl font-bold">- FAQs</span>
            <h2 className="text-6xl font-bold">
              Questions? <span className="text-secondary"> Look Here.</span>
            </h2>
          </header>

          {aboutMeAccordion.map(({ question, answer, id }, index) => (
            <section
              key={id}
              className={` ${openIndex === index ? 'bg-secondary text-slate-600' : 'bg-black/20'} p-6 rounded-xl cursor-pointer transition-all duration-300`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{question}</h2>
                {openIndex === index ? (
                  <BiMinusCircle size={30} />
                ) : (
                  <BiPlusCircle size={30} />
                )}
              </div>

              {/* show answer only if open */}
              <div
                className={`transition-all  duration-500 overflow-hidden ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-lg text-gray-600">{answer}</p>
              </div>
            </section>
          ))}
        </article>
      </section>
    </section>
   <div className="absolute w-full mt-10">
     <Strip/>
   </div>
    </>
  );
}

export default Faqs;
