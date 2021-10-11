import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
export const DisplayCardsHorizontal = ({ cardListToDisplay }) => {
  return (
    <Carousel fade={true} nextLabel={null} prevLabel={null} interval={null}>
      {cardListToDisplay.map((card) => {
        return (
          <Carousel.Item key={card.id}>
            <img src={card.card_images[0].image_url} alt={card.name} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
