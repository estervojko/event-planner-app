import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
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

  handleEventSelect() {

  }

  render() {
    return (
      <div className="App">
        <nav className = 'nav'>
        <Nav />
        {/*create an element for the dropdown Menu*/}
        <Footer />
        </nav>
      </div>
    );
  }
}

export default App;
