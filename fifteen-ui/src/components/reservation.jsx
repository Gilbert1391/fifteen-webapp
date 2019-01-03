import React from "react";

const Reservation = () => {
  return (
    <section className="container--big" id="reservation">
      <div className="reservation">
        <h1 className="reservation__heading">Reservations</h1>
        <p className="reservation__paragraph">
          Call (347) 555–1234 from 5a – 11p daily, or book online with
          OpenTable. Reservations required for parties of 6 or more.
        </p>
        <a
          href="https://www.opentable.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Find a table
        </a>
      </div>
    </section>
  );
};

export default Reservation;
