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
      `🍔 *KISHAN FAST FOOD & RESTAURANT*`,
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
        <Fade triggerOnce>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full text-[#ff7b2b] bg-[#fff0e6]">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-serif">
              We'd Love to <span className="text-[#ff7b2b]">Hear From You</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Have a question, a suggestion, or just want to say hello? Drop us a line!
            </p>
          </div>
        </Fade>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info Cards */}
          <Slide direction="left" triggerOnce>
            <div className="space-y-6">
              {INFO_CARDS.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-5 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-5"
                    style={{ backgroundColor: card.color + "20", color: card.color }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{card.label}</h3>
                    <p className="text-gray-600">{card.value}</p>
                    <p className="text-sm text-gray-400">{card.sub}</p>
                  </div>
                  {card.href && (
                    <ChevronRight
                      size={20}
                      className="ml-auto text-gray-300 group-hover:text-[#ff7b2b] transition-colors"
                    />
                  )}
                </a>
              ))}
            </div>
          </Slide>

          {/* Right: Form */}
          <Slide direction="right" triggerOnce>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="mx-auto text-green-500" size={50} />
                  <h3 className="mt-4 text-2xl font-bold text-gray-800">Message Sent!</h3>
                  <p className="mt-2 text-gray-500">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-[#ff7b2b] text-white font-semibold rounded-full hover:bg-opacity-90 transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff7b2b] transition"
                      required
                    />
                    <label
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focused === "name" || form.name
                          ? "top-1.5 text-xs text-[#ff7b2b]"
                          : "top-3.5 text-gray-400"
                      }`}
                    >
                      Your Name*
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff7b2b] transition"
                    />
                    <label
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focused === "phone" || form.phone
                          ? "top-1.5 text-xs text-[#ff7b2b]"
                          : "top-3.5 text-gray-400"
                      }`}
                    >
                      Phone Number (Optional)
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="4"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff7b2b] transition"
                      required
                    ></textarea>
                    <label
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focused === "message" || form.message
                          ? "top-1.5 text-xs text-[#ff7b2b]"
                          : "top-3.5 text-gray-400"
                      }`}
                    >
                      Your Message*
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center px-6 py-3 bg-[#ff7b2b] text-white font-bold rounded-full hover:bg-opacity-90 transition-transform duration-200 active:scale-95 disabled:bg-opacity-60"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
