import React, {Component} from 'react';

import Nav from './components/Nav';
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';

const BASE_URL = 'http://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: '',
      input: '',
      logged: false,
      token: ''
    }
    this.setView = this.setView.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  //changes the logged state when a user logs in or registers
  setView(loggedIn){
    if(loggedIn===true){
      this.setState(
        {
          logged: true
        }
      )
    }
  }

  getView(){
    return (this.state.logged === false)
      ? <Welcome/>
      : <HomePage/>
  }

  //sets the token in state
  setToken(token){
    this.setState({
       token: token
     })
  }



  render() {
    return (<div className="App">
      <Nav setView={this.setView}
           setToken={this.setToken}/>
      {this.getView()}
      <Footer/>
    </div>);
  }
}

export default App;
