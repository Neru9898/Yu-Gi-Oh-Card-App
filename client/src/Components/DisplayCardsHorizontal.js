import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DisplayCardsHorizontal.css";
export const DisplayCardsHorizontal = ({ cardListToDisplay }) => {
  return (
    <Carousel fade={true} nextLabel={null} prevLabel={null} interval={null}>
      {cardListToDisplay.map((card) => {
        return (
          <Carousel.Item key={card.id}>
            <img src={card.card_images[0].image_url} alt={card.name} />

            <h3>Name: {card.name}</h3>
            <h4>Archetype: {card.archetype}</h4>
            <h4>
              Sets:
              {card.card_sets
                ? `  ${card.card_sets.map((set) => set.set_name)} `
                : "RAH"}
            </h4>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
