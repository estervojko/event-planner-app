
import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import UserProfile from '../UserProfile';
import './index.css';

// import Dropdown, { DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import { default as Dropdown, DropdownContent, DropdownTrigger } from "react-simple-dropdown";

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
<<<<<<< Updated upstream
      view: '',
      registered: false
    }
=======
      navView: '',
      loggedView: 'loggedOut',    //when a user is logged out shows login and register button, otherwise portal button and logout button
      registered: false,
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.setLoggedView = this.setLoggedView.bind(this);
>>>>>>> Stashed changes
  }

  //sets the view
  setView(view){
    this.setState({
      view: view
    })
  }

<<<<<<< Updated upstream
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
=======
  getNavView() {
    if (this.state.view === 'register') {
      return (<div className='modal-register'>
        <ReactModal style={customStyles} isOpen={this.state.showModal}>
          <RegisterForm setView={this.props.setView} setToken={this.props.setToken} setloggedUser={this.props.setloggedUser} setLoggedView={this.setLoggedView} handleCloseModal={this.handleCloseModal}/>
          <div className='modal-close-button' onClick={this.handleCloseModal}></div>
        </ReactModal>
      </div>)
    } else if (this.state.view === 'login') {
      return (<div className='modal-login'>
        <ReactModal style={customStyles} isOpen={this.state.showModal}>
          <LoginForm setView={this.props.setView} setToken={this.props.setToken} setloggedUser={this.props.setloggedUser} setLoggedView={this.setLoggedView} handleCloseModal={this.handleCloseModal}/>
          <div className='modal-close-button' onClick={this.handleCloseModal}></div>
        </ReactModal>
      </div>)
    } else if (this.state.view === 'userform') {
      return (<div>
        <UserProfile/>
        <button onClick={() => {
            this.setNavView('')
          }}>Cancel</button>
      </div>)
>>>>>>> Stashed changes
    }
  else if(this.state.view === 'userform'){
    return(
      <div>
        <UserProfile />
        <button onClick={() => {this.setView('')}}>Cancel</button>
      </div>
    )
  }
}

<<<<<<< Updated upstream
  hideDrop(){;
    Dropdown.hide()
=======
  // this method serves the conditional rendering in the navbar to display the proper buttons whether the user is logged in or not
  setLoggedView(view){
    (this.props.user === {})
      ? this.setState({loggedView: view})
      : this.setState({loggedView: view})
  }
  // this method serves the conditional rendering in the navbar to display the proper buttons whether the user is logged in or not
  getLoggedView(){
    if(this.state.loggedView === 'loggedOut'){
      return (
        <React.Fragment>
          <div>
            <div className='nav-buttons' id='register-button' onClick={() => {
                this.setNavView('register');
                this.handleOpenModal()
              }}>
              REGISTER
            </div>
          </div>
          <div>
            <div className='nav-buttons' id='login-button' onClick={() => {
                this.setNavView('login');
                this.handleOpenModal();
              }}>
              LOGIN
            </div>
        </div>
        </React.Fragment>
      )
    }
    else if(this.state.loggedView === 'loggedIn'){
      return(
        <React.Fragment>
          <div className='nav-buttons' id="userPortal">
            <div id="nav-portal-button" onClick={() => {
                this.props.changeView('userPage')
              }}>{this.props.userName.toUpperCase()}</div>
          </div>
          <div className='nav-buttons' id='logout-button' onClick={() => {
              this.props.setloggedUser({});
              this.props.setToken(null);
              this.props.changeView('welcome');
              this.setLoggedView('loggedOut');
              localStorage.removeItem('token');
            }}>LOGOUT</div>
        </React.Fragment>
      )
    }
  }

  //modal handlers
  handleOpenModal() {
    this.setState({showModal: true});
>>>>>>> Stashed changes
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
        <div className = "userPortal">
          <button id="nav-portal-button" onClick={()=> {this.setView('userform')}}>Portal</button>
        </div>

<<<<<<< Updated upstream
              {/*<div className="dropdwn1">
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
        </div>
        <div className = "userPortal">
          <button id="nav-portal-button" onClick={()=> {this.setView('userform')}}>Portal</button>
        </div>*/}

      </div>
    )
=======
  render() {
    return (
      <div className="nav">
        <div className='title-icon'><FontAwesomeIcon icon="check-double" size="3x"/></div>
        <h1 id="nav-title">Get Busy</h1>
        {this.getLoggedView()}
        {/* <div>
          <div className='nav-buttons' id='register-button' onClick={() => {
              this.setNavView('register');
              this.handleOpenModal()
            }}>
            REGISTER
          </div>
        </div>
        <div>
          <div className='nav-buttons' id='login-button' onClick={() => {
              this.setNavView('login');
              this.handleOpenModal();
            }}>
            LOGIN
          </div>
      </div>



      <div className='nav-buttons' id='logout-button' onClick={() => {
          this.props.setloggedUser({});
          this.props.setToken(null);
          this.props.changeView('welcome');
          this.setLoggedView('loggedOut');
          localStorage.removeItem('token');
        }}>LOGOUT</div>
      <div className='nav-buttons' id="userPortal">
        <div id="nav-portal-button" onClick={() => {
            this.props.changeView('userPage')
          }}>PORTAL</div>
      </div> */}
      <div>
        {this.getNavView()}
      </div>
    </div>)
>>>>>>> Stashed changes
  }
}
