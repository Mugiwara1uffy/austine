// ============================================================
//  MISASA — LIVE STATUS CONFIG
//  Edit this file to update availability on the website.
// ============================================================

const STATUS = {
  // Set to true when available for private jobs, false when busy
  isAvailable: true,

  // Shown in the hero badge when available
  availableMessage: "Available for Jobs Now",

  // Shown when busy / on duty at hotel
  busyMessage: "On Duty — WhatsApp Me",

  // Off-days available for private work (0=Sun,1=Mon,...,6=Sat)
  offDays: [0, 3], // Sunday & Wednesday by default

  // After-hours window (24h format)
  afterHoursStart: "18:00",
  afterHoursEnd: "21:00",

  // WhatsApp number (include country code, no +)
  whatsappNumber: "254728778897",

  // Phone number for click-to-call
  phoneNumber: "+254728778897",
};

export default STATUS;
