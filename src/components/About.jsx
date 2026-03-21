import React, { useState, useEffect } from "react";

const stats = [
  { value: "5K+", label: "Happy Customers" },
  { value: "50+", label: "Menu Items" },
  { value: "2+", label: "Years of Excellence" },
  { value: "4.7★", label: "Average Rating" },
];

const reviews = [
  {
    name: "Priya Sharma",
    location: "Chittorgarh",
    rating: 5,
    text: "Absolutely the best biryani I've had! The flavors are authentic and the service was super fast.",
    avatar: "PS",
    dish: "Veg Biryani",
  },
  {
    name: "Rahul Mehta",
    location: "Udaipur",
    rating: 5,
    text: "The thali here is incredible — so wholesome and freshly prepared. Feels like home food.",
    avatar: "RM",
    dish: "Special Thali",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Paneer starters and pizza were amazing! Great quality and taste. My family loved it.",
    avatar: "SP",
    dish: "Paneer Tikka",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#ff7b2b] text-sm">★</span>
    ))}
  </div>
);

const About = () => {
  const [activeReview, setActiveReview] = useState(0);

  // Auto highlight reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      aria-label="About our restaurant"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-[#FFF7F2]"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full text-[#ff7b2b] bg-[#fff0e6]">
          Our Story
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.2] font-serif">
          Crafted with Passion,{" "}
          <span className="text-[#ff7b2b]">Served with Love</span>
        </h2>

        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          A culinary journey through authentic flavors — every bite tells a story.
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
        
        {/* IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#ff7b2b]/20 rounded-full blur-3xl" />

          <div className="absolute -bottom-4 -right-4 z-10 w-24 h-24 rounded-full bg-[#fff0e6] border border-[#ffe8d6] flex flex-col items-center justify-center text-[#ff7b2b] font-bold shadow-md">
            <span className="text-lg">2+</span>
            <span className="text-xs">Years</span>
          </div>

          <img
            src="9.webp"
            alt="Restaurant Food"
            loading="lazy"
            width="500"
            height="600"
            className="rounded-3xl shadow-2xl object-cover w-full max-w-md hover:scale-105 transition duration-500 border-4 border-[#fff0e6]"
          />
        </div>

        {/* TEXT (FIXED SPACING HERE) */}
        <div className="space-y-4 max-w-lg">
          <p className="text-gray-600 text-lg leading-[1.6]">
            Welcome to our restaurant — where{" "}
            <span className="font-semibold text-[#ff7b2b]">
              taste meets tradition
            </span>.
          </p>

          <p className="text-gray-500 text-sm leading-[1.6]">
            From thalis to pizzas, every dish is crafted using fresh ingredients
            and authentic recipes.
          </p>

          <div className="pt-3">
            <a
              href="#menu"
              aria-label="Explore our menu"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#ff7b2b] to-[#ff5500] shadow-md hover:scale-105 hover:shadow-xl transition"
            >
              Explore Menu →
            </a>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-[#fff0e6] border border-[#ffe8d6] rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-3xl font-bold text-[#ff7b2b]">
              {s.value}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* REVIEWS */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full text-[#ff7b2b] bg-[#fff0e6]">
            Customer Reviews
          </span>

          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Guests Are Saying
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => {
            const isActive = i === activeReview;

            return (
              <div
                key={r.name}
                onMouseEnter={() => setActiveReview(i)}
                className={`relative p-6 rounded-3xl flex flex-col gap-4 transition-all duration-500 cursor-pointer
                  ${isActive
                    ? "bg-white border-2 border-[#ff7b2b] shadow-xl scale-105"
                    : "bg-white border border-[#ffe8d6] hover:shadow-lg hover:-translate-y-1"
                  }
                `}
              >
                <span className="absolute top-4 right-6 text-5xl text-[#fff0e6] font-bold">
                  "
                </span>

                <StarRating count={r.rating} />

                <p className="text-gray-600 text-sm leading-relaxed">
                  "{r.text}"
                </p>

                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#fff0e6]">
                  <div className="w-10 h-10 rounded-full bg-[#ff7b2b] text-white flex items-center justify-center font-bold text-sm">
                    {r.avatar}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {r.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {r.location} · {r.dish}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveReview(i)}
              className={`rounded-full transition-all ${
                i === activeReview ? "w-6 h-2 bg-[#ff7b2b]" : "w-2 h-2 bg-[#ffd0b0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
