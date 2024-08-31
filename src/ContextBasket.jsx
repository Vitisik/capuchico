import React, { useState, createContext } from "react";

export const CarContext = createContext();

export default function ContextBasket(props) {
  const [basket, setBasket] = useState([]);

  const orderBasket = ({ img, price, name }) => {
    setBasket({ img, price, name });

    const updatedArray = [...basket];
    updatedArray.push({ img, price, name });
    setBasket(updatedArray);
  };

  const value = {
    basket,
    orderBasket,
  };
  return (
    <CarContext.Provider value={value}>{props.children}</CarContext.Provider>
  );
}
