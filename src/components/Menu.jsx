import React, { useState } from 'react';

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
  const [selectedCategory, setSelectedCategory] = useState('All');

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

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === 'All'
                ? 'bg-orange-500 text-white shadow-md scale-105'
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
                  ? 'bg-orange-500 text-white shadow-md scale-105'
                  : 'bg-gray-200 hover:bg-orange-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Display */}
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
    </section>
  );
};

export default Menu;




// import React, { useState, useRef, useCallback } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";

// /* ─────────────────────────────────────────────
//    DATA
// ───────────────────────────────────────────── */
// const MENU_ITEMS = [
//   { id: 1,  name: "Angoori Rasmalai",       image: "rasmalai.png",             price: 250, category: "Dessert",     badge: "Popular" },
//   { id: 2,  name: "Indian Tea Time Snacks", image: "poha.png",                 price: 250, category: "Meal",        badge: "Favourite" },
//   { id: 4,  name: "South Indian Masala Dosa",image:"masala-dosa.png",          price: 150, category: "Meal",        badge: null },
//   { id: 5,  name: "Gujarati Pav Bhaji",     image: "pav-bhaji.png",            price: 250, category: "Fast Food",   badge: "Popular" },
//   { id: 6,  name: "Rajasthan Dal Bati Churma",image:"dal-bati.png",            price: 100, category: "Thali",       badge: "Chef's Pick" },
//   { id: 7,  name: "Hakka Noodles",          image: "Hakka.png",                price: 100, category: "Chinese",     badge: null },
//   { id: 8,  name: "Manchurian Noodles",     image: "ManchurianNoodles.png",    price: 120, category: "Chinese",     badge: null },
//   { id: 9,  name: "Veg Manchurian",         image: "Manchurian.png",           price: 100, category: "Chinese",     badge: "Popular" },
//   { id: 10, name: "Chinese Bhel",           image: "ChineseBhel.png",          price: 80,  category: "Chinese",     badge: null },
//   { id: 11, name: "Paneer Chilli",          image: "PaneerChilli.png",         price: 120, category: "Chinese",     badge: null },
//   { id: 12, name: "Paneer 65",              image: "Paneer65.png",             price: 150, category: "Chinese",     badge: "Popular" },
//   { id: 13, name: "Chana Masala",           image: "ChanaMasala.png",          price: 120, category: "Main Course", badge: null },
//   { id: 14, name: "Dal Fry",               image: "DalFry.png",               price: 120, category: "Main Course", badge: null },
//   { id: 15, name: "Dal Tadka",             image: "DalTadka.png",             price: 140, category: "Main Course", badge: "Popular" },
//   { id: 16, name: "Dal Palak",             image: "DalPalak.png",             price: 150, category: "Main Course", badge: null },
//   { id: 17, name: "Dal Makhni",            image: "DalMakhni.png",            price: 120, category: "Main Course", badge: "Chef's Pick" },
//   { id: 18, name: "Veg Handi",             image: "VegHandi.png",             price: 120, category: "Main Course", badge: null },
//   { id: 19, name: "Sev Tamatar",           image: "SevTamatar.png",           price: 80,  category: "Main Course", badge: null },
//   { id: 20, name: "Plain Rice",            image: "PlainRice.png",            price: 60,  category: "Rice",        badge: null },
//   { id: 21, name: "Jeera Rice",            image: "JeeraRice.png",            price: 70,  category: "Rice",        badge: null },
//   { id: 22, name: "Matar Pulao",           image: "MatarPulao.png",           price: 90,  category: "Rice",        badge: null },
//   { id: 23, name: "Veg Fried Rice",        image: "VegFriedRice.png",         price: 100, category: "Rice",        badge: "Popular" },
//   { id: 24, name: "Afghani Paneer Tikka",  image: "AfghaniPaneerTikka.png",   price: 180, category: "Starter",     badge: "Chef's Pick" },
//   { id: 25, name: "Malai Paneer Tikka",    image: "MalaiPaneerTikka.png",     price: 170, category: "Starter",     badge: null },
//   { id: 26, name: "Hariyali Paneer Tikka", image: "HariyaliPaneerTikka.png",  price: 170, category: "Starter",     badge: null },
//   { id: 27, name: "Dahi Kabab",            image: "DahiKabab.png",            price: 150, category: "Starter",     badge: "Popular" },
//   { id: 28, name: "Hara Bhara Kabab",      image: "HaraBharaKabab.png",       price: 150, category: "Starter",     badge: null },
//   { id: 29, name: "Malai Kabab",           image: "MalaiKabab.png",           price: 160, category: "Starter",     badge: null },
//   { id: 30, name: "Mix Veg Frenky Roll",   image: "MixVegFrenkyRoll.png",     price: 120, category: "Starter",     badge: null },
//   { id: 31, name: "Cheese Pizza",          image: "CheesePizza.png",          price: 150, category: "Pizza",       badge: null },
//   { id: 32, name: "Margherita Pizza",      image: "MargheritaPizza.png",      price: 160, category: "Pizza",       badge: "Popular" },
//   { id: 33, name: "Mushroom Pizza",        image: "MushroomPizza.png",        price: 170, category: "Pizza",       badge: null },
//   { id: 34, name: "Mexican Pizza",         image: "MexicanPizza.png",         price: 180, category: "Pizza",       badge: null },
//   { id: 35, name: "Paneer Pizza",          image: "PaneerPizza.png",          price: 180, category: "Pizza",       badge: "Chef's Pick" },
//   { id: 36, name: "Tandoori Paneer Pizza", image: "TandooriPaneerPizza.png",  price: 190, category: "Pizza",       badge: null },
// ];

