import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Lisää tämä
import Header from "./components/Header";
//import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Footer from "./components/Footer";
import About from "./pages/About"; 
import Gallery from "./components/Gallery";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";

function App() {
  return (
    <HelmetProvider> {/* Kääri kaikki HelmetProvideriin */}
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
