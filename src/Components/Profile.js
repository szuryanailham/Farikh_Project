import React from "react";
import { profile_img } from "../assets/Utils";
import { DescProfile, DescProfile2, socialMedia } from "../constants";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section id="About" className="w-full h-fit px-3 font-Trap">
      <div className="w-full bg-thirdColor h-fit py-5 md:py-10 md:px-5 rounded-xl flex flex-col md:flex-row p-3">
        {/* photo profile */}
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1.5 },
          }}
          className="md:w-1/2"
          src={profile_img}
          alt="Profile Farikh"
        />
        {/* deskription */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1.5 },
          }}
          className="max-w-screen-md mx-auto px-4 py-6 md:px-7"
        >
          <h1 className="text-3xl font-extrabold text-center text-black mb-4">Hello I AM Farikh</h1>
          <div className="space-y-4">
            <p className="text-lg md:text-md leading-relaxed text-center text-gray-700">{DescProfile}</p>
            <p className="text-lg md:text-md leading-relaxed text-center text-gray-700">{DescProfile2}</p>
            {/* Media socials  */}

            <div className="w-full text-center">
              <h2 className="mb-5 font-bold text-black text-xl">Click Here</h2>
              <div className="flex space-x-7 mx-auto justify-center p-2 ">
                {socialMedia.map((item) => (
                  <a className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" key={item.id} href={`${item.Url}`}>
                    <img className="md:w-7" src={`${item.Image}`} alt={`${item.id}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
