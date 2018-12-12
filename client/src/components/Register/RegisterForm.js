import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = `http://localhost:3000`

export default class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      user : {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        address: ''
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
        user :
          { ...prevState.user,
            [name] : value
          }
      }
    ))
  }

  async handleSubmit(e){
    e.preventDefault();
    //handle the register
    const resp = await axios.post(`${BASE_URL}/register`, this.state.user);
    // this.setState({
    //    token: resp.data.token,
    //    loggedIn: true
    //  })
    if(resp.data.token !==null){
      this.props.setView(true);
      console.log(resp.data);
      this.props.setToken(resp.data.token)
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
                   value={this.state.username}
                   onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            Password
            <input type="text"
                   name="password"
                   value={this.state.password}
                   onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            First Name
            <input type="text"
                   name="first_name"
                   value={this.state.first_name}
                   onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            Last Name
            <input type="text"
                   name="last_name"
                   value={this.state.last_name}
                   onChange={this.handleChange}/>
          </label>
          <br></br>
          <label>
            Address
            <br></br>
            <input type="text"
                   name="address"
                   value={this.state.address}
                   onChange={this.handleChange}/>
          </label>
          <br></br>
          <button type="submit">Register</button>
        </form>
        <button onClick={this.getEvents}>Get Events</button>
      </div>
  )
  }
}
