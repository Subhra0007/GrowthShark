
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import HomeAttack from "./pages/HomeAttack";
import HomeStealth from "./pages/HomeStealth";
import AboutUs from "./pages/AboutUs";

export default function App() {
  const [isStealth, setIsStealth] = useState(false);

  const toggleMode = () => setIsStealth(!isStealth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isStealth ?
            <HomeStealth toggleMode={toggleMode} /> :
            <HomeAttack toggleMode={toggleMode} />
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
