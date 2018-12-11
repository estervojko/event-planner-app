import React, {Component} from 'react';
import Splash from '../components/Splash';
import EventList from '../components/EventList';

export default function Welcome(props) {
  return (
    <div className='welcome'>
      <Splash/>
      <EventList/>
    </div>
  )
}
