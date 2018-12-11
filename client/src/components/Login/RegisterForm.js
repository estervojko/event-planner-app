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
        first_name: 'testester',
        last_name: 'testester'
      },
      token: '',
      loggedIn: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const resp = await axios.post(`${BASE_URL}/users`, this.state.user);
     this.setState({
       token: resp.data.token
     })
    console.log(resp.data);

  }

  render(){
    return (
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
        <button type="submit">Register</button>
      </form>
  )
  }
}
