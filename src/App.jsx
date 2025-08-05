import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeStealth from "./pages/HomeStealth";
import HomeAttack from "./pages/HomeAttack";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

export default function App() {
  const [isStealth, setIsStealth] = useState(true);

  const toggleMode = () => {
    setIsStealth((prev) => !prev);
  };

  return (
    <Router>
      <Navbar toggleMode={toggleMode} isStealth={isStealth} />
      <Routes>
        <Route path="/" element={isStealth ? <HomeStealth /> : <HomeAttack />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}
