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
            <div className="imgbox">
              <img className="imgcard" src={card.card_images[0].image_url} />
              <div className="imginfo">
                <h3>{card.name}</h3>
                <h3>{card.desc}</h3>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
};
// 'Ritual Effect Monster'
