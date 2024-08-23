import React from "react";
import { Link } from "react-router-dom";
import "./Choice.css";

export default function Choice() {
  return (
    <section className="choice">
      <div className="choice_top">
        <h2>ЗРОБИТИ ПРЕДЗАМОВДЕННЯ</h2>
      </div>
      <div className="choice_bottom">
        <div className="choice_about">
          <p className="choice_about-anami">ANAMI</p>
          <p className="choice_about-atmosphere">
            Завжди дружня та комфортна атмосфера
          </p>
        </div>
        <div className="choice_order">
          <Link to="/drinks" className="choice_drink">
            НАПОЇ
          </Link>

          <Link to="/desserts" className="choice_desserts">
            ДЕСЕРТИ
          </Link>
        </div>
      </div>
      <div className="instagram">
        <a
          target="_blank"
          without
          rel="noreferrer"
          href="https://www.instagram.com/anami_coffee_ternopil?igsh=YnV3N2x3Zjl5eXd6"
        >
          <div className="img"></div>
        </a>
      </div>
    </section>
  );
}
