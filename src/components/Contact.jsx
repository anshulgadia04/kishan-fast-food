import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been submitted.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#FFEFE6] px-6 py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-[#ff7b2b]">Contact</span>{" "}
          <span className="text-gray-900">Us</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
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
                  className="w-full rounded-full border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-full border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-full border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl border-2 border-[#ff7b2b]/50 focus:border-[#ff7b2b] px-5 py-3 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#ff7b2b] text-white font-semibold rounded-full py-3 hover:bg-[#e66e25] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl shadow-sm bg-white">
              <iframe
                title="Shree Kishan Fast Food And Restaurant"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.9958129555475!2d74.26349317513825!3d24.45093057819883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966355f4477c94f%3A0xc7cfbf29e5b7406f!2sShree%20Kishan%20Fast%20Food%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1769620133631!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  Shree Kishan Fast Food And Restaurant
                  <br />
                  Kanore (313604), Udaipur, Rajasthan, India
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">
                  <a
                    href="tel:+8233787433"
                    className="hover:text-[#ff7b2b]"
                  >
                    +91 8233787433
                  </a>
                </p>
              </div>

              <div className="sm:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:karm8233@gmail.com"
                    className="hover:text-[#ff7b2b]"
                  >
                    karm8233@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-[#ff7b2b]">
              <a href="#" aria-label="Facebook" className="hover:opacity-80">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/shri_kishan_fast_food?igsh=MTVhMWlrb2NpenVteQ==" aria-label="Instagram" className="hover:opacity-80">
                <Instagram size={20} />
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;