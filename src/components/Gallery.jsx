import React from 'react';

// Define gallery items with column/row spans to create the mosaic.
// Replace `src` values with your own image paths (public/ or src/assets).
const GALLERY_ITEMS = [
  { id: 1, src: 'gallery-1.jpg', cols: 2, rows: 2 }, // big tree
  { id: 2, src: 'gallery-2.jpg', cols: 1, rows: 2 }, // tree roots
  { id: 3, src: 'gallery-3.jpg', cols: 1, rows: 2 }, // beach
  { id: 4, src: 'gallery-4.jpg', cols: 1, rows: 2 }, // bird
  { id: 5, src: 'gallery-5.jpg', cols: 1, rows: 2 }, // desert
  { id: 6, src: 'gallery-6.jpg', cols: 1, rows: 2 }, // night sky
  { id: 7, src: 'gallery-7.jpg', cols: 2, rows: 2 }, // dunes
  { id: 8, src: 'gallery-8.jpg', cols: 1, rows: 1 }, // grass
];

const GalleryItem = ({ src, cols, rows }) => (
  <div
    className={`relative overflow-hidden rounded-xl col-span-${cols} row-span-${rows}`}
    style={{}}
  >
    <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
  </div>
);

const Gallery = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Gallery</h2>
        {/* Grid with fixed auto-rows to make row-span predictable */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          style={{ gridAutoRows: '160px' }}
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
