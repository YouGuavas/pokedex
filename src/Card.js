import React, {Component} from 'react';

export default class Card extends Component {
  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  weight = (kg) => {
    return Math.ceil((kg/10) * 2.205);
    //weight measurements are weirdly returned by PokeAPI as kg * 10
    //Approximate kg - lb conversion is kg * 2.205
  }
  height = (m) => {
    const inches = Math.ceil((m*10) / 2.54);
    /*
    height measurements are weirdly returned by PokeAPI as meters * 10
    we multiply that by an additional 10 to get centimeters
    cm to inches = cm * 2.54
    */
    const feet = Math.floor(inches / 12);
    const rInches = inches % 12;
    //remaining inches after feet have been calculated
    return {feet, rInches}
  }
  
  handleShiny = (e) => {
    const images = this.props.data.sprites;
    const src = e.target.src;
    if (src === images.front_default) {
      e.target.src = images.front_shiny;
    } else {
      e.target.src = images.front_default;
    }
  }
  render() {
    const checker = this.props.data;
    let name = checker.name
    const height = this.height(checker.height);
    return(
      <div className='row'>
          <div className='card' id='card'>
            {name ? <h5 className='card-title'>{this.capitalize(name)}</h5> : null}
            {checker.sprites ? <img onClick={e => this.handleShiny(e)} alt={`Sprite depicting the PokéMon ${this.capitalize(name)}`} src={checker.sprites.front_default} className='col-sm holographic'/> : null}
            {checker.weight ? <span className='bio'>{`Length: ${height.feet}'${height.rInches}", Weight: ${this.weight(checker.weight)}`} lbs</span> : null}
            <div className='card-body container'>
              {checker.id ? <span className='row'>{`PokéDex ID - ${checker.id}`}</span> : null}
              {checker.types ? <span className='row'>{(`Type(s) - ${checker.types.map(item => (this.capitalize(item.type.name)))}`).replace(/,/g, ', ')}</span> : null}
            </div>
          </div>
        </div>
    )
  }
}