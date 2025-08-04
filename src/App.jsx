import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeAttack from "./pages/HomeAttack";
import HomeStealth from "./pages/HomeStealth";

export default function App() {
  const [isStealth, setIsStealth] = useState(false);

  const toggleMode = () => setIsStealth(!isStealth);

  return (
    <Router>
      <Navbar toggleMode={toggleMode} isStealth={isStealth} />
      <Routes>
        <Route
          path="/"
          element={
            isStealth ? (
              <HomeStealth toggleMode={toggleMode} />
            ) : (
              <HomeAttack toggleMode={toggleMode} />
            )
          }
        />
      </Routes>
     <Footer isStealth={isStealth} />
    </Router>
  );
}
