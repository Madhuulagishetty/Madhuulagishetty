import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
  const [mouseOver, setMouseOver] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mouseHover = () => {
    setMouseOver(true);
  };

  const mouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <div>
      <button
        onClick={handleScroll}
        className=""
        onMouseOver={mouseHover}
        onMouseLeave={mouseLeave}
      >
        <IoIosArrowUp className="text-4xl" />
      </button>
      {mouseOver && <h1 className="font-bold">Scroll Up</h1>}
    </div>
  );
};

export default ScrollTop;
