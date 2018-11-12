import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu">
        <Link to="/list/all">All</Link>
        <Link to="/list/done">Done</Link>
        <Link to="/list/undone">UnDone</Link>
      </div>
    );
  }
}

export default MainMenu;
