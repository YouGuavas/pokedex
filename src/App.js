import React from 'react';
import './App.css';
import Footer from './Footer';
import HowTo from './HowTo';
import Nav from './Nav';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: 'pokemon',
      instructions: {
        'pokemon': ['Search a PokéMon using the search bar', 'Click or tap on the picture to alternate between shiny and default versions'],
        'types': []
      }
    };
  }
  
  render() {
    const selection = this.state.selection;
    return (
    <div className="App">
      <div className='container-fluid full-page'>
        <Nav title='PokéDex' links={['PokéMon', 'Types']} selection={selection} pokemon={this.state.pokemon} type={this.state.type} handleClick={(f) => {this.handleClick(f)}}/>
        <HowTo instructions={this.state.instructions[selection]}/>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App;
