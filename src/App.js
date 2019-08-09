import React from 'react';
import './App.css';
import PokeSearch from './Search';
import Footer from './Footer';
import HowTo from './HowTo';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instructions: ['Search a PokéMon using the search bar', 'Click or tap on the picture to alternate between shiny and default versions']
    };
  }
  render() {
    return (
    <div className="App">
      <div className='container-fluid full-page'>
        <PokeSearch />
        <HowTo instructions={this.state.instructions}/>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App;
