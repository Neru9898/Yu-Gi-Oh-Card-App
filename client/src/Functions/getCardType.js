import { AllCards } from "../CardData/AllCards";

export const getCardType = (requestedType) => {
  const allCardsList = AllCards();
  const getRequestedType = allCardsList.filter((card) => {
    if (card.type === requestedType) {
      return card;
    }
  });

  return getRequestedType;
};
