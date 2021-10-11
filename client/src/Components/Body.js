import React from "react";
import "./Body.css";
import { DisplayCardsHorizontal } from "./DisplayCardsHorizontal";
import { getCardType } from "../Functions/getCardType";

export const Body = () => {
  const getRequestedType = getCardType("Spell Card");
  return (
    <>
      <DisplayCardsHorizontal cardListToDisplay={getRequestedType} />
    </>
  );
};
// 'Ritual Effect Monster'
