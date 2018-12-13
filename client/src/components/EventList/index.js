import React, { Component } from 'react';
import EventItem from '../EventItem/index.js';
import EventDetail from '../EventDetail/index.js';
import './index.css';

const { attendeeReq } = require('../../AJAXRequests/attendeeReq');

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null
    }
  }

  isLoggedIn = () => {
    if (this.props.token) {
      return true
    } else {
      return false
    }
  }

  getView(){
    if (this.state.selectedEvent) {
      return (
        <EventDetail
          events={this.state.selectedEvent}
          close={this.handleClose}
          handleRSVP={this.handleRSVP}
          handleAttendance={this.handleAttendance}
          userLogged={this.isLoggedIn}
        />
      )
    } else {
      return (
        <div className="event-list-wrapper">
          {
            this.props.events.map(event => (
                <EventItem
                  key={event.id}
                  event={event}
                  onSelect={(e) => {
                    e.stopPropagation();
                    this.handleEventSelect(event);
                  }}
                />
            ))
          }
        </div>
      )
    }
  }

  handleEventSelect = (event) => {
    //if an event has attendees
    if (event.users.length > 0) {
      //find index of logged user in event
      const i = event.users.indexOf( user => user.id === this.props.user.id );
      //if index is a positive number
      if (i > 0) {
        //set isAttending to true
        this.setState((prevState) => ({
          selectedEvent: {
            ...prevState.selectedEvent,
            details: event,
            isAttending: true

          }
        }))
      } else {
        this.setState((prevState) => ({
          selectedEvent: {
            ...prevState.selectedEvent,
            details: event,
            isAttending: false
          }
        }))
      }
    } else {
      this.setState((prevState) => ({
        selectedEvent: {
          ...prevState.selectedEvent,
          details: event,
          isAttending: false
        }
      }))
    }
  }

  handleClose = () => {
    this.setState((prevState) => ({
      selectedEvent: null
    }))
  }

  handleAttendance = async () => {
    if (this.state.selectedEvent.isAttending) {
      await this.removeAttendee()
    } else {
      await this.setAttendee()
    }
  }

  getAttendees = async() => {
    const event_id = this.props.selectedEvent.details.id;
    try {
      const attendees = await attendeeReq.getAttendees(event_id);
      console.log(attendees);
    } catch (e) {
      console.log(e)
    }
  }

  setAttendee = async() => {
    const TOKEN = this.props.token;
    const user_id = this.props.user.id
    const event_id = this.state.selectedEvent.details.id;
    const data = {};

    try {
      const updatedEvent = await attendeeReq.postAttendee(event_id, user_id, data, TOKEN);
      this.setState({
        selectedEvent: {
          details: updatedEvent,
          isAttending: true
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  removeAttendee = async() => {
    const TOKEN = this.props.token;
    const user_id = this.props.user.id
    const event_id = this.state.selectedEvent.details.id;

    try {
      const updatedEvent = await attendeeReq.deleteAttendee(event_id, user_id, TOKEN);
      this.setState({
        selectedEvent: {
          details: updatedEvent,
          isAttending: false
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className='event-list'>
        {this.getView()}
      </div>
    )
  }
}

export default EventList;
