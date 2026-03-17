import React from "react"
import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: "5+",
    label: "Years Experience",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    color: "#F5831F",
  },
  {
    value: "200+",
    label: "Jobs Completed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    color: "#4A90D9",
  },
  {
    value: "4.9★",
    label: "Average Rating",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: "#eab308",
  },
  {
    value: "Licensed",
    label: "& Insured",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "#22c55e",
  },
  {
    value: "Nairobi",
    label: "& Surroundings",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    color: "#1A5FA8",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#1A5FA8",
        padding: "2.5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, transparent 60%, rgba(245,131,31,0.12) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0.75rem 2rem",
              borderRight:
                i < STATS.length - 1
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "none",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.45s ease ${i * 0.08}s, transform 0.45s ease ${i * 0.08}s`,
            }}
            className="trust-item"
          >
            <div
              style={{
                color: stat.color === "#F5831F" ? "#F5831F" : "rgba(255,255,255,0.9)",
                flexShrink: 0,
              }}
            >
              {stat.icon}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.65)",
                  margin: "2px 0 0",
                  fontFamily: "'Barlow', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            width: 50%;
            padding: 0.85rem 1rem !important;
          }
          .trust-item:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
