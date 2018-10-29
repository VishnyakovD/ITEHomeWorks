import React, { Component } from 'react';
import './App.css';
import Table from './table-comopnent';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Table className={'table'} />
      </div>
    );
  }
}

export default App;
