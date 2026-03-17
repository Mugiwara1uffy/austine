import React, { useEffect, useRef, useState } from "react";

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/images/gallery/fridge-repair-nairobi.webp.jpeg",
    alt: "VON fridge being repaired",
    caption: "Professional Fridge Diagnostics",
    category: "refrigeration",
  },
  {
    id: 2,
    src: "/images/gallery/industrial-motor-service.webp.jpeg",
    alt: "Industrial motor service",
    caption: "Industrial Motor Service",
    category: "electrical",
  },
  {
    id: 3,
    src: "/images/gallery/ac-gas-refill-service.webp (2).jpeg",
    alt: "AC gas recharging",
    caption: "AC & Fridge Gas Recharging",
    category: "refrigeration",
  },
  {
    id: 4,
    src: "/images/gallery/commercial-laundry-repair.webp.jpeg",
    alt: "Industrial laundry unit repair",
    caption: "Commercial Laundry Equipment",
    category: "general",
  },
  {
    id: 5,
    src: "/images/gallery/washing-machine-maintenance.webp.jpeg",
    alt: "Washing machine maintenance",
    caption: "Washing Machine Maintenance",
    category: "general",
  },
  {
    id: 6,
    src: "/images/gallery/electrical-wiring-faults.webp.jpeg",
    alt: "Electrical wiring work",
    caption: "Electrical Wiring Faults",
    category: "electrical",
  },
  {
    id: 7,
    src: "/images/gallery/wiring-diagnostics.webp.jpeg",
    alt: "Circuit diagnostics",
    caption: "Detailed Wiring Diagnostics",
    category: "electrical",
  },
  {
    id: 8,
    src: "/images/gallery/appliance-installation.webp.jpeg",
    alt: "Appliance setup",
    caption: "Appliance Installation",
    category: "general",
  },
  {
    id: 9,
    src: "/images/gallery/digital-inverter-setup.webp.jpeg",
    alt: "Digital inverter installation",
    caption: "Digital Inverter Setup",
    category: "general",
  },
  {
    id: 10,
    src: "/images/gallery/system-troubleshooting.webp.jpeg",
    alt: "System troubleshooting",
    caption: "System Troubleshooting",
    category: "general",
  },
  {
    id: 11,
    src: "/images/gallery/fridge-repair.webp",
    alt: "fridge being repaired",
    caption: "Professional Fridge Diagnostics",
    category: "refrigeration",
  },
   
];

const FILTERS = [
  { key: "all", label: "All Work" },
  { key: "electrical", label: "Electrical" },
  { key: "refrigeration", label: "Refrigeration" },
  { key: "general", label: "General Maintenance" },
];

function GalleryCard({ item, index }) {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const catColor = {
    electrical: "#F5831F",
    refrigeration: "#4A90D9",
    general: "#1A5FA8",
  }[item.category] || "#1A5FA8";

  return (
    <div
      ref={ref}
      style={{
        aspectRatio: "1",
        borderRadius: "14px",
        overflow: "hidden",
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.94)",
        transition: `opacity 0.45s ease ${index * 0.06}s, transform 0.45s ease ${index * 0.06}s`,
        background: "#e5e7eb",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          opacity: loaded ? 1 : 0,
        }}
      />
      <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(13,27,46,0.85) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "1rem",
      }}>
        <span style={{
            display: "inline-block",
            background: catColor,
            color: "#fff",
            fontSize: "0.65rem",
            fontWeight: 700,
            padding: "2px 8px",
            borderRadius: "999px",
            marginBottom: "6px",
            textTransform: "uppercase",
        }}>
          {item.category}
        </span>
        <p style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 600, margin: 0 }}>
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" style={{ background: "#ffffff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1C1C2E" }}>Jobs Gallery</h2>
          <p style={{ color: "#6b7280", maxWidth: "440px", margin: "0.75rem auto 0" }}>Real photos from real jobs.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "2rem" }}>
          {FILTERS.map((f) => (
            <button key={f.key} onClick={() => setActiveFilter(f.key)} style={{
                background: activeFilter === f.key ? "#1A5FA8" : "transparent",
                color: activeFilter === f.key ? "#fff" : "#6b7280",
                border: `1.5px solid ${activeFilter === f.key ? "#1A5FA8" : "#d1d5db"}`,
                borderRadius: "999px",
                padding: "6px 16px",
                fontSize: "0.825rem",
                cursor: "pointer",
            }}>{f.label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
          {filtered.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}