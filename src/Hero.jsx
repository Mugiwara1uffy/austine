import React from "react";
import STATUS from "./status";

export default function Hero() {
  return (
    <section style={{ background: "#061222", padding: "6rem 1.5rem 4rem", minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", padding: "6px 14px", borderRadius: "999px", marginBottom: "2rem" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: STATUS.isAvailable ? "#22c55e" : "#ef4444" }} />
          <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase" }}>
            {STATUS.isAvailable ? "Available in Naivasha" : "On Duty"}
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          Expert Electrical & <br /><span style={{ color: "#F5831F" }}>Refrigeration</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "500px", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
          Led by <strong>Austine Odemba</strong>, a licensed technician based in <strong>Naivasha</strong>. Professional repairs for all domestic and commercial appliances.
        </p>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a href="#services" style={{ background: "#F5831F", color: "#fff", padding: "16px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: 800 }}>View Services</a>
          <a href={`https://wa.me/${STATUS.whatsappNumber}`} style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "16px 32px", borderRadius: "12px", textDecoration: "none", fontWeight: 800 }}>Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}