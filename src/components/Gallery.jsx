import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

const galleryItems = [
  { id: 1,  src: "entrance.webp", label: "Our Entrance",    category: "ambience" },
  { id: 2,  src: "2.webp",       label: "Cultural Special",  category: "ambiance"     },
  { id: 3,  src: "3.webp",       label: "Scenic View",   category: "ambiance"     },
  { id: 4,  src: "4.webp",       label: "Night view of Entrance",     category: "ambience" },
  { id: 5,  src: "5.webp",       label: "Photo Booth",         category: "ambiance"     },
  { id: 6,  src: "6.webp",       label: "Interior",        category: "ambience" },
  { id: 7,  src: "7.webp",       label: "Starters",        category: "food"     },
  { id: 8,  src: "8.webp",       label: "Evening Vibe",    category: "ambience" },
  { id: 9,  src: "9.webp",       label: "Cultural",           category: "ambiance"     },
  { id: 10, src: "10.webp",      label: "Entrance",        category: "ambiance"     },
  { id: 11, src: "11.webp",      label: "Lighting",         category: "ambience" },
  { id: 12, src: "12.webp",      label: "Pizza",           category: "food"     },
  { id: 13, src: "13.webp",      label: "Drinks",          category: "food"     },
  { id: 14, src: "14.webp",      label: "Sunset View",      category: "ambience" },
  { id: 15, src: "15.webp",      label: "Special Combo",   category: "food"     },
];

const FILTERS = ["all", "food", "ambience"];

/* ── individual card ── */
function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
      style={{ marginBottom: 16 }}
      onClick={() => onClick(item)}
    >
      {/* shimmer loader */}
      <div
        className="absolute inset-0 z-0 rounded-2xl"
        style={{
          background: "linear-gradient(90deg, #ffe8d6 25%, #fff0e6 50%, #ffe8d6 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmerLoad 1.4s infinite",
        }}
      />

      <motion.img
        src={item.src}
        loading="lazy"
        alt={item.label}
        className="relative z-10 w-full object-cover rounded-2xl"
        style={{ display: "block" }}
        variants={{ hover: { scale: 1.08 } }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* gradient overlay */}
      <motion.div
        className="absolute inset-0 z-20 rounded-2xl flex flex-col justify-end p-4"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }}
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="text-white font-semibold text-sm tracking-wide"
          initial={{ y: 10, opacity: 0 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {item.label}
        </motion.p>
        <motion.span
          className="text-xs mt-1 font-medium uppercase tracking-widest"
          style={{ color: "#ff9f50" }}
          initial={{ y: 10, opacity: 0 }}
          variants={{ hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {item.category}
        </motion.span>
      </motion.div>

      {/* corner zoom icon */}
      <motion.div
        className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,123,43,0.9)", backdropFilter: "blur(4px)" }}
        initial={{ scale: 0, opacity: 0 }}
        variants={{ hover: { scale: 1, opacity: 1 } }}
        transition={{ duration: 0.25, delay: 0.05 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── lightbox ── */
function Lightbox({ item, items, onClose, onNav }) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose, onNav]);

  const idx = items.findIndex((i) => i.id === item.id);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(10,5,0,0.92)", backdropFilter: "blur(16px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* prev */}
      <button
        className="absolute left-4 sm:left-8 z-10 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,123,43,0.85)", border: "none", cursor: "pointer" }}
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      {/* image */}
      <motion.div
        key={item.id}
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.86, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "min(88vw, 860px)", width: "100%" }}
      >
        {/* glow behind image */}
        <div style={{ position: "absolute", inset: -24, background: "radial-gradient(ellipse at center, rgba(255,123,43,0.18) 0%, transparent 70%)", borderRadius: 32, pointerEvents: "none" }} />

        <img
          src={item.src}
          alt={item.label}
          style={{ width: "100%", maxHeight: "78vh", objectFit: "contain", borderRadius: 20, boxShadow: "0 32px 80px rgba(0,0,0,0.6)", display: "block" }}
        />

        {/* caption bar */}
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: "white", fontWeight: 700, fontSize: 15 }}>{item.label}</span>
          <span style={{ color: "#ff9f50", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(255,123,43,0.18)", padding: "3px 10px", borderRadius: 999 }}>{item.category}</span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>{idx + 1} / {items.length}</span>
        </div>
      </motion.div>

      {/* next */}
      <button
        className="absolute right-4 sm:right-8 z-10 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,123,43,0.85)", border: "none", cursor: "pointer" }}
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* close */}
      <button
        style={{ position: "absolute", top: 20, right: 20, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.2)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)" }}
        onClick={onClose}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>

      {/* dot strip */}
      <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
        {items.map((it, i) => (
          <div key={it.id} style={{ width: i === idx ? 22 : 7, height: 7, borderRadius: 999, background: i === idx ? "#ff7b2b" : "rgba(255,255,255,0.25)", transition: "all .3s ease", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); /* navigate to index */ }} />
        ))}
      </div>
    </motion.div>
  );
}

