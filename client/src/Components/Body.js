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
    <div className="box">
      {console.log(cardSetList)}
      {/* <img src={cardSetList[0].card_images[0].image_url} />
      <img src={cardSetList[1].card_images[0].image_url} />
      <img src={cardSetList[2].card_images[0].image_url} />
      <img src={cardSetList[3].card_images[0].image_url} />
      <img src={cardSetList[11].card_images[0].image_url} /> */}
      {cardSetList.map((card) => {
        return <img src={card.card_images[0].image_url_small} />;
      })}
    </div>
  );
};
