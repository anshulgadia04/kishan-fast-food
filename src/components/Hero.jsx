import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section id ="home" className="bg-[#FFEFE6] px-6 py-12 lg:px-16 lg:py-8 pb-32 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <Slide direction="left" triggerOnce>
        <div className="space-y-8">

          {/* Heading */}
          <Fade cascade damping={0.1} triggerOnce>
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
          </Fade>

          {/* 🔥 Premium Sub Text */}
          <Fade delay={500} triggerOnce>
          <div className="border-l-4 border-[#ff7b2b] pl-5">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              <span className="text-[#ff7b2b] font-semibold">Are you hungry?</span>{' '}
              Don’t wait — let’s start your order and 
              <span className="text-[#ff7b2b] font-semibold"> explore our delicious menu</span>!
            </p>
          </div>
          </Fade>

          {/* Buttons */}
          <Fade delay={1000} triggerOnce>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => window.location.href = '#menu'} className="px-8 py-3 bg-[#ff7b2b] cursor-pointer text-white font-semibold rounded-full hover:bg-transparent hover:text-[#ff7b2b] hover:border-2 hover:border-[#ff7b2b] transition-all duration-300 shadow-lg hover:scale-105">
              Explore Menu
            </button>

            <button onClick={() => window.location.href = '#contact'} className="px-8 py-3 bg-transparent border-2 border-[#ff7b2b] cursor-pointer text-[#ff7b2b] font-semibold rounded-full hover:bg-[#ff7b2b] hover:text-white transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
          </Fade>

        </div>
        </Slide>

        {/* Right Image */}
        <Slide direction="right" triggerOnce>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500">
            <img src="home-thali.webp" alt="Food Thali" />
          </div>
        </div>
        </Slide>

      </div>

    </section>
  );
};

export default Hero;