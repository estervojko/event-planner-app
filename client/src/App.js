import React, {Component} from 'react';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';

const { eventReq } = require('./AJAXRequests/eventReq');
const { userReq } = require('./AJAXRequests/userReq');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      input: '',
      loggedIn: false
    }
  }

  async componentDidMount(){
    await this.getEvents();
  }

  getEvents = async() => {
    const events = await eventReq.getEvents();
    this.setState({
      events
    });
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
    if (this.state.input.length > 2) {
      this.getEvents();
    }
  }

  handleEventSelect = () => {}

  render() {
    return (
      <div className="App">
        <Nav/>
        {
          (this.state.loggedIn === false)
            ? <Welcome
                events={this.state.events}
              />
            : <HomePage
                events={this.state.events}
              />
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
