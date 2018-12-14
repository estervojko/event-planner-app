import React, { Component } from 'react';
import './index.css';
const moment = require('moment');

export default class EventDetail extends Component {
  constructor (props){
    super(props)
    this.state = {
      deleteStatus: false
    }
  }

  organizer(){
    const event = this.props.event.details;
    const organizer = event.users.find(user => user.attendee.isOrganizer);
    if (!organizer) {
      return false
    } else {
      return organizer.username
    }
  }

  organizerIsUser(){
    const event = this.props.event.details;
    const currentUser = event.users.find(user => user.id === this.props.user.id)
    if (!currentUser) {
      return false;
    } else if (currentUser.attendee.isOrganizer) {
      return true;
    } else {
      return false
    }
  }

  handleDelete() {
    this.setState({
      deleteStatus: !this.state.deleteStatus
    })
    if (this.state.deleteStatus) {
      this.props.handleDelete()
    }
  }

  styleDelete() {
    if (this.state.deleteStatus) {
      return (
        {
          backgroundColor: 'red',
          color: 'white'
        }
      )
    }
  }

  styleAttendance() {
    if (this.props.event.isAttending) {
      return (
        {
          backgroundColor: "forestgreen",
          color: "white",
        }
      )
    }
  }

  render(){
    const event = this.props.event.details;
    const start_date = moment(event.start_date).format('dddd, MMMM Do');
    const end_date = moment(event.end_date).format('dddd, MMMM Do');
    return (
      <div className="event-detail">

        <button
          className="event-detail-exit-button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.close();
          }}
        >X</button>

        {event.img && <img className="event-detail-image" src={event.img} alt="EventDetail Img Not Found" />}

        <h3 className="event-detail-title">{event.title}</h3>

        <div className="event-detail-text-container">
          <div className="event-detail-description">
            <p>{event.description}</p>
          </div>
          <div className="event-detail-basic-info">
            {this.organizer() && <h5 className="event-detail-organizer">Organizer: {this.organizer()}</h5>}

            <p className="event-detail-address">{event.address}</p>

            <div className="event-detail-date-container">

              <div className="event-detail-date">
                {start_date}
              </div>

              {start_date !== end_date && <div className="event-detail-date">
                - {end_date}
              </div>}

              <div className="event-detail-time">

                <p>{moment(event.start_date).format("LT")}</p>
                <p>{'-'}</p>
                <p>{moment(event.end_date).format("LT")}</p>

              </div>
            </div>
            <div>
              <p>This event has {event.users.length} attendee(s).</p>
            </div>

            <div className="event-item-button-container">
              {this.props.loggedIn() && !this.organizerIsUser() &&
                <div
                  className="event-item-button"
                  onClick={(e) => {
                  e.stopPropagation();
                  this.props.handleAttendance();
                  }}
                  style={this.styleAttendance()}
                >
                  {this.props.event.isAttending? "Going" : "Going?"}
                </div>}
              {this.props.loggedIn() && this.organizerIsUser() &&
                <div
                  className="event-item-button"
                  onClick={(e) => {
                  e.stopPropagation();
                  this.handleDelete();
                  }}
                  style={this.styleDelete()}
                >
                  {this.state.deleteStatus? "Delete?" : "Delete"}
                </div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
