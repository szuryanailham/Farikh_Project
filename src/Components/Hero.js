import React from "react";
import { SubTitle } from "../constants";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <section className="w-full h-screen items-center text-center font-Trap px-10 py-[150px] md:h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 1.5 },
          }}
          className="split text-[40px] font-extrabold mb-2 leading-tight text-center md:text-[80px]"
        >
          {" "}
          <span className="text-secondColor "> Bringing </span>Your Vision to Life Through <span className="text-thirdColor">Design</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
          className="font-Trap font-bold mt-5 text-center text-md  md:text-[20px] md:w-[70%] md:mx-auto"
        >
          {SubTitle}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
          type="button"
          class="mt-10 text-black bg-thirdColor focus:ring-2 focus:ring-black rounded-lg text-sm px-5 py-2.5 md:px-7 md:py-4 me-2 mb-2 font-bold"
        >
          Contact Me
        </motion.button>
      </section>
    </>
  );
};

export default Hero;
