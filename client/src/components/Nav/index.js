import React, { Component } from 'react';
import './index.css';

export default class Nav extends Component {
  render(){
    return(
      <div className = "navBar">
        <i className="fas fa-search"></i>
        <input
        type="text"
        value={props.input}
        onChange={props.onChange}
        placeholder='Search...'
        className = 'search'/>
        <p>||</p>
        <h4>LOGIN</h4>
      </div>
    )
  }
}
