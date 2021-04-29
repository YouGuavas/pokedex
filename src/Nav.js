import React from 'react';
import PokeSearch from './Search';
import Types from './Types';
import Card from './Card';
import {search} from './utils/api';


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
  
  handleClick = (f) => {
    if (!f) return;
    f = f.toLowerCase().replace('é', 'e');
    this.props.handleSelection(f);
    this.setState({
      'selection': f
    });
  }
  handleType = (f, cb=()=>{}) => {
    if (!f) return;
    this.props.handleSelection('types');
    this.setState({
      selection: 'types',
      type: f.name
    }, cb())
  }
  handleSearch = (searchTerm='charizard') => {
    if (!searchTerm) searchTerm = document.getElementById('search-bar').value;
    if (typeof(searchTerm) !== 'string') searchTerm = searchTerm.pokemon.name;
    search(searchTerm)
      .then((result) => {
        if (!result) return
        let type = this.state.type;
        if (result.searchType === 'type') { type = searchTerm } 
        this.setState({res: result.data, selection: result.searchType, type})
      })
  }
  componentDidMount() {
    this.handleSearch();
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
          </div>) : <Types type={this.state.type} handleSearch={this.handleSearch} handleType={this.handleType}/>}
      </div>

    )
  }
}