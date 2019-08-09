import React from 'react';
import './App.css';
import PokeSearch from './Search';
import Footer from './Footer';
import HowTo from './HowTo';
import Nav from './Nav';
import Types from './Types';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: 'types',
      instructions: {
        'pokemon': ['Search a PokéMon using the search bar', 'Click or tap on the picture to alternate between shiny and default versions'],
        'types': []
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
        <Nav title='PokéDex' links={['PokéMon', 'Types']} handleClick={(f) => {this.handleClick(f)}}/>
        {selection === 'pokemon' ? <PokeSearch /> : <Types />}
        <HowTo instructions={this.state.instructions[selection]}/>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App;
