import React, { Component } from "react";
import LoaderImg from "./loader-component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoaderImg
          src={
            "https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png"
          }
        />
      </div>
    );
  }
}

export default App;
