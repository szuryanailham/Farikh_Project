import React, { useState } from "react";
import { ArrayBanner, ArrayFeed, ArrayLogo, ArrayPamflet } from "../constants";
const Gallery = () => {
  const [IsSelect, SetIsSelect] = useState("Feed");
  return (
    <section className=" w-full h-fit">
      <h1 className="md:hidden font-Trap w-[90%] text-[40px] text-center font-extrabold p-4 leading-tight mx-auto mb-5">
        Top Portofolio <span className="text-secondColor">Design</span>
      </h1>
      {/* Category Button Gallery */}
      <div className=" w-full flex flex-wrap justify-center gap-5 px-2 mx-auto">
        {/* Feed instagram */}
        <button onClick={() => SetIsSelect("Feed")} type="button" className={`${IsSelect === "Feed" ? "text-white bg-thirdColor" : "text-white bg-[#2D2D39]"} hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>
          Feed IG
        </button>
        {/* feed Logo */}
        <button onClick={() => SetIsSelect("Logo")} type="button" className={`${IsSelect === "Logo" ? "text-white bg-thirdColor" : "text-white bg-[#2D2D39]"} hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>
          Logo
        </button>
        {/* Banner */}
        <button onClick={() => SetIsSelect("Banner")} type="button" className={`${IsSelect === "Banner" ? "text-white bg-thirdColor" : "text-white bg-[#2D2D39]"} hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>
          Banner
        </button>
        {/* Pamflet */}
        <button onClick={() => SetIsSelect("Pamflet")} type="button" className={`${IsSelect === "Pamflet" ? "text-white bg-thirdColor" : "text-white bg-[#2D2D39]"} hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>
          Pamflet
        </button>
      </div>
      {/* ===================== Gallery =============== */}

      {/* FEED INSTAGRAM */}
      <div className={`${IsSelect !== "Feed" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-5 md:mt-10"}`}>
        {ArrayFeed.map((item, id) => (
          <div key={id} className="w-full h-auto bg-cover bg-center rounded-md">
            <img src={item.img} alt={item.id} className="w-full h-auto object-cover rounded-md md:w-[90%] mx-auto" />
          </div>
        ))}
      </div>
      {/* LOGO  */}
      <div className={`${IsSelect !== "Logo" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-5 md:mt-10"}`}>
        {ArrayLogo.map((item, id) => (
          <div key={id} className="w-full h-auto bg-cover bg-center rounded-md">
            <img src={item.img} alt={item.id} className="w-full h-auto object-cover rounded-md md:w-[90%] mx-auto" />
          </div>
        ))}
      </div>
      {/* Banner */}
      <div className={`${IsSelect !== "Banner" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-5 md:mt-10"}`}>
        {ArrayBanner.map((item, id) => (
          <div key={id} className="w-full h-auto bg-cover bg-center rounded-md">
            <img src={item.img} alt={item.id} className="w-full h-auto object-cover rounded-md md:w-[90%] mx-auto" />
          </div>
        ))}
      </div>
      {/* Pamflet */}
      <div className={`${IsSelect !== "Pamflet" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-5 md:mt-10"}`}>
        {ArrayPamflet.map((item, id) => (
          <div key={id} className="w-full h-auto bg-cover bg-center rounded-md">
            <img src={item.img} alt={item.id} className="w-full h-auto object-cover rounded-md md:w-[90%] mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
