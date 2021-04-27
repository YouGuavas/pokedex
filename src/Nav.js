import React from 'react';
import PokeSearch from './Search';
import Types from './Types';
import Card from './Card';
import {getPokemon} from './utils/api';


export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: 'charizard',
      selection: props.selection,
      res: {},
      type: 'fighting'
    }
  }
  getPokemonData = (pokemon) => {
    if (!pokemon) return;
    getPokemon(pokemon).then(res => this.setState({res}))
  }
  handleClick = (f) => {
    if (!f) return;
    f = f.toLowerCase().replace('é', 'e');
    this.setState({
      'selection': f
    });
  }
  handlePokemon = (f) => {
    if (!f) return;
    this.getPokemonData(f.pokemon.name);
    this.setState({
      selection: 'pokemon',
      pokemon: f.pokemon.name
    })
  }
  handleType = (f, cb=()=>{}) => {
    if (!f) return;
    this.setState({
      selection: 'types',
      type: f.name
    }, cb())
  }
  handleSearch = () => {
    const pokemon = document.getElementById('search-bar').value;
    this.getPokemonData(pokemon);
  }
  componentWillMount() {
    this.getPokemonData(this.state.pokemon);
  }
  render() {
    const selection = this.state.selection;
    return(
      <div>
        <div className='row'>
          <ul className='nav flex-column'>
            {this.props.links.map((item, index) => (<li onClick={() => this.handleClick(item)} className='nav-item' key={index}>{item}</li>))}
          </ul>
        </div>
        {selection === 'pokemon' ? (<div> 
          <PokeSearch pokemon={this.state.pokemon} handleSearch={this.handleSearch} handleType={this.handleType} />
          <Card data={this.state.res} handleType={this.handleType}/>
          </div>) : <Types type={this.state.type} handlePokemon={this.handlePokemon} handleType={this.handleType}/>}
      </div>

    )
  }
}