import React from "react";
import Header from "../components/Header/Header";
import Dessert from "../components/Drinks&Desserts/Desserts/Dessert";
import { desserts } from "./../data";

export default function Desserts() {
  return (
    <>
      <Header />
      <div className="cards">
        {desserts.map((dessert) => {
          return (
            <Dessert
              name={dessert.name}
              price={dessert.price}
              img={dessert.img}
              about={dessert.about}
            />
          );
        })}
      </div>
    </>
  );
}
