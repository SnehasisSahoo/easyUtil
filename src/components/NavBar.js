import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ tab }) {
  return (
    <header>
      <h3 className="logo">
        Easy<span>.Util</span>
      </h3>
      <ul className="nav-links">
        <li id="home">
          <Link style={{ color: tab === "home" ? "burlywood" : "" }} to="/">
            Home
          </Link>
        </li>
        <li id="bin">
          <Link style={{ color: tab === "bin" ? "burlywood" : "" }} to="/bin">Binary</Link>
        </li>
        <li id="temp">
          <Link style={{ color: tab === "temp" ? "burlywood" : "" }} to="/temp">Temperature</Link>
        </li>
        <li id="math">
          <Link style={{ color: tab === "math" ? "burlywood" : "" }} to="/math">Math</Link>
        </li>
      </ul>
    </header>
  );
}
