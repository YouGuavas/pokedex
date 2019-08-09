import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer className='page-footer'>
        <div className='container-fluid'>
          <div className='row center-row'>
            Made with <a href='https://reactjs.org/'>React</a>, <a href='https://getbootstrap.com/'>Bootstrap</a>, and <a href='https://pokeapi.co/'>PokéAPI</a>
          </div>
          <div className='row center-row'>
            Check it out on <a href='https://github.com/YouGuavas/pokedex'>Github</a>!
          </div>
        </div>
      </footer>
    )
  }
}