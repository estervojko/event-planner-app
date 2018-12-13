import React, { Component } from 'react';
import EventList from '../EventList';
import './index.css'
import moment from 'moment';

//imports the event form
import EventForm from '../EventForm'
const { userReq } = require( '../../AJAXRequests/userReq');

const { eventReq } = require( '../../AJAXRequests/eventReq');
const { attendeeReq } = require( '../../AJAXRequests/attendeeReq');


export default class UserProfile extends Component{
  //nothing more than a boilerplate. you fill in the rest with data
constructor(props){
  super(props);
  this.state = {
    //transfer shit for your database
    events: {
      img: '',
      name:'randoAsshole',//the name of the user
      location: 'Dickville',//where the user hails from
      active: false,//the active status of the user. Default status is false
    },
    user: {},
    eventFormData:{     // event form data
      title: '',
      description: '',
      start_date: moment().format(),
      end_date: moment().format(),
      address: '',
      img: ''
    }
  }
  // this.state.img.default = {/*this is where a url for an image can go or
  //   where you can insert an image path*/}

  //handlers for form data
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  //steve

  async componentWillMount(){
    await this.getUser()
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



    handleChange(e){
      const{name, value} = e.target
      this.setState((prevState) => (
        {
          eventFormData: {
            ...prevState.eventFormData,
            [name] : value
          }
        }
      ))
    }

    async handleSubmit(e){
      e.preventDefault();
      console.log(this.props.token);
      const postedEvent = await eventReq.postEvent(this.state.eventFormData, this.props.token);
      const postedAttendee = await attendeeReq.postAttendee(postedEvent.id, this.props.user.id, {isOrganizer: true}, this.props.token)
      console.log(postedEvent);
      console.log(postedAttendee);
    }

  render(){
    return(
        <div className="userProfile">
        <div className="userBody">{/*render the main body*/}
            <div className="userImage">{/*render the user image*/}
              {this.state.events.image}
            </div>
          <h1>
           {this.state.events.name}
          </h1>{/*render the username*/}
           <h2>{this.state.events.location}</h2>{/*render the location*/}
           <p>{this.state.events.active}</p> <div className="activePoint"></div>{/*render the active dot*/}
          </div>
          {this.state.user ? <EventList
            view={this.props.view}
            user={this.props.user}
            /> : ''}
         <EventForm  event={this.state.eventFormData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}/>
          <button>Delete Event</button>
        </div>
    )
  }
}
