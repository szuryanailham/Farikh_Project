import React from "react";
import { Category, Category2, Category3 } from "../assets/Utils";
import { categoryDesc } from "../constants";
import { motion } from "framer-motion";
const Categories = () => {
  return (
    <section id="Gallery">
      {/* title */}
      <div className="mx-auto">
        <h1 className="md:hidden font-Trap w-[80%] text-[40px] text-center font-extrabold p-4 leading-tight mx-auto">
          Category <span className="text-secondColor">Design</span>
        </h1>
      </div>
      {/* Image Category */}
      <div className="p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-start-2 lg:row-start-2">
            <div className="w-full h-[400px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${Category2})` }}></div>
          </div>
          <div className="lg:col-start-3 lg:row-start-1">
            <div className="w-full h-[400px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${Category})` }}></div>
          </div>
          <div className="lg:col-start-1 lg:row-start-3">
            <div className="w-full h-[400px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url(${Category3})` }}></div>
          </div>
          <div className="lg:col-start-1 lg:row-start-1 flex items-center justify-center">
            {/*  */}
            <h1 className="hidden md:block font-Trap w-[80%] text-[50px] text-center font-extrabold p-4 leading-tight mx-auto">
              Category <span className="text-secondColor">Design</span>
            </h1>
          </div>
          <div className="lg:row-start-3 lg:col-span-3 flex justify-center gap-4 py-10 px-4">
            <div className="w-full md:w-[80%]">
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1.5 },
                }}
                className=" font-Trap text-lg leading-relaxed text-end text-white"
              >
                {categoryDesc}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Deskripsi */}
    </section>
  );
};

export default Categories;
