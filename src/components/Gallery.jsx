import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

const galleryItems = [
  { id: 1,  src: "entrance.webp", label: "Our Entrance" },
  { id: 2,  src: "2.webp", label: "Cultural Special" },
  { id: 3,  src: "3.webp", label: "Scenic View" },
  { id: 4,  src: "4.webp", label: "Night view of Entrance" },
  { id: 5,  src: "5.webp", label: "Photo Booth" },
  { id: 6,  src: "6.webp", label: "Interior" },
  { id: 7,  src: "7.webp", label: "View" },
  { id: 8,  src: "8.webp", label: "Evening Vibe" },
  { id: 9,  src: "9.webp", label: "Cultural" },
  { id: 10, src: "10.webp", label: "Entrance" },
  { id: 11, src: "11.webp", label: "Lighting" },
  { id: 12, src: "12.webp", label: "Ice cream" },
  { id: 13, src: "13.webp", label: "View" },
  { id: 14, src: "14.webp", label: "Sunset View" },
  { id: 15, src: "15.webp", label: "Entrance" },
  { id: 16, src: "16.webp", label: "Special Combo" },
  { id: 17, src: "17.webp", label: "Family Time" },
  { id: 18, src: "18.webp", label: "Family Gathering" },
];

/* ── CARD ── */
function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07 }}
      whileHover={{ scale: 1.04 }}
      className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
      style={{ marginBottom: 16 }}
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full object-cover rounded-2xl transition duration-500 group-hover:scale-110"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-end p-4">
        <p className="opacity-0 group-hover:opacity-100 text-xs font-semibold bg-white/90 text-gray-800 px-3 py-1 rounded-full shadow">
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}

/* ── LIGHTBOX ── */
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="absolute left-5 text-white text-3xl"
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
      >
        ‹
      </button>

      <img
        src={item.src}
        alt=""
        className="max-h-[85vh] rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute right-5 text-white text-3xl"
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
      >
        ›
      </button>

      <p className="absolute bottom-6 text-white text-sm">
        {idx + 1} / {items.length}
      </p>
    </motion.div>
  );
}

/* ── MAIN ── */
export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: headerRef });
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const visible = showAll ? galleryItems : galleryItems.slice(0, 9);

  const navigate = useCallback((dir) => {
    if (!selected) return;
    const idx = galleryItems.findIndex((i) => i.id === selected.id);
    const next = (idx + dir + galleryItems.length) % galleryItems.length;
    setSelected(galleryItems[next]);
  }, [selected]);

  return (
    <section id="gallery" className="py-24 bg-[#fff7f1]">

      {/* HEADER */}
      <motion.div
        ref={headerRef}
        style={{ y: headerY }}
        className="text-center mb-16"
      >
        <span className="text-[#ff7a2f] bg-orange-100 px-5 py-1 rounded-full text-sm font-semibold">
          📸 Gallery
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          A Feast for <span className="text-[#ff7a2f] italic">Eyes</span>
        </h2>

        <p className="text-gray-500 mt-3">
          Every photo tells a story 🍽️
        </p>
      </motion.div>

      {/* GRID */}
      <div className="px-4 md:px-10 lg:px-20">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
          {visible.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={setSelected}
            />
          ))}
        </div>

        {/* LOAD MORE */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-[#ff7a2f] text-white rounded-full font-semibold hover:bg-[#ff5c00] transition"
            >
              View More Photos
            </button>
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <Lightbox
            item={selected}
            items={galleryItems}
            onClose={() => setSelected(null)}
            onNav={navigate}
          />
        )}
      </AnimatePresence>

    </section>
  );
}