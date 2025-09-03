import React from "react";
import { Navbar } from "./components/Navbar";
import { FunFactCard } from "./components/FunFactCard";
import { LightBulbs } from "./components/LightBulbs";

import failursCafeLogoDark from "/failurscafelogo_dark.svg";
import failursCafeLogoLight from "/failurscafelogo_light.svg";

import "./App.css";

const App: React.FC = () => {
  const isDarkMode = true; // Always dark mode

  return (
    <div className="dark">
      <LightBulbs />
      <Navbar isDarkMode={isDarkMode} />
      <main className="main-content">
        <div className="logo-section">
          <img
            src={isDarkMode ? failursCafeLogoDark : failursCafeLogoLight}
            alt="Failurs Cafe Logo"
            className={isDarkMode ? "failurs-logo neon" : "failurs-logo shadow"}
          />
          <h3 className="coming-soon-title">
            Coming <span className="highlight">Soon </span>
          </h3>
        </div>
      </main>
      <footer>
        <FunFactCard />
      </footer>
    </div>
  );
};

export default App;
