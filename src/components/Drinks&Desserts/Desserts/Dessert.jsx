import "./Dessert.css";
import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import { OrderContext } from "../../../ContextBasket";

export default function Dessert({ img, price, name, id, about }) {
  const data = useContext(OrderContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card_top">
        <img src={img} alt="" />
      </div>
      <div className="card_bottom">
        <p className="name_card">{name}</p>
        <p className="price_card">{price} грн</p>
      </div>
      <div className="buttons">
        <Button className="card_button" type="primary" onClick={showModal}>
          Опис десерту
        </Button>
        <button
          onClick={() => data.orderBasket({ img, price, name, id })}
          className="card_button "
        >
          Додати в кошик
        </button>
      </div>

      <Modal
        title={name}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{about}</p>
      </Modal>
    </div>
  );
}
