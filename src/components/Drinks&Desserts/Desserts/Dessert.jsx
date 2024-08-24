import "./Dessert.css";

export default function Dessert(props) {
  return (
    <div className="card">
      <div className="card_top">
        <img src={props.img} alt="" />
      </div>
      <div className="card_bottom">
        <p className="name_card">{props.name}</p>
        <p className="price_card">{props.price} грн</p>
      </div>
      <button className="card_button">Додати в кошик</button>
    </div>
  );
}
