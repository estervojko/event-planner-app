import React from "react";
import "./index.css";
const moment = require("moment");

export default function EventItem(props) {
  const event = props.event;
  return (
      <div className="event-item" onClick={props.onSelect}>
        <div className="event-item-img-container">
          <img className="event-item-image" src={event.img} alt="event" />
        </div>
        <div className="event-item-text-container">
          <h5 className="event-item-title">{event.title}</h5>
          <p className="event-item-start-date">
            {moment(event.start_date).format("ddd-MMM-D-h:mmA")}
          </p>
        </div>
      </div>
  );
}
