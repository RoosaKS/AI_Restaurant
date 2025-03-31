import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Reservation.css";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
  });

  const [submitted, setSubmitted] = useState(false);

  // Käsittelee lomakkeen kenttien muutokset
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Käsittelee lomakkeen lähetyksen
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Varaus lähetetty:", formData);
    setSubmitted(true);

    // Tyhjennä lomake lähetyksen jälkeen
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "1",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="reservation">
      {/* Helmet SEO-optimoituun otsikkoon ja metatietoihin */}
      <Helmet>
        <title>Varaa pöytä | Ravintola Makunautinto</title>
        <meta name="description" content="Varaa pöytä Ravintola Makunautinnosta helposti verkkosivuiltamme. Valitse päivä, aika ja henkilömäärä!" />
        <meta name="keywords" content="pöytävaraus, ravintola varaus, varaa pöytä, illallinen, lounas" />
        <meta property="og:title" content="Varaa pöytä | Ravintola Makunautinto" />
        <meta property="og:description" content="Tee pöytävaraus helposti verkkosivujemme kautta ja nauti herkullisesta ruoasta." />
        <meta property="og:type" content="website" />
      </Helmet>

      <h2>Varaa pöytä</h2>
      <p>Tee pöytävaraus helposti alla olevalla lomakkeella.</p>

      {submitted ? (
        <p className="success-message">Varaus lähetetty! Otamme sinuun yhteyttä pian.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nimi:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Sähköposti:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Puhelinnumero:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Päivämäärä:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Aika:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />

          <label>Henkilömäärä:</label>
          <select name="guests" value={formData.guests} onChange={handleChange}>
            <option value="1">1 henkilö</option>
            <option value="2">2 henkilöä</option>
            <option value="3">3 henkilöä</option>
            <option value="4">4 henkilöä</option>
            <option value="5">5 henkilöä</option>
            <option value="6">6+ henkilöä</option>
          </select>

          <button type="submit">Lähetä varaus</button>
        </form>
      )}
    </section>
  );
}

export default Reservation;
