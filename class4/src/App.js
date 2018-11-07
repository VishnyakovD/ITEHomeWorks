import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "./routes";
import MainMenu from "./components/main-menu";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <Switch>
          {Routes.map((route, index) => {
            return <Route key={index} {...route} />;
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
