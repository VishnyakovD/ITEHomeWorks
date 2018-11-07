import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent";
import "./App.css";

class App extends Component {
  clickButton = e => {
    //e.target.style.background = "blue";
    //e.target.className = "blue";

    console.log(e.refs["buttonRef"]);
    //this.target.buttonRef.class = "a123";
  };

  render() {
    return (
      <div className="App">
        <ButtonComponent animateClass="gradient" text="bg-color-animate" />
        <ButtonComponent animateClass="opacity" text="opacity" />
        <ButtonComponent animateClass="move" text="move text" />
      </div>
    );
  }
}

export default App;
