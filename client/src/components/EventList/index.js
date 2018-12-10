import React from 'react';
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
        this.props.events.map(event => (
          <EventItem
            event={event}
            key={event.id}
            onSelect={(e) => {
              e.stopPropagation();
              this.handleEventSelect(event);
            }}
          />
        ))
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
