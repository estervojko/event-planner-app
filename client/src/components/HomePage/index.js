import React from 'react';
import EventList from '../EventList'

export default function HomePage(props) {
  return (<div>
    <EventList token={props.token} user={props.user} view={props.view}/>
  </div>)
}
