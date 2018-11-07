import React from "react";
import Cell from "./cell-component";

const RowComponent = ({ cells, isHead, key0 }) => {
  return (
    <div key={key0} className={isHead ? "row row-head" : "row"}>
      {cells.map((cell, key2) => {
        return <Cell cell={cell} key={key2} />;
      })}
    </div>
  );
};

RowComponent.defaultProps = {
  isHead: false,
  cells: []
};

export default RowComponent;