// const CATEGORY_ORDER = ["Starter", "Dessert", "Fast Food", "Main Course", "Thali", "Chinese", "Pizza", "Rice", "Meal"];

// const CATEGORY_ICONS = {
//   Starter: "🥗", Dessert: "🍮", "Fast Food": "🍔", "Main Course": "🍛",
//   Thali: "🍱", Chinese: "🥢", Pizza: "🍕", Rice: "🍚", Meal: "🍽️",
// };

// /* top 5 highlight items shown by default */
// const TOP_PICKS = [1, 5, 6, 24, 32];

// /* ─────────────────────────────────────────────
//    MENU CARD
// ───────────────────────────────────────────── */
// const BADGE_COLORS = {
//   "Popular":    { bg: "#fff0e6", color: "#ff7b2b" },
//   "Chef's Pick":{ bg: "#fef9c3", color: "#b45309" },
//   "Favourite":  { bg: "#fce7f3", color: "#be185d" },
// };

// function MenuCard({ item, index, compact = false }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 36 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5, delay: (index % 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(255,123,43,0.18)" }}
//       style={{
//         background: "#fff",
//         borderRadius: 20,
//         overflow: "hidden",
//         border: "1.5px solid #ffe8d6",
//         cursor: "default",
//         transition: "box-shadow .3s",
//         position: "relative",
//       }}
//     >
//       {/* badge */}
//       {item.badge && (
//         <div style={{
//           position: "absolute", top: 10, left: 10, zIndex: 10,
//           background: BADGE_COLORS[item.badge]?.bg || "#fff0e6",
//           color: BADGE_COLORS[item.badge]?.color || "#ff7b2b",
//           fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
//           padding: "3px 10px", borderRadius: 999, textTransform: "uppercase",
//         }}>
//           {item.badge}
//         </div>
//       )}

//       {/* image */}
//       <div style={{ background: "#fff7f2", height: compact ? 140 : 170, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
//         <motion.img
//           src={item.image}
//           alt={item.name}
//           loading="lazy"
//           whileHover={{ scale: 1.08 }}
//           transition={{ duration: 0.4 }}
//           style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
//         />
//       </div>

//       {/* body */}
//       <div style={{ padding: compact ? "12px 14px 14px" : "14px 16px 18px" }}>
//         <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#ff7b2b", textTransform: "uppercase", marginBottom: 4 }}>
//           {CATEGORY_ICONS[item.category]} {item.category}
//         </p>
//         <h4 style={{ fontWeight: 800, color: "#1a1a1a", fontSize: compact ? 14 : 15, lineHeight: 1.35, marginBottom: 10, fontFamily: "Georgia, serif" }}>
//           {item.name}
//         </h4>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <span style={{ fontWeight: 900, fontSize: compact ? 18 : 20, color: "#ff7b2b", fontFamily: "Georgia, serif" }}>
//             ₹{item.price}
//           </span>
//           <a
//             href={`https://wa.me/918233787433?text=${encodeURIComponent(`Hi! I'd like to order: ${item.name} (₹${item.price})`)}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               background: "linear-gradient(135deg,#ff7b2b,#ff5500)",
//               color: "#fff", fontSize: 11, fontWeight: 700,
//               padding: "6px 14px", borderRadius: 999, textDecoration: "none",
//               letterSpacing: "0.05em", whiteSpace: "nowrap",
//               boxShadow: "0 4px 12px rgba(255,123,43,.3)",
//             }}
//           >
//             Order →
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────────
//    FULL MENU MODAL / DRAWER
// ───────────────────────────────────────────── */
// function FullMenuModal({ onClose }) {
//   const [activeTab, setActiveTab] = useState("Starter");
//   const tabItems = MENU_ITEMS.filter((i) => i.category === activeTab);
//   const scrollRef = useRef(null);

