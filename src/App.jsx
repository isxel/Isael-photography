import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Commission from "./pages/Commission";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
