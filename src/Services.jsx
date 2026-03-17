import STATUS from "./status";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    id: "electrical",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Electrical Repairs",
    color: "#F5831F",
    bg: "rgba(245,131,31,0.08)",
    border: "rgba(245,131,31,0.25)",
    tasks: [
      "Wiring & rewiring",
      "Sockets & switches",
      "Distribution boards",
      "Security lighting",
    ],
  },
  {
    id: "refrigeration",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Refrigeration & AC",
    color: "#4A90D9",
    bg: "rgba(74,144,217,0.08)",
    border: "rgba(74,144,217,0.25)",
    tasks: [
      "Fridge & freezer repair",
      "AC installation & service",
      "Gas recharging",
      "Cooling system faults",
    ],
  },
  {
    id: "maintenance",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "General Maintenance",
    color: "#1A5FA8",
    bg: "rgba(26,95,168,0.08)",
    border: "rgba(26,95,168,0.25)",
    tasks: [
      "Preventive maintenance",
      "Equipment servicing",
      "Hotel room repairs",
      "On-site diagnostics",
    ],
  },
  {
    id: "plumbing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 8v4l3 3"/>
        <path d="M7.05 7.05A7 7 0 0 1 19 12"/>
      </svg>
    ),
    title: "Plumbing",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
    border: "rgba(14,165,233,0.25)",
    tasks: [
      "Pipe repairs & fitting",
      "Tap & valve replacement",
      "Water heater installation",
      "Leak detection & fix",
    ],
  },
  {
    id: "installation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "TV & Appliance Install",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.25)",
    tasks: [
      "TV wall mounting",
      "DSTV installation",
      "Appliance setup",
      "Cable management",
    ],
  },
  {
    id: "emergency",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "Emergency Call-outs",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.25)",
    tasks: [
      "Power outage response",
      "Urgent fault repairs",
      "After-hours availability",
      "WhatsApp priority booking",
    ],
  },
];

function ServiceCard({ service, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "#ffffff",
        border: `1px solid ${service.border}`,
        borderRadius: "16px",
        padding: "1.5rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 12px 32px ${service.bg}`;
        e.currentTarget.style.borderColor = service.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(28px)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = service.border;
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "58px",
          height: "58px",
          background: service.bg,
          border: `1px solid ${service.border}`,
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: service.color,
          marginBottom: "1rem",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "1.2rem",
          color: "#1C1C2E",
          marginBottom: "0.75rem",
          letterSpacing: "0.02em",
        }}
      >
        {service.title}
      </h3>

      {/* Task list */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {service.tasks.map((task) => (
          <li
            key={task}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.875rem",
              color: "#4b5563",
              padding: "4px 0",
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: service.color,
                flexShrink: 0,
              }}
            />
            {task}
          </li>
        ))}
      </ul>

      {/* Bottom accent bar */}
      <div
        style={{
          marginTop: "1.25rem",
          height: "3px",
          background: `linear-gradient(90deg, ${service.color}, transparent)`,
          borderRadius: "2px",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.2 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      style={{
        background: "#F4F7FB",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section heading */}
        <div
          ref={headingRef}
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(245,131,31,0.12)",
              border: "1px solid rgba(245,131,31,0.3)",
              color: "#F5831F",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "999px",
              marginBottom: "1rem",
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            What I Do
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#1C1C2E",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Services Offered
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              color: "#6b7280",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0.75rem auto 0",
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            Professional repairs and installations for homes, offices, and
            commercial spaces across Nairobi.
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: "2.5rem",
            background: "linear-gradient(135deg, #1A5FA8, #0d3a6e)",
            borderRadius: "16px",
            padding: "1.75rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "1.3rem",
                color: "#fff",
                margin: 0,
                letterSpacing: "0.02em",
              }}
            >
              Don't see your job listed?
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", margin: "4px 0 0", fontFamily: "'Barlow', sans-serif" }}>
              Send a WhatsApp message and we'll sort it out.
            </p>
          </div>
          <a
            href="https://wa.me/2547728778897?text=Hello%20MISASA%2C%20I%20have%20a%20job%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#25D366",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              fontFamily: "'Barlow', sans-serif",
              flexShrink: 0,
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1ebe5d";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#25D366";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Ask via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
