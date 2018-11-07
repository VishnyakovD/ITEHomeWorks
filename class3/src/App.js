import React, { Component } from "react";
import { TogglerComponent, TogglerComponentItem } from "./TogglerComponent";
import { InputComponent } from "./InputComponent";
import { ButtonComponent } from "./ButtonComponent";

import "./App.css";

class App extends Component {
  state = {
    activeToggler: "Male",
    activeLayout: "Right",
    name: "Dima",
    password: "",
    age: "",
    language: ""
  };

  setStateValue = (key, value) => {
    this.setState({ [key]: value });
  };

  inputHandler = event => {
    this.setStateValue(event.target.name, event.target.value);
  };

  togglerHandler = event => {
    this.setStateValue(event.target.dataset.parent, event.target.dataset.value);
  };

  buttonHandler = event => {
    console.log(this.state);
  };

  render() {
    let { inputHandler } = this;
    let { activeToggler, activeLayout } = this.state;
    return (
      <div className="App">
        {
          <div>
            <InputComponent
              name="name"
              text="Name"
              type="text"
              onChangeHandler={inputHandler}
              placeholder="Enter name..."
            />

            <InputComponent
              name="password"
              text="Password"
              type="password"
              onChangeHandler={inputHandler}
              placeholder=""
            />

            <TogglerComponent
              name="activeToggler"
              text="Gender"
              activeToggler={activeToggler}
              changeState={this.togglerHandler}
            >
              <TogglerComponentItem text="Male" />
              <TogglerComponentItem text="Female" />
            </TogglerComponent>

            <InputComponent
              name="age"
              text="Age"
              type="number"
              onChangeHandler={inputHandler}
              placeholder=""
            />

            <TogglerComponent
              name="activeLayout"
              text="Layout"
              activeToggler={activeLayout}
              changeState={this.togglerHandler}
            >
              <TogglerComponentItem text="Left" />
              <TogglerComponentItem text="Center" />
              <TogglerComponentItem text="Right" />
            </TogglerComponent>

            <InputComponent
              name="language"
              text="Language"
              type="text"
              onChangeHandler={inputHandler}
              placeholder=""
            />

            <ButtonComponent event={this.buttonHandler} />
          </div>
        }
      </div>
    );
  }
}

export default App;
