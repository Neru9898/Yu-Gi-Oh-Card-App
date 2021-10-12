import React from "react";
import "./Body.css";
import { DisplayCardsHorizontal } from "./DisplayCardsHorizontal";
import { getCardType } from "../Functions/getCardType";
import { AllCardType } from "../CardData/AllCardType";
export const Body = () => {
  const getRequestedType = getCardType("Spell Card");
  console.log(AllCardType());
  return (
    <>
      <DisplayCardsHorizontal cardListToDisplay={getRequestedType} />
    </>
  );
};
// 'Ritual Effect Monster'
