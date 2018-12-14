import React from 'react';
import './index.css';

import CommentList from '../CommentList';

const moment = require('moment');

export default function EventDetail(props) {
  const event = props.event.details;
  return (<div className="event-detail">
    <button className="event-detail-exit-button" onClick={props.close}>X</button>
    <img className="event-detail-image" src={event.img} alt="EventDetail Img Not Found"/>
    <h3 className="event-detail-title">{event.title}</h3>
    <div className="event-detail-text-container">
      <div className="event-detail-description">
        <p>{event.description}</p>
      </div>
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
        <CommentList event={event}/>
        <div className="event-item-button-container">
          {
            props.loggedIn() && <div className="event-item-button" onClick={(e) => {
                  e.stopPropagation();
                  props.handleAttendance();
                }} style={styleAttendance(props)}>
                Going?
              </div>
          }
        </div>
      </div>
    </div>
  </div>)
}

function styleAttendance(props) {
  if (props.event.isAttending) {
    return ({backgroundColor: "forestgreen", color: "white"})
  }
}
