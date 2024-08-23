import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <span className="header_logo">ANAMI</span>
      </a>
      <nav className="header_nav">
        <li>Про нас</li>
        <li>Увійти</li>
        <li>Зареєструватись</li>
      </nav>
    </header>
  );
}
