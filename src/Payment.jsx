import { useRef, useState, useEffect } from "react";
import STATUS from "./status";

// ─────────────────────────────────────────────────────────────
//  PAYMENT CONFIG — edit these values in status.js or here
// ─────────────────────────────────────────────────────────────
const PAYMENT = {
  tillNumber: "123456",          // ← M-Pesa Till / Buy Goods number
  paybillBusiness: "",           // ← Paybill business number (if any)
  paybillAccount: "",            // ← Paybill account number (if any)
  phoneNumber: "0728 778897",   // ← Send Money phone number
  accountName: "MISASA Electricals",
};

const MPESA_STEPS_TILL = [
  { n: 1, text: "Open M-Pesa on your Safaricom line" },
  { n: 2, text: "Select Lipa na M-Pesa" },
  { n: 3, text: "Select Buy Goods & Services" },
  { n: 4, text: `Enter Till No: ${PAYMENT.tillNumber}` },
  { n: 5, text: "Enter the agreed amount" },
  { n: 6, text: "Enter your M-Pesa PIN & confirm" },
];

const MPESA_STEPS_PHONE = [
  { n: 1, text: "Open M-Pesa on your Safaricom line" },
  { n: 2, text: "Select Send Money" },
  { n: 3, text: `Enter number: ${PAYMENT.phoneNumber}` },
  { n: 4, text: "Enter the agreed amount" },
  { n: 5, text: "Enter your M-Pesa PIN & confirm" },
  { n: 6, text: `Screenshot the confirmation SMS & send to WhatsApp` },
];

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy to clipboard"
      style={{
        background: copied ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.08)",
        border: `1px solid ${copied ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.15)"}`,
        borderRadius: "8px",
        padding: "5px 10px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        color: copied ? "#4ade80" : "rgba(255,255,255,0.6)",
        fontSize: "0.72rem",
        fontWeight: 600,
        fontFamily: "'Barlow', sans-serif",
        transition: "all 0.2s",
        flexShrink: 0,
      }}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

function StepList({ steps }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((step, i) => (
        <li
          key={step.n}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            padding: "10px 0",
            borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
        >
          <span
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "rgba(245,131,31,0.2)",
              border: "1.5px solid rgba(245,131,31,0.4)",
              color: "#F5831F",
              fontSize: "0.72rem",
              fontWeight: 800,
              fontFamily: "'Barlow Condensed', sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: "1px",
            }}
          >
            {step.n}
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.875rem",
              fontFamily: "'Barlow', sans-serif",
              lineHeight: 1.5,
            }}
          >
            {step.text}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function Payment() {
  const [activeTab, setActiveTab] = useState("till");
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
    <div
      ref={ref}
      id="payment"
      style={{
        background: "linear-gradient(160deg, #0d1b2e, #061222)",
        borderRadius: "20px",
        padding: "1.75rem",
        border: "1px solid rgba(74,144,217,0.2)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "1.25rem" }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#4ade80",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "999px",
            marginBottom: "0.6rem",
            fontFamily: "'Barlow', sans-serif",
          }}
        >
          Payments
        </span>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.5rem",
            color: "#ffffff",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Pay via M-Pesa
        </h3>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", margin: "4px 0 0", fontFamily: "'Barlow', sans-serif" }}>
          Fast, safe, and confirmed instantly
        </p>
      </div>

      {/* M-Pesa logo strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          padding: "0.875rem 1rem",
          marginBottom: "1.25rem",
        }}
      >
        {/* Stylised M-Pesa badge */}
        <div
          style={{
            background: "#00a651",
            borderRadius: "8px",
            padding: "5px 10px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            color: "#fff",
            letterSpacing: "0.04em",
            flexShrink: 0,
          }}
        >
          M-PESA
        </div>
        <div>
          <p style={{ color: "#fff", fontSize: "0.8rem", fontWeight: 600, margin: 0, fontFamily: "'Barlow', sans-serif" }}>
            {PAYMENT.accountName}
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", margin: 0, fontFamily: "'Barlow', sans-serif" }}>
            Safaricom M-Pesa accepted
          </p>
        </div>
      </div>

      {/* Tab switcher */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "5px",
          marginBottom: "1.25rem",
        }}
      >
        {[
          { key: "till", label: "Buy Goods (Till)", icon: "🏪" },
          { key: "phone", label: "Send Money", icon: "📱" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              background: activeTab === tab.key
                ? "linear-gradient(135deg, #1A5FA8, #4A90D9)"
                : "transparent",
              border: "none",
              borderRadius: "9px",
              padding: "0.6rem 0.5rem",
              color: activeTab === tab.key ? "#fff" : "rgba(255,255,255,0.5)",
              fontSize: "0.8rem",
              fontWeight: 700,
              fontFamily: "'Barlow', sans-serif",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              letterSpacing: "0.01em",
            }}
          >
            <span style={{ fontSize: "0.9rem" }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Number display */}
      <div
        style={{
          background: "rgba(26,95,168,0.2)",
          border: "1.5px solid rgba(74,144,217,0.35)",
          borderRadius: "14px",
          padding: "1.1rem 1.25rem",
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "0 0 4px",
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            {activeTab === "till" ? "Till Number (Buy Goods)" : "Phone Number (Send Money)"}
          </p>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "2rem",
              color: "#F5831F",
              margin: 0,
              letterSpacing: "0.06em",
              lineHeight: 1,
            }}
          >
            {activeTab === "till" ? PAYMENT.tillNumber : PAYMENT.phoneNumber}
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.72rem",
              margin: "4px 0 0",
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            {PAYMENT.accountName}
          </p>
        </div>
        <CopyButton value={activeTab === "till" ? PAYMENT.tillNumber : PAYMENT.phoneNumber.replace(/\s/g, "")} />
      </div>

      {/* Step-by-step guide */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "12px",
          padding: "1rem",
          marginBottom: "1.25rem",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.72rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 0.5rem",
            fontFamily: "'Barlow', sans-serif",
          }}
        >
          How to pay
        </p>
        <StepList steps={activeTab === "till" ? MPESA_STEPS_TILL : MPESA_STEPS_PHONE} />
      </div>

      {/* After payment note */}
      <div
        style={{
          background: "rgba(245,131,31,0.08)",
          border: "1px solid rgba(245,131,31,0.25)",
          borderRadius: "12px",
          padding: "0.875rem 1rem",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "1px" }}>💬</span>
        <div>
          <p style={{ color: "#F5831F", fontSize: "0.78rem", fontWeight: 700, margin: "0 0 2px", fontFamily: "'Barlow', sans-serif" }}>
            After paying
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", margin: 0, fontFamily: "'Barlow', sans-serif", lineHeight: 1.5 }}>
            Screenshot your M-Pesa confirmation SMS and send it to WhatsApp. This confirms your booking.
          </p>
        </div>
      </div>
    </div>
  );
}
