import React, {Component} from 'react';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
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
      user: {},
      view: ''
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
          events={this.state.events}
          token={this.state.token}
          user={this.state.user}
          logged={this.state.logged}
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
<<<<<<< Updated upstream
      return <UserProfile events={this.state.events}/>;
=======
      return (
        <UserProfile
          events={this.state.events}
          token={this.state.token}
          user={this.state.user}
        />
      );
      case "welcome":
      return (
        <Welcome
          events={this.state.events}
        />
      );
>>>>>>> Stashed changes
      default:
      return <Welcome events={this.state.events} />
    }
  }

  render() {
    return (
     <div className="App">
<<<<<<< Updated upstream
      <Nav setView={this.setView}
           setToken={this.setToken}
           setloggedUser={this.setloggedUser}/>
=======
      <Nav
        setToken={this.setToken}
        setloggedUser={this.setloggedUser}
        changeView={this.changeView}
        userName={this.state.user.username}
      />
>>>>>>> Stashed changes
      {this.getView()}
      <Footer/>
    </div>)
  }
}

export default App;
