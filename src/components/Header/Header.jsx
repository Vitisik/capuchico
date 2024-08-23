import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <span className="header_logo">ANAMI</span>
      </Link>
      <nav className="header_nav">
        <li>Про нас</li>
        <li>Увійти</li>
        <li>Зареєструватись</li>
      </nav>
    </header>
  );
}
