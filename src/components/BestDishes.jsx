import React from "react";

const Star = ({ className = "" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="rotate(45 12 12)">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const DishCard = ({ image, name }) => {
  return (
    <div className="text-center">
      <div className="relative inline-block rounded-full border-4 border-dashed border-[#ff7b2b] p-4">
        <img
          src={image}
          alt={name}
          className="w-72 h-72 object-cover rounded-full"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <a href="#" className="text-[#ff7b2b] font-semibold">
        Order Now &gt;
      </a>
    </div>
  );
};

const BestDishes = () => {
  const dishes = [
    {
      image: "dal-bati.png",
      name: "Dal Bati Churma",
    },
    {
      image: "pav-bhaji.png",
      name: "Pav Bhaji",
    },
    {
      image: "masala-dosa.png",
      name: "Masala Dosa",
    },
  ];

  const regions = [
    "Rajasthan",
    "South Indian",
    "Gujarat",
    "Maharashtra",
    "West",
  ];
  const marqueeItems = [...regions, ...regions];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-28">
          <h2 className="text-4xl font-bold">
            Our <span className="text-[#ff7b2b]">Best Delivered</span> <br />
            Indian Dish
          </h2>
          <p className="text-gray-400">
            It's Not Just About Bringing You Good Food
            <br />
            From Restaurants, We Deliver You Experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>
        {/* Regions ribbon with infinite marquee */}
      </div>
      <div className="bg-[#FFF3EB] p-4 rounded-lg mt-20">
        <div className="marquee">
          <div className="marquee-track items-center">
            {marqueeItems.map((region, index) => (
              <div
                key={index}
                className="flex items-center gap-3 shrink-0 px-6"
              >
                <Star className="text-[#1f2922]" />
                <span className="text-[#1f2922] text-lg font-semibold">
                  {region}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDishes;
