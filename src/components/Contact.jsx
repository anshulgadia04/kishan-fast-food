import React, { useState, useEffect, useRef } from "react";
import { Instagram, Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronRight } from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";

/* ─── floating particle ─── */
const Particle = ({ style }) => (
  <div className="absolute rounded-full pointer-events-none" style={style} />
);

const INFO_CARDS = [
  {
    icon: <MapPin size={22} />,
    label: "Visit Us",
    value: "Kanore (313604), Udaipur, Rajasthan",
    sub: "India",
    href: "https://maps.google.com",
    color: "#ff7b2b",
  },
  {
    icon: <Phone size={22} />,
    label: "Call Us",
    value: "+91 8233787433",
    sub: "Available 9 AM – 11 PM",
    href: "tel:+918233787433",
    color: "#ff7b2b",
  },
  {
    icon: <Mail size={22} />,
    label: "Email Us",
    value: "karm8233@gmail.com",
    sub: "Reply within 24 hours",
    href: "mailto:karm8233@gmail.com",
    color: "#ff7b2b",
  },
  {
    icon: <Clock size={22} />,
    label: "Opening Hours",
    value: "Mon – Sun: 9 AM – 11 PM",
    sub: "Open all week",
    href: null,
    color: "#ff7b2b",
  },
];

const PARTICLES = [
  { width: 120, height: 120, top: "8%", left: "5%", opacity: 0.07, background: "#ff7b2b", filter: "blur(40px)", animationDuration: "8s" },
  { width: 80,  height: 80,  top: "70%", left: "2%",  opacity: 0.1,  background: "#ff7b2b", filter: "blur(28px)", animationDuration: "11s" },
  { width: 60,  height: 60,  top: "30%", right: "4%", opacity: 0.08, background: "#ffb380", filter: "blur(20px)", animationDuration: "9s" },
  { width: 200, height: 200, bottom: "5%", right: "6%", opacity: 0.05, background: "#ff7b2b", filter: "blur(60px)", animationDuration: "14s" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const ownerNumber = "918233787433";

  const text = [
  `🍔 *SHRI KISHAN FAST FOOD & RESTAURANT*`,
  ``,
  `Hello! A new customer inquiry has come in from your website.`,
  ``,
  `👤 *Customer Details:*`,
  `• Name: ${form.name}`,
  form.phone ? `• Phone: ${form.phone}` : `• Phone: Not provided`,
  ``,
  `💬 *Message:*`,
  `"${form.message || "No message provided."}"`,
  ``,
  `📅 ${new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  })}`,
  ``,
  `Kindly get in touch with the customer at your convenience. 😊`,
]
  .filter(Boolean)
  .join("\n");
  
  const waUrl = `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodeURIComponent(text)}`;

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#FFF7F2] py-20 px-4 sm:px-6 lg:px-8">
      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} style={{ ...p, animation: `float ${p.animationDuration} infinite ease-in-out` }} />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-[#ff7b2b] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              We'd Love to <span className="text-[#ff7b2b] italic">Hear From You</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mt-4">
              Whether you want to make a reservation, ask about our menu, or just say hello — we're just a message away.
            </p>
          </div>
        </Fade>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INFO_CARDS.map((card, i) => (
            <Fade key={card.label} direction="up" delay={i * 100} triggerOnce>
              <a
                href={card.href}
                target={card.href ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:border-[#ff7b2b] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] flex items-center justify-center text-[#ff7b2b] group-hover:bg-[#ff7b2b] group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#ff7b2b] mb-1">{card.label}</p>
                  <p className="font-bold text-gray-800 text-sm">{card.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{card.sub}</p>
                </div>
                {card.href && (
                  <div className="flex items-center gap-1 text-[#ff7b2b] text-xs font-semibold mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View</span><ChevronRight size={14} />
                  </div>
                )}
              </a>
            </Fade>
          ))}
        </div>

        {/* Main Grid: Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* FORM */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#FFF0E6] flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#ff7b2b]" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900">Opening WhatsApp!</p>
                  <p className="text-gray-500 text-sm mt-1">Your message is ready to send to the owner. 💬</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full bg-gray-100 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#ff7b2b] focus:ring-1 focus:ring-[#ff7b2b]" />
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full bg-gray-100 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#ff7b2b] focus:ring-1 focus:ring-[#ff7b2b]" />
                </div>
                <textarea name="message" placeholder="Your message..." rows={5} value={form.message} onChange={handleChange} required className="w-full bg-gray-100 border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-[#ff7b2b] focus:ring-1 focus:ring-[#ff7b2b]" />
                <button type="submit" disabled={loading} className="bg-[#ff7b2b] text-white font-bold text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 disabled:opacity-70 transition-all">
                  {loading ? <><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</> : <><Send size={16} />Send via WhatsApp</>}
                </button>
              </form>
            )}
          </div>

          {/* MAP */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-gray-200 shadow-sm relative h-full min-h-100 lg:min-h-0">
            <a
              href="https://www.google.com/maps/place/Shree+Kishan+Fast+Food+And+Restaurant/@24.4509306,74.2634932,17z/data=!3m1!4b1!4m6!3m5!1s0x3966355f4477c94f:0xc7cfbf29e5b7406f!8m2!3d24.4509306!4d74.2660681!16s%2Fg%2F11s7q8q8q8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open restaurant location in Google Maps"
              className="absolute inset-0 z-10"
            >
              <div className="absolute top-3 left-3 bg-[#ff7b2b] text-white text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md">
                📍 Open in Maps
              </div>
            </a>
            <iframe
              title="Shree Kishan Fast Food And Restaurant"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.9958129555475!2d74.26349317513825!3d24.45093057819883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966355f4477c94f%3A0xc7cfbf29e5b7406f!2sShree%20Kishan%20Fast%20Food%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1769620133631!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
