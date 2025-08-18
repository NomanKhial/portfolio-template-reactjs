import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

function ScrollToTop() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollHeight(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollHeight > 200 && ( // show button only after scrolling down
        <div
          onClick={scrollTop}
          className="fixed right-40 bottom-10 cursor-pointer z-50 grid place-content-center w-10 h-10 rounded-full bg-secondary hover:translate-y-1 duration-150"
        >
          <BsArrowUp size={20} color="black" />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
