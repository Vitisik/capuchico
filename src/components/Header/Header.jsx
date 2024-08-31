import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space, Button, Drawer } from "antd";
import { useState } from "react";
import { CarContext } from "../../ContextBasket";

export default function Header() {
  const data = useContext(CarContext);
  console.log(data.basket);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <Link to="/">
        <span className="header_logo">ANAMI</span>
      </Link>
      <nav className="header_nav">
        <Space>
          <Button type="primary" onClick={showDrawer} className="header_basket">
            Кошик
            <ShoppingCartOutlined />
          </Button>
        </Space>

        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          {data.basket.map((baskets) => {
            return (
              <div className="basket-card">
                <div className="basket-card_top">
                  <img src={baskets.img} alt="" />
                </div>
                <div className="basket-card_bottom">
                  <p className="basket-name_card">{baskets.name}</p>
                  <p className="basket-price_card">{baskets.price} грн</p>
                </div>
                <Space>
                  <Button
                    className="delete_button"
                    type="primary"

                    // className="header_basket"
                  >
                    <DeleteOutlined />
                  </Button>
                </Space>
              </div>
            );
          })}
        </Drawer>

        <li>Про нас</li>
        <li>Увійти</li>
        <li>Зареєструватись</li>
      </nav>
    </header>
  );
}
