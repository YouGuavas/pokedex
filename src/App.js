import React from 'react';
import './App.css';
import Footer from './Footer';
import HowTo from './HowTo';
import Nav from './Nav';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selection: "pokemon",
      instructions: ["Search a PokéMon or type using the search bar", "Click or tap on a Pokémon's portrait to alternate between shiny and default versions"],
    };
  }
  handleSelection(selection) {
    this.setState({
      selection
    });
  }
  
  render() {
    const selection = this.state.selection;
    return (
    <div className="App">
      <div className='container-fluid full-page'>
        <Nav title='PokéDex' links={['PokéMon', 'Types']} handleSelection={(internalSelection) => {this.handleSelection(internalSelection)}} selection={selection} pokemon={this.state.pokemon} type={this.state.type} handleClick={(f) => {this.handleClick(f)}}/>
        <HowTo instructions={this.state.instructions}/>
        <Footer />
      </div>
    </div>
    )
  }
}

export default App;
