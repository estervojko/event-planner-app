import React, { Component } from 'react';
import EventList from '../EventList';

export default class UserProfile extends Component{
  //nothing more than a boilerplate. you fill in the rest with data
constructor(props){
  super(props);
  this.state = {
    //transfer shit for your database
    events: [{
      img: '' ,
      name:'randoAsshole',//the name of the user
      location: 'Dickville',//where the user hails from
      active: false,//the active status of the user. Default status is false
    }]

  }
  this.switchView = this.switchView.bind(this);
  // this.state.img.default = {/*this is where a url for an image can go or
  //   where you can insert an image path*/}
}


  render(){
    return(
        <div className="userProfile">
        <div className="userBody">{/*render the main body*/}
            <div className="userImage">{/*render the user image*/}
              {this.state.image}
            </div>
          <h1>{this.state.name}</h1>{/*render the username*/}
           <h2>{this.state.location}</h2>{/*render the location*/}
           <p>{this.state.active}</p> <div className="activePoint"></div>{/*render the active dot*/}
          </div>
          <EventList event={this.props.events} />{/*change the parameters to reflect the user's choices*/}
          <button >Delete Event</button>
        </div>
    )
  }
}
