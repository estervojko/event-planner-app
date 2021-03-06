import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './index.css';

const BASE_URL = `https://calm-springs-46291.herokuapp.com`

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        address: ''
      },
      token: '',
      loggedIn: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }))
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.handleCloseModal();
    const resp = await axios.post(`${BASE_URL}/register`, this.state.user);
    if (resp.data.token !== null) {
      const decoded = jwtDecode(resp.data.token);
      localStorage.setItem('token', resp.data.token);
      this.props.setToken(resp.data.token)
      this.props.setloggedUser(decoded);
    }
  }

  async getEvents() {
    const TOKEN = this.state.token;
    const resp = await axios.get(`${BASE_URL}/events`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });
  }

  render() {
    return (<div className='register-form'>
      <form className='register-form-container' onSubmit={this.handleSubmit}>
        <label className='register-form-username'>
          Username: {` `}
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label className='register-form-password'>
          Password: {` `}
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label className='register-form-first-name'>
          First Name: {` `}
          <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label className='register-form-last-name'>
          Last Name: {` `}
          <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
        </label>
        <br></br>
        <label className='register-form-address'>
          Address: {` `}
          <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
        </label>
        <br></br>
        <button className='register-submit-button' type="submit">REGISTER</button>
      </form>
    </div>)
  }
}
