import React, { useState } from 'react';

const MENU_ITEMS = [
  { id: 1, name: 'Angoori Rasmalai', image: 'rasmalai.png', price: 250, category: 'Dessert' },
  { id: 2, name: 'Indian Tea Time Snacks', image: 'poha.png', price: 250, category: 'Meal' },
  { id: 4, name: 'South Indian Masala Dosa', image: 'masala-dosa.png', price: 150, category: 'Meal' },
  { id: 5, name: 'Gujarati Pav Bhaji', image: 'pav-bhaji.png', price: 250, category: 'Fast Food' },
  { id: 6, name: 'Rajasthan Dal Bati Churma', image: 'dal-bati.png', price: 100, category: 'Thali' },
  { id: 7, name: 'Hakka Noodles', image: 'Hakka.png', price: 100, category: 'Chinese' },
  { id: 8, name: 'Manchurian Noodles', image: 'ManchurianNoodles.png', price: 120, category: 'Chinese' },
  { id: 9, name: 'Veg Manchurian', image: 'Manchurian.png', price: 100, category: 'Chinese' },
  { id: 10, name: 'Chinese Bhel', image: 'ChineseBhel.png', price: 80, category: 'Chinese' },
  { id: 11, name: 'Paneer Chilli', image: 'PaneerChilli.png', price: 120, category: 'Chinese' },
  { id: 12, name: 'Paneer 65', image: 'Paneer65.png', price: 150, category: 'Chinese' },
  { id: 13, name: 'Chana Masala', image: 'ChanaMasala.png', price: 120, category: 'Main Course' },
  { id: 14, name: 'Dal Fry', image: 'DalFry.png', price: 120, category: 'Main Course' },
  { id: 15, name: 'Dal Tadka', image: 'DalTadka.png', price: 140, category: 'Main Course' },
  { id: 16, name: 'Dal Palak', image: 'DalPalak.png', price: 150, category: 'Main Course' },
  { id: 17, name: 'Dal Makhni', image: 'DalMakhni.png', price: 120, category: 'Main Course' },
  { id: 18, name: 'Veg Handi', image: 'VegHandi.png', price: 120, category: 'Main Course' },
  { id: 19, name: 'Sev Tamatar', image: 'SevTamatar.png', price: 80, category: 'Main Course' },
  { id: 20, name: 'Plain Rice', image: 'PlainRice.png', price: 60, category: 'Rice' },
  { id: 21, name: 'Jeera Rice', image: 'JeeraRice.png', price: 70, category: 'Rice' },
  { id: 22, name: 'Matar Pulao', image: 'MatarPulao.png', price: 90, category: 'Rice' },
  { id: 23, name: 'Veg Fried Rice', image: 'VegFriedRice.png', price: 100, category: 'Rice' },
  { id: 24, name: 'Afghani Paneer Tikka', image: 'AfghaniPaneerTikka.png', price: 180, category: 'Starter' },
  { id: 25, name: 'Malai Paneer Tikka', image: 'MalaiPaneerTikka.png', price: 170, category: 'Starter' },
  { id: 26, name: 'Hariyali Paneer Tikka', image: 'HariyaliPaneerTikka.png', price: 170, category: 'Starter' },
  { id: 27, name: 'Dahi Kabab', image: 'DahiKabab.png', price: 150, category: 'Starter' },
  { id: 28, name: 'Hara Bhara Kabab', image: 'HaraBharaKabab.png', price: 150, category: 'Starter' },
  { id: 29, name: 'Malai Kabab', image: 'MalaiKabab.png', price: 160, category: 'Starter' },
  { id: 30, name: 'Mix Veg Frenky Roll', image: 'MixVegFrenkyRoll.png', price: 120, category: 'Starter' },
  { id: 31, name: 'Cheese Pizza', image: 'CheesePizza.png', price: 150, category: 'Pizza' },
  { id: 32, name: 'Margherita Pizza', image: 'MargheritaPizza.png', price: 160, category: 'Pizza' },
  { id: 33, name: 'Mushroom Pizza', image: 'MushroomPizza.png', price: 170, category: 'Pizza' },
  { id: 34, name: 'Mexican Pizza', image: 'MexicanPizza.png', price: 180, category: 'Pizza' },
  { id: 35, name: 'Paneer Pizza', image: 'PaneerPizza.png', price: 180, category: 'Pizza' },
  { id: 36, name: 'Tandoori Paneer Pizza', image: 'TandooriPaneerPizza.png', price: 190, category: 'Pizza' },

];

const CATEGORY_ORDER = ['Starter','Dessert', 'Fast Food', 'Main Course', 'Thali','Chinese','Pizza','Rice'];

const MenuCard = ({ item }) => {
  return (
    <div className="relative w-64">
      
      <div className="absolute -top-30 -right-25">
        <div className="relative w-60 h-60">

          <svg className="absolute inset-0" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="98"
              fill="none"
              stroke="#F97316"
              strokeWidth="6"
              strokeDasharray="18 18"
              strokeLinecap="round"
            />
          </svg>

          {/* Dish image */}
          <div className="absolute inset-3 rounded-full overflow-hidden bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Thin card */}
      <div className="bg-[#FFF1E8] rounded-2xl px-6 pt-36 pb-8 shadow-sm">
        <p className="text-[#F97316] font-semibold text-lg">
          {item.category}
        </p>

        <h3 className="text-gray-900 font-bold text-xl mt-1">
          {item.name}
        </h3>

        <div className="mt-4 text-gray-900 font-extrabold text-3xl">
          ₹{item.price}
        </div>
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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: MENU_ITEMS.filter((i) => i.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#ff7b2b]">Regular</span> Menu
          </h2>
          <p className="mt-2 text-gray-400 text-xs md:text-sm">
            There Are Our Regular Menus. You Can Order Anything You Like.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === 'All'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 hover:bg-orange-100'
            }`}
          >
            All
          </button>

          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 hover:bg-orange-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {
          selectedCategory === 'All'
            ? grouped.map((g) => (
                <MenuSection
                  key={g.category}
                  title={g.category}
                  items={g.items}
                />
              ))
            : (
                <MenuSection
                  title={selectedCategory}
                  items={MENU_ITEMS.filter(
                    (item) => item.category === selectedCategory
                  )}
                />
              )
        }

      </div>
    </section>
  );
};

export default Menu;
