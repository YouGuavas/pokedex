import React, {Component} from 'react';

export default class Card extends Component {
  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  render() {
    const checker = this.props.data;
    console.log(checker);
    let name = checker.name
    
    return(
      <div className='row'>
          <div className='card'>
            {name ? <h5 className='card-title'>{this.capitalize(name)}</h5> : null}
            {checker.sprites ? <img alt={`Sprite depicting the Pokemon ${this.capitalize(name)}`} src={checker.sprites.front_default} className='col-sm'/> : null}
            <div className='card-body container'>
              {checker.id ? <span className='row'>ID - {checker.id}</span> : null}
              {checker.types ? <span className='row'>Types - {checker.types.map((item, index) => (<span key={index}>{this.capitalize(item.type.name)}</span>))}</span> : null}
            </div>
          </div>
        </div>
    )
  }
}