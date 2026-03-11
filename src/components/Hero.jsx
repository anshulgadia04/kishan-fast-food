import React from 'react';

const Hero = () => {
  return (
    <section id ="home" className="bg-[#FFEFE6] px-6 py-12 lg:px-16 lg:py-8 pb-32 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-[#ff7b2b]">Quick</span>{' '}
            <span className="text-gray-900">and</span>{' '}
            <span className="text-[#ff7b2b]">Tasty</span>
            <br />
            <span className="text-[#ff7b2b]">Food Delivered</span>{' '}
            <span className="text-gray-900">with</span>{' '}
            <br />
            <span className="text-[#ff7b2b]">a Dash of</span>{' '}
            <span className="text-gray-900">Speed</span>
          </h2>

          {/* 🔥 Premium Sub Text */}
          <div className="border-l-4 border-[#ff7b2b] pl-5 animate-fadeUp">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              <span className="text-[#ff7b2b] font-semibold">Are you hungry?</span>{' '}
              Don’t wait — let’s start your order and 
              <span className="text-[#ff7b2b] font-semibold"> explore our delicious menu</span>!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-[#ff7b2b] cursor-pointer text-white font-semibold rounded-full hover:bg-transparent hover:text-[#ff7b2b] hover:border-2 hover:border-[#ff7b2b] transition-all duration-300 shadow-lg hover:scale-105">
              Order Now
            </button>

            <button className="px-8 py-3 bg-transparent border-2 border-[#ff7b2b] cursor-pointer text-[#ff7b2b] font-semibold rounded-full hover:bg-[#ff7b2b] hover:text-white transition-all duration-300 hover:scale-105">
              Track Order
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500">
            <img src="home-thali.webp" alt="Food Thali" />
          </div>
        </div>

      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 1s ease-out forwards;
          }
        `}
      </style>

    </section>
  );
};

export default Hero;

// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="bg-[#FFEFE6] px-6 py-12 lg:px-16 lg:py-8 pb-32 lg:pb-28">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div className="space-y-8">
//           <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
//             <span className="text-[#ff7b2b]">Quick</span>{' '}
//             <span className="text-gray-900">and</span>{' '}
//             <span className="text-[#ff7b2b]">Tasty</span>
//             <br />
//             <span className="text-[#ff7b2b]">Food Delivered</span>{' '}
//             <span className="text-gray-900">with</span>{' '}
//             <br />
//             <span className="text-[#ff7b2b]">a Dash of</span>{' '}
//             <span className="text-gray-900">Speed</span>
//           </h2>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="px-8 py-3 bg-[#ff7b2b] cursor-pointer text-white font-semibold rounded-full hover:bg-transparent hover:text-[#ff7b2b] hover:border-2 hover:border-[#ff7b2b] transition-colors shadow-md">
//               Order Now
//             </button>
//             <button className="px-8 py-3 bg-transparent border-2 border-[#ff7b2b] cursor-pointer text-[#ff7b2b] font-semibold rounded-full hover:bg-[#ff7b2b] hover:text-white transition-colors">
//               Track Order
//             </button>
//           </div>
//         </div>

//         {/* Right Image - Food Thali */}
//         <div className="flex justify-center lg:justify-end">
//           <div className="relative w-full max-w-md lg:max-w-lg">
//             {/* Placeholder for food image - You'll need to add your actual image */}
//             <img src="home-thali.png" alt="Food Thali"/>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
