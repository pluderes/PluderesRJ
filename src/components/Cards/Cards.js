import React from "react";
import CardItem from "../common/CardItem";
import "./Cards.css";
import { cardItemData } from "../mock.data/card-item.data";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardItemData.map((item) => {
              const { src, text, label } = item;
              return (
                <CardItem
                  src={src}
                  text={text}
                  label={label}
                  path="/services"
                ></CardItem>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
