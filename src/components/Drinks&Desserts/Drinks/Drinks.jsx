import React from "react";
import Header from "../../Header/Header";
import Dessert from "../Desserts/Dessert";
import { drinks } from "../../../data";

export default function Drinks() {
  return (
    <>
      <Header />
      <div className="cards">
        {drinks.map((drink) => {
          return (
            <Dessert
              key={drink.id}
              name={drink.name}
              price={drink.price}
              img={drink.img}
              id={drink.id}
              about={drink.about}
            />
          );
        })}
      </div>
    </>
  );
}
