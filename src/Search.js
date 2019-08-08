import React, {Component} from 'react';
import {getPokemon} from './utils/api';
import Card from './Card';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {res: {}};
  }
  getPokemonData = (pokemon) => {
    getPokemon(pokemon).then(res => this.setState({res}))
  }
  handleClick = () => {
    const pokemon = document.getElementById('search-bar').value;
    this.getPokemonData(pokemon);
  }
  componentWillMount() {
    this.getPokemonData('charizard');
  }
  render() {
    return(
      <div className="container-fluid">
        <div className='row'>
          <div className="input-group mb-3">
            <input type='text' id='search-bar'/>
            <input type='submit' onClick={this.handleClick}/>
          </div>
        </div>
        <Card data={this.state.res}/>
      </div>
    )
  }
}