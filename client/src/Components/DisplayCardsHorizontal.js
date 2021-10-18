import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DisplayCardsHorizontal.css";
import { splittingImageList } from "../Functions/splittingImageList";
export const DisplayCardsHorizontal = ({ cardListToDisplay }) => {
  const imageList = splittingImageList(cardListToDisplay, 0, 5);
  return (
    <Carousel fade={true} nextLabel={null} prevLabel={null} interval={null}>
      <Carousel.Item style={{ display: "flex" }}>
        {imageList.map((card) => (
          <>
            <img src={card.card_images[0].image_url_small} alt={card.name} />

            <h3>Name: {card.name}</h3>
            <h4>Archetype: {card.archetype}</h4>
            <h4>
              Sets:
              {card.card_sets
                ? `  ${card.card_sets.map((set) => set.set_name)} `
                : "RAH"}
            </h4>
          </>
        ))}
      </Carousel.Item>
    </Carousel>
  );
};
