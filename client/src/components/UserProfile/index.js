import React, { Component } from 'react';
import EventList from '../EventList';
import './index.css'
const { userReq } = require( '../../AJAXRequests/userReq');
const image = './image.jpg';


export default class UserProfile extends Component{
  //nothing more than a boilerplate. you fill in the rest with data
constructor(props){
  super(props);
  this.state = {
    //transfer shit for your database
    events: [{
      img: image,
      name:'randoAsshole',//the name of the user
      location: 'Dickville',//where the user hails from
      active: false,//the active status of the user. Default status is false
    }],
    user: null

  }
  // this.state.img.default = {/*this is where a url for an image can go or
  //   where you can insert an image path*/}
}

  //steve
  async componentDidMount(){
    await this.getUser();
  }

  getUser = async() => {
    const user_id = this.props.user.id
    try {
      const user = await userReq.getUser(user_id);
      this.setState({
        user: user
      })
    } catch (e) {
      console.log(e)
    }
  }
  //

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
          {/* There needs to be an eventList here. change the parameters to reflect the user's choices*/}
          <button >Delete Event</button>
        </div>
    )
  }
}
