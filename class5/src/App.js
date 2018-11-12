import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Routes from "./routes";

import AddToDo from "./components/AddToDoComponent";
import Menu from "./components/MenuComponent";


class App extends Component {

  eventBtn=()=>{
    console.log(this)
      console.log("eventBtn props", this.props)
      console.log("eventBtn state", this.state)
  }

  render() {
    let { toDosList, addToDo } = this.props;
    console.log(this.props)
    return (
      <div className="App">        
          <AddToDo text={"dfsdf"} event={ () => {} } />
          <Menu />
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


