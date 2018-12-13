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
      view: '',
      registered: false,
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  //sets the view
  setView(view) {
    this.setState({view: view})
  }

  getView() {
    if (this.state.view === 'register') {
      return (<div className='modal-register'>
        <ReactModal style={customStyles} isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <RegisterForm setView={this.props.setView} setToken={this.props.setToken} setloggedUser={this.props.setloggedUser} handleCloseModal={this.handleCloseModal}/>
          <div className='modal-close-button' onClick={this.handleCloseModal}></div>
        </ReactModal>
      </div>)
    } else if (this.state.view === 'login') {
      return (<div className='modal-login'>
        <ReactModal style={customStyles} isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <LoginForm setView={this.props.setView} setToken={this.props.setToken} setloggedUser={this.props.setloggedUser} handleCloseModal={this.handleCloseModal}/>
          <div className='modal-close-button' onClick={this.handleCloseModal}></div>
        </ReactModal>
      </div>)
    } else if (this.state.view === 'userform') {
      return (<div>
        <UserProfile/>
        <button onClick={() => {
            this.setView('')
          }}>Cancel</button>
      </div>)
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
    return (<div className="nav">
      <div className='title-icon'><FontAwesomeIcon icon="check-double" size="3x"/></div>
      <h1 id="nav-title">Get Busy</h1>
      <div>
        <div className='nav-buttons' id='register-button' onClick={() => {
            this.setView('register');
            this.handleOpenModal()
          }}>
          REGISTER
        </div>
      </div>
      <div>
        <div className='nav-buttons' id='login-button' onClick={() => {
            this.setView('login')
            this.handleOpenModal()
          }}>
          LOGIN
        </div>
      </div>
      <div>
        {this.getView()}
      </div>
      <div className='nav-buttons' id='logout-button' onClick={() => {
          this.props.setloggedUser({});
          this.props.setToken(null);
          localStorage.removeItem('token')
        }}>LOGOUT</div>
      <div className='nav-buttons' id="userPortal">
        <div id="nav-portal-button" onClick={() => {
            this.setView('userform')
          }}>PORTAL</div>
      </div>
    </div>)
  }
}
