import React, {Component} from 'react';

export default class PokeSearch extends Component {
  
  render() {
    return(
      <div>
        <div className="input-group mb-3 center-row">
          <input type='text' id='search-bar'/>
          <input type='submit' onClick={this.props.handleSearch}/>
        </div>
      </div>
    )
  }
}