import React, { useState, createContext } from "react";

export const OrderContext = createContext();

export default function ContextBasket(props) {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("myOrder")) || []
  );

  const orderBasket = ({ img, price, name, id }) => {
    setBasket({ img, price, name, id });

    const updatedArray = [...basket];
    updatedArray.push({ img, price, name, id });

    setBasket(updatedArray);
  };

  const deleteProduct = (id) => {
    setBasket((order) => {
      return order.filter((product) => {
        return id !== product.id;
      });
    });
  };

  localStorage.setItem("myOrder", JSON.stringify(basket));

  const value = {
    basket,
    orderBasket,
    deleteProduct,
  };
  return (
    <OrderContext.Provider value={value}>
      {props.children}
    </OrderContext.Provider>
  );
}
