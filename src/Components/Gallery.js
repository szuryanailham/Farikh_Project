import React, { useState } from "react";
import { ArrayBanner, ArrayFeed, ArrayLogo, ArrayPamflet } from "../constants";
const Gallery = () => {
  const [IsSelect, SetIsSelect] = useState("Feed");
  return (
    <section className=" w-full h-fit">
      <h1 className="font-Trap w-[80%] md:w-[40%] text-[40px] md:text-[50px] text-center font-extrabold p-4 leading-tight mx-auto">
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
      <div className={`${IsSelect !== "Feed" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-6 py-5 px-5"}`}>
        {ArrayFeed.map((item, id) => (
          <div key={id} className="w-full h-full bg-cover bg-center rounded-md overflow-hidden">
            <img src={item.img} alt={item.id} className="w-full h-full object-cover rounded-md aspect-[4/3] md:aspect-[3/2]" />
          </div>
        ))}
      </div>

      {/* LOGO  */}
      <div className={`${IsSelect !== "Logo" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-6 py-5 px-5"}`}>
        {ArrayLogo.map((item, id) => (
          <div key={id} className="w-full h-full bg-cover bg-center rounded-md overflow-hidden">
            <img src={item.img} alt={item.id} className="w-full h-full object-cover rounded-md aspect-[4/3] md:aspect-[3/2]" />
          </div>
        ))}
      </div>
      {/* Banner */}
      <div className={`${IsSelect !== "Banner" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-6 py-5 px-5"}`}>
        {ArrayBanner.map((item, id) => (
          <div key={id} className="w-full h-full bg-cover bg-center rounded-md overflow-hidden">
            <img src={item.img} alt={item.id} className="w-full h-full object-cover rounded-md aspect-[4/3] md:aspect-[3/2]" />
          </div>
        ))}
      </div>
      {/* Pamflet */}
      <div className={`${IsSelect !== "Pamflet" ? "hidden" : "grid grid-cols-1 md:grid-cols-2 gap-6 py-5 px-5"}`}>
        {ArrayPamflet.map((item, id) => (
          <div key={id} className="w-full h-full bg-contain bg-center rounded-md overflow-hidden">
            <img src={item.img} alt={item.id} className="w-full h-full object-cover rounded-md aspect-[4/3] md:aspect-[3/2]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
