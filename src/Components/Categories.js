import React from "react";
import { Category, Category2, Category3 } from "../assets/Utils";
import { categoryDesc } from "../constants";
import { motion } from "framer-motion";
const Categories = () => {
  return (
    <section className="mb-5" id="Gallery">
      {/* title */}
      <div className="mx-auto">
        <h1 className="font-Trap w-[80%] md:w-[30%] text-[40px] md:text-[50px] text-center font-extrabold p-4 leading-tight mx-auto">
          Category <span className="text-secondColor">Design</span>
        </h1>
      </div>
      {/* Image Category */}
      <div className="p-5 flex flex-col md:flex-row gap-5">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 2 },
          }}
          className="w-full h-[400px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${Category})` }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 2 },
          }}
          className="w-full h-[400px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${Category2})` }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 2 },
          }}
          className="w-full h-[400px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${Category3})` }}
        ></motion.div>
      </div>
      {/* Deskripsi */}
    </section>
  );
};

export default Categories;
