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
    const event = this.props.event.details;
    return (
      <div className="event-detail">
        <button className="event-detail-exit-button" onClick={this.props.close}>X</button>
        <img className="event-detail-image" src={event.img} alt="EventDetail Img Not Found" />
        <h3 className="event-detail-title">{event.title}</h3>
        <div className="event-detail-text-container">
          <div className="event-detail-basic-info">
            <h5 className="event-detail-organizer">{event.organizer}</h5>
            <p className="event-detail-address">{event.address}</p>
            <div className="event-detail-date-container">
              <div className="event-detail-date">
                {moment(event.start_date).format('dddd, MMMM Do YYYY')}
              </div>
              <div className="event-detail-time">
                <p>{moment(event.start_date).format("LT")}</p>
                <p>{'-'}</p>
                <p>{moment(event.end_date).format("LT")}</p>
              </div>
            </div>
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
          <div className="event-detail-description">
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
