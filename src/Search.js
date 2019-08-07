import React, {Component} from 'react';
import {getPokemon} from './utils/api';

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
    console.log(this.state);
    const checker = this.state.res;
    return(
      <section>
        <div>
          <input type='text' id='search-bar'/>
          <input type='submit' onClick={this.handleClick}/>
        </div>
        <div className='poke-info'>
          {checker.sprites ? <img src={checker.sprites.front_default} /> : null}
          {checker.id ? <span>{checker.id}</span> : null}
        </div>
      </section>
    )
  }
}