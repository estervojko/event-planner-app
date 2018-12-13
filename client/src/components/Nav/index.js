import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import UserProfile from '../UserProfile';
import './index.css';

import ReactModal from 'react-modal';

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
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <RegisterForm setView={this.props.setView} setToken={this.props.setToken} setloggedUser={this.props.setloggedUser} handleCloseModal={this.handleCloseModal}/>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>)
    } else if (this.state.view === 'login') {
      return (<div className='modal-login'>
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
          <LoginForm setView={this.props.setView} setToken={this.props.setToken} setloggedUser={this.props.setloggedUser} handleCloseModal={this.handleCloseModal}/>
          <button onClick={this.handleCloseModal}>Close Modal</button>
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
      <h1 id="nav-title">Get Busy</h1>
      <div>
        <div className='nav-buttons' id='register-button' onClick={() => {
            this.setView('register');
            this.handleOpenModal()
          }}>
          Register
        </div>
      </div>
      <div>
        <div className='nav-buttons' id='login-button' onClick={() => {
            this.setView('login')
            this.handleOpenModal()
          }}>
          Login
        </div>
      </div>
      <div>
        {this.getView()}
      </div>
      <div className='nav-buttons' id='logout-button' onClick={() => {
          this.props.setloggedUser({});
          this.props.setToken(null);
          localStorage.removeItem('token')
        }}>Logout</div>
      <div className='nav-buttons' id="userPortal">
        <div id="nav-portal-button" onClick={() => {
            this.setView('userform')
          }}>Portal</div>
      </div>
    </div>)
  }
}
