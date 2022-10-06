import React, { useEffect, useState } from "react";
import "./styles/ScrollButton.css";

const ScrollButton = () => {

  const [topButton, setTopButton] = useState<HTMLElement>()

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 500 && topButton) {
      topButton.style.transform = "scale(1.3)";
    } else if (scroll < 500 && topButton) {
      topButton.style.transform = "scale(0)";
    }
  };

  useEffect(() => {
    setTopButton(document.getElementById("scrollUp")!)
  }, [])

  const handleClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div>
      <button onClick={handleClick} className="bg-white" id="scrollUp">
        ^
      </button>
    </div>
  );
};

export default ScrollButton;
