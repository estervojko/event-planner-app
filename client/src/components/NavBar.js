import React, { Component } from 'react';
import '../App.css';

export default class NavBar extends Component {
  render(){
    return(
      <div className = "navBar">
      <h4>SEARCH</h4>
      <input
      type="text"
      value="search"
      className = "search"
      />
      <p>||</p>
      <h4>LOGIN</h4>
      </div>
    )
  }
}
