import React, { useState, useRef } from 'react';

const MENU_ITEMS = [
  { id: 1, name: 'Angoori Rasmalai', image: 'rasmalai.webp', price: 250, category: 'Dessert' },
  { id: 2, name: 'Indian Tea Time Snacks', image: 'poha.webp', price: 250, category: 'Meal' },
  { id: 4, name: 'South Indian Masala Dosa', image: 'masala-dosa.webp', price: 150, category: 'Meal' },
  { id: 5, name: 'Gujarati Pav Bhaji', image: 'pav-bhaji.webp', price: 250, category: 'Fast Food' },
  { id: 6, name: 'Rajasthan Dal Bati Churma', image: 'dal-bati.webp', price: 100, category: 'Thali' },
  { id: 7, name: 'Hakka Noodles', image: 'HakkaNoodles.webp', price: 100, category: 'Chinese' },
  { id: 8, name: 'Manchurian Noodles', image: 'ManchurianNoodles.webp', price: 120, category: 'Chinese' },
  { id: 9, name: 'Veg Manchurian', image: 'Manchurian.webp', price: 100, category: 'Chinese' },
  { id: 10, name: 'Chinese Bhel', image: 'ChineeseBhell.webp', price: 80, category: 'Chinese' },
  { id: 11, name: 'Paneer Chilli', image: 'PaneerChilli.webp', price: 120, category: 'Chinese' },
  { id: 12, name: 'Paneer 65', image: 'Paneer65.webp', price: 150, category: 'Chinese' },
  { id: 13, name: 'Chana Masala', image: 'ChannaMasala.webp', price: 120, category: 'Main Course' },
  { id: 14, name: 'Dal Fry', image: 'DalFry.webp', price: 120, category: 'Main Course' },
  { id: 15, name: 'Dal Tadka', image: 'DalTadka.webp', price: 140, category: 'Main Course' },
  { id: 16, name: 'Dal Palak', image: 'DalPalak.webp', price: 150, category: 'Main Course' },
  { id: 17, name: 'Dal Makhni', image: 'DalMakhni.webp', price: 120, category: 'Main Course' },
  { id: 18, name: 'Veg Handi', image: 'VegHandi.webp', price: 120, category: 'Main Course' },
  { id: 19, name: 'Sev Tamatar', image: 'SevTamatar.webp', price: 80, category: 'Main Course' },
  { id: 20, name: 'Plain Rice', image: 'PlainRice.webp', price: 60, category: 'Rice' },
  { id: 21, name: 'Jeera Rice', image: 'JeeraRice.webp', price: 70, category: 'Rice' },
  { id: 22, name: 'Matar Pulao', image: 'MatarPulao.webp', price: 90, category: 'Rice' },
  { id: 23, name: 'Veg Fried Rice', image: 'VegFriedRice.webp', price: 100, category: 'Rice' },
  { id: 24, name: 'Afghani Paneer Tikka', image: 'AfghaniPaneerTikka.webp', price: 180, category: 'Starter' },
  { id: 25, name: 'Malai Paneer Tikka', image: 'MalaiPaneerTikka.webp', price: 170, category: 'Starter' },
  { id: 26, name: 'Hariyali Paneer Tikka', image:'HariyaliPaneerTikka.webp', price: 170, category: 'Starter' },
  { id: 27, name: 'Dahi Kabab', image:'DahiKabab.webp', price:150, category:'Starter' },
  { id: 28, name: 'Hara Bhara Kabab', image: 'HaraBharaKabab.webp', price: 150, category: 'Starter' },
  { id: 29, name: 'Malai Kabab', image: 'MalaiKabab.webp', price: 160, category: 'Starter' },
  { id: 30, name: 'Mix Veg Frenky Roll', image: 'MixVegFrenkyRoll.webp', price: 120, category: 'Starter' },
  { id: 31, name: 'Cheese Pizza', image: 'CheesePizza.webp', price: 150, category: 'Pizza' },
  { id: 32, name: 'Margherita Pizza', image: 'MargheritaPizza.webp', price: 160, category: 'Pizza' },
  { id: 33, name: 'Mushroom Pizza', image: 'MushroomPizza.webp', price: 170, category: 'Pizza' },
  { id: 34, name: 'Mexican Pizza', image: 'MexicanPizza.webp', price: 180, category: 'Pizza' },
  { id: 35, name: 'Paneer Pizza', image: 'PaneerPizza.webp', price: 180, category: 'Pizza' },
  { id: 36, name: 'Tandoori Paneer Pizza', image: 'TandooriPaneerPizza.webp', price: 190, category:'Pizza' },
  { id: 37, name: 'Chocolate Ice Cream', image: 'ChocolateIceCream.webp', price: 120, category: 'Ice cream' },
  { id: 38, name: 'Vanilla Ice Cream', image: 'VanillaIceCream.webp', price: 120, category: 'Ice cream' },
  { id: 39, name: 'Strawberry Ice Cream', image: 'StrawberryIceCream.webp', price: 120, category: 'Ice cream' },
  { id: 40, name:'American Nuts', image: 'AmericanNuts.webp', price: 100, category: 'Ice cream'},
  { id: 41, name:'White House', image: 'WhiteHouse.webp', price: 120, category: 'Ice cream'},
  { id: 42, name:'Raj Bhog', image: 'RajBhog.webp', price: 150, category: 'Ice cream'},
  { id: 43, name:'Mawa Malai', image:'MavaMalai.webp', price:50, category: 'Ice cream'},
  { id: 44, name:'Jai ful', image:'Jaiful.webp', price:50, category:'Ice cream'},
  { id: 45, name:'Afghan Dry Fruit', image:'AfghanDryFruit.webp', price:60, category:'Ice cream'}
];

const CATEGORY_ORDER = ['Starter','Dessert','Fast Food','Main Course','Thali','Chinese','Pizza','Rice','Ice cream'];

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
      <div className="flex items-center justify-between mb-36">
        <h3 className="text-4xl md:text-4xl font-bold">{title}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-48">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
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
    <section id="menu" className="py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#ff7b2b]">Regular</span> Menu
          </h2>
          <p className="mt-2 text-gray-400 text-xs md:text-sm">
            There Are Our Regular Menus. You Can Order Anything You Like.
          </p>
        </div>

        {/* Category Buttons - Sticky on mobile only */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm py-3 -mx-4 px-4 mb-14 shadow-[0_4px_12px_rgba(0,0,0,0.05)] md:static md:z-auto md:bg-transparent md:backdrop-blur-none md:py-0 md:mx-0 md:shadow-none">
          <div className="flex gap-3 overflow-x-auto px-2 py-2 pb-1 scrollbar-hide md:flex-wrap md:overflow-x-visible md:gap-4 md:pb-0">
            {CATEGORY_ORDER.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full transition cursor-pointer whitespace-nowrap flex-shrink-0 md:whitespace-normal md:flex-shrink ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-md scale-105'
                    : 'bg-gray-200 hover:bg-orange-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Display */}
        <div ref={menuSectionRef}>
          <MenuSection
            title={selectedCategory === 'All' ? 'All Items' : selectedCategory}
            items={
              selectedCategory === 'All'
                ? MENU_ITEMS
                : MENU_ITEMS.filter(
                    (item) => item.category === selectedCategory
                  )
            }
          />
        </div>

      </div>
    </section>
  );
};

export default Menu;
