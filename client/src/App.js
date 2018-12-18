import React, {Component} from 'react';
import jwtDecode from 'jwt-decode'
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      token: (localStorage.getItem('token') !== null)
        ? localStorage.getItem('token')
        : null,
      user: (localStorage.getItem('token') !== null)
        ? jwtDecode(localStorage.getItem('token'))
        : {},
      view: (localStorage.getItem('token') !== null)
        ? "loggedIn"
        : "welcome"
    }

    this.setToken = this.setToken.bind(this);
    this.setloggedUser = this.setloggedUser.bind(this);
  }

  async setToken(token) {
    await this.setState((prevState) => ({
      ...prevState,
      token: token,
      view: 'loggedIn'
    }))
  }

  async setloggedUser(user) {
    await this.setState((prevState) => ({
      ...prevState,
      user: user
    }))
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
    if (this.state.input.length > 2) {
      this.getEvents();
    }
  }

  changeView = (view) => {
    this.setState({view: view})
  }

  getView() {
    switch (this.state.view) {
      case "loggedIn":
        return (<HomePage token={this.state.token} user={this.state.user} view={this.state.view}/>);
      case "userPage":
        return (<UserProfile token={this.state.token} user={this.state.user} view={this.state.view}/>);
      case "welcome":
        return (<Welcome view={this.state.view}/>);
      default:
    }
  }

  render() {
    return (<div className="App">
      <Nav setToken={this.setToken} setloggedUser={this.setloggedUser} changeView={this.changeView} user={this.state.user} token={this.state.token}/>
      {this.getView()}
      <Footer/>
    </div>)
  }
}

export default App;
