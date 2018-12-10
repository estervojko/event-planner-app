import React from "react";
import "./index.css";
const moment = require("moment");

export default function EventItem(props) {
  const event = props.event;
  return (
    <div className="event-item" onClick={props.onSelect}>
      <img className="event-item-image" src="" alt="event-image" />
      <h5 className="event-item-title">{event.title}</h5>
      <p className="event-item-start-date">
        {moment(event.start_date).format("llll")}
      </p>
      <p className="event-item-address">{event.address}</p>
    </div>
  );
}
