import React from "react";

const TestimonialCard = ({ image, name, rating, testimony }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg py-7 px-4 max-w-sm mx-auto">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-black ">{name}</h3>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.1l2.092 6.148h6.426l-5.214 3.787 2.092 6.148L12 16.396l-5.214 3.787 2.092-6.148-5.214-3.787h6.426z" />
                </svg>
              ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{testimony}</p>
    </div>
  );
};

export default TestimonialCard;
