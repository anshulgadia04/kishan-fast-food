import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: 'truck.webp',
      title: 'Fast Delivery',
      description: 'Promise To Deliver Within 30 Mins',
    },
    {
      id: 2,
      icon: 'fresh.webp',
      title: 'Fresh Food',
      description: 'Your Food Will Be Delivered 100% Fresh To Your Home.',
    },
    {
      id: 3,
      icon: 'box.webp',
      title: 'Free Delivery',
      description: 'Your Food Delivery Is Absolutely Free. No Cost Just Order',
    },
  ];

  return (
    <section className="bg-white px-6 py-12 lg:px-16 lg:py-10">
      <div className="max-w-7xl mx-auto -mt-24 lg:-mt-28 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Fade key={feature.id} delay={index * 200} triggerOnce>
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-md leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
