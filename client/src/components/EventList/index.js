import React, { Component } from 'react';
import EventItem from '../EventItem/index.js';
import EventDetail from '../EventDetail/index.js';
import './index.css';

const { attendeeReq } = require('../../AJAXRequests/attendeeReq');

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null,
    }
  }

  getView(){
    if (this.state.selectedEvent) {
      return (
        <EventDetail
          event={this.state.selectedEvent}
          close={this.handleClose}
          handleRSVP={this.handleRSVP}
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
    this.setState({
      selectedEvent: event
    })
  }

  handleClose = () => {
    this.setState({
      selectedEvent: null
    })
  }

  handleRSVP = async(choice) => {
    const event_id = this.state.selectedEvent.id;
    const user_id = this.props.userId
    console.log(user_id);
    const data = {
      rsvp: choice
    }

    try {
      const updatedEvent = await attendeeReq.postAttendee(event_id, data);
      console.log(updatedEvent);
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
