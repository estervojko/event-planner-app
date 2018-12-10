import React, { Component } from 'react';
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
          <h4>SEARCH</h4>
          <input
          type="text"
          value="search"
          className = "search"
          />
          <p>||</p>
          <h4>LOGIN</h4>
        {/*create an element for the dropdown Menu*/}
        </nav>
      </div>
    );
  }
}

export default App;
