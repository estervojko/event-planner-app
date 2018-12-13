import React from 'react';
import './index.css';
const moment = require('moment');

export default class EventDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isAttending: false
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      isAttending: nextProps.event.isAttending
    })
  }

  styleAttendance = () => {
    if (this.state.isAttending) {
      return (
        {
          backgroundColor: "blue",
          color: "white",
        }
      )
    }
  }

  render(){
    const event = this.props.event;
    return (
      <div className="event-detail">
        <img className="event-detail-image" src={event.img} alt="EventDetail Img Not Found" />
        <div className="event-detail-text-container">
          <h3 className="event-detail-title">{event.title}</h3>
          <h5 className="event-detail-organizer">{event.organizer}</h5>
            <p className="event-detail-start-date">
              {moment(event.start_date).format("llll")}
            </p>
            <p className="event-detail-end-date">
              {moment(event.end_date).format("llll")}
            </p>
          <p className="event-detail-address">{event.address}</p>
          <p className="event-detail-description">{event.description}</p>
          <button className="event-detail-exit-button" onClick={this.props.close}>X</button>
          <div className="event-item-button-container">
            {this.props.userLogged && <button
              onClick={(e) => {
                e.stopPropagation();
                this.props.handleAttendance();
              }}
              style={this.styleAttendance()}
              >
              Going?
            </button>}
          </div>
        </div>
      </div>
    )
  }
}
