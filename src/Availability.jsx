import React from "react";
import STATUS from "./status";

export default function Availability() {
  const DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().getDay();

  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "1.5rem" }}>
      <h3 style={{ marginBottom: "1rem" }}>Availability</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px", marginBottom: "1.5rem" }}>
        {DAY_NAMES_SHORT.map((day, i) => (
          <div key={day} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.6rem", color: i === today ? "#F5831F" : "#666" }}>{day}</div>
            <div style={{ 
              aspectRatio: "1", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
              background: STATUS.offDays.includes(i) ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)",
              border: i === today ? "1px solid #F5831F" : "none"
            }}>
              {STATUS.offDays.includes(i) ? "✓" : "×"}
            </div>
          </div>
        ))}
      </div>
      <a href={`https://wa.me/${STATUS.whatsappNumber}`} style={{ display: "block", textAlign: "center", background: "#22c55e", color: "#fff", padding: "12px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
        Book via WhatsApp
      </a>
    </div>
  );
}