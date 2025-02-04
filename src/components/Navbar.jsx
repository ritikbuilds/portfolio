import React, { useEffect, useRef, useState } from "react";
import "../styles/Navbar.scss";
import { useGSAP } from "@gsap/react";
import { RiMenu4Line } from "react-icons/ri";
import gsap from "gsap";

function Navbar() {
  const [close, setClose] = useState(false);

  function handleClick(e) {
    if (e.target.classList.contains("menu-item")) {
      document
        .getElementById(e.target.textContent.toLowerCase())
        .scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  }

  function handleLogoClick() {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  }

  function closeMenu() {
    setClose(!close);
  }
  useGSAP(() => {
    gsap.from(".logo,.menu-item", {
      delay: 1,
      stagger: 0.1,
      yPercent: -250,
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-content nav-container">
        <h1 className="logo" onClick={handleLogoClick}>
          Ritik
        </h1>
        <ul
          className={`menu ${close ? "closeMenu" : ""}`}
          onClick={handleClick}
        >
          {["About", "Experience", "Projects", "Contact"].map((item, index) => (
            <li className="menu-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <button onClick={closeMenu} className={"btn"}>
          <RiMenu4Line
            size="3.5rem"
            className={`menu-icon ${close ? "clicked" : ""}`}
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
