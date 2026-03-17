import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Gallery from "./Gallery";
import TrustBar from "./TrustBar";
import ScheduleAndPayment from "./ScheduleAndPayment";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Footer from "./Footer";

export default function App() {
  return (
    <HashRouter>
      <div style={{ background: "#061222", color: "#fff", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ paddingTop: "70px" }}> 
          <Hero />
          <Services />
          <Gallery />
          <TrustBar />
          <ScheduleAndPayment />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
}