import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class List extends Component {

    render() {
      return (
        <div>
              List
          <div className="list-menu">
              <Link to="/item/1">Item1</Link>
              <Link to="/item/2">Item2</Link>
              <Link to="/item/3">Item3</Link>
              <Link to="/item/4">Item4</Link>
          </div>
        </div>
      );
    }
  }

  export default List;