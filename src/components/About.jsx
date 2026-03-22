import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const stats = [
  { value: "5K+", label: "Happy Customers" },
  { value: "50+", label: "Menu Items" },
  { value: "2+", label: "Years of Excellence" },
  { value: "4.7★", label: "Average Rating" },
];

const reviews = [
  {
    name: "Anshul Gadia",
    location: "Gurgaon, Haryana",
    rating: 5,
    text: "Absolutely the best Pav Bhaji I've had! The flavors are authentic and the service was super fast.",
    avatar: "AG",
    dish: "",
  },
  {
    name: "Lalit Menariya",
    location: "Rajkot,Gujarat",
    rating: 5,
    text: "The thali here is incredible — so wholesome and freshly prepared. Feels like home food.",
    avatar: "LM",
    dish: "",
  },
  {
    name: "Piyush Palecha",
    location: "Ahmedabad,Gujarat",
    rating: 5,
    text: "Paneer starters and pizza were amazing! Great quality and taste. My family loved it.",
    avatar: "PP",
    dish: "",
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
      <Fade triggerOnce>
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
      </Fade>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20">
        
        {/* IMAGE */}
        <Slide direction="left" triggerOnce>
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
        </Slide>

        {/* TEXT & STATS */}
        <Slide direction="right" triggerOnce>
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-800">
              From Our Kitchen to Your Table
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Our journey began with a simple mission: to share the rich, diverse flavors of authentic cuisine with our community. We believe in using fresh, locally-sourced ingredients to craft memorable dishes that bring people together.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Fade key={index} delay={index * 150} triggerOnce>
                  <div className="p-4 rounded-lg bg-white shadow-sm text-center">
                    <p className="text-3xl font-bold text-[#ff7b2b]">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Slide>
      </div>

      {/* REVIEWS */}
      <Slide direction="up" triggerOnce>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-8">What Our Customers Say</h3>
          <div className="relative">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ease-in-out ${activeReview === index ? "opacity-100" : "opacity-0 absolute top-0 left-0 w-full"}`}
              >
                {activeReview === index && (
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="w-16 h-16 rounded-full bg-[#ff7b2b] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {review.avatar}
                    </div>
                    <p className="text-gray-600 italic">"{review.text}"</p>
                    <StarRating count={review.rating} />
                    <p className="mt-4 font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default About;
