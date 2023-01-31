import React, { useState, useEffect } from "react";
import Card from "./Card";
import thor from "../images/thor.png";
import antman from "../images/antman.jpeg";
import blackpanther from "../images/blackpanther.png";
import captainamerica from "../images/captainamerica.jpeg";
import cyclops from "../images/cyclops.jpeg";
import deadpool from "../images/deadpool.jpeg";
import drstrange from "../images/drstrange.jpeg";
import hulk from "../images/hulk.jpeg";
import ironman from "../images/ironman.jpeg";
import loki from "../images/loki.jpeg";
import magneto from "../images/magneto.jpeg";
import nickfury from "../images/nickfury.png";
import punisher from "../images/punisher.jpeg";
import spiderman from "../images/spiderman.jpeg";
import wolverine from "../images/wolverine.jpeg";

function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  const images = [
    {
      src: thor,
      title: "Thor",
    },
    {
      src: antman,
      title: "Antman",
    },
    {
      src: blackpanther,
      title: "Black Panther",
    },
    {
      src: captainamerica,
      title: "Captain America",
    },
    {
      src: cyclops,
      title: "Cyclops",
    },
    {
      src: deadpool,
      title: "Deadpool",
    },
    {
      src: drstrange,
      title: "Dr. Strange",
    },
    {
      src: hulk,
      title: "Hulk",
    },
    {
      src: ironman,
      title: "Iron man",
    },
    {
      src: loki,
      title: "Loki",
    },
    {
      src: magneto,
      title: "Magneto",
    },
    {
      src: nickfury,
      title: "Nick Fury",
    },
    {
      src: punisher,
      title: "Punisher",
    },
    {
      src: spiderman,
      title: "Spiderman",
    },
    {
      src: wolverine,
      title: "Wolverine",
    },
  ];

  const [cards, setCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, highScore]);
  //Eslint gives warning for useEffect hook. Check it later.

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </>
  );
}

export default CardContainer;
