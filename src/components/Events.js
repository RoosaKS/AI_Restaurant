import React from "react";
import "../styles/Events.css";

const events = [
  {
    title: "Live-musiikki-ilta",
    date: "15. maaliskuuta",
    description: "Tule nauttimaan elävästä musiikista ja erikoistarjouksista!",
    image: require("../assets/images/live-music.jpg"),
  },
  {
    title: "Happy Hour -50%",
    date: "Joka perjantai 16:00 - 18:00",
    description: "Kaikki cocktailit ja hanajuomat puoleen hintaan!",
    image: require("../assets/images/happy-hour.jpg"),
  },
  {
    title: "Pääsiäismenu",
    date: "29.-31. maaliskuuta",
    description: "Erikoismenu täynnä sesongin parhaita makuja!",
    image: require("../assets/images/easter-menu.jpg"),
  },
];

function Events() {
  return (
    <section className="events">
      <h2>Tapahtumat ja Tarjoukset</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p><strong>{event.date}</strong></p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
