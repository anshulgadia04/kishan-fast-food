import React, { useState } from "react";

const stats = [
  { value: "5K+", label: "Happy Customers" },
  { value: "50+", label: "Menu Items" },
  { value: "5+", label: "Years of Excellence" },
  { value: "4.7★", label: "Average Rating" },
];

const features = [
  { icon: "🍽️", title: "Fresh Ingredients", desc: "Sourced daily from local farms" },
  { icon: "🚀", title: "Fast Delivery", desc: "Hot meals at your doorstep" },
  { icon: "⭐", title: "Best Quality", desc: "Consistently top-rated taste" },
  { icon: "❤️", title: "Made with Love", desc: "Every dish crafted with care" },
];

const reviews = [
  {
    name: "Priya Sharma",
    location: "Chittorgarh",
    rating: 5,
    text: "Absolutely the best biryani I've had! The flavors are authentic and the delivery was super fast. Highly recommend!",
    avatar: "PS",
    dish: "Veg Biryani",
  },
  {
    name: "Rahul Mehta",
    location: "Udaipur",
    rating: 5,
    text: "The thali here is incredible — so wholesome and freshly prepared. Feels like home-cooked food. Will order again!",
    avatar: "RM",
    dish: "Special Thali",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Tried the paneer starters and pizza — both were amazing! Great quality for the price. My family loved it.",
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

  return (
    <section
      id="about"
      style={{ fontFamily: "'Georgia', serif", background: "#FFF7F2" }}
      className="py-20 px-4 sm:px-6 lg:px-16"
    >
      {/* ── HEADER ── */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <span
          className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full"
          style={{ color: "#ff7b2b", background: "#fff0e6", fontFamily: "sans-serif" }}
        >
          Our Story
        </span>
        <h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Crafted with Passion,{" "}
          <span style={{ color: "#ff7b2b" }}>Served with Love</span>
        </h2>
        <p
          className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "sans-serif" }}
        >
          A culinary journey through authentic flavors — from Indian thalis to wood-fired pizzas,
          every bite tells a story of tradition and quality.
        </p>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

        {/* IMAGE BLOCK */}
        <div className="relative flex justify-center">
          {/* decorative blob */}
          <div
            className="absolute -top-6 -left-6 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "#ff7b2b" }}
          />
          {/* badge */}
          <div
            className="absolute -bottom-4 -right-4 z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full shadow-lg text-white font-bold text-center"
            style={{ background: "#ff7b2b", fontFamily: "sans-serif" }}
          >
            <span className="text-xl leading-none">8+</span>
            <span className="text-xs leading-tight mt-0.5">Years of<br />Taste</span>
          </div>

          <img
            src="9.webp"
            alt="Restaurant Food"
            className="relative rounded-3xl shadow-2xl object-cover w-full max-w-md hover:scale-[1.02] transition-transform duration-500"
            style={{ border: "4px solid #fff0e6" }}
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="space-y-6">
          <p
            className="text-gray-600 leading-relaxed text-base sm:text-lg"
            style={{ fontFamily: "sans-serif" }}
          >
            Welcome to our restaurant — where <span className="font-semibold" style={{ color: "#ff7b2b" }}>taste meets tradition</span>.
            We believe great food is more than just a meal; it's an experience that brings people together.
            Every dish is prepared fresh using hand-picked, high-quality ingredients and recipes passed down through generations.
          </p>

          <p className="text-gray-500 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "sans-serif" }}>
            From hearty Indian thalis and aromatic biryanis to crispy starters, Chinese specials, and artisan pizzas —
            our diverse menu is crafted to delight every palate. Our mission is simple:
            deliver <span className="font-semibold" style={{ color: "#ff7b2b" }}>fresh, flavourful, and soul-satisfying food</span> every single time.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-4 rounded-2xl transition hover:shadow-md"
                style={{ background: "#fff", border: "1px solid #ffe8d6" }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl text-xl shrink-0"
                  style={{ background: "#fff0e6" }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm" style={{ fontFamily: "sans-serif" }}>{f.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: "sans-serif" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="#menu"
              className="inline-block px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #ff7b2b, #ff5a00)",
                fontFamily: "sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Explore Our Menu →
            </a>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div
        className="max-w-7xl mx-auto rounded-3xl grid grid-cols-2 sm:grid-cols-4 gap-0 mb-20 overflow-hidden shadow-lg"
        style={{ background: "#ff7b2b" }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center justify-center py-8 px-4 text-white ${
              i !== stats.length - 1 ? "border-r border-white/20" : ""
            }`}
          >
            <span className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>{s.value}</span>
            <span className="text-xs sm:text-sm mt-1 text-white/80 tracking-wide uppercase" style={{ fontFamily: "sans-serif" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── REVIEWS ── */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full"
            style={{ color: "#ff7b2b", background: "#fff0e6", fontFamily: "sans-serif" }}
          >
            Customer Reviews
          </span>
          <h3
            className="text-3xl sm:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            What Our Guests Are Saying
          </h3>
        </div>

        {/* Review Cards — scrollable on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="relative p-6 rounded-3xl flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                background: "#fff",
                border: i === activeReview ? "2px solid #ff7b2b" : "2px solid #ffe8d6",
                cursor: "pointer",
              }}
              onClick={() => setActiveReview(i)}
            >
              {/* quote mark */}
              <span
                className="absolute top-4 right-6 text-5xl font-bold select-none"
                style={{ color: "#fff0e6", fontFamily: "serif", lineHeight: 1 }}
              >
                "
              </span>

              <StarRating count={r.rating} />

              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                "{r.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto pt-2" style={{ borderTop: "1px solid #fff0e6" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: "#ff7b2b", fontFamily: "sans-serif" }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm" style={{ fontFamily: "sans-serif" }}>{r.name}</p>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "sans-serif" }}>
                    {r.location} · {r.dish}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveReview(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeReview ? "28px" : "8px",
                height: "8px",
                background: i === activeReview ? "#ff7b2b" : "#ffd0b0",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <section id="about" className="bg-[#FFF7F2] py-20 px-6 lg:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//         <div className="flex justify-center">
//           <div className="relative group">
           
//             <div className="absolute -top-6 -left-6 w-full h-full bg-[#ff7b2b] rounded-3xl opacity-20 group-hover:opacity-30 transition"></div>

         
//             <img
//               src="9.jpeg"
//               alt="Restaurant Food"
//               className="relative rounded-3xl shadow-xl hover:scale-105 transition duration-500"
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-6">

//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//             About <span className="text-[#ff7b2b]">Our Restaurant</span>
//           </h2>

//           <p className="text-gray-600 leading-relaxed text-lg">
//             Welcome to our restaurant where taste meets tradition.  
//             We serve freshly prepared meals made with high-quality ingredients 
//             and authentic recipes to bring you the best dining experience.
//           </p>

//           <p className="text-gray-600 leading-relaxed">
//             From delicious Indian thalis to Chinese, pizza, and starters, our menu 
//             offers something for everyone. Our mission is simple – deliver 
//             <span className="text-[#ff7b2b] font-semibold"> fresh, tasty, and satisfying food</span> 
//             every time you order.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-2 gap-6 pt-4">

//             <div className="flex items-center gap-3">
//               <div className="bg-[#ff7b2b] text-white p-3 rounded-full">
//                 🍽
//               </div>
//               <p className="font-semibold text-gray-800">
//                 Fresh Ingredients
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="bg-[#ff7b2b] text-white p-3 rounded-full">
//                 🚀
//               </div>
//               <p className="font-semibold text-gray-800">
//                 Fast Delivery
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="bg-[#ff7b2b] text-white p-3 rounded-full">
//                 ⭐
//               </div>
//               <p className="font-semibold text-gray-800">
//                 Best Quality
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="bg-[#ff7b2b] text-white p-3 rounded-full">
//                 ❤️
//               </div>
//               <p className="font-semibold text-gray-800">
//                 Customer Love
//               </p>
//             </div>

//           </div>

//           <div className="pt-6">
//             <a
//               href="#menu"
//               className="inline-block px-8 py-3 bg-[#ff7b2b] text-white rounded-full font-semibold shadow-lg hover:bg-transparent hover:text-[#ff7b2b] border-2 border-[#ff7b2b] transition"
//             >
//               Explore Menu
//             </a>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;