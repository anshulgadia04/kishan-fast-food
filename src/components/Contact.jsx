import React, { useState, useEffect, useRef } from "react";
import { Instagram, Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronRight } from "lucide-react";

/* ─── tiny hook: detect when element enters viewport ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

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
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sectionRef, sectionInView] = useInView();
  const [formRef, formInView] = useInView();

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const ownerNumber = "918233787433";
    const text = [
      `🍽️ *New Message from Website*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      form.phone ? `📞 *Phone:* ${form.phone}` : null,
      ``,
      `💬 *Message:*`,
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const waUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      window.open(waUrl, "_blank");
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: "linear-gradient(160deg, #fff7f2 0%, #fff0e4 50%, #fff7f2 100%)",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
      className="px-4 sm:px-6 lg:px-16 py-24"
    >
      {/* ── ambient particles ── */}
      <style>{`
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeSlideLeft { from{opacity:0;transform:translateX(32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.55);opacity:0} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .float { animation: floatY var(--dur,8s) ease-in-out infinite; }
        .fade-up { animation: fadeSlideUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
        .fade-left { animation: fadeSlideLeft 0.7s cubic-bezier(.22,1,.36,1) forwards; }
        .shimmer-btn {
          background: linear-gradient(90deg, #ff7b2b, #ff5500, #ff9f50, #ff5500, #ff7b2b);
          background-size: 300% auto;
          animation: shimmer 2.5s linear infinite;
        }
        .card-hover { transition: transform .3s ease, box-shadow .3s ease; }
        .card-hover:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(255,123,43,.18); }
        .input-line::after {
          content:''; position:absolute; bottom:0; left:0; height:2px; width:0;
          background:#ff7b2b; transition:width .35s ease; border-radius:9999px;
        }
        .input-line.active::after { width:100%; }
      `}</style>

      {PARTICLES.map((p, i) => (
        <Particle key={i} style={{ position: "absolute", ...p, animation: `floatY ${p.animationDuration} ease-in-out infinite`, animationDelay: `${i * 1.5}s` }} />
      ))}

      {/* decorative ring */}
      <div style={{ position: "absolute", top: "12%", right: "8%", width: 260, height: 260, borderRadius: "50%", border: "2px dashed #ff7b2b", opacity: 0.08, animation: "spin-slow 28s linear infinite" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div
          style={{
            opacity: sectionInView ? 1 : 0,
            animation: sectionInView ? "fadeSlideUp .8s cubic-bezier(.22,1,.36,1) forwards" : "none",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              display: "inline-block", background: "#fff0e6", color: "#ff7b2b",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "6px 20px", borderRadius: 999,
              marginBottom: 16,
            }}
          >
            Get In Touch
          </span>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.15, marginBottom: 12 }}>
            We'd Love to{" "}
            <span style={{ color: "#ff7b2b", fontStyle: "italic" }}>Hear From You</span>
          </h2>
          <p style={{ color: "#888", maxWidth: 520, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>
            Whether you want to make a reservation, ask about our menu, or just say hello —
            we're just a message away.
          </p>
        </div>

        {/* ── INFO CARDS ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          style={{ opacity: sectionInView ? 1 : 0, animation: sectionInView ? "fadeSlideUp .9s .15s cubic-bezier(.22,1,.36,1) forwards" : "none" }}
        >
          {INFO_CARDS.map((card, i) => (
            <div
              key={card.label}
              className="card-hover"
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "24px 20px",
                border: "1.5px solid #ffe8d6",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                cursor: card.href ? "pointer" : "default",
                animationDelay: `${i * 0.08}s`,
              }}
              onClick={() => card.href && window.open(card.href)}
            >
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "#fff0e6", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff7b2b" }}>
                {card.icon}
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ff7b2b", marginBottom: 4 }}>{card.label}</p>
                <p style={{ fontWeight: 700, color: "#1a1a1a", fontSize: 14, lineHeight: 1.4 }}>{card.value}</p>
                <p style={{ color: "#aaa", fontSize: 12, marginTop: 2 }}>{card.sub}</p>
              </div>
              {card.href && (
                <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#ff7b2b", fontSize: 12, fontWeight: 600, marginTop: "auto" }}>
                  <span>View</span><ChevronRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── MAIN GRID: FORM + MAP ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* FORM */}
          <div
            ref={formRef}
            style={{
              background: "#fff",
              borderRadius: 28,
              padding: "clamp(24px,4vw,44px)",
              border: "1.5px solid #ffe8d6",
              boxShadow: "0 8px 48px rgba(255,123,43,.08)",
              opacity: formInView ? 1 : 0,
              animation: formInView ? "fadeSlideUp .8s .1s cubic-bezier(.22,1,.36,1) forwards" : "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* corner accent */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "radial-gradient(circle at top right, #fff0e6, transparent)", borderRadius: "0 28px 0 100%" }} />

            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 6 }}>Send a Message</h3>
            <p style={{ color: "#aaa", fontSize: 13, marginBottom: 28 }}>We'll get back to you within 24 hours.</p>

            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: "60px 0", textAlign: "center" }}>
                <div style={{ position: "relative" }}>
                  <div style={{ width: 70, height: 70, borderRadius: "50%", background: "#fff0e6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle size={36} color="#ff7b2b" />
                  </div>
                  <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid #ff7b2b", animation: "pulse-ring 1.2s ease-out forwards" }} />
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 20, color: "#1a1a1a" }}>Opening WhatsApp!</p>
                  <p style={{ color: "#aaa", fontSize: 14, marginTop: 4 }}>Your message is ready to send to the owner. 💬</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", type: "text", placeholder: "Your Name" },
                    { name: "email", type: "email", placeholder: "Email Address" },
                  ].map((f) => (
                    <div key={f.name} className={`input-line ${focused === f.name ? "active" : ""}`} style={{ position: "relative" }}>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={form[f.name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(f.name)}
                        onBlur={() => setFocused("")}
                        required
                        style={{
                          width: "100%", background: "#faf8f6", border: "1.5px solid #ffe0cc",
                          borderRadius: 14, padding: "14px 18px", fontSize: 14, color: "#1a1a1a",
                          outline: "none", transition: "border-color .25s, background .25s",
                          borderColor: focused === f.name ? "#ff7b2b" : "#ffe0cc",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div className={`input-line ${focused === "phone" ? "active" : ""}`} style={{ position: "relative" }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused("")}
                    style={{
                      width: "100%", background: "#faf8f6", border: "1.5px solid #ffe0cc",
                      borderRadius: 14, padding: "14px 18px", fontSize: 14, color: "#1a1a1a",
                      outline: "none", transition: "border-color .25s",
                      borderColor: focused === "phone" ? "#ff7b2b" : "#ffe0cc",
                    }}
                  />
                </div>

                {/* Message */}
                <div className={`input-line ${focused === "message" ? "active" : ""}`} style={{ position: "relative" }}>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    required
                    style={{
                      width: "100%", background: "#faf8f6", border: "1.5px solid #ffe0cc",
                      borderRadius: 14, padding: "14px 18px", fontSize: 14, color: "#1a1a1a",
                      outline: "none", resize: "none", transition: "border-color .25s",
                      borderColor: focused === "message" ? "#ff7b2b" : "#ffe0cc",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="shimmer-btn"
                  style={{
                    border: "none", color: "#fff", fontWeight: 700, fontSize: 15,
                    padding: "16px 32px", borderRadius: 999, cursor: loading ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    opacity: loading ? 0.85 : 1, letterSpacing: "0.03em",
                    boxShadow: "0 8px 28px rgba(255,123,43,.35)",
                    transition: "transform .2s, box-shadow .2s",
                  }}
                  onMouseEnter={e => { if(!loading) e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  {loading ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin-slow .8s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      {/* WhatsApp icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* MAP + SOCIAL */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: 20,
    opacity: formInView ? 1 : 0,
    animation: formInView
      ? "fadeSlideLeft .8s .2s cubic-bezier(.22,1,.36,1) forwards"
      : "none",
  }}
>
  {/* Map */}
 {/* MAP */}
<div
  onClick={() =>
  window.open(
    "https://www.google.com/maps?q=24.4509306,74.2634932",
    "_blank"
  )
}
  style={{
    borderRadius: 28,
    overflow: "hidden",
    border: "1.5px solid #ffe8d6",
    boxShadow: "0 8px 40px rgba(255,123,43,.08)",
    cursor: "pointer",
    position: "relative",
  }}
>
  {/* Overlay (for click effect) */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 2,
    }}
  />

  {/* Google Map iframe */}
  <iframe
    title="Shree Kishan Fast Food And Restaurant"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.9958129555475!2d74.26349317513825!3d24.45093057819883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966355f4477c94f%3A0xc7cfbf29e5b7406f!2sShree%20Kishan%20Fast%20Food%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1769620133631!5m2!1sen!2sin"
    width="100%"
    height="340"
    style={{
      border: 0,
      display: "block",
      pointerEvents: "none", // ❗ disables iframe interaction so click works
    }}
    loading="lazy"
  />
</div>
  {/* Social + Hours (same as yours, no change needed) */}
</div>
        </div>
      </div>
    </section>
  );
}
