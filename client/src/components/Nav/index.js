
import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import UserProfile from '../UserProfile';
import './index.css';

import ReactModal from 'react-modal';

import ModalTest from '../Login/ModalTest'

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: '',
      registered: false,
      showModal: false,
      showModalLogin: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModalLogin = this.handleOpenModalLogin.bind(this);
    this.handleCloseModalLogin = this.handleCloseModalLogin.bind(this);
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
          <ReactModal isOpen={this.state.showModal}
                      contentLabel="Minimal Modal Example">
            <RegisterForm setView={this.props.setView}
                          setToken={this.props.setToken}
                          setloggedUser={this.props.setloggedUser}
                          handleCloseModal={this.handleCloseModal}
                          />
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      )
    }
    else if(this.state.view === 'login'){
      return (
        <div>
          <ReactModal isOpen={this.state.showModal}
                      contentLabel="Minimal Modal Example">
            <LoginForm  setView={this.props.setView}
                        setToken={this.props.setToken}
                        setloggedUser={this.props.setloggedUser}
                        handleCloseModalLogin={this.handleCloseModal}/>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      )
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
  //register modal handlers
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  //login modal handlers
  handleOpenModalLogin () {
    this.setState({ showModalLogin: true });
  }
  handleCloseModalLogin () {
    this.setState({ showModalLogin: false });
  }

  render(){
    return (
      <div className="nav">
        <h1 id="nav-title">Get Busy</h1>
        <div>
          <button onClick={() => {this.setView('register');
                                  this.handleOpenModal()}}>
            Register
          </button>

        </div>
        <div>
          <button onClick={() => {this.setView('login')
                                  this.handleOpenModal()}} >
            Login
          </button>
        </div>
        <div> {this.getView()} </div>
        <button onClick={() => { localStorage.removeItem('token')}}>Logout</button>
        <div className = "userPortal">
          <button id="nav-portal-button" onClick={()=> {this.setView('userform')}}>Portal</button>
        </div>


      </div>
    )
  }
}