//   /* close on Escape */
//   React.useEffect(() => {
//     const fn = (e) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", fn);
//     return () => window.removeEventListener("keydown", fn);
//   }, [onClose]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       style={{
//         position: "fixed", inset: 0, zIndex: 999,
//         background: "rgba(15,5,0,0.82)", backdropFilter: "blur(12px)",
//         display: "flex", alignItems: "flex-end", justifyContent: "center",
//       }}
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         exit={{ y: "100%" }}
//         transition={{ type: "spring", damping: 28, stiffness: 260 }}
//         style={{
//           width: "100%", maxWidth: 1100,
//           background: "#fff7f2",
//           borderRadius: "28px 28px 0 0",
//           maxHeight: "92vh",
//           display: "flex", flexDirection: "column",
//           overflow: "hidden",
//         }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* modal header */}
//         <div style={{ padding: "22px 24px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
//           <div>
//             <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", color: "#ff7b2b", textTransform: "uppercase" }}>Full Menu</p>
//             <h3 style={{ fontSize: 22, fontWeight: 900, color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
//               Explore Every Dish
//             </h3>
//           </div>
//           <button
//             onClick={onClose}
//             style={{ width: 40, height: 40, borderRadius: "50%", background: "#ffe8d6", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7b2b" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
//           </button>
//         </div>

//         {/* category tab strip */}
//         <div style={{ overflowX: "auto", padding: "16px 24px 0", flexShrink: 0 }}>
//           <div style={{ display: "flex", gap: 8, width: "max-content" }}>
//             {CATEGORY_ORDER.map((cat) => {
//               const count = MENU_ITEMS.filter((i) => i.category === cat).length;
//               if (!count) return null;
//               const active = activeTab === cat;
//               return (
//                 <motion.button
//                   key={cat}
//                   whileTap={{ scale: 0.94 }}
//                   onClick={() => setActiveTab(cat)}
//                   style={{
//                     padding: "8px 18px",
//                     borderRadius: 999,
//                     border: "2px solid",
//                     borderColor: active ? "#ff7b2b" : "#ffe0cc",
//                     background: active ? "#ff7b2b" : "#fff",
//                     color: active ? "#fff" : "#888",
//                     fontSize: 12, fontWeight: 700,
//                     cursor: "pointer", whiteSpace: "nowrap",
//                     boxShadow: active ? "0 4px 16px rgba(255,123,43,.3)" : "none",
//                     transition: "all .22s ease",
//                   }}
//                 >
//                   {CATEGORY_ICONS[cat]} {cat}
//                   <span style={{ marginLeft: 6, fontSize: 10, opacity: 0.7 }}>({count})</span>
//                 </motion.button>
//               );
//             })}
//           </div>
//           {/* scrollable indicator */}
//           <div style={{ height: 2, background: "#ffe0cc", borderRadius: 999, margin: "12px 0 0" }} />
//         </div>

//         {/* items grid — scrollable */}
//         <div ref={scrollRef} style={{ overflowY: "auto", flex: 1, padding: "20px 24px 32px" }}>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, x: 24 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -16 }}
//               transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//                 gap: 16,
//               }}
//             >
//               {tabItems.map((item, i) => (
//                 <MenuCard key={item.id} item={item} index={i} compact />
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// /* ─────────────────────────────────────────────
//    CATEGORY PILL (homepage quick access)
// ───────────────────────────────────────────── */
// function CategoryPill({ cat, onClick }) {
//   const count = MENU_ITEMS.filter((i) => i.category === cat).length;
//   return (
//     <motion.button
//       whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(255,123,43,.22)" }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       style={{
//         display: "flex", flexDirection: "column", alignItems: "center",
//         gap: 6, padding: "14px 18px", borderRadius: 18,
//         background: "#fff", border: "1.5px solid #ffe8d6",
//         cursor: "pointer", transition: "box-shadow .25s",
//         minWidth: 84,
//       }}
//     >
//       <span style={{ fontSize: 26 }}>{CATEGORY_ICONS[cat]}</span>
//       <span style={{ fontSize: 11, fontWeight: 800, color: "#1a1a1a", textAlign: "center", lineHeight: 1.3 }}>{cat}</span>
//       <span style={{ fontSize: 10, color: "#ff7b2b", fontWeight: 700 }}>{count} items</span>
//     </motion.button>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN MENU COMPONENT
// ───────────────────────────────────────────── */
// export default function Menu() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalTab, setModalTab]   = useState("Starter");
//   const sectionRef = useRef(null);
//   const inView = useInView(sectionRef, { once: true, margin: "-80px" });

