import React, { Component } from 'react';
import EventList from './EventList';

export default class UserProfile extends Component{
constructor(props){
  super(props);
  this.state = {
    img: default,
    name: '',//the name of the user
    location: '',//where the user hails from
    active: false,//the active status of the user. Default status is false

  }
  this.switchView = this.switchView.bind(this);
  this.state.img.default = {url('#')}
}

switchView(){

}

  render(){
    return(
        <div className="userProfile">
          <div className="userBody">
          <div className=
          <h1>{this.state.name}</h1>
           <h2>{this.state.location}</h2>
           <p>{this.state.active}</p> <div className="activePoint"></div>
          </div>
        </div>
    )
  }
}
