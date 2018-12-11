import React, { Component } from 'react';
import EventItem from '../EventItem/index.js';
import EventDetail from '../EventDetail/index.js';
import './index.css';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null
    }
  }

  getView(){
    if (this.state.selectedEvent) {
      return (
        <EventDetail
          event={this.state.selectedEvent}
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

  handleEventSelect(event){
    this.setState({
      selectedEvent: event
    })
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
