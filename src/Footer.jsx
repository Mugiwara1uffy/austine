import React from "react";
import STATUS from "./status";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#061222", color: "rgba(255,255,255,0.6)", padding: "4rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "3rem",
          marginBottom: "3rem" 
        }}>
          {/* Brand Column */}
          <div>
            <h3 style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "1rem" }}>
              MISASA<span style={{ color: "#F5831F" }}>.</span>
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Professional electrical and refrigeration services across Naivasha. Reliable, licensed, and available for emergency call-outs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Services", "Gallery", "Availability", "Payment"].map((link) => (
                <li key={link} style={{ marginBottom: "0.75rem" }}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: "inherit", textDecoration: "none", fontSize: "0.9rem" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Contact</h4>
            <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>📍 Naivasha & Surroundings</p>
            <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>📞 {STATUS.whatsappNumber}</p>
            <p style={{ fontSize: "0.9rem" }}>💬 Available via WhatsApp 24/7</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: "1px solid rgba(255,255,255,0.1)", 
          paddingTop: "2rem", 
          textAlign: "center",
          fontSize: "0.8rem"
        }}>
          <p>© {currentYear} MISASA Electricals & Refrigeration. All rights reserved.</p>
          <p style={{ marginTop: "0.5rem", opacity: 0.5 }}>© 2026 MISASA Electricals. Owned and Operated by Austine Odemba</p>
        </div>
      </div>
    </footer>
  );
}