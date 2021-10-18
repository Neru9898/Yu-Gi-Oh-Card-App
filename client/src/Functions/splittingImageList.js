export const splittingImageList = (
  cardListToDisplay,
  startIndex,
  increment
) => {
  const imageList = cardListToDisplay.slice(startIndex, increment);
  return imageList;
};
