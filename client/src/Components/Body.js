import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";
export const Body = () => {
  const [cardSetList, setCardSetList] = useState([]);
  useEffect(() => {
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((res) => {
      const allCardList = res.data.data.sort((a, b) => {
        if (a.type > b.type) {
          return -1;
        }
        if (b.type > a.type) {
          return 1;
        }
        return 0;
      });
      setCardSetList(allCardList);
    });
  }, []);

  return (
    <>
      <div className="box ">
        {console.log(cardSetList)}

        {cardSetList.map((card) => {
          return card.type === "XYZ Pendulum Effect Monster" ? (
            <div className="img__wrap">
              <img
                className="img__img"
                src={card.card_images[0].image_url_small}
              />
              <div className="img__description">
                <h3>{card.name}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ) : null;
        })}
      </div>
      {/* <div className="box">
        {console.log(cardSetList)}

        {cardSetList.map((card) => {
          return card.type === "XYZ Monster" ? (
            <img src={card.card_images[0].image_url_small} />
          ) : null;
        })}
      </div>
      <div className="box">
        {console.log(cardSetList)}

        {cardSetList.map((card) => {
          return card.type === "Tuner Monster" ? (
            <img src={card.card_images[0].image_url_small} />
          ) : null;
        })}
      </div>
      <div className="box">
        {console.log(cardSetList)}

        {cardSetList.map((card) => {
          return card.type === "Ritual Effect Monster" ? (
            <img src={card.card_images[0].image_url_small} />
          ) : null;
        })}
      </div> */}
    </>
  );
};
// 'Ritual Effect Monster'
