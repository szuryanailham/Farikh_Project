import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonyArray } from "../constants";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Testimony = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <section id="Testimony" className="mt-5 p-5">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 p-2">
          {TestimonyArray.map((item) => (
            <div key={item.id} className="flex-[0_0_90%] min-w-0 md:flex-[0_0_30%]">
              <TestimonialCard image="https://github.com/shadcn.png" name={item.nama} rating={5} testimony={item.comment} />
            </div>
          ))}
        </div>
      </div>
      {/* Title Testimony */}
      <div className="mt-2 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[40%]">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 1.5 },
            }}
            className=" w-full font-Trap text-[50px] text-center md:text-left font-extrabold p-4 leading-tight mx-auto md:ml-10"
          >
            Client <span className="text-secondColor">Testimony</span>
          </motion.h1>
        </div>

        <div className="w-full md:w-[60%]">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 1.5 },
            }}
            className="text-lg font-Trap w-full leading-relaxed text-center md:text-right text-white mx-auto md:px-8 py-5"
          >
            Percayakan berbagai kebutuhan desain bisnismu di <span className="font-extrabold">Farikh Design!</span> Desain yang berkualitas dengan harga terjangkau. Tunggu apalagi? Hubungi Minfar sekarang ya, Kak!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
