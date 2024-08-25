import "./Dessert.css";
import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function Dessert(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card">
      <div className="card_top">
        <img src={props.img} alt="" />
      </div>
      <div className="card_bottom">
        <p className="name_card">{props.name}</p>
        <p className="price_card">{props.price} грн</p>
      </div>
      <Button className="card_button" type="primary" onClick={showModal}>
        Опис десерту
      </Button>
      <button className="card_button">Додати в кошик</button>

      <Modal
        title={props.name}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{props.about}</p>
      </Modal>
    </div>
  );
}
