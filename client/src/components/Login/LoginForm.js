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
        first_name: '',
        last_name: ''
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

    //closes the modal
    this.props.handleCloseModal();

    const resp = await axios.post(`${BASE_URL}/login`, this.state.userData);
    if(resp.data.token !== null){
      this.setState({
         token: resp.data.token,
         loggedIn: true
       })
      console.log(resp.data);
      this.props.setToken(resp.data.token)
      this.props.setloggedUser(resp.data.user);
      localStorage.setItem('token', resp.data.token);
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
          <button type="submit">Login</button>
        </form>
        {/* <button onClick={this.getEvents}>Get Events</button> */}
      </div>
  )
  }
}
