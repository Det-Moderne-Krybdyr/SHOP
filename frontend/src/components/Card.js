import React from "react";
import "./Styling/Card.css";

function Card(props) {
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      <img src={props.img_src}></img>
      <p>{props.short_des}</p>
      <h2>{props.price}</h2>
      <button>Køb vare!!!</button>
    </div>
  );
}

export default Card;
