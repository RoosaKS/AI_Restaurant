import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import About from "./pages/About"; // Tuo About-komponentti
import Gallery from "./components/Gallery";
import Reviews from "./pages/Reviews";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} /> {/* Uusi sivu */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
