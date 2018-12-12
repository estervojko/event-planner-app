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
      logged: false,
      token: '',
      user: {}
    }
    this.setView = this.setView.bind(this);
    this.setToken = this.setToken.bind(this);
    this.setloggedUser = this.setloggedUser.bind(this);
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
      ? <Welcome
          events={this.state.events}
        />
      : <HomePage
          // events={this.state.events}
          // userId={this.state.user.id}
        />
  }

  //sets the token in state
  setToken(token){
    this.setState((prevState) => (
      {
         ...prevState,
         token: token
       }
    )
   )
  }

  //puts loggedIn user in state
  setloggedUser(user){
    this.setState((prevState) => (
      {
        ...prevState,
        user: user
      }
      )
    )
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

  render() {
    return (
     <div className="App">
      <Nav setView={this.setView}
           setToken={this.setToken}
           setloggedUser={this.setloggedUser}/>
      {this.getView()}
      <Footer/>
    </div>)
  }
}

export default App;
