import React, { useState } from "react";
import "./Navbar.css";
import ecellLogoLight from "/ecelllogo_light.svg";
import ecellLogoDark from "/ecelllogo_dark.svg";
import { Toast } from "./Toast";

const socialLinks = [
  { href: "https://www.instagram.com/kcecell_/", icon: "instagram" },
  { href: "https://www.linkedin.com/in/kcecell/", icon: "linkedin" },
  { href: "https://wa.me", icon: "whatsapp" },
];

interface NavbarProps {
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = isDarkMode ? "dark" : "light";

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-content">
        <div className="navbar-logo-left">
          <img
            src={theme === "dark" ? ecellLogoDark : ecellLogoLight}
            alt="Ecell Logo"
            className="ecell-logo"
          />
        </div>
        <div className="navbar-icons-container">
          <div className="navbar-icons">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`icon ${link.icon}`}
              ></a>
            ))}
          </div>
          <Toast />
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-icon"></span>
        </button>
      </div>
      <div className={`navbar-dropdown${menuOpen ? " open" : ""}`}>
        {socialLinks.map((link) => (
          <a
            key={link.icon}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`icon ${link.icon}`}
          ></a>
        ))}
      </div>
    </nav>
  );
};
