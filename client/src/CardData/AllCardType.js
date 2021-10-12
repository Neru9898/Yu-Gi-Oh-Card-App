import { AllCards } from "./AllCards";

export const AllCardType = () => {
  const cardList = AllCards();
  let cardTypeList = [];
  cardList.forEach((card) => {
    if (!cardTypeList.includes(card.type)) {
      cardTypeList.push(card.type);
    }
  });
  cardTypeList.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return cardTypeList;
};
