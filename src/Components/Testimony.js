import React from "react";
import TestimonialCard from "./TestimonialCard";
import { DescTestimony } from "../constants";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Testimony = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <section className="mt-5 p-5">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 p-2">
          <div className="flex-[0_0_80%] min-w-0 md:flex-[0_0_30%]">
            <TestimonialCard image="https://github.com/shadcn.png" name="Jane Smith" rating={4} testimony="Great value for the price. Will definitely buy again." />
          </div>
          <div className="flex-[0_0_80%] min-w-0 md:flex-[0_0_30%]">
            <TestimonialCard image="https://github.com/shadcn.png" name="Jane Smith" rating={4} testimony="Great value for the price. Will definitely buy again." />
          </div>
          <div className="flex-[0_0_80%] min-w-0 md:flex-[0_0_30%]">
            <TestimonialCard image="https://github.com/shadcn.png" name="Jane Smith" rating={4} testimony="Great value for the price. Will definitely buy again." />
          </div>
          <div className="flex-[0_0_80%] min-w-0 md:flex-[0_0_30%]">
            <TestimonialCard image="https://github.com/shadcn.png" name="Jane Smith" rating={4} testimony="Great value for the price. Will definitely buy again." />
          </div>
        </div>
      </div>
      {/* Title Testimony */}
      <div className="mt-2 flex flex-col">
        {/* Title  */}
        <h1 className="md:hidden font-Trap w-[90%] text-[40px] text-center font-extrabold p-4 leading-tight mx-auto">
          Client <span className="text-secondColor">Testimony</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 1.5 },
          }}
          className="text-lg leading-relaxed text-center text-white md:w-[80%] mx-auto"
        >
          {DescTestimony}
        </motion.p>
      </div>
    </section>
  );
};

export default Testimony;
