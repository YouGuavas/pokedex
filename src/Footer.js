import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer className='page-footer row'>
        <div className='container-fluid'>
          <div className='row'>
            Made with <a href='#'>React</a>, <a href='#'>Bootstrap</a>, and <a href='#'>PokeAPI</a>
          </div>
          <div className='row'>
            Check it out on <a href='#'>Github</a>!
          </div>
        </div>
      </footer>
    )
  }
}