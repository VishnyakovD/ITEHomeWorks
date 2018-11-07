import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu">
        <Link to="/">Home</Link>
        <Link to="/List">List</Link>
        <Link to="/About">About</Link>
        <Link to="/Contacts">Contacts</Link>
        <Link to="/Artists">Artists</Link>
      </div>
    );
  }
}

export default MainMenu;
