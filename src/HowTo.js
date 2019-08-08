import React, {Component} from 'react';

export default class HowTo extends Component {
  render() {
    return(
      <div className='container-fluid center-row'>
        {this.props.instructions.map((item, index) => (<div className='row center-row' key={index}>{`${index + 1} - ${item}`}</div>))}
      </div>
    )
  }
}