import React, { Component } from 'react';
import EventItem from '../EventItem/index.js';
import EventDetail from '../EventDetail/index.js';
import './index.css';

const { eventReq } = require('../../AJAXRequests/eventReq');
const { attendeeReq } = require('../../AJAXRequests/attendeeReq');

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      selectedEvent: null,
    }
  }

  isLoggedIn = () => {
    if (this.props.token) {
      return true
    } else {
      return false
    }
  }

  async componentDidMount(){
    await this.updateEvents();
  }

  async updateEvents(){
    switch (this.props.view) {
      case 'userPage':
        await this.getUserEvents();
        break;
      case 'loggedIn':
        this.getEvents()
        break;
      case 'welcome':
        this.getEvents();
        break;
      default:
    }
  }

  getUserEvents = async() => {
    const events = await eventReq.getEvents();
    const userEvents = await events.filter(event => {
      return (
        event.users.find(user => user.id === this.props.user.id)
      )
    })
    this.setState({
      events: userEvents
    });
  }

  getEvents = async() => {
    const events = await eventReq.getEvents();
    this.setState({
      events
    });
  }

  getView(){
    if (this.state.selectedEvent) {
      return (
        <EventDetail
          event={this.state.selectedEvent}
          close={this.handleClose}
          handleAttendance={this.handleAttendance}
          loggedIn={this.isLoggedIn}
          user={this.props.user}
          handleDelete={this.handleDelete}
        />
      )
    } else {
      return (
        <div className="event-list-wrapper">
          {this.state.events && this.state.events.map(event => (
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
    if (this.isLoggedIn()) {
      //if an event has attendees
      if (event.users.length > 0) {
        //find index of logged user in event
        const i = event.users.find( user => user.id === this.props.user.id);
        //if index is a positive number
        if (i.id > 0) {
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
    } else {
      this.setState((prevState) => ({
        selectedEvent: {
          ...prevState.selectedEvent,
          details: event
        }
      }))
    }
    window.scroll({
    top: 100,
    left: 0,
    });
  }

  handleClose = () => {
    this.setState({
      selectedEvent: null,
    })
  }

  handleDelete = async() => {
    const TOKEN = this.props.token;
    const event = this.state.selectedEvent.details;
    try {
      await eventReq.deleteEvent(event.id, TOKEN);
    } catch (e) {
      console.log(e)
    } finally{
      this.updateEvents();
      this.handleClose();
    }
  }

  handleAttendance = async () => {
    if (this.state.selectedEvent.isAttending) {
      await this.removeAttendee();
      await this.updateEvents();
    } else {
      await this.setAttendee();
      await this.updateEvents();
    }
  }

  getAttendees = async() => {
    const event_id = this.state.selectedEvent.details.id;
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
