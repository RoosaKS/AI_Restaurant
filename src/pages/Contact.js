import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Ota yhteyttä</h2>
      <div className="contact-info">
        <p><strong>📍 Osoite:</strong> Esimerkkikatu 12, 00100 Helsinki</p>
        <p><strong>📞 Puhelin:</strong> +358 40 123 4567</p>
        <p><strong>📧 Sähköposti:</strong> info@ravintola.fi</p>
      </div>

      <h3>Aukioloajat</h3>
      <p>Ma-Pe: 10:00 - 22:00</p>
      <p>La-Su: 12:00 - 23:00</p>

      <h3>Sijainti</h3>
      {/* Upotettu Google Maps */}
      <div className="map-container">
        <iframe
          title="Ravintolan Sijainti"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.3193110932714!2d24.9383797!3d60.1699005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef123456789!2sEsimerkkiravintola!5e0!3m2!1sen!2sfi!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
