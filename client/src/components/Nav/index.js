
import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import './index.css';

// import Dropdown, { DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import { default as Dropdown, DropdownContent, DropdownTrigger } from "react-simple-dropdown";

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: '',
      registered: false
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
                        setToken={this.props.setToken}
                        setloggedUser={this.props.setloggedUser}
                        />
          <button onClick={() => {this.setView('')}}>Cancel</button>
        </div>
      )
    }
    else if(this.state.view === 'login'){
      return (
        <div>
          <LoginForm  setView={this.props.setView}
                      setToken={this.props.setToken}
                      setloggedUser={this.props.setloggedUser}/>
          <button onClick={() => {this.setView('')}}>Cancel</button>
        </div>
      )
    }
  }

  hideDrop(){;
    Dropdown.hide()
  }

  render(){
    return (
      <div className="nav">
        <h1 id="nav-title">Get Busy</h1>
        <Dropdown>
            <DropdownTrigger onClick={() => {this.setView('register')}} >
              <button onClick={() => {this.setView('login')}} >
                Register
              </button>
            </DropdownTrigger>
            <DropdownContent> {this.getView()} </DropdownContent>
       </Dropdown>
       <Dropdown>
            <DropdownTrigger >
              <button onClick={() => {this.setView('login')}} >
                Login
              </button>
          </DropdownTrigger>
            <DropdownContent> {this.getView()} </DropdownContent>
            <button onClick={Dropdown.hide}>Hide</button>
        </Dropdown>
      </div>
    )
  }
}
