import React, { useState, useRef } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const MENU_ITEMS = [
  { id: 1, name: 'Angoori Rasmalai', image: 'rasmalai.webp', price: 250, category: 'Dessert' },
  { id: 2, name: 'Indian Tea Time Snacks', image: 'poha.webp', price: 30, category: 'Meal' },
  { id: 4, name: 'South Indian Masala Dosa', image: 'masala-dosa.webp', price: 40, category: 'Meal' },
  { id: 5, name: 'Malai Kabab', image: 'MalaiKabab.webp', price: 150, category: 'Starter' },
  { id: 6, name: 'Rajasthan Dal Bati Churma', image: 'dal-bati.webp', price: 100, category: 'Thali' },
  { id: 7, name: 'Hakka Noodles', image: 'HakkaNoodles.webp', price: 100, category: 'Chinese' },
  { id: 8, name: 'Manchurian Noodles', image: 'ManchurianNoodles.webp', price: 120, category: 'Chinese' },
  { id: 9, name: 'Veg Manchurian', image: 'Manchurian.webp', price: 100, category: 'Chinese' },
  { id: 10, name: 'Chinese Bhel', image: 'ChineeseBhell.webp', price: 80, category: 'Chinese' },
  { id: 11, name: 'Paneer Chilli', image: 'PaneerChilli.webp', price: 120, category: 'Chinese' },
  { id: 12, name: 'Paneer 65', image: 'Paneer65.webp', price: 150, category: 'Chinese' },
  { id: 13, name: 'Chana Masala', image: 'ChannaMasala.webp', price: 100, category: 'Main Course' },
  { id: 14, name: 'Dal Fry', image: 'DalFry.webp', price: 100, category: 'Main Course' },
  { id: 15, name: 'Dal Tadka', image: 'DalTadka.webp', price: 120, category: 'Main Course' },
  { id: 16, name: 'Dal Palak', image: 'DalPalak.webp', price: 140, category: 'Main Course' },
  { id: 17, name: 'Dal Makhni', image: 'DalMakhni.webp', price: 140, category: 'Main Course' },
  { id: 18, name: 'Veg Handi', image: 'VegHandi.webp', price: 120, category: 'Main Course' },
  { id: 19, name: 'Sev Tamatar', image: 'SevTamatar.webp', price: 100, category: 'Main Course' },
  { id: 20, name: 'Plain Rice', image: 'PlainRice.webp', price: 60, category: 'Rice' },
  { id: 21, name: 'Jeera Rice', image: 'JeeraRice.webp', price: 70, category: 'Rice' },
  { id: 22, name: 'Matar Pulao', image: 'MatarPulao.webp', price: 90, category: 'Rice' },
  { id: 23, name: 'Veg Fried Rice', image: 'VegFriedRice.webp', price: 100, category: 'Rice' },
  { id: 24, name: 'Afghani Paneer Tikka', image: 'AfghaniPaneerTikka.webp', price: 140, category: 'Starter' },
  { id: 25, name: 'Malai Paneer Tikka', image: 'MalaiPaneerTikka.webp', price: 140, category: 'Starter' },
  { id: 26, name: 'Hariyali Paneer Tikka', image:'HariyaliPaneerTikka.webp', price: 120, category: 'Starter' },
  { id: 27, name: 'Dahi Kabab', image:'DahiKabab.webp', price:120, category:'Starter' },
  { id: 28, name: 'Hara Bhara Kabab', image: 'HaraBharaKabab.webp', price: 150, category: 'Starter' },
  { id: 29, name: 'Pav Bhaji', image: 'pav-bhaji.webp', price: 70, category: 'Starter' },
  
  { id: 30, name: 'Mix Veg Frenky Roll', image: 'MixVegFrenkyRoll.webp', price: 90, category: 'Starter' },
  { id: 31, name: 'Cheese Pizza', image: 'CheesePizza.webp', price: 120, category: 'Pizza' },
  { id: 32, name: 'Margherita Pizza', image: 'MargheritaPizza.webp', price: 120, category: 'Pizza' },
  { id: 33, name: 'Mushroom Pizza', image: 'MushroomPizza.webp', price: 150, category: 'Pizza' },
  { id: 34, name: 'Mexican Pizza', image: 'MexicanPizza.webp', price: 120, category: 'Pizza' },
  { id: 35, name: 'Paneer Pizza', image: 'PaneerPizza.webp', price: 150, category: 'Pizza' },
  { id: 36, name: 'Tandoori Paneer Pizza', image: 'TandooriPaneerPizza.webp', price: 140, category:'Pizza' },
  { id: 37, name: 'Chocolate Ice Cream', image: 'ChocolateIceCream.webp', price: 50, category: 'Ice cream' },
  { id: 38, name: 'Vanilla Ice Cream', image: 'VanillaIceCream.webp', price: 50, category: 'Ice cream' },
  { id: 39, name: 'Strawberry Ice Cream', image: 'StrawberryIceCream.webp', price: 50, category: 'Ice cream' },
  { id: 40, name:'American Nuts', image: 'AmericanNuts.webp', price: 50, category: 'Ice cream'},
  { id: 41, name:'White House', image: 'WhiteHouse.webp', price: 50, category: 'Ice cream'},
  { id: 42, name:'Raj Bhog', image: 'RajBhog.webp', price: 50, category: 'Ice cream'},
  { id: 43, name:'Mawa Malai', image:'MavaMalai.webp', price:50, category: 'Ice cream'},
  { id: 44, name:'Jai ful', image:'Jaiful.webp', price:50, category:'Ice cream'},
  { id: 45, name:'Afghan Dry Fruit', image:'AfghanDryFruit.webp', price:50, category:'Ice cream'},
  { id: 46, name:'Gulab Jamun', image:'GulabJamun.webp', price:150, category:'Dessert'},
  { id: 47, name:'Special Thali', image:'SpecialThali.webp', price:140, category:'Thali'},
  {id:48, name:'Shri Kishan Special Thali', image:'KishanSpecial.webp', price:200, category:'Thali'},
];

