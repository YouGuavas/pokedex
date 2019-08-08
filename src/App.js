import React from 'react';
import './App.css';
import Search from './Search';
import Footer from './Footer';
import HowTo from './HowTo';
import {tsConstructorType } from '@babel/types';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instructions: ['Search a Pokemon using the search bar', 'Click or tap on the picture to alternate between shiny and default versions']
    };
  }
  render() {
    return (
    <div className="App">
      <div className='container-fluid full-page'>
        <Search />
        <HowTo instructions={this.state.instructions}/>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App;
