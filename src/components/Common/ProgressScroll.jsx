"use client";
import React, { useEffect, useRef } from "react";
//= Scripts

const ProgressScroll = () => {
  const containerRef = useRef(null);
  let offset = 150;

  const updateProgress = () => {
    if (window.pageYOffset > offset) {
      containerRef.current.classList.add("active-progress");
    } else {
      containerRef.current.classList.remove("active-progress");
    }
    let progressPath = containerRef.current.querySelector("path");
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset linear";

    let scroll = window.scrollY;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  const scrollToTop = (e) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgress);

    // Clean-up function
    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={(e) => scrollToTop(e)}
      className="progress-wrap relative bottom-30 right-30 h-44 w-44 cursor-pointer block rounded-full z-100 transform translate-y-20 transition duration-400 ease-linear mix-blend-difference"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        className="progress-circle svg-content "
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
      </svg>
    </div>
  );
};

export default ProgressScroll;
