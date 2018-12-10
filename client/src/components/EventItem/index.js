import React from 'react';
import './index.css';
const moment = require('moment');

export default function EventItem(props){
  const event = props.event;
  return (
    <div onClick={props.handleEventSelect}>
      <img src="" alt="event-image"/>
      <h5>{event.title}</h5>
      <p>{moment(event.start_date).format('llll')}</p>
      <p>{event.address}</p>
    </div>
  )
}
