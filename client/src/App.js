import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const BASE_URL = `http://localhost:3000`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }

    this.handleRegister = this.handleRegister.bind(this);
    this.loadUserEvents = this.loadUserEvents.bind(this);
  }

  //Ester testing hash and token
  async handleRegister(){
    const resp = await axios.post(`${BASE_URL}/users`,
      {
        "username":"estertest2222",
        "password": "mypass",
        "first_name":"ester",
        "last_name":"vojkollari"
      });
     this.setState({
       token: resp.data.token
     })
    console.log(resp.data);
  }

  //Request data using a token
  async loadUserEvents(){
    const TOKEN = this.state.token;
    const resp = await axios.get(`${BASE_URL}/events`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });
    console.log(resp.data);
  }

  handleEventSelect() {

  }

  render() {
    // this.handleRegister();
    return (<div className="App">
              <button onClick={this.handleRegister}>Put token in state</button>
              <button onClick={this.loadUserEvents}>Load User Events</button>
            </div>);
  }
}

export default App;
