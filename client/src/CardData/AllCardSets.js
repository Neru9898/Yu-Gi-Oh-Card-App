import { useState, useEffect } from "react";
import axios from "axios";
export const AllCardSets = () => {
  const [cardSetList, setCardSetList] = useState([]);

  useEffect(() => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardsets.php")
      .then((res) =>
        setCardSetList(
          res.data.sort(
            (a, b) => Date.parse(b.tcg_date) - Date.parse(a.tcg_date)
          )
        )
      );
  }, []);

  return cardSetList;
};
