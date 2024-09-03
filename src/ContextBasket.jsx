import React, { useState, createContext } from "react";

export const CarContext = createContext();

export default function ContextBasket(props) {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("myOrder")) || []
  );
  console.log(basket);

  const orderBasket = ({ img, price, name }) => {
    setBasket({ img, price, name });

    const updatedArray = [...basket];
    updatedArray.push({ img, price, name });

    setBasket(updatedArray);
  };

  localStorage.setItem("myOrder", JSON.stringify(basket));

  const value = {
    basket,
    orderBasket,
  };
  return (
    <CarContext.Provider value={value}>{props.children}</CarContext.Provider>
  );
}
