import React from "react";
import classNames from "classnames";

function Cell(props) {
  const cellClasses = classNames({
    cell: true,
    winner: props.isHightlight,
  });

  const cellContentClasses = classNames({
    "cell-content": true,
    populated: props.value,
  });

  return (
    <button className={cellClasses} onClick={props.showCase}>
      <span className={cellContentClasses}>{props.value}</span>
    </button>
  );
}

export default Cell;
