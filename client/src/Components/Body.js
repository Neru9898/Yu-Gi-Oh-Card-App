import React from "react";
import "./Body.css";
import { DisplayCardsHorizontal } from "./DisplayCardsHorizontal";
import { getCardType } from "../Functions/getCardType";
import { NavMenu } from "./NavMenu";
export const Body = () => {
  const getRequestedType = getCardType("Spell Card");

  return (
    <>
      <NavMenu />
      <DisplayCardsHorizontal cardListToDisplay={getRequestedType} />
    </>
  );
};
// 'Ritual Effect Monster'
