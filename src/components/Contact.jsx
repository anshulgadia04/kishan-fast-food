import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit handler; replace with API if needed
    alert('Thanks! Your message has been submitted.');
  };

  return (
    <section id="contact" className="bg-[#FFEFE6] px-6 py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8"><span className="text-[#ff7b2b]">Contact</span> <span className="text-gray-900">Us</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Form Card */}
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-sm p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full bg-white border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full bg-white border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-full bg-white border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-2xl bg-white border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
              />

              <button type="submit" className="w-full bg-[#ff7b2b] text-white font-semibold rounded-full py-3 shadow-sm hover:bg-[#e66e25] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map and contact info */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-sm bg-white">
              <iframe
                title="Kishan Fast Food Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019722977116!2d-122.41941518468274!3d37.77492977975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5b4d0b5f%3A0x0!2sRestaurant!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">123 Foodie Street, City, State, Zip</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
              <div className="sm:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@kishanfastfood.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#ff7b2b]">
              <a aria-label="Facebook" href="#" className="hover:opacity-80"><Facebook size={20} /></a>
              <a aria-label="Instagram" href="#" className="hover:opacity-80"><Instagram size={20} /></a>
              <a aria-label="Twitter" href="#" className="hover:opacity-80"><Twitter size={20} /></a>
              <a aria-label="LinkedIn" href="#" className="hover:opacity-80"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