//   const openModal = useCallback((tab = "Starter") => {
//     setModalTab(tab);
//     setShowModal(true);
//     document.body.style.overflow = "hidden";
//   }, []);

//   const closeModal = useCallback(() => {
//     setShowModal(false);
//     document.body.style.overflow = "";
//   }, []);

//   const topPicks = TOP_PICKS.map((id) => MENU_ITEMS.find((i) => i.id === id)).filter(Boolean);

//   return (
//     <>
//       <style>{`
//         @keyframes shimmerBg {
//           0%,100%{background-position:0% 50%} 50%{background-position:100% 50%}
//         }
//         @keyframes floatBlob {
//           0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-16px) scale(1.04)}
//         }
//         ::-webkit-scrollbar { width: 5px; height: 5px; }
//         ::-webkit-scrollbar-track { background: #fff0e6; border-radius: 99px; }
//         ::-webkit-scrollbar-thumb { background: #ff7b2b; border-radius: 99px; }
//       `}</style>

//       <section
//         id="menu"
//         ref={sectionRef}
//         style={{ background: "linear-gradient(180deg,#fff7f1 0%,#fff2e8 100%)", position: "relative", overflow: "hidden" }}
//         className="py-20"
//       >
//         {/* bg blobs */}
//         <div style={{ position:"absolute", top:"5%", right:"-6%", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,123,43,.09) 0%,transparent 70%)", animation:"floatBlob 14s ease-in-out infinite", pointerEvents:"none" }} />
//         <div style={{ position:"absolute", bottom:"8%", left:"-4%", width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,180,80,.10) 0%,transparent 70%)", animation:"floatBlob 18s ease-in-out infinite reverse", pointerEvents:"none" }} />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

//           {/* ── HEADER ── */}
//           <motion.div
//             initial={{ opacity:0, y:28 }}
//             animate={inView ? { opacity:1, y:0 } : {}}
//             transition={{ duration:.65, ease:[.22,1,.36,1] }}
//             style={{ textAlign:"center", marginBottom:"3.5rem" }}
//           >
//             <motion.span
//               initial={{ opacity:0, scale:.8 }}
//               animate={inView ? { opacity:1, scale:1 } : {}}
//               transition={{ duration:.45, delay:.05 }}
//               style={{ display:"inline-block", background:"#fff0e6", color:"#ff7b2b", fontSize:11, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", padding:"6px 20px", borderRadius:999, marginBottom:14 }}
//             >
//               🍽️ Our Menu
//             </motion.span>

//             <h2 style={{ fontSize:"clamp(2rem,5vw,3.4rem)", fontWeight:900, color:"#1a1a1a", lineHeight:1.1, marginBottom:12, fontFamily:"Georgia, serif" }}>
//               Crafted with <span style={{ color:"#ff7b2b", fontStyle:"italic" }}>Love & Spice</span>
//             </h2>
//             <p style={{ color:"#999", fontSize:15, maxWidth:440, margin:"0 auto" }}>
//               From sizzling starters to sweet finishes — there's something for every craving.
//             </p>
//           </motion.div>

//           {/* ── CATEGORY PILLS ── */}
//           <motion.div
//             initial={{ opacity:0, y:20 }}
//             animate={inView ? { opacity:1, y:0 } : {}}
//             transition={{ duration:.55, delay:.15 }}
//             style={{ marginBottom:"3rem" }}
//           >
//             <p style={{ textAlign:"center", fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#bbb", marginBottom:16 }}>
//               Browse by Category
//             </p>
//             <div style={{ display:"flex", gap:10, overflowX:"auto", paddingBottom:8, justifyContent:"center", flexWrap:"wrap" }}>
//               {CATEGORY_ORDER.map((cat) => (
//                 <CategoryPill key={cat} cat={cat} onClick={() => openModal(cat)} />
//               ))}
//             </div>
//           </motion.div>

