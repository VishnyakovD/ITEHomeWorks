import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "./button-component";
import List from "./list-component";

class App extends Component {
  render() {
    return (
      <div>
        <div>Первое задание</div> <br />
        <div>
          <Button />
          <Button text={"Новый текст кнопки"} event={this.newEvent} />
        </div>
        <br /> <br />
        <div>Второе задание</div> <br />
        <div>
          <List />
        </div>
      </div>
    );
  }

  newEvent = () => {
    alert(`I'm new event`);
  };
}

export default App;
