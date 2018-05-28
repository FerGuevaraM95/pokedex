import React, { Component } from 'react';
import PokeList from '../PokeList';
import DetailView from '../DetailView';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PokeList />
        <DetailView />
      </div>
    );
  }
}


export default App;