import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      location: '',
      date: '',
      description: ''
    }
  }


  render() {
    return (
      <div className="App">
        <nav className = 'nav'>
        <NavBar />
        {/*create an element for the dropdown Menu*/}
        </nav>
      </div>
    );
  }
}

export default App;
