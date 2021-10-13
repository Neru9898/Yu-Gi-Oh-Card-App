import React from "react";
import "./Body.css";
import { DisplayCardsHorizontal } from "./DisplayCardsHorizontal";
import { getCardType } from "../Functions/getCardType";
import { AllCardSets } from "../CardData/AllCardSets";
export const Body = () => {
  const getRequestedType = getCardType("Spell Card");
  console.log(AllCardSets());
  return (
    <>
      <DisplayCardsHorizontal cardListToDisplay={getRequestedType} />
    </>
  );
};
// 'Ritual Effect Monster'