//           {/* ── TOP PICKS LABEL ── */}
//           <motion.div
//             initial={{ opacity:0, y:16 }}
//             animate={inView ? { opacity:1, y:0 } : {}}
//             transition={{ duration:.5, delay:.22 }}
//             style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24, flexWrap:"wrap", gap:12 }}
//           >
//             <div>
//               <h3 style={{ fontSize:20, fontWeight:900, color:"#1a1a1a", fontFamily:"Georgia, serif" }}>
//                 ⭐ Top Picks
//               </h3>
//               <p style={{ fontSize:12, color:"#bbb", marginTop:2 }}>Our most loved dishes — handpicked for you</p>
//             </div>
//             <motion.button
//               whileHover={{ scale:1.04, boxShadow:"0 12px 32px rgba(255,123,43,.35)" }}
//               whileTap={{ scale:.97 }}
//               onClick={() => openModal("Starter")}
//               style={{
//                 padding:"11px 28px", borderRadius:999, border:"none",
//                 background:"linear-gradient(135deg,#ff7b2b,#ff5500)",
//                 color:"#fff", fontWeight:800, fontSize:13, cursor:"pointer",
//                 letterSpacing:"0.04em",
//                 boxShadow:"0 6px 20px rgba(255,123,43,.32)",
//                 display:"flex", alignItems:"center", gap:8,
//               }}
//             >
//               <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
//               View Full Menu
//             </motion.button>
//           </motion.div>

//           {/* ── TOP 5 CARDS ── */}
//           <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:20, marginBottom:"3rem" }}>
//             {topPicks.map((item, i) => (
//               <MenuCard key={item.id} item={item} index={i} />
//             ))}
//           </div>

//           {/* ── CTA BANNER ── */}
//           <motion.div
//             initial={{ opacity:0, y:24 }}
//             whileInView={{ opacity:1, y:0 }}
//             viewport={{ once:true }}
//             transition={{ duration:.6, ease:[.22,1,.36,1] }}
//             style={{
//               borderRadius:24, padding:"28px 32px",
//               background:"linear-gradient(135deg,#ff7b2b 0%,#ff4f00 100%)",
//               display:"flex", flexWrap:"wrap", alignItems:"center",
//               justifyContent:"space-between", gap:20,
//               boxShadow:"0 16px 48px rgba(255,123,43,.35)",
//               position:"relative", overflow:"hidden",
//             }}
//           >
//             {/* shimmer streak */}
//             <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg,transparent 40%,rgba(255,255,255,.08) 50%,transparent 60%)", backgroundSize:"200% 100%", animation:"shimmerBg 3s linear infinite", pointerEvents:"none" }} />

//             <div style={{ position:"relative" }}>
//               <p style={{ color:"rgba(255,255,255,.75)", fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:6 }}>Explore Everything</p>
//               <h4 style={{ color:"#fff", fontSize:"clamp(1.1rem,2.5vw,1.5rem)", fontWeight:900, fontFamily:"Georgia, serif", lineHeight:1.3 }}>
//                 {MENU_ITEMS.length}+ Dishes Waiting for You
//               </h4>
//             </div>

//             <motion.button
//               whileHover={{ scale:1.06, background:"#fff" }}
//               whileTap={{ scale:.96 }}
//               onClick={() => openModal("Starter")}
//               style={{
//                 padding:"13px 32px", borderRadius:999, border:"2.5px solid rgba(255,255,255,.7)",
//                 background:"rgba(255,255,255,.15)", backdropFilter:"blur(8px)",
//                 color:"#fff", fontWeight:800, fontSize:14, cursor:"pointer",
//                 letterSpacing:"0.05em", transition:"background .25s, color .25s",
//                 position:"relative",
//               }}
//               onMouseEnter={e => { e.currentTarget.style.color="#ff7b2b"; }}
//               onMouseLeave={e => { e.currentTarget.style.color="#fff"; }}
//             >
//               See All Dishes →
//             </motion.button>
//           </motion.div>

//         </div>
//       </section>

//       {/* ── FULL MENU MODAL ── */}
//       <AnimatePresence>
//         {showModal && (
//           <FullMenuModal
//             initialTab={modalTab}
//             onClose={closeModal}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }