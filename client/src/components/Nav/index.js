import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import './index.css';

import Dropdown, { DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: ''
    }
  }

  //sets the view
  setView(view){
    this.setState({
      view: view
    })
  }

  getView(){
    if(this.state.view === 'register'){
      return (
        <div>
          <RegisterForm setView={this.props.setView}
                        setToken={this.props.setToken}/>
          <button onClick={() => {this.setView('')}}>Cancel</button>
        </div>
      )
    }
    else if(this.state.view === 'login'){
      return (
        <div>
          <LoginForm  setView={this.props.setView}
                      setToken={this.props.setToken}/>
          <button onClick={() => {this.setView('')}}>Cancel</button>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="nav">
        <h1 id="nav-title">Get Busy</h1>
        {/* <div className="dropdwn1">
          <button id="nav-register-button" onClick={() => {this.setView('register')}}>Register</button>
          <div className="dropdwn1-content">
            <div className="register-view">{this.getView()}</div>
          </div>
        </div>
        <div className="dropdwn2">
          <button id="nav-login-button" onClick={() => {this.setView('login')}}>Login</button>
          <div className="dropdwn2-content">
            <div className="login-view">{this.getView()}</div>
          </div>
        </div> */}
          <Dropdown>
            <DropdownTrigger onClick={() => {this.setView('register')}} >Register</DropdownTrigger>
            <DropdownContent> {this.getView()} </DropdownContent>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger onClick={() => {this.setView('login')}} >Login</DropdownTrigger>
            <DropdownContent> {this.getView()} </DropdownContent>
            <button onClick={Dropdown.hide}>Hide</button>
          </Dropdown>
      </div>
    )
  }
}
