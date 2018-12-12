import React, {Component} from 'react';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
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
      loggedIn: false,
      view: ''
    }
  }

  async componentDidMount(){
    await this.getEvents();
  }

  getEvents = async() => {
    const events = await eventReq.getEvents();
    console.log(events);
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

  changeView(view){
    this.setState = { view }
  }
  switchView(){
    switch(this.state.view){
      case "loggedIn":
      return <HomePage events={this.state.events}/>;
      case "userPage":
      return <UserProfile events={this.state.events}/>;
      default:
      return <Welcome events={this.state.events} />
    }
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        {
          // (this.state.loggedIn === false)
          //   ? <Welcome
          //       events={this.state.events}
          //     />
          //   : <HomePage
          //       events={this.state.events}
          //     />
          this.switchView()
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
