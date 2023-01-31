import React, { useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, setCardsArr] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    setCardsArr((prevArr) => [...prevArr, cardName]);
  };

  const reset = () => {
    setScore(0);
    setCardsArr([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <div className="card-container" id="card-container">
        <CardContainer
          handleGameLogic={handleGameLogic}
          score={score}
          highScore={highScore}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
