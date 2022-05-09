import React from "react";
import Board from "./Board";
import { useState } from "react";
import Modal from "./Modal";
import { calculateWinner } from "./utils/calculateWinner";

function Game() {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [isXNext, setIsXNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfTurn, setNumberOfTurn] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombinations, setWinningCombinations] = useState([]);

  const winnerCombination = [];

  // check whether cell is empty function
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const onNewGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setIsXNext(true);
    setIsGameOver(false);
    setNumberOfTurn(9);
    setWinner(undefined);
    setWinningCombinations([]);
  };

  const cellClicked = (index) => {
    if (isCellEmpty(index)) {
      const newCellVal = [...cellValues];
      newCellVal[index] = isXNext ? "X" : "0";
      const newNumberOfTurn = numberOfTurn - 1;
      const result = calculateWinner(newCellVal, newNumberOfTurn, index);
      setCellValues(newCellVal);
      setIsXNext(!isXNext);
      setIsGameOver(result.hasResult);
      setNumberOfTurn(newNumberOfTurn);
      setWinner(result.winner);
      setWinningCombinations(result.winnerCombination);
    }
  };

  return (
    <>
      <div id="game">
        <h1>The Best Game For Waste Time</h1>
        <Board
          cellValues={cellValues}
          winnerCombination={winnerCombination}
          cellClicked={cellClicked}
        />
      </div>
      <Modal isGameOver={isGameOver} winner={winner} onNewGame={onNewGame} />
    </>
  );
}

export default Game;
