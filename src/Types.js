import React from 'react';
import {getType} from './utils/api';

export default class Types extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      res: {},
      basics: {
        double_damage_from: "Receives double damage from: ",
        double_damage_to:"Deals double damage to: ",
        half_damage_from: "Receives half damage from: ",
        half_damage_to: "Deals half damage to: ",
        no_damage_from: "Receives half damage from: ",
        no_damage_to: "Deals half damage to: "
      }
    };
  }
  getTypeData = (type) => {
    getType(type).then(res => this.setState({res}))
  }
  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  handleClick = () => {
    const type = document.getElementById('search-bar').value;
    this.getTypeData(type);
    this.setState({type});
  }
  handleType = (t) => {
    this.props.handleType(t, () =>{
      this.getTypeData(t.name);
      this.setState({type: t.name})
    });
  }
  componentWillMount() {
    this.getTypeData(this.state.type);
  }
  render() {
    const checker = this.state.res.damage_relations;
    return(
      <div>
        <div className='row'>
          <div className="input-group mb-3 center-row">
            <input type='text' id='search-bar'/>
            <input type='submit' onClick={this.handleClick}/>
          </div>
        </div>
        <div className='row center-row'>
          <div className='container-fluid'>
            <div className='row center-row'>{`Type: ${this.capitalize(this.state.type)}`}</div>
            {
              checker ? (Object.keys(checker)
              .map((key, index) => {
                if (checker[key].length > 0) {return <div className='row center-row' key={index}><span>{`${this.state.basics[key]}`}</span>{checker[key]
                .map((item, index) => (<span id={index} onClick={() => this.handleType(item)} key={index} className='poke-span'>{this.capitalize(item.name)}</span>))}</div>} else return null}) ): null
              }
              <div className='row center-row poke-row'>{checker ? this.state.res.pokemon.map((pokemon, index) => <span onClick={() => this.props.handlePokemon(pokemon)} key={index} className='poke-span col-sm-3'>{this.capitalize(pokemon.pokemon.name)}</span>): null}</div>
          </div>
        </div>
      </div>
    )
  }
}