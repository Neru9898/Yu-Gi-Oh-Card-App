import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core";
export const Body = () => {
  const [cardSetList, setCardSetList] = useState([]);
  useEffect(() => {
    axios.get("https://db.ygoprodeck.com/api/v7/cardsets.php").then((res) => {
      const cardSets = res.data.sort(
        (a, b) => Date.parse(b.tcg_date) - Date.parse(a.tcg_date)
      );

      setCardSetList(cardSets.splice(5));
    });
  }, []);
  const findCardsInCardSet = (setName) => {
    console.log(setName);
    return axios
      .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=${setName}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  };

  return (
    <>
      {cardSetList.map((set) => {
        return (
          <Grid>
            <div key={set.set_code}>
              <Typography variant="h4" component={"span"}>
                {set.set_name}
              </Typography>
              <Typography variant="h5" component={"span"}>
                {set.set_name}
              </Typography>
            </div>
          </Grid>
        );
      })}
    </>
  );
};
