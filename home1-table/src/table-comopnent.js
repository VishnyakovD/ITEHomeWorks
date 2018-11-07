import React from "react";
import Row from "./row-component";
/*
cell:{
    styles: {
   
    background: 'transparent',
    color: '#3a3042'
    },
    type: "text",
    text: "Пустая ячейка"
}
*/

const table = {
  rows: [
    {
      isHead: true,
      cells: [
        {
          styles: { background: "#f2476a", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка",
          cells: 2
        },
        {
          styles: { background: "#add8e6", color: "#3a3042" },
          type: "date",
          text: "18-11-1987",
          cells: 2
        },
        {
          styles: { background: "#bbded6", color: "#ffe19c" },
          type: "money",
          text: "555",
          currency: "USD",
          cells: 2
        }
      ]
    },
    {
      isHead: false,
      cells: [
        {
          styles: { background: "#f2476a", color: "#3a3042" },
          type: "money",
          text: "5555",
          cells: 1
        },
        {
          styles: { background: "#add8e6", color: "#ffe19c" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 1
        },
        {
          styles: { background: "#bbded6", color: "#ffe19c" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 3
        }
      ]
    },
    {
      isHead: false,
      cells: [
        {
          styles: { background: "#f2476a", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка",
          cells: 1
        },
        {
          styles: { background: "#add8e6", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 3
        },
        {
          styles: { background: "#bbded6", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 1
        }
      ]
    },
    {
      isHead: false,
      cells: [
        {
          styles: { background: "#f2476a", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка",
          cells: 1
        },
        {
          styles: { background: "#add8e6", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 1
        },
        {
          styles: { background: "#bbded6", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 1
        }
      ]
    },
    {
      isHead: false,
      cells: [
        {
          styles: { background: "#f2476a", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка",
          cells: 1
        },
        {
          styles: { background: "#add8e6", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 1
        },
        {
          styles: { background: "#bbded6", color: "#3a3042" },
          type: "text",
          text: "Не пустая ячейка2",
          cells: 1
        }
      ]
    }
  ]
};

const TableComponent = ({ className }) => {
  return (
    <div className={className}>
      {table.rows.map((row, key0) => {
        return (
          <Row cells={row.cells} isHead={row.isHead} key={"row-" + key0} />
        );
      })}
    </div>
  );
};

export default TableComponent;
