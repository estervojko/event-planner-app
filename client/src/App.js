import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: '',
      input: '',
    }
    this.getEvents = this.getEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
    if(this.state.input.length>2) this.getEvents();
  }

  handleEventSelect() {

  }

  async getEvents() {
    const resp = await getEvents(this.state.input);
    this.setState({ events: resp.data.results });
  }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
