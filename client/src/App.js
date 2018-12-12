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
      logged: false
    }
    this.getEvents = this.getEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
    if (this.state.input.length > 2)
      this.getEvents();
    }

  handleEventSelect() {}

  async getEvents() {
    const resp = await axios.get(BASE_URL + '/events');
    debugger;
    this.setState({events: resp.data.events});
  }

  render() {
    return (<div className="App">
      <Nav/>
      {
        (this.state.logged === false)
          ? <Welcome/>
          : <HomePage/>
      }
      <Footer/>
    </div>
    );
  }
}

export default App;
