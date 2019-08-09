import React from 'react';
import {getType} from './utils/api';

export default class Types extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'fighting',
      res: {}
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
  componentWillMount() {
    this.getTypeData(this.state.type);
  }
  render() {
    console.log(this.state);
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
          <div className='row'>{`Type: ${this.capitalize(this.state.type)}`}</div>
          <div className='row'>
          {checker ? (`Receives double damage from: ${checker.double_damage_from.map(item => (this.capitalize(item.name)))}`).replace(/,/g, ', ') : null}
          </div>
        </div>
      </div>
    )
  }
}