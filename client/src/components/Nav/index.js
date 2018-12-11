import React, { Component } from 'react';
import './index.css';

export default class Nav extends Component {
  render(props){
    return(
      <div className = "navBar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder ="Search..." className ="search"></input>
        <p>||</p>
        <h4>LOGIN</h4>
      </div>

    )
  }
};
