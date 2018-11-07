import React from "react";

const CellComponent = ({ cell, key }) => {
  if (cell.type === "money" && cell.currency === undefined) {
    console.warn("Параметр Валюта не заполнен!!!");
  }

  let classesName = `cell cell-${cell.type}`;
  cell.styles.width = `${100 * cell.cells}px`;

  return (
    <div className={classesName} style={cell.styles} key={key}>
      {cell.currency} {cell.text}
    </div>
  );
};

CellComponent.defaultProps = {
  cell: {
    styles: {
      flexGrow: 1,
      background: "transparent",
      color: "#3a3042",
      width: "100px"
    },
    type: "text",
    text: "Пустая ячейка",
    cells: 1
  }
};

export default CellComponent;
