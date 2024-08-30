import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
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
          <p>{data.basket.name}</p>
          <p>Some contents...</p>
        </Drawer>

        <li>Про нас</li>
        <li>Увійти</li>
        <li>Зареєструватись</li>
      </nav>
    </header>
  );
}
