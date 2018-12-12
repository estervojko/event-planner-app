import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = `http://localhost:3000`

export default class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      userData : {
        username: '',
        password: '',
        first_name: 'testester',
        last_name: 'testester'
      },
      token: '',
      loggedIn: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  handleChange(e){
    const {name, value} = e.target;
    this.setState((prevState) => (
      {
        userData :
          { ...prevState.userData,
            [name] : value
          }
      }
    ))
  }

  async handleSubmit(e){
    e.preventDefault();
    //handle the register
    const resp = await axios.post(`${BASE_URL}/login`, this.state.userData);
    if(resp.data.token !== undefined){
      this.setState({
         token: resp.data.token,
         loggedIn: true
       })
      console.log(resp.data);
      this.props.setView(true);
      this.props.setToken(resp.data.token)
      this.props.setloggedUser(resp.data.user);
    }
  }

  //tests if we can grab events authenticated
  async getEvents(){
    const TOKEN = this.state.token;
    const resp = await axios.get(`${BASE_URL}/events`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });
    console.log(resp.data);
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input type="text"
                   name="username"
                   value={this.state.userData.username}
                   onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            Password
            <input type="text"
                   name="password"
                   value={this.state.userData.password}
                   onChange={this.handleChange}/>
          </label>
          <br></br>
          <button type="submit" onClick={() => this.setView(this.state.loggedIn === true)}>Login</button>
        </form>
        {/* <button onClick={this.getEvents}>Get Events</button> */}
      </div>
  )
  }
}
