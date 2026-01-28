import React from 'react';

// You can freely add/edit items here; category drives placement.
const MENU_ITEMS = [
  { id: 1, name: 'Angoori Rasmalai', image: 'rasmalai.png', price: 250, category: 'Dessert' },
  { id: 2, name: 'Indian Tea Time Snacks', image: 'poha.png', price: 250, category: 'Meal' },
  { id: 2, name: 'Indian Tea Time Snacks', image: 'poha.png', price: 250, category: 'Meal' },
  { id: 2, name: 'Indian Tea Time Snacks', image: 'poha.png', price: 250, category: 'Meal' },
  { id: 4, name: 'South Indian Masala Dosa', image: 'masala-dosa.png', price: 150, category: 'Meal' },
  { id: 5, name: 'Gujarati Pav Bhaji', image: 'pav-bhaji.png', price: 250, category: 'Fast Food' },
  { id: 6, name: 'Rajasthan Dal Bati Churma', image: 'dal-bati.png', price: 450, category: 'Thali' },
];

const CATEGORY_ORDER = ['Dessert', 'Fast Food', 'Meal', 'Thali'];

const MenuCard = ({ item }) => {
  return (
    <div className="relative w-64">
      
      {/* Floating big image at corner */}
      <div className="absolute -top-30 -right-25">
        <div className="relative w-60 h-60">
          
          {/* Dashed ring */}
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


// const MenuSection = ({ title, items }) => {
//   return (
//     <div className="relative mb-40">
      
//       {/* Dashed border around entire section */}
//       <svg
//         className="absolute inset-0 w-full h-full"
//         viewBox="0 0 1000 600"
//         preserveAspectRatio="none"
//       >
//         <rect
//           x="10"
//           y="10"
//           width="980"
//           height="580"
//           rx="32"
//           ry="32"
//           fill="none"
//           stroke="#F97316"
//           strokeWidth="4"
//           strokeDasharray="18 18"
//           strokeLinecap="round"
//         />
//       </svg>

//       {/* Section content */}
//       <div className="relative z-10 px-12 py-16">
        
//         {/* Title + dashed underline */}
//         <div className="mb-32">
//           <h3 className="text-4xl font-bold">{title}</h3>

//           <svg className="mt-4" width="120" height="10" viewBox="0 0 120 10">
//             <line
//               x1="0"
//               y1="5"
//               x2="120"
//               y2="5"
//               stroke="#F97316"
//               strokeWidth="6"
//               strokeDasharray="14 12"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-48">
//           {items.map((item) => (
//             <MenuCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


const Menu = () => {
  // Group items by category based on the category property.
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: MENU_ITEMS.filter((i) => i.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-[#ff7b2b]">Regular</span> Menu
            </h2>
            <p className="mt-2 text-gray-400 text-xs md:text-sm">There Are Our Regular Menus. You Can Order Anything You Like.</p>
          </div>
        </div>

        {grouped.map((g) => (
          <MenuSection key={g.category} title={g.category} items={g.items} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
