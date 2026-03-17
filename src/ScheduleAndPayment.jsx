import React from "react";
import Availability from "./Availability";
import Payment from "./Payment";

export default function ScheduleAndPayment({ liveData }) {
  return (
    <section id="availability" style={{ padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        <Availability liveData={liveData} />
        <Payment />
      </div>
    </section>
  );
}