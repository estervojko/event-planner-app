import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import RegisterForm from './components/Login/RegisterForm'


class App extends Component {
  constructor(props) {
    super(props);

  }

  handleEventSelect() {

  }

  render() {
    // this.handleRegister();
    return (<div className="App">
              <RegisterForm />
            </div>);
  }
}

export default App;
