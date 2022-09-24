import React from "react";
import "./styles/ScrollButton.css";

const ScrollButton = () => {
  const topButton: any = document.getElementById("scrollUp");

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 500) {
      topButton.style.transform = "scale(1)";
    } else if (scroll < 500) {
      topButton.style.transform = "scale(0)";
    }
  };

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
