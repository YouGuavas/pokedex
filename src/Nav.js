import React from 'react';

export default class Nav extends React.Component {
  render() {
    return(
      <ul className='nav flex-column'>
        {this.props.links.map((item, index) => (<li onClick={() => this.props.handleClick(item)} className='nav-item' key={index}>{item}</li>))}
      </ul>
    )
  }
}