const CATEGORY_ORDER = ['Starter','Dessert','Main Course','Thali','Chinese','Pizza','Rice','Ice cream'];

const MenuCard = ({ item }) => {
  return (
    <div className="relative w-64">
      <div className="absolute -top-30 -right-25">
        <div className="relative w-60 h-60">
          <svg className="absolute inset-0" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="98" fill="none" stroke="#F97316" strokeWidth="6" strokeDasharray="18 18" strokeLinecap="round"/>
          </svg>

          <div className="absolute inset-3 rounded-full overflow-hidden bg-white">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

      <div className="bg-[#FFF1E8] rounded-2xl px-6 pt-36 pb-8 shadow-sm">
        <p className="text-[#F97316] font-semibold text-lg">{item.category}</p>
        <h3 className="text-gray-900 font-bold text-xl mt-1">{item.name}</h3>
        <div className="mt-4 text-gray-900 font-extrabold text-3xl">₹{item.price}</div>
      </div>
    </div>
  );
};

const MenuSection = ({ title, items }) => {
  return (
    <div className="mb-36">
      <Slide direction="left" triggerOnce>
        <div className="flex items-center justify-between mb-36">
          <h3 className="text-4xl md:text-4xl font-bold">{title}</h3>
        </div>
      </Slide>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-48">
        {items.map((item, index) => (
          <Fade key={item.id} delay={index * 100} triggerOnce>
            <MenuCard item={item} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Starter');
  const menuSectionRef = useRef(null);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    
    // Auto-scroll to menu items section to show the first item
    if (menuSectionRef.current) {
      const isMobile = window.innerWidth < 768;
      // Account for the sticky header height on mobile
      const yOffset = isMobile ? -140 : -250; 
      const y = menuSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="bg-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Fade triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900">
              Our <span className="text-[#F97316]">Menu</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A wide variety of delicious and authentic dishes to choose from.
            </p>
          </div>
        </Fade>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORY_ORDER.map((cat, index) => (
            <Fade key={cat} delay={index * 100} triggerOnce>
              <button
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#F97316] text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            </Fade>
          ))}
        </div>

        <div ref={menuSectionRef}>
          <MenuSection
            title={selectedCategory}
            items={MENU_ITEMS.filter(item => item.category === selectedCategory)}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
