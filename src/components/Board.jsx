import React from "react";
import Cell from "./Cell";

function Board(props) {
  return (
    <div id="board">
      {props.cellValues.map((val, index) => {
        const isHightlight =
          props.winnerCombination &&
          props.winnerCombination.indexOf(index) >= 0;
        return (
          <Cell
            value={val}
            isHightlight={isHightlight}
            key={index}
            showCase={() => props.cellClicked(index)}
          />
        );
      })}
    </div>
  );
}

export default Board;
