import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space, Button, Drawer } from "antd";
import { useState } from "react";
import { OrderContext } from "../../ContextBasket";

export default function Header() {
  const data = useContext(OrderContext);
  const price = () => {
    return data.basket.map((total) => {
      return total.price;
    }, 0);
  };
  // console.log(
  //   price().reduce((prev, next) => {
  //     return prev + next;
  //   })
  // );

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

        <Drawer title="Ваші замовлення" onClose={onClose} open={open}>
          {data.basket.length === 0 ? (
            <div className="basket-empty">
              {/* <img src="./empty.png" alt="Пустая корзина" /> */}
            </div>
          ) : (
            <div className="basket_flex">
              {data.basket.map((baskets) => {
                return (
                  <div className="basket-card">
                    <div className="basket-card_top">
                      <img src={baskets.img} alt={baskets.name} />
                    </div>
                    <div className="basket-card_bottom">
                      <p className="basket-name_card">{baskets.name}</p>
                      <p className="basket-price_card">{baskets.price} грн</p>
                    </div>

                    <Space>
                      <Button
                        className="delete_button"
                        type="primary"
                        onClick={() => {
                          data.deleteProduct(baskets.id);
                        }}
                      >
                        <DeleteOutlined />
                      </Button>
                    </Space>
                  </div>
                );
              })}
            </div>
          )}
          <div className="basket_footer">
            <p className="basket_footer-price">Всього до сплати:</p>
            <span>
              {price().reduce((prev, next) => {
                return prev + next;
              }, 0)}
              ₴
            </span>
          </div>
        </Drawer>

        <li>Про нас</li>
        <li>Увійти</li>
        <li>Зареєструватись</li>
      </nav>
    </header>
  );
}