/* ── main component ── */
export default function Gallery() {
  const [filter, setFilter]     = useState("all");
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll]   = useState(false);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);
  const visible  = showAll ? filtered : filtered.slice(0, 9);

  const navigate = useCallback((dir) => {
    if (!selected) return;
    const idx = filtered.findIndex((i) => i.id === selected.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setSelected(filtered[next]);
  }, [selected, filtered]);

  return (
    <section
      id="gallery"
      style={{
        background: "linear-gradient(180deg, #fff7f1 0%, #fff2e8 50%, #fff7f1 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-24"
    >
      <style>{`
        @keyframes shimmerLoad {
          0%   { background-position: -200% 0 }
          100% { background-position:  200% 0 }
        }
        @keyframes floatBg {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes rotateSlow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.7)} }
      `}</style>

      {/* ── decorative bg blobs ── */}
      <div style={{ position: "absolute", top: "5%", left: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,123,43,0.10) 0%, transparent 70%)", animation: "floatBg 12s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "-4%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,180,100,0.12) 0%, transparent 70%)", animation: "floatBg 16s ease-in-out infinite reverse", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", right: "3%", width: 120, height: 120, borderRadius: "50%", border: "2px dashed rgba(255,123,43,0.15)", animation: "rotateSlow 22s linear infinite", pointerEvents: "none" }} />

      {/* ── HEADER ── */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY }}
        className="text-center px-4 mb-14"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "inline-block", background: "#fff0e6", color: "#ff7b2b", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 20px", borderRadius: 999, marginBottom: 16 }}
        >
          📸 Our Gallery
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.1, marginBottom: 12, fontFamily: "Georgia, serif" }}
        >
          A Feast for the{" "}
          <span style={{ color: "#ff7b2b", fontStyle: "italic" }}>Eyes</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "#999", fontSize: 16, maxWidth: 440, margin: "0 auto 32px" }}
        >
          Step inside — every photo tells a story of flavour, warmth, and craftsmanship.
        </motion.p>

        {/* filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false); }}
              whileTap={{ scale: 0.93 }}
              style={{
                padding: "8px 22px",
                borderRadius: 999,
                border: "2px solid",
                borderColor: filter === f ? "#ff7b2b" : "#ffe0cc",
                background: filter === f ? "#ff7b2b" : "#fff",
                color: filter === f ? "#fff" : "#999",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.05em",
                textTransform: "capitalize",
                transition: "all .25s ease",
                boxShadow: filter === f ? "0 6px 20px rgba(255,123,43,.3)" : "none",
              }}
            >
              {f === "all" ? "✨ All" : f === "food" ? "🍽️ Food" : "🏮 Ambience"}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* ── MASONRY GRID ── */}
      <div className="px-4 sm:px-8 lg:px-20">
        <motion.div
          layout
          className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5"
          style={{ columnGap: 14 }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onClick={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── VIEW MORE ── */}
        <AnimatePresence>
          {!showAll && filtered.length > 9 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center mt-14 gap-3"
            >
              <p style={{ color: "#bbb", fontSize: 13 }}>
                Showing {visible.length} of {filtered.length} photos
              </p>

              {/* progress bar */}
              <div style={{ width: 180, height: 4, background: "#ffe0cc", borderRadius: 999, overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", background: "linear-gradient(90deg, #ff7b2b, #ff9f50)", borderRadius: 999 }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(visible.length / filtered.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 16px 40px rgba(255,123,43,.4)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowAll(true)}
                style={{
                  marginTop: 8,
                  padding: "14px 40px",
                  borderRadius: 999,
                  border: "none",
                  background: "linear-gradient(135deg, #ff7b2b, #ff5500)",
                  color: "white",
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  boxShadow: "0 8px 28px rgba(255,123,43,.35)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
                Load More Photos
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selected && (
          <Lightbox
            item={selected}
            items={filtered}
            onClose={() => setSelected(null)}
            onNav={navigate}
          />
        )}
      </AnimatePresence>
    </section>
  );
}


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const galleryItems = [
//   { id: 1, src: 'entrance.png'},
//   { id: 2, src: '2.jpeg' },
//   { id: 3, src: '3.jpeg' },
//   { id: 4, src: '4.jpeg' },
//   { id: 5, src: '5.jpeg' },
//   { id: 6, src: '6.jpeg' },
//   { id: 7, src: '7.jpeg' },
//   { id: 8, src: '8.jpeg' },
//   { id: 9, src: '9.jpeg' },
//   { id: 10, src: '10.jpeg' },
//   { id: 11, src: '11.jpeg' },
//   { id: 12, src: '12.jpeg' },
//   { id: 13, src: '13.jpeg' },
//   { id: 14, src: '14.jpeg' },
//   { id: 15, src: '15.jpeg' }
// ];

// export default function Event() {

//   const [selected, setSelected] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const visibleImages = showAll ? galleryItems : galleryItems.slice(0, 12);

//   useEffect(() => {
//     const esc = (e) => {
//       if (e.key === "Escape") setSelected(null);
//     };
//     window.addEventListener("keydown", esc);
//     return () => window.removeEventListener("keydown", esc);
//   }, []);

//   return (
//     <section id = "gallery" className="py-24 bg-[#fff7f1]">

//       {/* Heading */}
//       <div className="text-center mb-16">
//         <span className="text-[#ff7a2f] bg-orange-100 px-5 py-1 rounded-full text-sm font-semibold">
//           Gallery
//         </span>

//         <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-4">
//           Restaurant <span className="text-[#ff7a2f] italic">Ambience</span>
//         </h2>

//         <p className="text-gray-500 mt-3">
//           Experience the vibe before the taste 🍽️
//         </p>
//       </div>

//       {/* Gallery */}
//       <div className="px-4 md:px-10 lg:px-20">

//         <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5 space-y-5">

//           {visibleImages.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.04 }}
//               className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
//               onClick={() => setSelected(item.src)}
//             >
//               <img
//                 src={item.src}
//                 loading="lazy"
//                 alt=""
//                 className="w-full object-cover rounded-2xl transition duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500 flex items-center justify-center">
//                 <span className="opacity-0 group-hover:opacity-100 text-white text-sm">
//                   VIEW
//                 </span>
//               </div>
//             </motion.div>
//           ))}

//         </div>

//         {/* View More Button */}
//         {!showAll && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={() => setShowAll(true)}
//               className="px-8 py-3 bg-[#ff7a2f] text-white rounded-full font-semibold hover:bg-[#ff5c00] transition duration-300 shadow-lg"
//             >
//               View More Photos
//             </button>
//           </div>
//         )}

//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.img
//               src={selected}
//               className="max-h-[90vh] rounded-3xl shadow-2xl"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               onClick={(e) => e.stopPropagation()}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// }


