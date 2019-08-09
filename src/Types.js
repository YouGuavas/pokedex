import React from 'react';
import {getType} from './utils/api';

export default class Types extends React.Component {
  componentWillMount() {
    console.log(getType('fighting'));
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
      </div>
    )
  }
}