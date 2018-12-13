import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import UserProfile from '../UserProfile';
import './index.css';

import ReactModal from 'react-modal';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckDouble);

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navView: '',
      registered: false,
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  setNavView(view) {
    this.setState({
      view: view
    })
  }

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
    }
  }

  getLoggedView(){
    if(this.props.token === null){
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
    else if(this.props.token !== null){
      return(
        <React.Fragment>
          {console.log(this.props.user.username)}
          <div className='nav-buttons' id="userPortal">
            <div id="nav-portal-button" onClick={() => {
                this.props.changeView('userPage')
              }}>{(this.props.user.username ? this.props.user.username.toUpperCase() : '')}</div>
          </div>
          <div className='nav-buttons' id='logout-button' onClick={() => {
              this.props.setloggedUser({});
              this.props.setToken(null);
              this.props.changeView('welcome');
              localStorage.removeItem('token');
            }}>LOGOUT</div>
        </React.Fragment>
      )
    }
  }

  //modal handlers
  handleOpenModal() {
    this.setState({showModal: true});
  }


  handleCloseModal() {
    this.setState({showModal: false});
  }


  render() {
    return (
      <div className="nav">
        <div className='title-icon'><FontAwesomeIcon icon="check-double" size="3x"/></div>
        <h1 id="nav-title" onClick={() => {this.props.token === null ? this.props.changeView('welcome') : this.props.changeView('loggedIn')}}>Get Busy</h1>
        {this.getLoggedView()}
      <div>
        {this.getNavView()}
      </div>
    </div>)
  }
}
