import React from "react";
import { SubTitle } from "../constants";
import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

let mySplitText = new SplitText(".split", {
  type: "chars",
});
let chars = mySplitText.chars;
gsap.from(chars, {
  yPercent: 130,
  stagger: 0.02,
  ease: "back.out",
  lazy: false,
  duration: 1,
  ScrollTrigger: {
    trigger: ".split",
    start: "top 80%",
    markers: true,
  },
});
const Hero = () => {
  return (
    <>
      <section className="w-full h-fit items-center text-center font-Trap px-10 py-[150px] md:h-screen">
        <h1 className="split text-[40px] font-extrabold mb-2 leading-tight text-center md:text-[80px]">
          {" "}
          <span className="text-secondColor "> Bringing </span>Your Vision to Life Through <span className="text-thirdColor">Design</span>
        </h1>
        <p className="font-Trap font-bold mt-5 text-center text-md  md:text-[20px] md:w-[70%] md:mx-auto">{SubTitle}</p>
        <button type="button" class="mt-10 text-black bg-thirdColor focus:ring-2 focus:ring-black rounded-lg text-sm px-5 py-2.5 md:px-7 md:py-4 me-2 mb-2 font-bold">
          Contact Me
        </button>
      </section>
    </>
  );
};

export default Hero;
