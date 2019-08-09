import React from 'react';
import './App.css';
import PokeSearch from './Search';
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
        'locations': []
      }
    };
  }
  handleClick = (f) => {
    f = f.toLowerCase().replace('é', 'e');
    this.setState({
      'selection': f
    });
  }
  render() {
    const selection = this.state.selection;
    return (
    <div className="App">
      <div className='container-fluid full-page'>
        <Nav title='PokéDex' links={['PokéMon', 'Locations']} handleClick={(f) => {this.handleClick(f)}}/>
        {selection === 'pokemon' ? <PokeSearch /> : null}
        <HowTo instructions={this.state.instructions[selection]}/>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App;
