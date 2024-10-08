import React from "react";
import { Category, Category2, Category3, Category4 } from "../assets/Utils";
import { categoryDesc } from "../constants";
import { motion } from "framer-motion";
const Categories = () => {
  return (
    <section className="mb-5 mt-5" id="Gallery">
      {/* title */}
      <div className="mx-auto">
        <h1 className="font-Trap w-[80%] md:w-[50%] text-[40px] md:text-[50px] text-center font-extrabold p-4 leading-tight mx-auto">
          Category <span className="text-secondColor">Design</span>
        </h1>
      </div>
      <p className="text-lg leading-relaxed text-center text-white md:w-[70%] mx-auto px-10 mb-5 font-Trap">{categoryDesc}</p>
      {/* Image Category */}
      <div className="p-5 flex flex-col md:flex-row gap-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
          className="w-full md:w-[300px] h-[300px] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${Category})` }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
          className="w-full md:w-[300px] h-[300px] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${Category2})` }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
          className="w-full md:w-[300px] h-[300px] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${Category3})` }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 2 },
          }}
          className="w-full md:w-[300px] h-[300px] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${Category4})` }}
        ></motion.div>
      </div>

      {/* Deskripsi */}
    </section>
  );
};

export default Categories;
