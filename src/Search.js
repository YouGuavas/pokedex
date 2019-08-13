import React, {Component} from 'react';
import {getPokemon} from './utils/api';
import Card from './Card';

export default class PokeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: {},
      pokemon: props.pokemon
    };
  }
  getPokemonData = (pokemon) => {
    getPokemon(pokemon).then(res => this.setState({res}))
  }
  handleClick = () => {
    const pokemon = document.getElementById('search-bar').value;
    this.getPokemonData(pokemon);
  }
  componentWillMount() {
    this.getPokemonData(this.state.pokemon);
  }
  render() {
    return(
      <div>
        <div className='row'>
          <div className="input-group mb-3 center-row">
            <input type='text' id='search-bar'/>
            <input type='submit' onClick={this.handleClick}/>
          </div>
        </div>
        <div className='container'>
        <Card data={this.state.res} handleType={this.props.handleType}/>
        </div>
      </div>
    )
  }
}
