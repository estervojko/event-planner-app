import React from 'react';
import './index.css';
const moment = require('moment');

export default class EventDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rsvp: false
    }
  }

  // componentWillReceiveProps(nextProps){
  //   this.setState({
  //     rsvp: nextProps.rsvp
  //   })
  // }

  styleRsvp = () => {
    if (this.state.rsvp) {
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
        <img className="event-detail-image" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/0/FNM_090112-Mix-and-Match-Classic-Cookies-Recipe-03_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607143890.jpeg" alt="event" />
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                this.props.handleRSVP(this.state.rsvp);
              }}
              style={this.styleRsvp()}
              >
              Going?
            </button>
          </div>
        </div>
      </div>
    )
  }
}
