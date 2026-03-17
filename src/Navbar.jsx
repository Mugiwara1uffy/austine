import React from "react";
import STATUS from "./status";

export default function Navbar() {
  return (
    <nav style={{ 
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
      background: "#061222", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "0.75rem 1.5rem"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/images/logo.webp" alt="MISASA" style={{ height: "30px", width: "auto" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: STATUS.isAvailable ? "#22c55e" : "#ef4444",
              boxShadow: STATUS.isAvailable ? "0 0 8px #22c55e" : "0 0 8px #ef4444"
            }} />
            <h1 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>MISASA.</h1>
          </div>
        </div>
        <a href={`tel:${STATUS.whatsappNumber}`} style={{ background: "#F5831F", color: "#fff", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "0.85rem" }}>
          Call Now
        </a>
      </div>
    </nav>
  );
}