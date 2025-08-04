import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar({ toggleMode, isStealth }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#" },
    { name: "Case Studies", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const modeButtonText = isStealth ? "TOGGLE ATTACK MODE" : "TOGGLE STEALTH MODE";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto mt-4 px-6 py-1 rounded-full bg-[#71b5f0] text-black shadow-lg flex items-center justify-between">
        <img src={logo} alt="Growth Shark Logo" className="h-20 w-auto" />

        <div className="hidden md:flex gap-6 items-center font-bold text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className={`relative transition-all duration-200 hover:text-gray-600 ${
                location.pathname === item.link ? "text-black" : "text-gray-800"
              }`}
            >
              {item.name}
              {location.pathname === item.link && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMode}
          className="ml-6 px-5 py-2 rounded-full bg-lime-400 text-black font-bold hover:brightness-110 transition hidden md:flex"
        >
          {modeButtonText}
        </button>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#06131e] text-white mt-2 mx-4 rounded-lg shadow-lg py-4 px-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left py-1 transition-all ${
                location.pathname === item.link
                  ? "text-white font-semibold"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleMode();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 mt-2 rounded-full bg-lime-400 text-black font-bold hover:brightness-110 transition"
          >
            {modeButtonText}
          </button>
        </div>
      )}
    </nav>
  );
}
