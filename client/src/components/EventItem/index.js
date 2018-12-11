import React from "react";
import "./index.css";
const moment = require("moment");

export default function EventItem(props) {
  const event = props.event;
  return (
      <div className="event-item" onClick={props.onSelect}>
        <div className="event-item-img-container">
          <img className="event-item-image" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg" alt="event-image" />
        </div>
        <div className="event-item-text-container">
          <h5 className="event-item-title">{event.title}</h5>
          <p className="event-item-start-date">
            {moment(event.start_date).format("ddd, MMM D, h:m A")}
          </p>
        </div>
      </div>
  );
}
