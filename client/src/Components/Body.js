import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const Body = () => {
  const [cardSetList, setCardSetList] = useState([]);
  useEffect(() => {
    axios.get("https://db.ygoprodeck.com/api/v7/cardsets.php").then((res) => {
      const cardSets = res.data.sort(
        (a, b) => Date.parse(b.tcg_date) - Date.parse(a.tcg_date)
      );
      setCardSetList(cardSets);
    });
  }, []);
  const findCardsInCardSet = (setName) => {
    return axios
      .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=${setName}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  };

  return (
    <>
      <div>{console.log(cardSetList)}</div>
    </>
  );
};
