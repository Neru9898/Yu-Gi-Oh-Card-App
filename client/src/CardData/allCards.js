import { useState, useEffect } from "react";
import axios from "axios";
export const AllCards = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((res) => setCardList(res.data.data));
  }, []);

  return cardList;
};
