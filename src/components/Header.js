import React from "react";

function Header(props) {
  const { score, highScore } = props;

  return (
    <header className="header">
      <h1 className="main-title">MARVEL &nbsp;MEMORY &nbsp;GAME</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <div className="score-board">
        <p className="current-score">Score: {score}</p>
        <p className="best-score">High Score: {highScore}</p>
      </div>
    </header>
  );
}

export default Header;
