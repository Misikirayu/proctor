import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

/**
 * Creates a cool navbar that sticks to the top and is present on
 * all pages
 */
export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-2" style={{ background: "linear-gradient(135deg, #1a237e 0%, #4a148c 100%)" }}>
        <div className="nav-wrapper">
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              height: "100%",
            }}
            className="brand-logo center white-text"
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaGraduationCap style={{ marginRight: "10px", fontSize: "2.5rem" }} />
              <span>Enat College</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
