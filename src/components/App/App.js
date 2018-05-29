import React, { Component } from 'react';
import logo from '../../assets/pokemon.png';
import Pokemon from '../../Pokemon';
import PokeList from '../PokeList';
import DetailView from '../DetailView';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

    handleOnClick(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);

                this.setState({ pokemon });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
        <div className="App">
            <img src={logo} className="App-logo" alt="pokémon" />
            <div className="Dex">
                <PokeList handleOnClick={this.handleOnClick} />
                <DetailView pokemon={this.state.pokemon} />
            </div>
        </div>
        );
    }
}


export default App;