import React from 'react';
import './index.css';
const moment = require('moment');

export default function EventDetail(props){
  const event = props.event;
  return (
    <div className="event-detail">
      <button onClick={props.close}>X</button>
      <img className="event-detail-image" src="" alt="event-image" />
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
    </div>
  )
}
